using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Data;
using System.Configuration;
using backendapp.Models;

namespace backendapp.Controllers
{
    [RoutePrefix("api/Test")]
    public class TestController : ApiController
    {
        SqlConnection conn =
            new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter adapter = null;

        [HttpPost]
        [Route("Login")]
        public string Login(User user)
        {
            string msg = string.Empty;
            try
            {
                adapter = new SqlDataAdapter("LOGIN", conn);
                adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
                adapter.SelectCommand.Parameters.AddWithValue("@NAME", user.name);
                adapter.SelectCommand.Parameters.AddWithValue("@PASSWORD", user.password);
                DataTable dt = new DataTable();
                adapter.Fill(dt);
                if(dt.Rows.Count > 0)
                {
                    msg = "user is valid";
                }
                else
                {
                    msg = "user in invalid";
                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            return msg;
        }
    }
}