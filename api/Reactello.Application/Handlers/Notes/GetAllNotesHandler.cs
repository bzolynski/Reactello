using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Reactello.Application.Dtos.Notes;
using Reactello.Application.Queries;
using Reactello.Data.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Notes
{
    public class GetAllNotesHandler : IRequestHandler<GetAllNotesQuery, List<NoteDto>>
    {
        private readonly INoteRepository _noteRepository;
        private readonly IMapper _mapper;

        public GetAllNotesHandler(INoteRepository noteRepository, IMapper mapper)
        {
            _noteRepository = noteRepository;
            _mapper = mapper;
        }
        public Task<List<NoteDto>> Handle(GetAllNotesQuery request, CancellationToken cancellationToken)
        {
            var notes = _noteRepository.GetAll().ProjectTo<NoteDto>(_mapper.ConfigurationProvider);
            return Task.FromResult(notes.ToList());
        }
    }
}
