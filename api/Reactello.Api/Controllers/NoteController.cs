using Microsoft.AspNetCore.Mvc;
using Reactello.Api.Models;
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
        public async Task<ActionResult<Response>> GetAll()
        {
            try
            {
                var notes = await Mediator.Send(new GetAllNotesQuery());
                return Models.Response.Success(notes);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Response>> Get(int id)
        {
            try
            {
                var note = await Mediator.Send(new GetNoteQuery(id));
                return Models.Response.Success(note);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Response>> Create([FromBody] CreateNoteDto createNote)
        {
            try
            {
                var note = await Mediator.Send(new CreateNoteCommand(createNote));
                return Models.Response.Success(note);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult<Response>> Update([FromBody] UpdateNoteDto note)
        {
            try
            {
                var updatedNote = await Mediator.Send(new UpdateNoteCommand(note));
                return Models.Response.Success(updatedNote);
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
                var result = await Mediator.Send(new DeleteNoteCommand(id));
                return Models.Response.Success(result);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }
    }
}
