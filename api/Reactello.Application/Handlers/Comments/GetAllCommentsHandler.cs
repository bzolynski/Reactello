using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Reactello.Application.Dtos.Comments;
using Reactello.Application.Queries;
using Reactello.Data.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Comments
{
    public class GetAllCommentsHandler : IRequestHandler<GetAllCommentsQuery, List<CommentDto>>
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IMapper _mapper;

        public GetAllCommentsHandler(ICommentRepository commentRepository, IMapper mapper)
        {
            _commentRepository = commentRepository;
            _mapper = mapper;
        }
        public Task<List<CommentDto>> Handle(GetAllCommentsQuery request, CancellationToken cancellationToken)
        {
            var comments = _commentRepository.GetAll().ProjectTo<CommentDto>(_mapper.ConfigurationProvider);
            return Task.FromResult(comments.ToList());
        }
    }
}
