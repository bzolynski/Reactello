using AutoMapper;
using MediatR;
using Reactello.Application.Commands.Comments;
using Reactello.Application.Dtos.Comments;
using Reactello.Data.Interfaces.Repositories;
using Reactello.Domain.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Comments
{
    public class CreateCommentHandler : IRequestHandler<CreateCommentCommand, CommentDto>
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IMapper _mapper;

        public CreateCommentHandler(ICommentRepository commentRepository, IMapper mapper)
        {
            _commentRepository = commentRepository;
            _mapper = mapper;
        }
        public async Task<CommentDto> Handle(CreateCommentCommand request, CancellationToken cancellationToken)
        {
            var comment = _mapper.Map<Comment>(request.Comment);
            //TODO: Create time
            var result = await _commentRepository.Create(comment);
            return _mapper.Map<CommentDto>(result);
        }
    }
}
