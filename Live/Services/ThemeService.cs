using System;
using System.Collections.Generic;
using Live.Data;
using Live.Dtos;
using System.Data.Entity;
using System.Linq;
using Live.Models;

namespace Live.Services
{
    public class ThemeService : IThemeService
    {
        public ThemeService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.Themes;
            _cache = cacheProvider.GetCache();
        }

        public ThemeAddOrUpdateResponseDto AddOrUpdate(ThemeAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Theme());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new ThemeAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        public ICollection<ThemeDto> Get()
        {
            ICollection<ThemeDto> response = new HashSet<ThemeDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new ThemeDto(entity)); }    
            return response;
        }


        public ThemeDto GetById(int id)
        {
            return new ThemeDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Theme> _repository;
        protected readonly ICache _cache;
    }
}
