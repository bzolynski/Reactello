using Microsoft.AspNetCore.Mvc;
using Reactello.Application.Commands.Boards;
using Reactello.Application.Dtos.Boards;
using Reactello.Application.Queries;
using Reactello.Application.Queries.Boards;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Reactello.Api.Controllers
{
    public class BoardController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BoardDto>>> GetAll()
        {
            return await Mediator.Send(new GetAllBoardsQuery());
        }

        [HttpGet("getAll/{id}")]
        public async Task<ActionResult<BoardDto>> Get(int id)
        {
            var cos = await Mediator.Send(new GetBoardQuery(id));
            return await Mediator.Send(new GetBoardQuery(id));
        }

        [HttpGet("getForUpdate/{id}")]
        public async Task<ActionResult<UpdateBoardDto>> GetForUpdate(int id)
        {
            return await Mediator.Send(new GetBoardForUpdateQuery(id));
        }

        [HttpPost]
        public async Task<ActionResult<BoardDto>> Create([FromBody] CreateBoardDto createBoard)
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
