using System;
using System.Collections.Generic;
using Live.Data;
using Live.Dtos;
using System.Data.Entity;
using System.Linq;
using Live.Models;

namespace Live.Services
{
    public class AuthorService : IAuthorService
    {
        public AuthorService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.Authors;
            _cache = cacheProvider.GetCache();
        }

        public AuthorAddOrUpdateResponseDto AddOrUpdate(AuthorAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Author());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new AuthorAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        public ICollection<AuthorDto> Get()
        {
            ICollection<AuthorDto> response = new HashSet<AuthorDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new AuthorDto(entity)); }    
            return response;
        }


        public AuthorDto GetById(int id)
        {
            return new AuthorDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Author> _repository;
        protected readonly ICache _cache;
    }
}
