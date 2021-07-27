using Microsoft.AspNetCore.Mvc;
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
        public async Task<ActionResult<IEnumerable<SectionDto>>> GetAll()
        {
            return await Mediator.Send(new GetAllSectionsQuery());
        }

        [HttpGet("getForBoard/{boardId}")]
        public async Task<ActionResult<IEnumerable<SectionDto>>> GetForBoard(int boardId)
        {
            return await Mediator.Send(new GetSectionsForBoardQuery(boardId));
        }

        [HttpPost]
        public async Task<ActionResult<SectionDto>> Create([FromBody] CreateSectionDto createSection)
        {
            return await Mediator.Send(new CreateSectionCommand(createSection));
        }

        [HttpPut]
        public void Update([FromBody] string value)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            return await Mediator.Send(new DeleteSectionCommand(id));
        }
    }
}
