using AutoMapper;
using Reactello.Application.Dtos.Comments;
using Reactello.Domain.Entities;

namespace Reactello.Application.Mappings
{
    public class CommentMappingProfile : Profile
    {
        public CommentMappingProfile()
        {
            CreateMap<Comment, CommentDto>();
            CreateMap<CreateCommentDto, Comment>();
            CreateMap<UpdateCommentDto, Comment>();
        }
    }
}
