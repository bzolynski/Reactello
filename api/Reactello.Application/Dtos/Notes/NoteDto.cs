using Reactello.Application.Dtos.Comments;
using System.Collections.Generic;

namespace Reactello.Application.Dtos.Notes
{
    public class NoteDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int Position { get; set; }
        public List<CommentDto> Comments { get; set; }
    }
}
