﻿using MediatR;
using Reactello.Application.Dtos.Sections;
using System.Collections.Generic;

namespace Reactello.Application.Queries
{
    public class GetAllSectionsQuery : IRequest<List<SectionDto>>
    {
    }
}
