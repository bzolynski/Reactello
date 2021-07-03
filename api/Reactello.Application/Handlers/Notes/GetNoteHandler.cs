using AutoMapper;
using MediatR;
using Reactello.Application.Dtos.Notes;
using Reactello.Application.Queries;
using Reactello.Data.Interfaces.Repositories;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Notes
{
    public class GetNoteHandler : IRequestHandler<GetNoteQuery, NoteDto>
    {
        private readonly INoteRepository _noteRepository;
        private readonly IMapper _mapper;

        public GetNoteHandler(INoteRepository noteRepository, IMapper mapper)
        {
            _noteRepository = noteRepository;
            _mapper = mapper;
        }
        public async Task<NoteDto> Handle(GetNoteQuery request, CancellationToken cancellationToken)
        {
            var note = await _noteRepository.Get(request.Id);
            return _mapper.Map<NoteDto>(note);
        }
    }
}
