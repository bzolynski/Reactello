using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Reactello.Application.Dtos.Boards;
using Reactello.Application.Queries.Boards;
using Reactello.Data.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Boards
{
    public class GetAllBoardsHandler : IRequestHandler<GetAllBoardsQuery, List<BoardDto>>
    {
        private readonly IBoardRepository _boardRepository;
        private readonly IMapper _mapper;

        public GetAllBoardsHandler(IBoardRepository boardRepository, IMapper mapper)
        {
            _boardRepository = boardRepository;
            _mapper = mapper;
        }
        public Task<List<BoardDto>> Handle(GetAllBoardsQuery request, CancellationToken cancellationToken)
        {
            var boards = _boardRepository.GetAll().ProjectTo<BoardDto>(_mapper.ConfigurationProvider);
            return Task.FromResult(boards.ToList());
        }
    }
}
