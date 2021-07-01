using MediatR;
using Reactello.Application.Commands.Cards;
using Reactello.Data.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Cards
{
    public class DeleteCardHandler : IRequestHandler<DeleteCardCommand, bool>
    {
        private readonly ICardRepository _cardRepository;

        public DeleteCardHandler(ICardRepository cardRepository)
        {
            _cardRepository = cardRepository;
        }
        public async Task<bool> Handle(DeleteCardCommand request, CancellationToken cancellationToken)
        {
            return await _cardRepository.Delete(request.Id);
        }
    }
}
