using System.ComponentModel.DataAnnotations.Schema;

namespace Live.Models
{
    public class BookTheme
    {
        public int Id { get; set; }
        [ForeignKey("Book")]
        public int? BookId { get; set; }
        [ForeignKey("Theme")]
        public int? ThemeId { get; set; }
        public Book Book { get; set; }
        public Theme Theme { get; set; }
    }
}
