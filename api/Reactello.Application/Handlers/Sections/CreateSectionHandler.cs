using AutoMapper;
using MediatR;
using Reactello.Application.Commands.Sections;
using Reactello.Application.Dtos.Sections;
using Reactello.Data.Interfaces.Repositories;
using Reactello.Domain.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Sections
{
    public class CreateSectionHandler : IRequestHandler<CreateSectionCommand, SectionDto>
    {
        private readonly ISectionRepository _sectionRepository;
        private readonly IMapper _mapper;

        public CreateSectionHandler(ISectionRepository sectionRepository, IMapper mapper)
        {
            _sectionRepository = sectionRepository;
            _mapper = mapper;
        }
        public async Task<SectionDto> Handle(CreateSectionCommand request, CancellationToken cancellationToken)
        {
            var section = _mapper.Map<Section>(request.Section);
            var result = await _sectionRepository.Create(section);
            return _mapper.Map<SectionDto>(result);
        }
    }
}
