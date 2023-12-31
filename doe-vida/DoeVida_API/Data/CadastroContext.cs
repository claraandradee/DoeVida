using Microsoft.EntityFrameworkCore; 
using DoeVida_API.Models;
using System.Diagnostics.CodeAnalysis;

namespace DoeVida_API.Data
{
    public class CadastroContext : DbContext
    {
      protected readonly IConfiguration Configuration;
      public CadastroContext(IConfiguration configuration)
       {
         Configuration = configuration; 
       }

       protected override void OnConfiguring(DbContextOptionsBuilder options)
       {
        //connect to sql server with connection string from app settings
        options.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer")); 
       }

      public DbSet<Cadastro> Cadastro {get; set;}
        
    }
}

