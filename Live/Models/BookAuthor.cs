using System.ComponentModel.DataAnnotations.Schema;

namespace Live.Models
{
    public class BookAuthor
    {
        public int Id { get; set; }
        [ForeignKey("Book")]
        public int? BookId { get; set; }
        [ForeignKey("Author")]
        public int? AuthorId { get; set; }
        public Book Book { get; set; }
        public Author Author { get; set; }
    }
}
