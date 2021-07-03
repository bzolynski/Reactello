using MediatR;

namespace Reactello.Application.Commands.Comments
{
    public class DeleteCommentCommand : IRequest<bool>
    {
        public DeleteCommentCommand(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
