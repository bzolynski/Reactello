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
            Cards = new HashSet<Card>();
        }
        public string Name { get; set; }
        public string Color { get; set; }
        public int Position { get; set; }
        public ICollection<Card> Cards { get; private set; }

        public Board Board { get; set; }
    }
}
