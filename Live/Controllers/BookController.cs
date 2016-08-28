using Live.Dtos;
using Live.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace Live.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/book")]
    public class BookController : ApiController
    {
        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [Route("add")]
        [HttpPost]
        [AllowAnonymous]
        [ResponseType(typeof(BookAddOrUpdateResponseDto))]
        public IHttpActionResult Add() {
            BookAddOrUpdateRequestDto dto = new BookAddOrUpdateRequestDto();
            return Ok(_bookService.AddOrUpdate(dto));
        }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(BookAddOrUpdateResponseDto))]
        public IHttpActionResult Update(BookAddOrUpdateRequestDto dto) { return Ok(_bookService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<BookDto>))]
        public IHttpActionResult Get() { return Ok(_bookService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(BookDto))]
        public IHttpActionResult GetById(int id) { return Ok(_bookService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_bookService.Remove(id)); }

        protected readonly IBookService _bookService;


    }
}
