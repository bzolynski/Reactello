using MediatR;
using Reactello.Application.Commands.Comments;
using Reactello.Data.Interfaces.Repositories;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Comments
{
    public class DeleteCommentHandler : IRequestHandler<DeleteCommentCommand, bool>
    {
        private readonly ICommentRepository _commentRepository;

        public DeleteCommentHandler(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }
        public async Task<bool> Handle(DeleteCommentCommand request, CancellationToken cancellationToken)
        {
            return await _commentRepository.Delete(request.Id);
        }
    }
}
