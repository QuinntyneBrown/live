using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Live.Services
{
    public interface ICacheProvider
    {
        ICache GetCache();
    }
}
