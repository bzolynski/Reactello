using MediatR;
using Reactello.Application.Dtos.Sections;

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
