namespace Reactello.Application.Dtos.Notes
{
    public class UpdateNoteDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Position { get; set; }

        public int SectionId { get; set; }
    }
}
