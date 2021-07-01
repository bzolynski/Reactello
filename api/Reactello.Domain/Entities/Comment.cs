using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Domain.Entities
{
    public class Comment : EntityBase
    {
        public string Content { get; set; }
        public int UpVotes { get; set; }
        public int DownVotes { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime EditTime { get; set; } 

        public Card Card { get; set; }
    }
}
