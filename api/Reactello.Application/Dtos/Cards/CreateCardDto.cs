using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Dtos.Cards
{
    public class CreateCardDto
    {
        public string Title { get; set; }
        public string Description { get; set; }

        public int SectionId { get; set; }
    }
}
