using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Data;
using System.Configuration;
using backendapp.Models;
using System.Diagnostics;
using System.Web.Caching;

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
        public User Login(User user)
        {
            try
            {
                adapter = new SqlDataAdapter("LOGIN", conn);
                adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
                adapter.SelectCommand.Parameters.AddWithValue("@USERNAME", user.username);
                adapter.SelectCommand.Parameters.AddWithValue("@PASSWORD", user.password);
                DataTable dt = new DataTable();
                adapter.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    User currentUser = new User();
                    currentUser.id = (int)dt.Rows[0][0];
                    currentUser.username = dt.Rows[0][1].ToString();
                    currentUser.name = dt.Rows[0][2].ToString();
                    currentUser.surname = dt.Rows[0][3].ToString();
                    currentUser.email = dt.Rows[0][4].ToString(); ;
                    currentUser.password = dt.Rows[0][5].ToString();
                    return currentUser;
                }
                else
                {
                    return null;
                }
            }
            catch
            {
                return null;
            }
        }
    }
}