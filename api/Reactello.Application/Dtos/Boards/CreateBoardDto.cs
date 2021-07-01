using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Dtos.Boards
{
    public class CreateBoardDto
    {
        public bool IsPublic { get; set; }
        public string Name { get; set; }
        public string Background { get; set; }
    }
}
