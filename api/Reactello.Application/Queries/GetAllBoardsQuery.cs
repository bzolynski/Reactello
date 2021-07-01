﻿using MediatR;
using Reactello.Application.Dtos.Boards;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Queries
{
    public class GetAllBoardsQuery : IRequest<List<BoardListingDto>>
    {
    }
}
