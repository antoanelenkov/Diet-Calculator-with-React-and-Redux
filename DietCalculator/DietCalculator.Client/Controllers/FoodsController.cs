using DietCalculator.Client.Models;
using DietCalculator.Data;
using DietCalculator.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace DietCalculator.Client.Controllers
{
    public class FoodsController  : Controller
    {
        private readonly FoodsService foodsService;

        public FoodsController(FoodsService foodsService)
        {
            this.foodsService = foodsService;
        }

        // TODO: Dependency injection does not work
        public FoodsController()
        {
            this.foodsService = new FoodsService(new ApplicationDbContext());
        }

        public JsonResult GetAll()
        {
            return Json(this.foodsService.GetAll().ToList(), JsonRequestBehavior.AllowGet);
        }
    }
}