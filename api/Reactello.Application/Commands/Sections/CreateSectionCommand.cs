using MediatR;
using Reactello.Application.Dtos.Sections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Commands.Sections
{
    public class CreateSectionCommand : IRequest<SectionDto>
    {
        public CreateSectionCommand(CreateSectionDto section)
        {
            Section = section;
        }

        public CreateSectionDto Section { get; }
    }
}
