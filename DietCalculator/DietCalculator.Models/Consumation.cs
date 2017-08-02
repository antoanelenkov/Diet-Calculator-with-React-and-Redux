using DietCalculator.Models.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DietCalculator.Models
{
    public class Consumation : IDeletableEntity
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        public DateTime DateTime { get; set; }

        public virtual User User { get; set; }

        public virtual Food Food { get; set; }

        public DateTime? DeletedOn { get; set; }

        public bool IsDeleted { get; set; }
    }
}
