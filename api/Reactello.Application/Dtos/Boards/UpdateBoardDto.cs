namespace Reactello.Application.Dtos.Boards
{
    public class UpdateBoardDto
    {
        public int Id { get; set; }
        public bool IsPublic { get; set; }
        public string Name { get; set; }
        public string Background { get; set; }
    }
}
