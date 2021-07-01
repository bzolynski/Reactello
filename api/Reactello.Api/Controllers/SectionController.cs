using Microsoft.AspNetCore.Mvc;
using Reactello.Application.Commands.Sections;
using Reactello.Application.Dtos.Sections;
using Reactello.Application.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactello.Api.Controllers
{
    public class SectionController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SectionDto>>> GetAll()
        {
            return await Mediator.Send(new GetAllSectionsQuery());
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
