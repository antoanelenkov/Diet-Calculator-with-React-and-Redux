using DietCalculator.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DietCalculator.Services
{
    public abstract class BaseService<T> where T : class
    {
        public BaseService(ApplicationDbContext dbContext)
        {
            this.DbContext = new ApplicationDbContext();
        }
        public IQueryable<T> GetAll()
        {
            return this.DbContext.Set<T>().AsQueryable();
        }

        protected ApplicationDbContext DbContext { get; set; }
    }
}
