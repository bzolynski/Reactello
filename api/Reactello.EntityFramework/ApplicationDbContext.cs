using Microsoft.EntityFrameworkCore;
using Reactello.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.EntityFramework
{
    public class ApplicationDbContext : DbContext, IUnitOfWork
    {
        public ApplicationDbContext(DbContextOptions options) : base (options) { }

        async public Task<bool> Commit()
        {
            var result = await SaveChangesAsync();
            return result > 0;
        }
    }
}
