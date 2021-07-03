using MediatR;
using Reactello.Application.Commands.Notes;
using Reactello.Data.Interfaces.Repositories;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Notes
{
    public class DeleteNoteHandler : IRequestHandler<DeleteNoteCommand, bool>
    {
        private readonly INoteRepository _noteRepository;

        public DeleteNoteHandler(INoteRepository noteRepository)
        {
            _noteRepository = noteRepository;
        }
        public async Task<bool> Handle(DeleteNoteCommand request, CancellationToken cancellationToken)
        {
            return await _noteRepository.Delete(request.Id);
        }
    }
}
