using System;
using System.Linq.Expressions;
using HotChocolate.Language;
using HotChocolate.Types;
using HotChocolate.Utilities;

namespace HotChocolate.Data.Filters.Expressions
{
    public class QueryableComparableNotGreaterThanHandler
        : QueryableComparableOperationHandler
    {
        public QueryableComparableNotGreaterThanHandler(
            ITypeConverter typeConverter)
            : base(typeConverter)
        {
            CanBeNull = false;
        }

        protected override int Operation => DefaultOperations.NotGreaterThan;

        public override Expression HandleOperation(
            QueryableFilterContext context,
            IFilterOperationField field,
            IValueNode value,
            object? parsedValue)
        {
            Expression property = context.GetInstance();
            parsedValue = ParseValue(value, parsedValue, field.Type, context);

            if (parsedValue == null)
            {
                throw new InvalidOperationException();
            }

            return FilterExpressionBuilder.Not(
                FilterExpressionBuilder.GreaterThan(property, parsedValue));
        }
    }
}
