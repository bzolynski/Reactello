using Microsoft.AspNetCore.Mvc;
using Reactello.Application.Commands.Comments;
using Reactello.Application.Dtos.Comments;
using Reactello.Application.Queries;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Reactello.Api.Controllers
{
    public class CommentController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CommentDto>>> GetAll()
        {
            return await Mediator.Send(new GetAllCommentsQuery());
        }

        [HttpPost]
        public async Task<ActionResult<CommentDto>> Create([FromBody] CreateCommentDto createComment)
        {
            return await Mediator.Send(new CreateCommentCommand(createComment));
        }

        [HttpPut]
        public void Update([FromBody] string value)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> DeleteAsync(int id)
        {
            return await Mediator.Send(new DeleteCommentCommand(id));
        }
    }
}
