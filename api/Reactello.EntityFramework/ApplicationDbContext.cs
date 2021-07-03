using Microsoft.EntityFrameworkCore;
using Reactello.Data.EntityFramework.Interfaces;
using Reactello.Data.Interfaces;
using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.EntityFramework
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base (options) { }

        public DbSet<Board> Boards { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Comment> Comments { get; set; }

        async public Task<bool> Commit()
        {
            var result = await SaveChangesAsync();
            return result > 0;
        }
    }
}
