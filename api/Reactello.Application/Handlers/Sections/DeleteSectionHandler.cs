using MediatR;
using Reactello.Application.Commands.Sections;
using Reactello.Data.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Sections
{
    public class DeleteSectionHandler : IRequestHandler<DeleteSectionCommand, bool>
    {
        private readonly ISectionRepository _sectionRepository;

        public DeleteSectionHandler(ISectionRepository sectionRepository)
        {
            _sectionRepository = sectionRepository;
        }
        public async Task<bool> Handle(DeleteSectionCommand request, CancellationToken cancellationToken)
        {
            return await _sectionRepository.Delete(request.Id);
        }
    }
}
