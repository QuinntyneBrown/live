using Live.Dtos;
using System.Collections.Generic;

namespace Live.Services
{
    public interface IThemeService
    {
        ThemeAddOrUpdateResponseDto AddOrUpdate(ThemeAddOrUpdateRequestDto request);
        ICollection<ThemeDto> Get();
        ThemeDto GetById(int id);
        dynamic Remove(int id);
    }
}
