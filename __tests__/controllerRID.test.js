const controllerRID = require('../controller/controllerRID');

describe('Controller RID', () => {
    it('Deve listar todos os RIDs', async () => {
        const response = await controllerRID.listarRIDs();
        expect(Array.isArray(response)).toBe(true);
    });

    it('Deve criar um novo RID corretamente', async () => {
        const novoRID = { descricao: "Relatório Anual", status: "Aprovado" };
        const response = await controllerRID.criarRID(novoRID);
        expect(response).toHaveProperty('id');
        expect(response.descricao).toBe("Relatório Anual");
    });

    it('Deve lançar erro ao criar um RID sem descrição', async () => {
        const novoRID = { descricao: "", status: "Pendente" };
        await expect(controllerRID.criarRID(novoRID)).rejects.toThrow();
    });

    it('Deve atualizar um RID existente corretamente', async () => {
        const novoRID = { descricao: "Relatório Mensal", status: "Aprovado" };
        const response = await controllerRID.criarRID(novoRID);
        const id = response.id;
        const atualizacao = { descricao: "Relatório Semanal", status: "Pendente" };
        const responseAtualizado = await controllerRID.atualizarRID(id, atualizacao);
        expect(responseAtualizado.descricao).toBe("Relatório Semanal");
        expect(responseAtualizado.status).toBe("Pendente");
    });

    it('Deve lançar erro ao atualizar um RID inexistente', async () => {
        const id = 999999;
        const atualizacao = { descricao: "Relatório Semanal", status: "Pendente" };
        await expect(controllerRID.atualizarRID(id, atualizacao)).rejects.toThrow();
    });

    it('Deve deletar um RID existente corretamente', async () => {
        const novoRID = { descricao: "Relatório Trimestral", status: "Aprovado" };
        const response = await controllerRID.criarRID(novoRID);
        const id = response.id;
        const responseDeletado = await controllerRID.deletarRID(id);
        expect(responseDeletado).toBe(true);
    });

    it('Deve lançar erro ao deletar um RID inexistente', async () => {
        const id = 999999;
        await expect(controllerRID.deletarRID(id)).rejects.toThrow();
    });

});
