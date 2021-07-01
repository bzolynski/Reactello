using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Domain.Entities
{
    public class Board : EntityBase
    {
        public Board()
        {
            Sections = new HashSet<Section>();
        }
        public bool IsPublic { get; set; }
        public string Name { get; set; }
        public string Background { get; set; }
        public ICollection<Section> Sections { get; private set; }
    }
}
