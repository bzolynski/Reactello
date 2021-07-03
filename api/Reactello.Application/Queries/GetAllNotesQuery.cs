using MediatR;
using Reactello.Application.Dtos.Notes;
using System.Collections.Generic;

namespace Reactello.Application.Queries
{
    public class GetAllNotesQuery : IRequest<List<NoteListingDto>>
    {
    }
}
