using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Data.Interfaces.Repositories
{
    public interface IBoardRepository : IRepository<Board>
    {
        Task<Board> GetWithSectionsAndNotes(int id);
    }
}
