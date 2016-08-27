using System;
using System.Collections.Generic;

namespace Live.Models
{
    public class Author
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<BookAuthor> Books { get; set; } = new HashSet<BookAuthor>();
        public Boolean IsDeleted { get; set; }
    }
}
