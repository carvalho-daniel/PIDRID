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
});
