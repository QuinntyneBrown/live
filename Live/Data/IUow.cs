namespace Live.Data
{
    public interface IUow
    {
        IRepository<Models.Book> Books { get; }
        void SaveChanges();
    }
}
