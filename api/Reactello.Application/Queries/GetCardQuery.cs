using MediatR;
using Reactello.Application.Dtos.Cards;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Application.Queries
{
    public class GetCardQuery : IRequest<CardDto>
    {
        public GetCardQuery(int id)
        {
            Id = id;
        }

        public int Id { get; }
    }
}
