using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Reactello.Application.Dtos.Sections;
using Reactello.Application.Queries.Sections;
using Reactello.Data.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Sections
{
    public class GetAllSectionHandler : IRequestHandler<GetAllSectionsQuery, List<SectionDto>>
    {
        private readonly ISectionRepository _sectionRepository;
        private readonly IMapper _mapper;

        public GetAllSectionHandler(ISectionRepository sectionRepository, IMapper mapper)
        {
            _sectionRepository = sectionRepository;
            _mapper = mapper;
        }
        public Task<List<SectionDto>> Handle(GetAllSectionsQuery request, CancellationToken cancellationToken)
        {
            var sections = _sectionRepository.GetAll().ProjectTo<SectionDto>(_mapper.ConfigurationProvider);
            return Task.FromResult(sections.ToList());
        }
    }
}
