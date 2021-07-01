using Microsoft.AspNetCore.Mvc;
using Reactello.Application.Commands.Cards;
using Reactello.Application.Dtos.Cards;
using Reactello.Application.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactello.Api.Controllers
{
    public class CardController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CardListingDto>>> GetAll()
        {
            return await Mediator.Send(new GetAllCardsQuery());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CardDto>> Get(int id)
        {
            return await Mediator.Send(new GetCardQuery(id));
        }

        [HttpPost]
        public async Task<ActionResult<CardListingDto>> Create([FromBody] CreateCardDto createCard)
        {
            return await Mediator.Send(new CreateCardCommand(createCard));
        }

        [HttpPut("{id}")]
        public void Update(int id, [FromBody] string value)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            return await Mediator.Send(new DeleteCardCommand(id));
        }
    }
}
