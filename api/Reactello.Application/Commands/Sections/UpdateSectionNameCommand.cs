using MediatR;
using Reactello.Application.Dtos.Sections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Commands.Sections
{
    public class UpdateSectionNameCommand : IRequest<UpdateSectionNameDto>
    {
        public UpdateSectionNameCommand(UpdateSectionNameDto updateSectionName)
        {
            Id = updateSectionName.Id;
            Name = updateSectionName.Name;
        }
        public int Id { get; }
        public string Name { get; }
    }
}
