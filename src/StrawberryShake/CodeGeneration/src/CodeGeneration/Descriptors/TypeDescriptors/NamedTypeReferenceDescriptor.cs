using System.Collections.Generic;
using HotChocolate.Types;

namespace StrawberryShake.CodeGeneration
{
    /// <summary>
    /// Describes a type reference like the type of a member, parameter or the return type of a method
    /// </summary>
    public class NamedTypeReferenceDescriptor
    {
        /// <summary>
        /// The name of the property
        /// </summary>
        public string Name { get; }

        /// <summary>
        /// The referenced type
        /// </summary>
        public ITypeDescriptor Type { get; }

        public NamedTypeReferenceDescriptor(string name, ITypeDescriptor type)
        {
            Name = name;
            Type = type;
        }
    }
}