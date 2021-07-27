using AutoMapper;
using MediatR;
using Reactello.Application.Dtos.Boards;
using Reactello.Application.Queries.Boards;
using Reactello.Data.Interfaces.Repositories;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Boards
{
    public class GetBoardHandler : IRequestHandler<GetBoardQuery, BoardDto>
    {
        private readonly IBoardRepository _boardRepository;
        private readonly IMapper _mapper;

        public GetBoardHandler(IBoardRepository boardRepository, IMapper mapper)
        {
            _boardRepository = boardRepository;
            _mapper = mapper;
        }
        public async Task<BoardDto> Handle(GetBoardQuery request, CancellationToken cancellationToken)
        {
            //var board = await _boardRepository.GetWithSectionsAndNotes(request.Id);
            var board = await _boardRepository.Get(request.Id);
            return _mapper.Map<BoardDto>(board);
        }
    }
}
