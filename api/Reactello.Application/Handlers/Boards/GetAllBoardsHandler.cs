using AutoMapper;
using MediatR;
using Reactello.Application.Dtos.Boards;
using Reactello.Application.Queries;
using Reactello.Data.Interfaces.Repositories;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Boards
{
    public class GetAllBoardsHandler : IRequestHandler<GetAllBoardsQuery, List<BoardListingDto>>
    {
        private readonly IBoardRepository _boardRepository;
        private readonly IMapper _mapper;

        public GetAllBoardsHandler(IBoardRepository boardRepository, IMapper mapper)
        {
            _boardRepository = boardRepository;
            _mapper = mapper;
        }
        public async Task<List<BoardListingDto>> Handle(GetAllBoardsQuery request, CancellationToken cancellationToken)
        {
            var boards = await _boardRepository.GetAll();
            return _mapper.Map<List<BoardListingDto>>(boards);
        }
    }
}
