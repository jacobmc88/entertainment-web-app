using entertainment_app.Models;

namespace entertainment_app.Helpers;

using Microsoft.EntityFrameworkCore;
using entertainment_app.Entities;

public class DataContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public DataContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // connect to sql server database
        options.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"));
    }

    public DbSet<User> Users { get; set; }

    public DbSet<Show> Shows { get; set; }
}