# Trabalho de Engenharia de Software II 
### Dupla: Daniel Carvalho, Pedro Morais

## Dowload de Requisitos do Projeto
### Para o funcionamento do codigo é necessario:

#### 1. Baixar node modules, no terminal do projeto digite:
    npm install

#### 2. Após baixar, no terminal do projeto digite:
    npm start

#### 3. Contudo, a aplicação estara rodando no localhost da maquina. Abra seu navegador de preferencia, e na barra de pesquisa digite:
    http://localhost:3000

#### 4. Construindo o banco de dados
    no terminal, digite: 
     - npm i dotenv
     - npm install mysql2
    Para rodar as variáveis que faram a conexão com o banco

## Testes
### Para o funcionamento do codigo é necessario:

#### 1. Realizar corretamente os comandos de instalação do projeto:
    Passo: Dowload de Requisitos do Projeto
    npm install --save-dev jest
#### 2. Para rodar os testes é necessario:
##### Rodar todos os testes:
    npm test
##### Rodar apenas o teste escolhido
    npx jest __tests__/(Nome do arquivo).test.js --verbose
