using DietCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DietCalculator.Services
{
    public class ConsumationsService : BaseService<Consumation>
    {
        private readonly FoodsService foodsService;

        public ConsumationsService(FoodsService foodsService)
        {
            this.foodsService = foodsService;
        }

        public async Task<Consumation> Add(Consumation entity)
        {
            var consumationWithThisFood = this.foodsService
                .GetById(entity.Food.Id).Consumations
                .FirstOrDefault(x => x.Food.Id == entity.Food.Id && x.DateCreated.Date == entity.DateCreated.Date);

            // If there is already a consumation with this food for this day, there is no need for new record - increase 
            // the amount of the existing record
            if (consumationWithThisFood != null)
            {
                consumationWithThisFood.Quantity += entity.Quantity;
            }
            else
            {
                this.DbContext.Consumations.Add(entity);
            }

            return await this.DbContext.SaveChangesAsync() > 0 ? entity : null;
        }

        public async Task<Consumation> DeleteById(int id, bool withSave = true)
        {
            var entity = this.GetById(id);

            if (entity != null)
            {
                this.DbContext.Consumations.Remove(entity);
                if (withSave)
                {
                    return await this.DbContext.SaveChangesAsync() > 0 ? entity : null;
                }
            }

            return null;
        }

        public IEnumerable<Consumation> GetAllConsumationsForDate(DateTime date)
        {
            return this.DbContext.Consumations.Where(x => x.DateCreated.Date == date.Date);
        }

        public Consumation GetById(int id)
        {
            return this.DbContext.Consumations.FirstOrDefault(x => x.Id == id);
        }
    }
}
