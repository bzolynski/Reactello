using MediatR;
using Reactello.Application.Dtos.Boards;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Queries
{
    public class GetBoardQuery : IRequest<BoardDto>
    {
        public GetBoardQuery(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
