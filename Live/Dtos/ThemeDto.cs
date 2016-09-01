namespace Live.Dtos
{
    public class ThemeDto
    {
        public ThemeDto(Live.Models.Theme entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public ThemeDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
