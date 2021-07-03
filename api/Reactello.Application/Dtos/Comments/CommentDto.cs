using System;

namespace Reactello.Application.Dtos.Comments
{
    public class CommentDto
    {
        public int Id{ get; set; }
        public string Content { get; set; }
        public int UpVotes { get; set; }
        public int DownVotes { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime EditTime { get; set; }
    }
}
