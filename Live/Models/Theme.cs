using System.Collections.Generic;

namespace Live.Models
{
    public class Theme
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<BookTheme> Books { get; set; } = new HashSet<BookTheme>();
        public bool IsDeleted { get; set; }
    }
}
