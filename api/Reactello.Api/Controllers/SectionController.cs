using Microsoft.AspNetCore.Mvc;
using Reactello.Api.Models;
using Reactello.Application.Commands.Sections;
using Reactello.Application.Dtos.Sections;
using Reactello.Application.Queries;
using Reactello.Application.Queries.Sections;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Reactello.Api.Controllers
{
    public class SectionController : BaseController
    {
        [HttpGet("getAll")]
        public async Task<ActionResult<Response>> GetAll()
        {
            try
            {
                var sections = await Mediator.Send(new GetAllSectionsQuery());
                return Models.Response.Success(sections);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }

        [HttpGet("getForBoard/{boardId}")]
        public async Task<ActionResult<Response>> GetManyByBoard(int boardId)
        {
            try
            {
                var sections = await Mediator.Send(new GetSectionsByBoardQuery(boardId));
                return Models.Response.Success(sections);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Response>> Create([FromBody] CreateSectionDto createSection)
        {
            try
            {
                var section = await Mediator.Send(new CreateSectionCommand(createSection));
                return Models.Response.Success(section);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }

        [HttpPatch("updateName")]
        public async Task<ActionResult<Response>> UpdateName([FromBody] UpdateSectionNameDto updateSectionName)
        {
            try
            {
                var section = await Mediator.Send(new UpdateSectionNameCommand(updateSectionName));
                return Models.Response.Success(section);
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
                var result = await Mediator.Send(new DeleteSectionCommand(id));
                return Models.Response.Success(result);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }
    }
}
