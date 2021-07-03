using MediatR;
using Reactello.Application.Dtos.Boards;

namespace Reactello.Application.Commands.Boards
{
    public class CreateBoardCommand : IRequest<BoardListingDto>
    {
        public CreateBoardCommand(CreateBoardDto board)
        {
            Board = board;
        }
        public CreateBoardDto Board { get; }
    }
}
