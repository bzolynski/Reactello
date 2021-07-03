using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Reactello.Application
{
    public static class DependencyInjection
    {
        public static void AddApplication(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());

        }
    }
}
