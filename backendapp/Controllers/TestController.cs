using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Data;
using System.Configuration;
using backendapp.Models;

namespace backendapp.Controllers
{
    public class TestController : ApiController
    {
        SqlConnection conn =
            new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;

        [HttpPost]
        [Route("Registration")]
        public string Registration(User user)
        {
            cmd = new SqlCommand("usp_Registration", conn);
            cmd.Parameters.AddWithValue("@Name", user.name);
        }
    }
}