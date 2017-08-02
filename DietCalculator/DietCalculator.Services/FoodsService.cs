using DietCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DietCalculator.Services
{
    public class FoodsService : BaseService<Food>
    {
        private readonly ConsumationsService consumationsService;

        public FoodsService(ConsumationsService consumationService)
        {
            this.consumationsService = consumationService;
        }

        public Food GetById(int id)
        {
            return this.DbContext.Foods.FirstOrDefault(x => x.Id == id);
        }

        public async Task<Food> Add(Food food)
        {
            this.DbContext.Foods.Add(food);
            return await this.DbContext.SaveChangesAsync() > 0 ? food : null;
        }

        public async Task<Food> Update(Food food)
        {
            var entity = this.GetById(food.Id);

            if (entity != null)
            {
                entity.Name = food.Name;
                entity.Calories = food.Calories;
                entity.Proteins = food.Proteins;
                entity.Carbs = food.Carbs;
                entity.Fats = food.Fats;

                return await this.DbContext.SaveChangesAsync() > 0 ? entity : null;
            }

            return null;
        }

        public async Task<Food> Delete(int id)
        {
            var entity = this.GetById(id);

            if (entity != null)
            {
                var consumationsToDelete = this.DbContext.Consumations.Where(x => x.Food.Id == id);
                foreach (var consum in entity.Consumations)
                {
                    await this.consumationsService.DeleteById(consum.Id, false);
                }

                this.DbContext.Foods.Remove(entity);

                return await this.DbContext.SaveChangesAsync() > 0 ? entity : null;
            }

            return null;
        }
    }
}
