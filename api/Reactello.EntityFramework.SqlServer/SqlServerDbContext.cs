using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.EntityFramework.SqlServer
{
    public class SqlServerDbContext : ApplicationDbContext
    {
        public SqlServerDbContext(DbContextOptions options) : base(options) { }

    }
}
