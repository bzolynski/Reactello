using MediatR;
using Reactello.Application.Dtos.Comments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
