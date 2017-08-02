using DietCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DietCalculator.Services
{
    public class ConsummationsService : BaseService<Consummation>
    {
        private readonly FoodsService foodsService;

        public ConsummationsService(FoodsService foodsService)
        {
            this.foodsService = foodsService;
        }

        public async Task<Consummation> Add(Consummation entity)
        {
            var consummationWithThisFood = this.foodsService
                .GetById(entity.Food.Id).Consummations
                .FirstOrDefault(x => x.Food.Id == entity.Food.Id && x.DateCreated.Date == entity.DateCreated.Date);

            // If there is already a consumation with this food for this day, there is no need for new record - increase 
            // the amount of the existing record
            if (consummationWithThisFood != null)
            {
                consummationWithThisFood.Quantity += entity.Quantity;
            }
            else
            {
                this.DbContext.Consummations.Add(entity);
            }

            return await this.DbContext.SaveChangesAsync() > 0 ? entity : null;
        }

        public async Task<Consummation> DeleteById(int id, bool withSave = true)
        {
            var entity = this.GetById(id);

            if (entity != null)
            {
                this.DbContext.Consummations.Remove(entity);
                if (withSave)
                {
                    return await this.DbContext.SaveChangesAsync() > 0 ? entity : null;
                }
            }

            return null;
        }

        public IEnumerable<Consummation> GetAllConsumationsForDate(DateTime date)
        {
            return this.DbContext.Consummations.Where(x => x.DateCreated.Date == date.Date);
        }

        public Consummation GetById(int id)
        {
            return this.DbContext.Consummations.FirstOrDefault(x => x.Id == id);
        }
    }
}
