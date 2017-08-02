using DietCalculator.Data;
using DietCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DietCalculator.Services
{
    public class UserService : BaseService<User>
    {
        public UserService(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public User GetUserById(string id)
        {
            return this.DbContext.Users.FirstOrDefault(x => x.Id == id);
        }
    }
}
