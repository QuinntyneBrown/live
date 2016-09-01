using Live.Models;

namespace Live.Data
{
    public interface IUow
    {
        IRepository<Book> Books { get; }
        IRepository<Theme> Themes { get; }
        IRepository<Author> Authors { get; }
        void SaveChanges();
    }
}
