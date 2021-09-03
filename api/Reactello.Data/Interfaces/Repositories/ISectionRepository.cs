using Reactello.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reactello.Data.Interfaces.Repositories
{
    public interface ISectionRepository : IRepository<Section>
    {
        Task<IEnumerable<Section>> GetSectionsByBoard(int boardId);
        Task<Section> UpdateName(int sectionId, string name);
    }
}
