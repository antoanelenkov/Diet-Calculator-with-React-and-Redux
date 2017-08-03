using DietCalculator.Client.Controllers;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Web.Mvc;

namespace DietCalculator.Client.Common
{
    public class JsonSerializerSettingsHelper : BaseController
    {
        public static JsonSerializerSettings GetSettings()
        {
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            return serializerSettings;
        }
    }
}