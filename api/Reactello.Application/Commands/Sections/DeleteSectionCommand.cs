using MediatR;

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
