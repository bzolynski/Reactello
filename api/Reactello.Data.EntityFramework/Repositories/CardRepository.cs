﻿using Reactello.Data.EntityFramework.Interfaces;
using Reactello.Data.Interfaces.Repositories;
using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Data.EntityFramework.Repositories
{
    public class CardRepository : RepositoryBase<Card>, ICardRepository
    {
        public CardRepository(IApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}