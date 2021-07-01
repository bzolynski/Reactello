using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Commands.Sections
{
    public class DeleteSectionCommand : IRequest<bool>
    {
        public DeleteSectionCommand(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
