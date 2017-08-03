using DietCalculator.Client.Common;
using DietCalculator.Client.Models;
using DietCalculator.Data;
using DietCalculator.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

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
            return Json(JsonConvert.SerializeObject(
                    this.foodsService.GetAll().ToList(),
                    Formatting.Indented, 
                    JsonSerializerSettingsHelper.GetSettings()), 
                JsonRequestBehavior.AllowGet);
        }
    }
}