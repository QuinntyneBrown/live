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
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
