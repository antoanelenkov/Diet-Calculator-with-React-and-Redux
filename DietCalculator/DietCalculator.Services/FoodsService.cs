using DietCalculator.Data;
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
        public FoodsService(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public Food GetById(int id)
        {
            return this.DbContext.Foods.FirstOrDefault(x => x.Id == id);
        }

        public async Task<Food> SaveAsync(Food food)
        {
            return food.Id == 0 ? await this.AddAsync(food) : await this.UpdateAsync(food).ConfigureAwait(false);
        }

        public async Task<Food> DeleteAsync(int id)
        {
            var entity = this.GetById(id);

            if (entity != null)
            {
                foreach (var item in entity.Consummations.ToList())
                {
                    this.DbContext.Consummations.Remove(item);
                }

                this.DbContext.Foods.Remove(entity);

                return await this.DbContext.SaveChangesAsync().ConfigureAwait(false) > 0 ? entity : null;
            }

            return null;
        }

        private async Task<Food> AddAsync(Food food)
        {
            this.DbContext.Foods.Add(food);
            return await this.DbContext.SaveChangesAsync().ConfigureAwait(false) > 0 ? food : null;
        }

        private async Task<Food> UpdateAsync(Food food)
        {
            var entity = this.GetById(food.Id);

            if (entity != null)
            {
                entity.Name = food.Name;
                entity.Calories = food.Calories;
                entity.Proteins = food.Proteins;
                entity.Carbs = food.Carbs;
                entity.Fats = food.Fats;

                return await this.DbContext.SaveChangesAsync().ConfigureAwait(false) > 0 ? entity : null;
            }

            return null;
        }
    }
}
