﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backendapp.Models
{
    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }         
        public string email { get; set; }         
        public string password { get; set; }         
    }
}