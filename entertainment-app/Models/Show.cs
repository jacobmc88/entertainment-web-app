namespace entertainment_app.Models
{
    public class Show
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Category { get; set; }
        public string? Rating { get; set; }
        public int Year { get; set; }
        public bool IsBookmarked { get; set; }
        public bool IsTrending { get; set; }
        public Thumbnail? Thumbnail { get; set; }
    }

    public class Thumbnail
    {
        public int Id { get; set; }
        public ThumbnailSizingData? Regular { get; set; }
    }

    public class ThumbnailSizingData
    {
        public int Id { get; set; }
        public string? Small { get; set; }
        public string? Medium { get; set; }
        public string? Large { get; set; }
    }
}
