using MediatR;

namespace Reactello.Application.Commands.Boards
{
    public class DeleteBoardCommand : IRequest<bool>
    {
        public DeleteBoardCommand(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
