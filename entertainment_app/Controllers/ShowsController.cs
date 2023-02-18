using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.IO;
using entertainment_app.Helpers;
using entertainment_app.Models;
using Microsoft.EntityFrameworkCore;

namespace entertainment_app.Controllers;

[ApiController]
[Route("/server/[controller]")]
public class ShowsController : ControllerBase
{    
    private string DataPath = "data.json";

    private readonly ILogger<ShowsController> _logger;
    private readonly DataContext _context;

    public ShowsController(
        ILogger<ShowsController> logger,
        DataContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetShows()
    {
        // var shows = await _context.Shows
        //     .Include(s => s.Thumbnail)
        //     .ThenInclude(t => t.Regular)
        //     .ToListAsync();

        var shows = await _context.Shows.ToListAsync();
        return Ok(shows);
    }

    [HttpPost("update-bookmarks")]
    public async Task<IActionResult> UpdateBookmarks(Show updatedShow) {
        Console.WriteLine("update-bookmarks");
        var existingShow = await _context.Shows.FirstOrDefaultAsync(s => s.Id == updatedShow.Id);
        Console.WriteLine(JsonSerializer.Serialize(existingShow));

        if (existingShow == null){
            return NotFound();
        }

        existingShow.IsBookmarked = !existingShow.IsBookmarked;
        await _context.SaveChangesAsync();

        return Ok(existingShow);
    }
    
}
