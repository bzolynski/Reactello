using MediatR;
using Reactello.Application.Dtos.Cards;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Commands.Cards
{
    public class CreateCardCommand : IRequest<CardListingDto>
    {
        public CreateCardCommand(CreateCardDto card)
        {
            Card = card;
        }

        public CreateCardDto Card { get; }
    }
}
