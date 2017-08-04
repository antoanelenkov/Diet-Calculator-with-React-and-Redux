using DietCalculator.Client.Common;
using DietCalculator.Client.Models;
using DietCalculator.Data;
using DietCalculator.Services;
using Newtonsoft.Json;
using System.Linq;
using System.Web.Mvc;
using AutoMapper;
using DietCalculator.Models;
using System.Threading.Tasks;

namespace DietCalculator.Client.Controllers
{
    public class FoodsController  : BaseController
    {
        private readonly FoodsService foodsService;

        // TODO: Fix dependency injection to work
        //public FoodsController(FoodsService foodsService)
        //{
        //    this.foodsService = foodsService;
        //}


        public FoodsController()
        {
            this.foodsService = new FoodsService(new ApplicationDbContext());
        }

        public JsonResult GetAll()
        {
            return this.ConvertToJSON(this.foodsService.GetAll().ToList());
        }

        public async Task<JsonResult> Save(FoodsViewModel model)
        {
            this.HandleModelState();

            var entityToSave = Mapper.Map<Food>(model);
            var savedEntity = await this.foodsService.SaveAsync(entityToSave);
            return savedEntity != null ? this.ConvertToJSON(Mapper.Map<FoodsViewModel>(savedEntity)) : null;
        }
    }
}