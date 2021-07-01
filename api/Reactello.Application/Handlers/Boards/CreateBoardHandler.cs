using AutoMapper;
using MediatR;
using Reactello.Application.Commands.Boards;
using Reactello.Application.Dtos.Boards;
using Reactello.Data.Interfaces.Repositories;
using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Reactello.Application.Handlers.Boards
{
    public class CreateBoardHandler : IRequestHandler<CreateBoardCommand, BoardListingDto>
    {
        private readonly IBoardRepository _boardRepository;
        private readonly IMapper _mapper;

        public CreateBoardHandler(IBoardRepository boardRepository, IMapper mapper)
        {
            _boardRepository = boardRepository;
            _mapper = mapper;
        }
        public async Task<BoardListingDto> Handle(CreateBoardCommand request, CancellationToken cancellationToken)
        {
            var board = _mapper.Map<Board>(request.Board);
            var result = await _boardRepository.Create(board);
            return _mapper.Map<BoardListingDto>(result);
        }
    }
}
