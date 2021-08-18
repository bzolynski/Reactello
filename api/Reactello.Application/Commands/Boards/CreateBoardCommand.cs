using MediatR;
using Reactello.Application.Dtos.Boards;

namespace Reactello.Application.Commands.Boards
{
    public class CreateBoardCommand : IRequest<BoardDto>
    {
        public CreateBoardCommand(CreateBoardDto board)
        {
            Board = board;
        }
        public CreateBoardDto Board { get; }
    }
}
