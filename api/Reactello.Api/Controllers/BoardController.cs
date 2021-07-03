using Microsoft.AspNetCore.Mvc;
using Reactello.Application.Commands.Boards;
using Reactello.Application.Dtos.Boards;
using Reactello.Application.Queries;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Reactello.Api.Controllers
{
    public class BoardController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BoardListingDto>>> GetAll()
        {
            return await Mediator.Send(new GetAllBoardsQuery());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BoardDto>> Get(int id)
        {
            return await Mediator.Send(new GetBoardQuery(id));
        }

        [HttpPost]
        public async Task<ActionResult<BoardListingDto>> Create([FromBody] CreateBoardDto createBoard)
        {
            return await Mediator.Send(new CreateBoardCommand(createBoard));
        }

        [HttpPut]
        public void Update([FromBody] UpdateBoardDto updateBoard)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            return await Mediator.Send(new DeleteBoardCommand(id));
        }
    }
}
