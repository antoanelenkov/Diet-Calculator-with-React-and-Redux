﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DietCalculator.Client.Controllers
{
    public class ApiController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}