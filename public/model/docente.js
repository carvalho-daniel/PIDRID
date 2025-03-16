class Docente {
    nome;
    senha;
    departamento = "ENSINO";
    telefone;
    email;
    siape;
    efetivo=false;

    constructor(nome, telefone, email, senha, siape, efetivo = false, departamento = "ENSINO") {
        this.setNome(nome);
        this.setTelefone(telefone);
        this.setEmail(email);
        this.setSenha(senha);
        this.setSiape(siape);
        this.setEfetivo(efetivo);
        this.setDepartamento(departamento);
    }

    getNome() {
        return this._nome;
    }
    
    setNome(nome) {
        if(nome == undefined)
            throw new Error("Nome não pode ser vazio");
        if(typeof nome != "string")
            throw new Error("Nome deve ser string");

        this._nome = nome;
    }

    getDepartamento() {
        return this._departamento;
    }
    
    setDepartamento(departamento) {
        if(departamento == undefined)
            throw new Error("Departamento não pode ser vazio");
        if(typeof departamento != "string")
            throw new Error("Departamento deve ser string");
        this._departamento = departamento;
    }

    getTelefone() {
        return this._telefone;
    }
    
    setTelefone(telefone) {
        if(telefone == undefined)
            throw new Error("Telefone não pode ser vazio");
        if(typeof telefone != "string")
            throw new Error("Telefone deve ser string");
        this._telefone = telefone;
    }

    getEmail() {
        return this._email;
    }
    
    setEmail(email) {
        if(email == undefined)
            throw new Error("Email não pode ser vazio");
        if(typeof email != "string")
            throw new Error("Email deve ser string");
        this._email = email;
    }

    getSenha(){
        return this._senha;
    }

    setSenha(senha){
        if(senha == undefined)
            throw new Error("Senha não pode ser vazia");
        if(typeof senha != "string")
            throw new Error("Senha deve ser string");
        this._senha = senha;
    }

    getSiape() {
        return this._siape;
    }
    
    setSiape(siape) {
        if(siape == undefined)
            throw new Error("Siape não pode ser vazia");
        if(typeof siape != "string")
            throw new Error("Siape deve ser string");
        this._siape = siape;
    }

    getEfetivo() {
        return this._efetivo;
    }
    
    setEfetivo(efetivo) {
        if(efetivo == undefined)
            throw new Error("Efeitvo não pode ser vazio");
        if(typeof efetivo != "boolean")
            throw new Error("Efetivo deve ser boolean");
        this._efetivo = efetivo;
    }

}

module.exports = Docente;