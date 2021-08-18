using Microsoft.EntityFrameworkCore;
using Reactello.Data.EntityFramework.Interfaces;
using Reactello.Data.Interfaces;
using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Data.EntityFramework.Repositories
{
    public class RepositoryBase<T> : IRepository<T> where T : EntityBase
    {
        private readonly IApplicationDbContext _dbContext;

        public RepositoryBase(IApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public IUnitOfWork UnitOfWork => _dbContext;

        public async Task<T> Create(T entity)
        {
            var result = await _dbContext.Set<T>().AddAsync(entity);
            await UnitOfWork.Commit();
            return result.Entity;
        }

        public async Task<bool> Delete(int id)
        {
            var entity = await _dbContext.Set<T>().FindAsync(id);
            _dbContext.Set<T>().Remove(entity);
            var result = await UnitOfWork.Commit();
            return result;
        }

        public async Task<T> Get(int id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }
        
        public IQueryable<T> GetAll()
        {
           return _dbContext.Set<T>();
        }

        public async Task<T> Update(int id, T entity)
        {
            entity.Id = id;
            var result = _dbContext.Set<T>().Update(entity);
            await UnitOfWork.Commit();
            return result.Entity;
        }
    }
}
