using Reactello.Application.Dtos.Comments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Dtos.Cards
{
    public class CardDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int Position { get; set; }
        public List<CommentDto> Comments { get; set; }
    }
}
