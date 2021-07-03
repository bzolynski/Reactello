using MediatR;
using Reactello.Application.Dtos.Notes;

namespace Reactello.Application.Commands.Notes
{
    public class CreateNoteCommand : IRequest<NoteListingDto>
    {
        public CreateNoteCommand(CreateNoteDto note)
        {
            Note = note;
        }

        public CreateNoteDto Note { get; }
    }
}
