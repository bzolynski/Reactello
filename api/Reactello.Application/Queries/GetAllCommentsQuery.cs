using MediatR;
using Reactello.Application.Dtos.Comments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Queries
{
    public class GetAllCommentsQuery : IRequest<List<CommentDto>>
    {
    }
}
