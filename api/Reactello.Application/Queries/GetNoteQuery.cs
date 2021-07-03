using MediatR;
using Reactello.Application.Dtos.Notes;

namespace Reactello.Application.Queries
{
    public class GetNoteQuery : IRequest<NoteDto>
    {
        public GetNoteQuery(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
