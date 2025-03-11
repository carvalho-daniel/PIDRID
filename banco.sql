create database dbTeste;
use dbTeste;

create table professor (
    id int primary key auto_increment,
    nome VARCHAR(80) not null,
    email VARCHAR(80) not null,
    senha VARCHAR(80) not null,
    telefone VARCHAR(45) not null,
    siape VARCHAR(7) not null,
    ch DOUBLE not null
);

insert into professor(nome, email, senha, telefone, siape, ch) values ("Fulano", "teste@gmail.com", md5("123456"), "3312341234", "1234567", 40);

-- Tabela atv_prep_manu
CREATE TABLE IF NOT EXISTS atv_prep_manu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atv_prep_manu_0 FLOAT DEFAULT 0,
    atv_prep_manu_1 FLOAT DEFAULT 0,
    atv_prep_manu_2 FLOAT DEFAULT 0,
    atv_prep_manu_3 FLOAT DEFAULT 0,
    atv_prep_manu_4 FLOAT DEFAULT 0,
    total FLOAT DEFAULT 0,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES professor(id)
);

-- Tabela atv_apoio_ensino
CREATE TABLE IF NOT EXISTS atv_apoio_ensino (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atv_apoio_ensino_0 FLOAT DEFAULT 0,
    atv_apoio_ensino_1 FLOAT DEFAULT 0,
    atv_apoio_ensino_2 FLOAT DEFAULT 0,
    atv_apoio_ensino_3 FLOAT DEFAULT 0,
    atv_apoio_ensino_4 FLOAT DEFAULT 0,
    atv_apoio_ensino_5 FLOAT DEFAULT 0,
    atv_apoio_ensino_6 FLOAT DEFAULT 0,
    total FLOAT DEFAULT 0,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES professor(id)
);

-- Tabela atv_orientacao
CREATE TABLE IF NOT EXISTS atv_orientacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atv_orientacao_0 FLOAT DEFAULT 0,
    atv_orientacao_1 FLOAT DEFAULT 0,
    atv_orientacao_2 FLOAT DEFAULT 0,
    atv_orientacao_3 FLOAT DEFAULT 0,
    atv_orientacao_4 FLOAT DEFAULT 0,
    atv_orientacao_5 FLOAT DEFAULT 0,
    atv_orientacao_6 FLOAT DEFAULT 0,
    total FLOAT DEFAULT 0,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES professor(id)
);

-- Tabela atv_pesq_ino
CREATE TABLE IF NOT EXISTS atv_pesq_ino (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atv_pesq_ino_0 FLOAT DEFAULT 0,
    atv_pesq_ino_1 FLOAT DEFAULT 0,
    atv_pesq_ino_2 FLOAT DEFAULT 0,
    atv_pesq_ino_3 FLOAT DEFAULT 0,
    atv_pesq_ino_4 FLOAT DEFAULT 0,
    atv_pesq_ino_5 FLOAT DEFAULT 0,
    atv_pesq_ino_6 FLOAT DEFAULT 0,
    atv_pesq_ino_7 FLOAT DEFAULT 0,
    atv_pesq_ino_8 FLOAT DEFAULT 0,
    atv_pesq_ino_9 FLOAT DEFAULT 0,
    atv_pesq_ino_10 FLOAT DEFAULT 0,
    atv_pesq_ino_11 FLOAT DEFAULT 0,
    atv_pesq_ino_12 FLOAT DEFAULT 0,
    atv_pesq_ino_13 FLOAT DEFAULT 0,
    atv_pesq_ino_14 FLOAT DEFAULT 0,
    atv_pesq_ino_15 FLOAT DEFAULT 0,
    atv_pesq_ino_16 FLOAT DEFAULT 0,
    atv_pesq_ino_17 FLOAT DEFAULT 0,
    atv_pesq_ino_18 FLOAT DEFAULT 0,
    atv_pesq_ino_19 FLOAT DEFAULT 0,
    atv_pesq_ino_20 FLOAT DEFAULT 0,
    atv_pesq_ino_21 FLOAT DEFAULT 0,
    atv_pesq_ino_22 FLOAT DEFAULT 0,
    atv_pesq_ino_23 FLOAT DEFAULT 0,
    atv_pesq_ino_24 FLOAT DEFAULT 0,
    atv_pesq_ino_25 FLOAT DEFAULT 0,
    total FLOAT DEFAULT 0,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES professor(id)
);

-- Tabela atv_extensao
CREATE TABLE IF NOT EXISTS atv_extensao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atv_extensao_0 FLOAT DEFAULT 0,
    atv_extensao_1 FLOAT DEFAULT 0,
    atv_extensao_2 FLOAT DEFAULT 0,
    atv_extensao_3 FLOAT DEFAULT 0,
    atv_extensao_4 FLOAT DEFAULT 0,
    atv_extensao_5 FLOAT DEFAULT 0,
    atv_extensao_6 FLOAT DEFAULT 0,
    atv_extensao_7 FLOAT DEFAULT 0,
    atv_extensao_8 FLOAT DEFAULT 0,
    atv_extensao_9 FLOAT DEFAULT 0,
    atv_extensao_10 FLOAT DEFAULT 0,
    atv_extensao_11 FLOAT DEFAULT 0,
    atv_extensao_12 FLOAT DEFAULT 0,
    atv_extensao_13 FLOAT DEFAULT 0,
    atv_extensao_14 FLOAT DEFAULT 0,
    atv_extensao_15 FLOAT DEFAULT 0,
    atv_extensao_16 FLOAT DEFAULT 0,
    atv_extensao_17 FLOAT DEFAULT 0,
    atv_extensao_18 FLOAT DEFAULT 0,
    atv_extensao_19 FLOAT DEFAULT 0,
    total FLOAT DEFAULT 0,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES professor(id)
);

-- Tabela atv_gestao_inst_repre
CREATE TABLE IF NOT EXISTS atv_gestao_inst_repre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atv_gestao_inst_repre_0 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_1 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_2 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_3 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_4 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_5 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_6 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_7 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_8 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_9 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_10 FLOAT DEFAULT 0,
    atv_gestao_inst_repre_11 FLOAT DEFAULT 0,
    total FLOAT DEFAULT 0,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES professor(id)
);

-- Tabela atv_quali_cap
CREATE TABLE IF NOT EXISTS atv_quali_cap (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atv_quali_cap_0 FLOAT DEFAULT 0,
    atv_quali_cap_1 FLOAT DEFAULT 0,
    atv_quali_cap_2 FLOAT DEFAULT 0,
    atv_quali_cap_3 FLOAT DEFAULT 0,
    atv_quali_cap_4 FLOAT DEFAULT 0,
    total FLOAT DEFAULT 0,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES professor(id)
);
