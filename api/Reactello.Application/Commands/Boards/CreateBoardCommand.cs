using MediatR;
using Reactello.Application.Dtos.Boards;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Commands.Boards
{
    public class CreateBoardCommand : IRequest<BoardListingDto>
    {
        public CreateBoardCommand(CreateBoardDto board)
        {
            Board = board;
        }
        public CreateBoardDto Board { get; }
    }
}
