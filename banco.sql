create database dbTeste;
use dbTeste;

create table professor(
    id int primary key auto_increment,
    nome VARCHAR(80) not null,
    email VARCHAR(80) not null,
    senha VARCHAR(80) not null
);

insert into professor(nome, email, senha) values ("Fulano", "teste@gmail.com", md5("123456"));