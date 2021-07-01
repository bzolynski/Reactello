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
    public class GetCardHandler : IRequestHandler<GetCardQuery, CardDto>
    {
        private readonly ICardRepository _cardRepository;
        private readonly IMapper _mapper;

        public GetCardHandler(ICardRepository cardRepository, IMapper mapper)
        {
            _cardRepository = cardRepository;
            _mapper = mapper;
        }
        public async Task<CardDto> Handle(GetCardQuery request, CancellationToken cancellationToken)
        {
            var card = await _cardRepository.Get(request.Id);
            return _mapper.Map<CardDto>(card);
        }
    }
}
