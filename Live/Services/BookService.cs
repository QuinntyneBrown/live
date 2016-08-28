using System;
using System.Collections.Generic;
using Live.Dtos;
using Live.Data;
using System.Linq;

namespace Live.Services
{
    public class BookService : IBookService
    {
        public BookService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.Books;
            _cache = cacheProvider.GetCache();
        }

        public BookAddOrUpdateResponseDto AddOrUpdate(BookAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.Book());
            entity.Name = request.Name;
            entity.Purpose = request.Purpose;
            entity.Index = request.Index.Value;
            _uow.SaveChanges();
            return new BookAddOrUpdateResponseDto(entity);
        }

        public ICollection<BookDto> Get()
        {
            ICollection<BookDto> response = new HashSet<BookDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new BookDto(entity)); }
            return response;
        }

        public BookDto GetById(int id)
        {
            return new BookDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.Book> _repository;
        protected readonly ICache _cache;
    }
}
