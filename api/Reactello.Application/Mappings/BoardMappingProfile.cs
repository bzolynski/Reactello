using AutoMapper;
using Reactello.Application.Dtos.Boards;
using Reactello.Domain.Entities;

namespace Reactello.Application.Mappings
{
    public class BoardMappingProfile : Profile
    {
        public BoardMappingProfile()
        {
            CreateMap<Board, BoardDto>();
            CreateMap<Board, BoardListingDto>();
            CreateMap<CreateBoardDto, Board>();
            CreateMap<UpdateBoardDto, Board>();
            CreateMap<Board, UpdateBoardDto>();
        }
    }
}
