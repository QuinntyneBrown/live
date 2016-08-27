using Live.Dtos;
using System.Collections.Generic;

namespace Live.Services
{
    public interface IBookService
    {
        BookAddOrUpdateResponseDto AddOrUpdate(BookAddOrUpdateRequestDto request);
        ICollection<BookDto> Get();
        BookDto GetById(int id);
        dynamic Remove(int id);
    }
}
