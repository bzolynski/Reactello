using Microsoft.EntityFrameworkCore;
using Reactello.Data.EntityFramework.Interfaces;
using Reactello.Data.Interfaces;
using Reactello.Data.Interfaces.Repositories;
using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Data.EntityFramework.Repositories
{
    public class BoardRepository : RepositoryBase<Board>, IBoardRepository
    {
        public BoardRepository(IApplicationDbContext dbContext) : base(dbContext)
        {

        }
    }
}
