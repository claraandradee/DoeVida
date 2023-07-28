using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc; 
using DoeVida_API.Data; 
using DoeVida_API.Models; 

namespace DoeVida_API.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class CadastroController: ControllerBase
   {
    private CadastroContext _context;

    public CadastroController(CadastroContext context)
    {
        //construtor 
        _context = context;
    }

      //CRUD
     [HttpGet]
     public ActionResult<List<Cadastro>> GetAll()
     {
        return _context.Cadastro.ToList(); 
     }

     [HttpGet("{CadastroId}")]
     public ActionResult<Cadastro> Get(int CadastroId)
     {
       try
       {
         var result = _context.Cadastro.Find(CadastroId);
         if(result == null)
         {
            return NotFound(); 
         }
         return Ok(result);
       }
       catch
       {
         return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
       }
     }

     [HttpPost]
     public async Task<ActionResult> post(Cadastro model)
     {
      try{
         _context.Cadastro.Add(model);
         if(await _context.SaveChangesAsync() == 1)
         {
            //return Ok()
            return Created($"/api/cadastro/{model.email}", model); 
         }
      }
      catch{
        return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");   
      }

      return BadRequest();
     }

     [HttpDelete("{CadastroId}")]
     public async Task<ActionResult> delete(int CadastroId)
     {
       try{
         //verifica se existe o usuario no cadastro, a ser excluido 
         var usuario = await _context.Cadastro.FindAsync(CadastroId);
         if(usuario == null)
         {
            //método do EF
            return NotFound(); 
         }
         _context.Remove(usuario);
         await _context.SaveChangesAsync(); 
         return NoContent();
       }
       catch{
         return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
       }
     }

     [HttpPut("{CadastroId}")]
     public async Task<IActionResult> put(int CadastroId, Cadastro dadosCadastroAlt)
     {
      try{
        //verifica se existe usuario a ser alterado no bd cadastro
        var result = await _context.Cadastro.FindAsync(CadastroId);
        if(CadastroId != result.id)
        {
         return BadRequest(); 
        }
        result.email = dadosCadastroAlt.email;
        result.senha = dadosCadastroAlt.senha;
        result.nome = dadosCadastroAlt.nome;
        result.avatar = dadosCadastroAlt.avatar;
        result.tipoSanguineo = dadosCadastroAlt.tipoSanguineo;
        result.dataNascimento = dadosCadastroAlt.dataNascimento;
        await _context.SaveChangesAsync();
        return Created($"/api/cadastro/{dadosCadastroAlt.email}", dadosCadastroAlt);
      }
      catch {
         return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
      }
     }

    [HttpPost("login")]
     public async Task<ActionResult> login(Cadastro model)
     {
      try{
        List<Cadastro> usuariosBanco = _context.Cadastro.ToList();
        Cadastro usuarioBanco = usuariosBanco.Find(c => c.email == model.email);

        if (usuarioBanco == null)
          return NotFound();

        if (usuarioBanco.senha == model.senha)
          return Ok(usuarioBanco);

        return Unauthorized();
      }
      catch{
        return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");   
      }
     }
   }
}