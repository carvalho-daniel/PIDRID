const Docente = require('../public/model/docente.js');

describe('Classe Docente', () => {
    it('Deve criar um objeto Docente corretamente', () => {
        const docente = new Docente("Charles Xavier", "12341234", "xman@mutante.com", "123456", "1234567", true, "ENSINO");
        expect(docente.getNome()).toBe("Charles Xavier");
        expect(docente.getTelefone()).toBe("12341234");
        expect(docente.getEmail()).toBe("xman@mutante.com");
        expect(docente.getSenha()).toBe("123456");
        expect(docente.getSiape()).toBe("1234567");
        expect(docente.getEfetivo()).toBe(true);
        expect(docente.getDepartamento()).toBe("ENSINO");
    });

    it('Deve lançar erro ao criar um Docente sem nome', () => {
        expect(() => new Docente("12341234", "xman@mutante.com", "123456", "1234567", true, "ENSINO")).toThrow();
    });

    it('Deve atualizar o nome do docente', () => {
        const docente = new Docente("Charles Xavier", "12341234", "xman@mutante.com", "123456", "1234567", true, "ENSINO");
        docente.nome = "Novo Nome";
        expect(docente.nome).toBe("Novo Nome");
    });

    it('Deve atualizar o departamento do docente', () => {
        const docente = new Docente("Charles Xavier", "12341234", "xman@mutante.com", "123456", "1234567", true, "ENSINO");
        docente.setDepartamento("Engenharia");
        expect(docente.getDepartamento()).toBe("Engenharia");
    });

    it('Deve ter por padrão o efetivo: false e o departamento: ensino', () => {
        const docente = new Docente("Charles Xavier", "12341234", "xman@mutante.com", "123456", "1234567");
        expect(docente.getDepartamento()).toBe("ENSINO");
        expect(docente.getEfetivo()).toBe(false);
    });

    it('Deve lançar erro caso o efetivo não seja booleano ou vazio', () => {
        const docente = new Docente("Charles Xavier", "12341234", "xman@mutante.com", "123456", "1234567");
        expect(() => docente.setEfetivo()).toThrow("Efetivo não pode ser vazio")
        expect(() => docente.setEfetivo(12)).toThrow("Efetivo deve ser boolean")
        expect(() => docente.setEfetivo(12.2)).toThrow("Efetivo deve ser boolean")
        expect(() => docente.setEfetivo([])).toThrow("Efetivo deve ser boolean")
        expect(() => docente.setEfetivo({})).toThrow("Efetivo deve ser boolean")
        
    });

    it('Deve lançar erro caso algum atributo esteja vazio', ()=>{
        expect(() => new Docente("", "12341234", "xman@mutante.com", "123456", "1234567")).toThrow("Nome não pode ser vazio");
        expect(() => new Docente("Xavier", null, "xman@mutante.com", "123456", "1234567")).toThrow("Telefone não pode ser vazio");
        expect(() => new Docente("Xavier", "12341234", undefined, "123456", "1234567")).toThrow("Email não pode ser vazio");
        expect(() => new Docente("Xavier", "12341234", "xman@mutante.com", null, "1234567")).toThrow("Senha não pode ser vazia");
        expect(() => new Docente("Xavier", "12341234", "xman@mutante.com", "123456", null)).toThrow("Siape não pode ser vazio");
        expect(() => new Docente("Xavier", "12341234", "xman@mutante.com", "123456", "1234657",true, null)).toThrow("Departamento não pode ser vazio");

    });

    it('Deve lançar erro caso algum atributo seja do tipo errado', ()=>{
        expect(() => new Docente(123, "12341234", "xman@mutante.com", "123456", "1234567")).toThrow("Nome deve ser string");
        expect(() => new Docente("Xavier", 1234, "xman@mutante.com", "123456", "1234567")).toThrow("Telefone deve ser string");
        expect(() => new Docente("Xavier", "12341234", {}, "123456", "1234567")).toThrow("Email deve ser string");
        expect(() => new Docente("Xavier", "12341234", "xman@mutante.com", [4, 5, 2], "1234567")).toThrow("Senha deve ser string");
        expect(() => new Docente("Xavier", "12341234", "xman@mutante.com", "123456", 40.2)).toThrow("Siape deve ser string");
        expect(() => new Docente("Xavier", "12341234", "xman@mutante.com", "123456", "1234657",true, 1234)).toThrow("Departamento deve ser string");
    });



    
});
