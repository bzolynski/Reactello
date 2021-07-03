using AutoMapper;
using MediatR;
using Reactello.Application.Commands.Notes;
using Reactello.Application.Dtos.Notes;
using Reactello.Data.Interfaces.Repositories;
using Reactello.Domain.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Notes
{
    public class CreateNoteHandler : IRequestHandler<CreateNoteCommand, NoteListingDto>
    {
        private readonly INoteRepository _noteRepository;
        private readonly IMapper _mapper;

        public CreateNoteHandler(INoteRepository noteRepository, IMapper mapper)
        {
            _noteRepository = noteRepository;
            _mapper = mapper;
        }
        public async Task<NoteListingDto> Handle(CreateNoteCommand request, CancellationToken cancellationToken)
        {
            var note = _mapper.Map<Note>(request.Note);
            var result = await _noteRepository.Create(note);
            return _mapper.Map<NoteListingDto>(result);
        }
    }
}
