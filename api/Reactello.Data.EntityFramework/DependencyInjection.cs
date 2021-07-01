using Microsoft.Extensions.DependencyInjection;
using Reactello.Data.EntityFramework.Repositories;
using Reactello.Data.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Data.EntityFramework
{
    public static class DependencyInjection
    {
        public static void AddDataEntityFramework(this IServiceCollection services)
        {
            services.AddScoped<IBoardRepository, BoardRepository>();
            services.AddScoped<ICardRepository, CardRepository>();
            services.AddScoped<ICommentRepository, CommentRepository>();
            services.AddScoped<ISectionRepository, SectionRepository>();
        }
    }
}
