using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DietCalculator.Client.Startup))]
namespace DietCalculator.Client
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
