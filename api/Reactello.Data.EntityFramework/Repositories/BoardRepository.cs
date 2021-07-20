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
        private readonly IApplicationDbContext _dbContext;

        public BoardRepository(IApplicationDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Board> GetWithSectionsAndNotes(int id)
        {
            return await _dbContext.Set<Board>()
                .Include(b => b.Sections)   
                .ThenInclude(s => s.Notes)
                .FirstOrDefaultAsync(b => b.Id == id);
        }
    }
}
