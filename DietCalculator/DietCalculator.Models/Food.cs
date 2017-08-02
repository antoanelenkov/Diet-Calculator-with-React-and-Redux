using DietCalculator.Models.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DietCalculator.Models
{
    public class Food : IDeletableEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Calories { get; set; }

        public int Proteins { get; set; }

        public int Fats { get; set; }

        public int Carbs { get; set; }

        public CaloriesCountType CaloriesCountType { get; set; }

        public virtual IEnumerable<Consumation>  Consumations { get; set; }

        public DateTime? DeletedOn { get; set; }

        public bool IsDeleted { get; set; }
    }
}
