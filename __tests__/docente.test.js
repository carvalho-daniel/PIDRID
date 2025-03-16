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

    it('Deve lançar erro caso o efeitvo não seja booleano ou vazio', () => {
        const docente = new Docente("Charles Xavier", "12341234", "xman@mutante.com", "123456", "1234567");
        expect(() => docente.setEfetivo()).toThrow("Efeitvo não pode ser vazio")
        expect(() => docente.setEfetivo(12)).toThrow("Efetivo deve ser boolean")
        expect(() => docente.setEfetivo(12.2)).toThrow("Efetivo deve ser boolean")
        expect(() => docente.setEfetivo([])).toThrow("Efetivo deve ser boolean")
        expect(() => docente.setEfetivo({})).toThrow("Efetivo deve ser boolean")
        
    });
});
