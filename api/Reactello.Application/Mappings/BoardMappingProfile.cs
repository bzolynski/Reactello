using AutoMapper;
using Reactello.Application.Dtos.Boards;
using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        }
    }
}
