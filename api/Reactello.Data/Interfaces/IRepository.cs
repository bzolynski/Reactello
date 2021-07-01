using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Data.Interfaces
{
    public interface IRepository<T> where T : EntityBase
    {        
        public IUnitOfWork UnitOfWork { get; }

        Task<T> Create(T entity);
        Task<T> Get(int id);
        Task<IEnumerable<T>> GetAll();
        Task<T> Update(int id, T entity);
        Task<bool> Delete(int id);
    }
}
