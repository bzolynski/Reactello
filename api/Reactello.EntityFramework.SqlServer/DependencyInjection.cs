using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.EntityFramework.SqlServer
{
    public static class DependencyInjection
    {
        public static void AddEntityFrameworkSqlServer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<SqlServerDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("SqlServer")));
        }
    }
}
