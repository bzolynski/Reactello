using AutoMapper;
using MediatR;
using Reactello.Application.Commands.Sections;
using Reactello.Application.Dtos.Sections;
using Reactello.Data.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Sections
{
    public class UpdateSectionNameHandler : IRequestHandler<UpdateSectionNameCommand, UpdateSectionNameDto>
    {
        private readonly ISectionRepository _sectionRepository;
        private readonly IMapper _mapper;

        public UpdateSectionNameHandler(ISectionRepository sectionRepository, IMapper mapper)
        {
            _sectionRepository = sectionRepository;
            _mapper = mapper;
        }
        public async Task<UpdateSectionNameDto> Handle(UpdateSectionNameCommand request, CancellationToken cancellationToken)
        {
            var result = await _sectionRepository.UpdateName(request.Id, request.Name);
            return _mapper.Map<UpdateSectionNameDto>(result);
        }
    }
}
