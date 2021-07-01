using AutoMapper;
using MediatR;
using Reactello.Application.Dtos.Cards;
using Reactello.Application.Queries;
using Reactello.Data.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Cards
{
    public class GetAllCardsHandler : IRequestHandler<GetAllCardsQuery, List<CardListingDto>>
    {
        private readonly ICardRepository _cardRepository;
        private readonly IMapper _mapper;

        public GetAllCardsHandler(ICardRepository cardRepository, IMapper mapper)
        {
            _cardRepository = cardRepository;
            _mapper = mapper;
        }
        public async Task<List<CardListingDto>> Handle(GetAllCardsQuery request, CancellationToken cancellationToken)
        {
            var cards = await _cardRepository.GetAll();
            return _mapper.Map<List<CardListingDto>>(cards);
        }
    }
}
