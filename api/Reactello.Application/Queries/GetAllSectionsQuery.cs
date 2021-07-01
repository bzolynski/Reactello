using MediatR;
using Reactello.Application.Dtos.Sections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Queries
{
    public class GetAllSectionsQuery : IRequest<List<SectionDto>>
    {
    }
}
