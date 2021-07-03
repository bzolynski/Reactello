using MediatR;

namespace Reactello.Application.Commands.Notes
{
    public class DeleteNoteCommand : IRequest<bool>
    {
        public DeleteNoteCommand(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
