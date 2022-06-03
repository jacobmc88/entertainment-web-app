using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.IO;

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
        // StreamWriter writer = new StreamWriter(this.DataPath);
        string json = JsonSerializer.Serialize(data);
        // writer.Write(json);
        System.IO.File.WriteAllText(this.DataPath, json);

        return Ok();
    }
    
}
