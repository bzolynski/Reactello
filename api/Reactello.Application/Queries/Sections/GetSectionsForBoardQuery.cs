using MediatR;
using Reactello.Application.Dtos.Sections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Queries.Sections
{
    public class GetSectionsForBoardQuery : IRequest<List<SectionDto>>
    {
        public GetSectionsForBoardQuery(int boardId)
        {
            BoardId = boardId;
        }

        public int BoardId { get; }
    }
}
