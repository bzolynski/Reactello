using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
