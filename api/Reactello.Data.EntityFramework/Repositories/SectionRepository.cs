using Microsoft.EntityFrameworkCore;
using Reactello.Data.EntityFramework.Interfaces;
using Reactello.Data.Interfaces.Repositories;
using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Data.EntityFramework.Repositories
{
    public class SectionRepository : RepositoryBase<Section>, ISectionRepository
    {
        private readonly DbSet<Section> _sections;

        public SectionRepository(IApplicationDbContext dbContext) : base(dbContext)
        {
            _sections = dbContext.Set<Section>();
        }

        public async Task<IEnumerable<Section>> GetSectionsForBoard(int boardId)
        {
            return await _sections.Where(x => x.BoardId == boardId).ToListAsync();
        }
    }
}
