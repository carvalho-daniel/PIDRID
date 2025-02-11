class docente {
    nome;
    senha;
    departamento = "ENSINO";
    telefone;
    email;
    siape;
    efetivo=false;

    constructor(nome, telefone, email,senha, siape, efeitvo=false,departamento="ENSINO") {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.siape = siape;
        this.efetivo = efeitvo;
        this.departamento = departamento;
    }
    
    get nome() {
        return this._nome;
    }
    
    set nome(nome) {
        this._nome = nome;
    }

    get departamento() {
        return this._departamento;
    }
    
    set departamento(departamento) {
        this._departamento = departamento;
    }

    get telefone() {
        return this._telefone;
    }
    
    set telefone(telefone) {
        this._telefone = telefone;
    }

    get email() {
        return this._email;
    }
    
    set email(email) {
        this._email = email;
    }

    get senha(){
        return this._senha;
    }

    set senha(senha){
        this._senha = senha;
    }

    get siape() {
        return this._siape;
    }
    
    set siape(siape) {
        this._siape = siape;
    }

    get efetivo() {
        return this._efetivo;
    }
    
    set efetivo(efetivo) {
        this._efetivo = efetivo;
    }

}