using AutoMapper;
using Reactello.Application.Dtos.Sections;
using Reactello.Domain.Entities;

namespace Reactello.Application.Mappings
{
    public class SectionMappingProfile : Profile
    {
        public SectionMappingProfile()
        {
            CreateMap<Section, SectionDto>();
            CreateMap<CreateSectionDto, Section>();
            CreateMap<UpdateSectionDto, Section>();
            CreateMap<Section, UpdateSectionNameDto>();
        }
    }
}
