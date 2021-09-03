using AutoMapper;
using MediatR;
using Reactello.Application.Commands.Notes;
using Reactello.Application.Dtos.Notes;
using Reactello.Data.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Notes
{
    public class UpdateNoteHandler : IRequestHandler<UpdateNoteCommand, NoteDto>
    {
        private readonly INoteRepository _noteRepository;
        private readonly IMapper _mapper;

        public UpdateNoteHandler(INoteRepository noteRepository, IMapper mapper)
        {
            _noteRepository = noteRepository;
            _mapper = mapper;
        }
        public async Task<NoteDto> Handle(UpdateNoteCommand request, CancellationToken cancellationToken)
        {
            var note = await _noteRepository.Get(request.Id);
            note.Title = request.Note.Title;
            note.Description = request.Note.Description;
            note.Position = request.Note.Position;
            note.SectionId = request.Note.SectionId;
            var result = await _noteRepository.Update(request.Id, note);
            return _mapper.Map<NoteDto>(result);
        }
    }
}
