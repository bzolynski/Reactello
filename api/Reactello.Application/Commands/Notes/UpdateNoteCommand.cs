using MediatR;
using Reactello.Application.Dtos.Notes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Commands.Notes
{
    public class UpdateNoteCommand : IRequest<NoteDto>
    {
        public UpdateNoteCommand(UpdateNoteDto note)
        {
            Note = note;
            Id = note.Id;
        }
        public int Id { get; }
        public UpdateNoteDto Note { get; }
    }
}
