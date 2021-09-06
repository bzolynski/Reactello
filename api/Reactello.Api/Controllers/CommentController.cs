using Microsoft.AspNetCore.Mvc;
using Reactello.Api.Models;
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
        public async Task<ActionResult<Response>> GetAll()
        {
            try
            {
                var comments = await Mediator.Send(new GetAllCommentsQuery());
                return Models.Response.Success(comments);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Response>> Create([FromBody] CreateCommentDto createComment)
        {
            try
            {
                var comment = await Mediator.Send(new CreateCommentCommand(createComment));
                return Models.Response.Success(comment);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Response>> DeleteAsync(int id)
        {
            try
            {
                var response = await Mediator.Send(new DeleteCommentCommand(id));
                return Models.Response.Success(response);
            }
            catch (Exception ex)
            {
                return Models.Response.Error(ex.Message);
            }
        }
    }
}
