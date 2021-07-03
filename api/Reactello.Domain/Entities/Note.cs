using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Domain.Entities
{
    public class Note : EntityBase
    {
        public Note()
        {
            Comments = new HashSet<Comment>();
        }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Position { get; set; }
        public ICollection<Comment> Comments { get; private set; }

        public Section Section { get; set; }
    }
}
