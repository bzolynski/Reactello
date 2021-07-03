using AutoMapper;
using MediatR;
using Reactello.Application.Dtos.Notes;
using Reactello.Application.Queries;
using Reactello.Data.Interfaces.Repositories;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Notes
{
    public class GetAllNotesHandler : IRequestHandler<GetAllNotesQuery, List<NoteListingDto>>
    {
        private readonly INoteRepository _noteRepository;
        private readonly IMapper _mapper;

        public GetAllNotesHandler(INoteRepository noteRepository, IMapper mapper)
        {
            _noteRepository = noteRepository;
            _mapper = mapper;
        }
        public async Task<List<NoteListingDto>> Handle(GetAllNotesQuery request, CancellationToken cancellationToken)
        {
            var notes = await _noteRepository.GetAll();
            return _mapper.Map<List<NoteListingDto>>(notes);
        }
    }
}
