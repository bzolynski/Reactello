using MediatR;
using Reactello.Application.Dtos.Boards;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Queries
{
    public class GetBoardForUpdateQuery : IRequest<UpdateBoardDto>
    {
        public GetBoardForUpdateQuery(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
