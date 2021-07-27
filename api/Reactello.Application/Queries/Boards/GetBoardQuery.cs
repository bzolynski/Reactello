using MediatR;
using Reactello.Application.Dtos.Boards;

namespace Reactello.Application.Queries.Boards
{
    public class GetBoardQuery : IRequest<BoardDto>
    {
        public GetBoardQuery(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
