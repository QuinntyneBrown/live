namespace Live.Dtos
{
    public class BookDto
    {
        public BookDto()
        {

        }

        public BookDto(Models.Book entity)
        {
            Id = entity.Id;
            Index = entity.Index;
            Name = entity.Name;
            Purpose = entity.Purpose;
        }

        public int? Id { get; set; }
        public int? Index { get; set; }
        public string Name { get; set; }
        public string Purpose { get; set; }
    }
}
