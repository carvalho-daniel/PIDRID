const RID = require('../public/model/rid');

describe('Classe RID', () => {
    it('Deve criar um objeto RID corretamente', () => {
        const rid = new RID(201, "Relatório Mensal", "Concluído");
        expect(rid.id).toBe(201);
        expect(rid.descricao).toBe("Relatório Mensal");
        expect(rid.status).toBe("Concluído");
    });

    it('Deve lançar erro ao criar RID sem descrição', () => {
        expect(() => new RID(202, "", "Em andamento")).toThrow();
    });

    it('Deve alterar status do RID', () => {
        const rid = new RID(203, "Relatório Semestral", "Pendente");
        rid.status = "Aprovado";
        expect(rid.status).toBe("Aprovado");
    });

    it('Deve lançar erro ao criar RID sem status', () => {
        expect(() => new RID(204, "Relatório Anual", "")).toThrow();
    });

    it('Deve atualizar a descrição do RID', () => {
        const rid = new RID(205, "Relatório Inicial", "Em Revisão");
        rid.descricao = "Relatório Final";
        expect(rid.descricao).toBe("Relatório Final");
    });

});
