namespace Live.Dtos
{
    public class AuthorAddOrUpdateResponseDto: AuthorDto
    {
        public AuthorAddOrUpdateResponseDto(Live.Models.Author entity)
            :base(entity)
        {

        }
    }
}
