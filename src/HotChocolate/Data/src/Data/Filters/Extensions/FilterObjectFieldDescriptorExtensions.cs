using System;
using System.Reflection;
using HotChocolate.Configuration;
using HotChocolate.Data.Filters;
using HotChocolate.Resolvers;
using HotChocolate.Types;
using HotChocolate.Types.Descriptors;
using HotChocolate.Types.Descriptors.Definitions;
using HotChocolate.Utilities;
using TypeInfo = HotChocolate.Utilities.TypeInfo;
using static HotChocolate.Data.DataResources;
using static HotChocolate.Data.ThrowHelper;

namespace HotChocolate.Data
{
    public static class FilterObjectFieldDescriptorExtensions
    {
        private static readonly MethodInfo _factoryTemplate =
            typeof(FilterObjectFieldDescriptorExtensions)
                .GetMethod(nameof(CreateMiddleware))!;

        public static IObjectFieldDescriptor UseFiltering(
            this IObjectFieldDescriptor descriptor,
            string? scope = null)
        {
            if (descriptor is null)
            {
                throw new ArgumentNullException(nameof(descriptor));
            }

            return UseFiltering(descriptor, null, null, scope);
        }

        public static IObjectFieldDescriptor UseFiltering<T>(
            this IObjectFieldDescriptor descriptor,
            string? scope = null)
        {
            if (descriptor is null)
            {
                throw new ArgumentNullException(nameof(descriptor));
            }

            Type filterType =
                typeof(IFilterInputType).IsAssignableFrom(typeof(T))
                    ? typeof(T)
                    : typeof(FilterInputType<>).MakeGenericType(typeof(T));

            return UseFiltering(descriptor, filterType, null, scope);
        }

        public static IObjectFieldDescriptor UseFiltering<T>(
            this IObjectFieldDescriptor descriptor,
            Action<IFilterInputTypeDescriptor<T>> configure,
            string? scope = null)
        {
            if (descriptor is null)
            {
                throw new ArgumentNullException(nameof(descriptor));
            }

            if (configure is null)
            {
                throw new ArgumentNullException(nameof(configure));
            }

            var filterType = new FilterInputType<T>(configure);
            return UseFiltering(descriptor, filterType.GetType(), filterType, scope);
        }

        private static IObjectFieldDescriptor UseFiltering(
            IObjectFieldDescriptor descriptor,
            Type? filterType,
            ITypeSystemMember? filterTypeInstance,
            string? scope)
        {
            FieldMiddleware placeholder = next => context => default;
            string argumentPlaceholder = Guid.NewGuid().ToString();

            descriptor
                .Use(placeholder)
                .Extend()
                .OnBeforeCreate(definition =>
                {
                    Type? argumentType = filterType;

                    if (argumentType is null)
                    {
                        if (!TypeInspector.Default.TryCreate(
                            definition.ResultType, out TypeInfo typeInfo))
                        {
                            throw new ArgumentException(
                                FilterObjectFieldDescriptorExtensions_UseFiltering_CannotHandleType,
                                nameof(descriptor));
                        }

                        argumentType = typeof(FilterInputType<>).MakeGenericType(typeInfo.ClrType);
                    }

                    ITypeReference argumentTypeReference = filterTypeInstance is null
                        ? (ITypeReference)new ClrTypeReference(
                            argumentType, TypeContext.Input, scope)
                        : new SchemaTypeReference(filterTypeInstance, scope: scope);

                    if (argumentType == typeof(object))
                    {
                        throw FilterObjectFieldDescriptorExtensions_CannotInfer();
                    }

                    var argumentDefinition = new ArgumentDefinition
                    {
                        Name = argumentPlaceholder,
                        Type = new ClrTypeReference(argumentType, TypeContext.Input, scope)
                    };
                    definition.Arguments.Add(argumentDefinition);

                    definition.Configurations.Add(
                        LazyTypeConfigurationBuilder
                            .New<ObjectFieldDefinition>()
                            .Definition(definition)
                            .Configure((context, defintion) =>
                                CompileMiddleware(
                                    context,
                                    definition,
                                    argumentTypeReference,
                                    placeholder,
                                    scope))
                            .On(ApplyConfigurationOn.Completion)
                            .DependsOn(argumentTypeReference, true)
                            .Build());

                    definition.Configurations.Add(
                        LazyTypeConfigurationBuilder
                            .New<ObjectFieldDefinition>()
                            .Definition(definition)
                            .Configure((context, defintion) =>
                                argumentDefinition.Name =
                                    context.GetFilterConvention(scope).GetArgumentName())
                            .On(ApplyConfigurationOn.Naming)
                            .Build());
                });

            return descriptor;
        }

        private static void CompileMiddleware(
            ITypeCompletionContext context,
            ObjectFieldDefinition definition,
            ITypeReference argumentTypeReference,
            FieldMiddleware placeholder,
            string? scope)
        {
            IFilterInputType type = context.GetType<IFilterInputType>(argumentTypeReference);
            IFilterConvention convention = context.DescriptorContext.GetFilterConvention(scope);

            MethodInfo factory = _factoryTemplate.MakeGenericMethod(type.EntityType);
            var middleware = (FieldMiddleware)factory.Invoke(null, new object[] { convention })!;
            var index = definition.MiddlewareComponents.IndexOf(placeholder);
            definition.MiddlewareComponents[index] = middleware;
        }

        private static FieldMiddleware CreateMiddleware<TEntity>(
            IFilterConvention convention) =>
            convention.CreateExecutor<TEntity>();
    }
}
