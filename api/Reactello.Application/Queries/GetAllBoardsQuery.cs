using MediatR;
using Reactello.Application.Dtos.Boards;
using System.Collections.Generic;

namespace Reactello.Application.Queries
{
    public class GetAllBoardsQuery : IRequest<List<BoardListingDto>>
    {
    }
}
