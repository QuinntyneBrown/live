using System.Collections.Generic;

namespace Live.Models
{
    public class Part
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Book> Books { get; set; } = new HashSet<Book>();
        public bool IsDeleted { get; set; }
    }
}
