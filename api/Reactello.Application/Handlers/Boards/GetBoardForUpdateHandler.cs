using AutoMapper;
using MediatR;
using Reactello.Application.Dtos.Boards;
using Reactello.Application.Queries.Boards;
using Reactello.Data.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Boards
{
    public class GetBoardForUpdateHandler : IRequestHandler<GetBoardForUpdateQuery, UpdateBoardDto>
    {
        private readonly IBoardRepository _boardRepository;
        private readonly IMapper _maper;

        public GetBoardForUpdateHandler(IBoardRepository boardRepository, IMapper maper)
        {
            _boardRepository = boardRepository;
            _maper = maper;
        }
        public async Task<UpdateBoardDto> Handle(GetBoardForUpdateQuery request, CancellationToken cancellationToken)
        {
            var board = await _boardRepository.Get(request.Id);
            return _maper.Map<UpdateBoardDto>(board);
        }
    }
}
