using Microsoft.AspNetCore.Mvc;

namespace entertainment_app.Controllers;

[ApiController]
[Route("/server/[controller]")]
public class ShowsController : ControllerBase
{    
    private string DataPath = "data.json";

    private readonly ILogger<ShowsController> _logger;

    public ShowsController(ILogger<ShowsController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public string GetShows(){
        string json = "";
        using (StreamReader r = new StreamReader(this.DataPath))
        {
            json = r.ReadToEnd();            
        }

        return json;
    }

    [HttpPost("update-bookmarks")]
    public IActionResult UpdateBookmarks(object data){
        
        return Ok();
    }
    
}
