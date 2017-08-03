using DietCalculator.Models.Contracts;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DietCalculator.Models
{
    public class Food : IDeletableEntity
    {
        private ICollection<Consummation> consummations;

        public Food()
        {
            this.consummations = new HashSet<Consummation>();
        }

        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Calories { get; set; }

        public int Proteins { get; set; }

        public int Fats { get; set; }

        public int Carbs { get; set; }

        public CaloriesCountType CaloriesCountType { get; set; }

        [JsonIgnore] //solves circular dependencies problem when serializing to json
        public virtual ICollection<Consummation> Consummations
        {
            get { return this.consummations; }
            set { this.consummations = value; }
        }

        public DateTime? DeletedOn { get; set; }

        public bool IsDeleted { get; set; }
    }
}
