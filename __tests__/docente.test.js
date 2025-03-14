const Docente = require('../public/model/docente');

describe('Classe Docente', () => {
    it('Deve criar um objeto Docente corretamente', () => {
        const docente = new Docente(1, "Professor X", "Matemática");
        expect(docente.id).toBe(1);
        expect(docente.nome).toBe("Professor X");
        expect(docente.departamento).toBe("Matemática");
    });

    it('Deve lançar erro ao criar um Docente sem nome', () => {
        expect(() => new Docente(2, "", "Física")).toThrow();
    });

    it('Deve atualizar o nome do docente', () => {
        const docente = new Docente(3, "Antigo Nome", "Química");
        docente.nome = "Novo Nome";
        expect(docente.nome).toBe("Novo Nome");
    });
    
    it('Deve lançar erro ao criar um Docente sem departamento', () => {
        expect(() => new Docente(4, "Professor Y", "")).toThrow();
    });

    it('Deve atualizar o departamento do docente', () => {
        const docente = new Docente(5, "Professor Z", "Biologia");
        docente.departamento = "Engenharia";
        expect(docente.departamento).toBe("Engenharia");
    });
});
