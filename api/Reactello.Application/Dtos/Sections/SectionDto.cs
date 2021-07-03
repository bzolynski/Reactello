using Reactello.Application.Dtos.Notes;
using System.Collections.Generic;

namespace Reactello.Application.Dtos.Sections
{
    public class SectionDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public int Position { get; set; }
        public List<NoteDto> Notes { get;  set; }
    }
}
