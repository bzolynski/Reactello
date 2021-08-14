using MediatR;
using Reactello.Application.Dtos.Sections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Queries.Sections
{
    public class GetSectionsByBoardQuery : IRequest<List<SectionDto>>
    {
        public GetSectionsByBoardQuery(int boardId)
        {
            BoardId = boardId;
        }

        public int BoardId { get; }
    }
}
