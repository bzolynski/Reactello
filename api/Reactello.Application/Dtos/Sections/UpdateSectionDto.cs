namespace Reactello.Application.Dtos.Sections
{
    public class UpdateSectionDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public int Position { get; set; }
        public int BoardId { get; set; }
    }
}
