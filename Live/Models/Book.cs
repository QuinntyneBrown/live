using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Live.Models
{
    public class Book
    {
        public int Id { get; set; }
        [ForeignKey("Part")]
        public int? PartId { get; set; }
        public ICollection<BookAuthor> Authors { get; set; } = new HashSet<BookAuthor>();
        public string Name { get; set; }
        public string WrittenFromDate { get; set; }
        public string WrittenEndDate { get; set; }
        public string Purpose { get; set; }
        public ICollection<BookTheme> Themes { get; set; } = new HashSet<BookTheme>();
        public Part Part { get; set; }
        public bool IsDeleted { get; set; }
    }
}
