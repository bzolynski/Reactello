using Microsoft.AspNetCore.Mvc;
using Reactello.Application.Commands.Notes;
using Reactello.Application.Dtos.Notes;
using Reactello.Application.Queries;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Reactello.Api.Controllers
{
    public class NoteController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NoteDto>>> GetAll()
        {
            return await Mediator.Send(new GetAllNotesQuery());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<NoteDto>> Get(int id)
        {
            return await Mediator.Send(new GetNoteQuery(id));
        }
        
        [HttpPost]
        public async Task<ActionResult<NoteDto>> Create([FromBody] CreateNoteDto createNote)
        {
            return await Mediator.Send(new CreateNoteCommand(createNote));
        }

        [HttpPut]
        public async Task<ActionResult<NoteDto>> Update([FromBody] UpdateNoteDto note)
        {
            return await Mediator.Send(new UpdateNoteCommand(note));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            return await Mediator.Send(new DeleteNoteCommand(id));
        }
    }
}
