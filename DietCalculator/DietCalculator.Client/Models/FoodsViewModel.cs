using DietCalculator.Client.Infrastructure.Mapping;
using DietCalculator.Models;
using System.ComponentModel.DataAnnotations;

namespace DietCalculator.Client.Models
{
    public class FoodsViewModel : IMapFrom<Food> , IMapTo<Food>
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Calories { get; set; }

        public int Proteins { get; set; }

        public int Fats { get; set; }

        public int Carbs { get; set; }

        public CaloriesCountType CaloriesCountType { get; set; }
    }
}