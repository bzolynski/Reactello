using MediatR;
using Reactello.Application.Dtos.Boards;
using System.Collections.Generic;

namespace Reactello.Application.Queries.Boards
{
    public class GetAllBoardsQuery : IRequest<List<BoardDto>>
    {
    }
}
