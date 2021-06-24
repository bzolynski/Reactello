using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Data.Interfaces
{
    public interface IRepository
    {
        public IUnitOfWork UnitOfWork { get; }
    }
}
