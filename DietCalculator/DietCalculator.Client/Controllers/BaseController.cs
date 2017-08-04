using AutoMapper;
using DietCalculator.Client.Common;
using DietCalculator.Client.Infrastructure.Mapping;
using DietCalculator.Client.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DietCalculator.Client.Controllers
{
    public class BaseController : Controller
    {
        public BaseController()
        {
        }

        protected JsonResult ConvertToJSON(Object obj)
        {
               return Json(JsonConvert.SerializeObject(
                    obj,
                    Formatting.Indented,
                    JsonSerializerSettingsHelper.GetSettings()),
                JsonRequestBehavior.AllowGet);
        }

        protected void HandleModelState()
        {
            if (!ModelState.IsValid) throw new HttpException("Invalid parameters passed");
        }

        protected void HandleInvalidOperation()
        {
            throw new HttpException("Server error.");
        }

        protected IMapper Mapper
        {
            get
            {
                return AutoMapperConfig.Configuration.CreateMapper();
            }
        }
    }
}