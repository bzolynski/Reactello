using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Dtos.Comments
{
    public class UpdateCommentDto
    {
        public string Content { get; set; }
        public int UpVotes { get; set; }
        public int DownVotes { get; set; }

        public int CardId { get; set; }
    }
}
