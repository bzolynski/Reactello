using MediatR;
using Reactello.Application.Dtos.Comments;

namespace Reactello.Application.Commands.Comments
{
    public class CreateCommentCommand : IRequest<CommentDto>
    {
        public CreateCommentCommand(CreateCommentDto comment)
        {
            Comment = comment;
        }

        public CreateCommentDto Comment { get; }
    }
}
