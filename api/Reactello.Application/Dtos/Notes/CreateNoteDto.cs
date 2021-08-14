namespace Reactello.Application.Dtos.Notes
{
    public class CreateNoteDto
    {
        public string Title { get; set; }
        public string Description { get; set; }

        public int SectionId { get; set; }
    }
}
