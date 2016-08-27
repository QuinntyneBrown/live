namespace Live.Dtos
{
    public class BookAddOrUpdateResponseDto: BookDto
    {
        public BookAddOrUpdateResponseDto(Models.Book entity)
        :base(entity)
        {

        }
    }
}
