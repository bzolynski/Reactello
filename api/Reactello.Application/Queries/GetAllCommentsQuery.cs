using MediatR;
using Reactello.Application.Dtos.Comments;
using System.Collections.Generic;

namespace Reactello.Application.Queries
{
    public class GetAllCommentsQuery : IRequest<List<CommentDto>>
    {
    }
}
