using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoeVida_API.Models
{
    public class Cadastro
    {
        public int? id { get; set; }
        public string? email { get; set; }
        public string? senha { get; set; }
        public string? nome { get; set; }
        public string? avatar { get; set; }
        public string? tipoSanguineo { get; set; }
        public DateTime? dataNascimento { get; set; }
    }
}