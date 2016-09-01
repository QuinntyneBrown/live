using Live.Dtos;
using Live.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace Live.Controllers
{
    [Authorize]
    [RoutePrefix("api/theme")]
    public class ThemeController : ApiController
    {
        public ThemeController(IThemeService themeService)
        {
            _themeService = themeService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(ThemeAddOrUpdateResponseDto))]
        public IHttpActionResult Add(ThemeAddOrUpdateRequestDto dto) { return Ok(_themeService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(ThemeAddOrUpdateResponseDto))]
        public IHttpActionResult Update(ThemeAddOrUpdateRequestDto dto) { return Ok(_themeService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<ThemeDto>))]
        public IHttpActionResult Get() { return Ok(_themeService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(ThemeDto))]
        public IHttpActionResult GetById(int id) { return Ok(_themeService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_themeService.Remove(id)); }

        protected readonly IThemeService _themeService;


    }
}
