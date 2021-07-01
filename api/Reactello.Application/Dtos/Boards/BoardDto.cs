using Reactello.Application.Dtos.Sections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Dtos.Boards
{
    public class BoardDto
    {
        public int Id { get; set; }
        public bool IsPublic { get; set; }
        public string Name { get; set; }
        public string Background { get; set; }
        public List<SectionDto> Sections { get; set; }
    }
}
