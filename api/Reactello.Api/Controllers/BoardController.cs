using Microsoft.AspNetCore.Mvc;
using Reactello.Api.Models;
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
        public async Task<ActionResult<Response>> GetAll()
        {
            try
            {
                var boards = await Mediator.Send(new GetAllBoardsQuery());
                return Models.Response.Success(boards);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }

        [HttpGet("getAll/{id}")]
        public async Task<ActionResult<Response>> Get(int id)
        {
            try
            {
                var board = await Mediator.Send(new GetBoardQuery(id));
                return Models.Response.Success(board);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Response>> Create([FromBody] CreateBoardDto createBoard)
        {
            try
            {
                var board = await Mediator.Send(new CreateBoardCommand(createBoard));
                return Models.Response.Success(board);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Response>> Delete(int id)
        {
            try
            {
                var result = await Mediator.Send(new DeleteBoardCommand(id));
                return Models.Response.Success(result);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }
    }
}
