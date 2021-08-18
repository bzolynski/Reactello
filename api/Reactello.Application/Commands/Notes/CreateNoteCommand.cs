using MediatR;
using Reactello.Application.Dtos.Notes;

namespace Reactello.Application.Commands.Notes
{
    public class CreateNoteCommand : IRequest<NoteDto>
    {
        public CreateNoteCommand(CreateNoteDto note)
        {
            Note = note;
        }

        public CreateNoteDto Note { get; }
    }
}
