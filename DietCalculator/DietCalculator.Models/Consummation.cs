using DietCalculator.Models.Contracts;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DietCalculator.Models
{
    public class Consummation : IDeletableEntity
    {
        private int fats;

        public int Id { get; set; }

        [Required]
        public int Quantity { get; set; }   
    
        public DateTime DateCreated { get; set; }

        public virtual User User { get; set; }

        public int FoodId { get; set; }

        [Required]
        public virtual Food Food { get; set; }

        public DateTime? DeletedOn { get; set; }

        public bool IsDeleted { get; set; }

        public int Fats
        {
            get
            {
                if (this.Food.CaloriesCountType == CaloriesCountType.PerHunderGRams)
                {
                    return this.Food.Fats * Quantity / 100;
                }
                else if (this.Food.CaloriesCountType == CaloriesCountType.PerItem)
                {
                    return this.Food.Fats * Quantity;
                }

                throw new ArgumentException($"Missing implementation for this type of enum {nameof(CaloriesCountType)}");
            }
        }

        public int Proteins
        {
            get
            {
                if (this.Food.CaloriesCountType == CaloriesCountType.PerHunderGRams)
                {
                    return this.Food.Proteins * Quantity / 100;
                }
                else if (this.Food.CaloriesCountType == CaloriesCountType.PerItem)
                {
                    return this.Food.Proteins * Quantity;
                }

                throw new ArgumentException($"Missing implementation for this type of enum {nameof(CaloriesCountType)}");
            }
        }

        public int Carbs
        {
            get
            {
                if (this.Food.CaloriesCountType == CaloriesCountType.PerHunderGRams)
                {
                    return this.Food.Carbs * Quantity / 100;
                }
                else if (this.Food.CaloriesCountType == CaloriesCountType.PerItem)
                {
                    return this.Food.Carbs * Quantity;
                }

                throw new ArgumentException($"Missing implementation for this type of enum {nameof(CaloriesCountType)}");
            }
        }

        public int Calories
        {
            get
            {
                if (this.Food.CaloriesCountType == CaloriesCountType.PerHunderGRams)
                {
                    return this.Food.Calories * Quantity / 100;
                }
                else if (this.Food.CaloriesCountType == CaloriesCountType.PerItem)
                {
                    return this.Food.Calories * Quantity;
                }

                throw new ArgumentException($"Missing implementation for this type of enum {nameof(CaloriesCountType)}");
            }
        }
    }
}
