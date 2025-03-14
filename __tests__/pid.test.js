const PID = require('../public/model/pid');

describe('Classe PID', () => {
    it('Deve criar um objeto PID corretamente', () => {
        const pid = new PID(101, "Pesquisa de IA", "Ativo");
        expect(pid.id).toBe(101);
        expect(pid.titulo).toBe("Pesquisa de IA");
        expect(pid.status).toBe("Ativo");
    });

    it('Deve lançar erro ao criar PID sem título', () => {
        expect(() => new PID(102, "", "Em andamento")).toThrow();
    });

    it('Deve mudar o status do PID', () => {
        const pid = new PID(103, "Pesquisa Quântica", "Pendente");
        pid.status = "Finalizado";
        expect(pid.status).toBe("Finalizado");
    });

    it('Deve lançar erro ao criar PID sem status', () => {
        expect(() => new PID(100, "Pesquisa de Robótica", "")).toThrow();
    });

    it('Deve atualizar o título do PID', () => {
        const pid = new PID(104, "Pesquisa Espacial", "Ativo");
        pid.titulo = "Pesquisa Espacial Avançada";
        expect(pid.titulo).toBe("Pesquisa Espacial Avançada");
    });
});
