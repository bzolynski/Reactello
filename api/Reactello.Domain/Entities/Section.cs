using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Domain.Entities
{
    public class Section : EntityBase
    {
        public Section()
        {
            Notes = new HashSet<Note>();
        }
        public string Name { get; set; }
        public string Color { get; set; }
        public int Position { get; set; }
        public ICollection<Note> Notes { get; private set; }

        public Board Board { get; set; }
    }
}
