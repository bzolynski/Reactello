using AutoMapper;
using MediatR;
using Reactello.Application.Commands.Cards;
using Reactello.Application.Dtos.Cards;
using Reactello.Data.Interfaces.Repositories;
using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Cards
{
    public class CreateCardHandler : IRequestHandler<CreateCardCommand, CardListingDto>
    {
        private readonly ICardRepository _cardRepository;
        private readonly IMapper _mapper;

        public CreateCardHandler(ICardRepository cardRepository, IMapper mapper)
        {
            _cardRepository = cardRepository;
            _mapper = mapper;
        }
        public async Task<CardListingDto> Handle(CreateCardCommand request, CancellationToken cancellationToken)
        {
            var card = _mapper.Map<Card>(request.Card);
            var result = await _cardRepository.Create(card);
            return _mapper.Map<CardListingDto>(result);
        }
    }
}
