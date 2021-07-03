﻿using MediatR;
using Reactello.Application.Dtos.Boards;

namespace Reactello.Application.Queries
{
    public class GetBoardQuery : IRequest<BoardDto>
    {
        public GetBoardQuery(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
