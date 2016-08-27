using System;
using System.Collections.Generic;

namespace Live.Models
{
    public class Book
    {
        public int Id { get; set; }
        public ICollection<BookAuthor> Authors { get; set; } = new HashSet<BookAuthor>();
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Purpose { get; set; }
        public ICollection<BookTheme> Themes { get; set; } = new HashSet<BookTheme>();
        public bool IsDeleted { get; set; }
    }
}
