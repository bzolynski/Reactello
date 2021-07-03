using MediatR;
using Reactello.Application.Commands.Boards;
using Reactello.Data.Interfaces.Repositories;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Boards
{
    public class DeleteBoardHandler : IRequestHandler<DeleteBoardCommand, bool>
    {
        private readonly IBoardRepository _boardRepository;

        public DeleteBoardHandler(IBoardRepository boardRepository)
        {
            _boardRepository = boardRepository;
        }
        public async Task<bool> Handle(DeleteBoardCommand request, CancellationToken cancellationToken)
        {
            return await _boardRepository.Delete(request.Id);
        }
    }
}
