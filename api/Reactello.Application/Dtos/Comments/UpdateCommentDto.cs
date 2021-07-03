namespace Reactello.Application.Dtos.Comments
{
    public class UpdateCommentDto
    {
        public string Content { get; set; }
        public int UpVotes { get; set; }
        public int DownVotes { get; set; }

        public int NoteId { get; set; }
    }
}
