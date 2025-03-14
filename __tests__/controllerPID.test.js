const controllerPID = require('../controller/controllerPID');

describe('Controller PID', () => {
    it('Deve criar um novo PID', async () => {
        const novoPID = { titulo: "Nova Pesquisa", status: "Ativo" };
        const response = await controllerPID.criarPID(novoPID);
        expect(response).toHaveProperty('id');
        expect(response.titulo).toBe("Nova Pesquisa");
    });

    it('Deve lançar erro ao criar um PID sem título', async () => {
        const novoPID = { titulo: "", status: "Pendente" };
        await expect(controllerPID.criarPID(novoPID)).rejects.toThrow();
    });

    it('Deve listar todos os PIDs', async () => {
        const response = await controllerPID.listarPIDs();
        expect(Array.isArray(response)).toBe(true);
    });

    it('Deve buscar um PID por ID', async () => {
        const novoPID = { titulo: "Pesquisa para busca", status: "Ativo" };
        const pidCriado = await controllerPID.criarPID(novoPID);
        const response = await controllerPID.buscarPID(pidCriado.id);
        expect(response.titulo).toBe("Pesquisa para busca");
    });

    it('Deve atualizar um PID', async () => {
        const novoPID = { titulo: "Pesquisa para atualizar", status: "Ativo" };
        const pidCriado = await controllerPID.criarPID(novoPID);
        const pidAtualizado = { titulo: "Pesquisa Atualizada", status: "Inativo" };
        const response = await controllerPID.atualizarPID(pidCriado.id, pidAtualizado);
        expect(response.titulo).toBe("Pesquisa Atualizada");
        expect(response.status).toBe("Inativo");
    });

    it('Deve deletar um PID', async () => {
        const novoPID = { titulo: "Pesquisa para deletar", status: "Ativo" };
        const pidCriado = await controllerPID.criarPID(novoPID);
        const response = await controllerPID.deletarPID(pidCriado.id);
        expect(response).toBe(true);
    });

});
