using AutoMapper;
using Reactello.Application.Dtos.Cards;
using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Mappings
{
    public class CardMappingProfile : Profile
    {
        public CardMappingProfile()
        {
            CreateMap<Card, CardDto>();
            CreateMap<CreateCardDto, Card>();
            CreateMap<UpdateCardDto, Card>();
        }
    }
}
