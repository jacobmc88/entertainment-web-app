namespace entertainment_app.Controllers;

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using entertainment_app.Authorization;
using entertainment_app.Helpers;
using entertainment_app.Models.Users;
using entertainment_app.Services;

[Authorize]
[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private IUserService _userService;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;

    public UsersController(
        IUserService userService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _userService = userService;
        _mapper = mapper;
        _appSettings = appSettings.Value;
    }

    [AllowAnonymous]
    [HttpPost("login")]
    public IActionResult Authenticate(AuthenticateRequest model)
    {
        var response = _userService.Login(model);
        Console.WriteLine("TESTING");
        Console.WriteLine(response);

        var session = HttpContext.Session;
        string keyone = "thistest";
        session.SetString(keyone, "hellothere");
        string keytwo = "another";
        session.SetString(keytwo, "hello-somewhere");


        foreach (string key in session.Keys) {
            // Console.Write("key:" + key + " => :" + session[key].ToString());
            Console.WriteLine(key + " => " + session.GetString(key));
            
        }
        return Ok(response);
    }

    [AllowAnonymous]
    [HttpGet("sometestsession")]
    public IActionResult SomeTest(){
        var session = HttpContext.Session;

        if(string.IsNullOrEmpty(session.GetString("thistest")) || session.GetString("thistest") != "hellothere"){
            Console.WriteLine("WRONG");
        }else{
            Console.WriteLine("OK");
        }

        return Ok();
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public IActionResult Register(RegisterRequest model)
    {
        _userService.Register(model);
        return Ok(new { message = "Registration successful" });
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var users = _userService.GetAll();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var user = _userService.GetById(id);
        return Ok(user);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, UpdateRequest model)
    {
        _userService.Update(id, model);
        return Ok(new { message = "User updated successfully" });
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _userService.Delete(id);
        return Ok(new { message = "User deleted successfully" });
    }
}