create database dbTeste;
use dbTeste;

create table professor(
    id int primary key auto_increment,
    nome VARCHAR(80) not null,
    email VARCHAR(80) not null,
    senha VARCHAR(80) not null,
    telefone VARCHAR(45) not null,
    siape VARCHAR(7) not null,
    ch DOUBLE not null
);

insert into professor(nome, email, senha, telefone, siape, ch) values ("Fulano", "teste@gmail.com", md5("123456"), "3312341234", "1234567", 40);