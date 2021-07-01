using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Commands.Cards
{
    public class DeleteCardCommand : IRequest<bool>
    {
        public DeleteCardCommand(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
