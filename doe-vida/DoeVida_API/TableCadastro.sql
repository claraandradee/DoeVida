CREATE TABLE Cadastro (
    id INT IDENTITY (1, 1) NOT NULL, 
	email VARCHAR (50) NOT NULL, 
	senha VARCHAR (30) NOT NULL,
	nome VARCHAR (40) NOT NULL,
	avatar VARCHAR (9999) NOT NULL,
	tipoSanguineo VARCHAR(3) NOT NULL,
	dataNascimento DATE,
	PRIMARY KEY CLUSTERED ([id] ASC)
);

insert into Cadastro (email, senha) values ('julia@gmail.com','1234567', 'Julia Enriquetto de Brito', '', 'O+', '27/04/2006')
insert into Cadastro (email, senha) values ('clara@gmail.com','1234568')
insert into Cadastro (email, senha) values ('laura@gmail.com','1234569')

select * from Cadastro 
