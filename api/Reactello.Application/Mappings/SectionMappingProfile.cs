using AutoMapper;
using Reactello.Application.Dtos.Sections;
using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Mappings
{
    public class SectionMappingProfile : Profile
    {
        public SectionMappingProfile()
        {
            CreateMap<Section, SectionDto>();
            CreateMap<CreateSectionDto, Section>();
            CreateMap<UpdateSectionDto, Section>();
        }
    }
}
