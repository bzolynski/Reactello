using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Commands.Boards
{
    public class DeleteBoardCommand : IRequest<bool>
    {
        public DeleteBoardCommand(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
