using AutoMapper;
using MediatR;
using Reactello.Application.Dtos.Sections;
using Reactello.Application.Queries.Sections;
using Reactello.Data.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Sections
{
    public class GetSectionsByBoardHandler : IRequestHandler<GetSectionsByBoardQuery, List<SectionDto>>
    {
        private readonly ISectionRepository _sectionRepository;
        private readonly IMapper _mapper;

        public GetSectionsByBoardHandler(ISectionRepository sectionRepository, IMapper mapper)
        {
            _sectionRepository = sectionRepository;
            _mapper = mapper;
        }
        public async Task<List<SectionDto>> Handle(GetSectionsByBoardQuery request, CancellationToken cancellationToken)
        {
            var sections = await _sectionRepository.GetSectionsByBoard(request.BoardId);
            return _mapper.Map<List<SectionDto>>(sections);
        }
    }
}
