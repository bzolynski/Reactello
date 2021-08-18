using AutoMapper;
using Reactello.Application.Dtos.Notes;
using Reactello.Domain.Entities;

namespace Reactello.Application.Mappings
{
    public class NoteMappingProfile : Profile
    {
        public NoteMappingProfile()
        {
            CreateMap<Note, NoteDto>();
            CreateMap<CreateNoteDto, Note>();
            CreateMap<UpdateNoteDto, Note>();
        }
    }
}
