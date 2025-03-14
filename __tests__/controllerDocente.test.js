const controllerDocente = require('../controller/controllerDocente');

describe('Controller Docente', () => {
    it('Deve retornar uma lista de docentes', async () => {
        const response = await controllerDocente.listarDocentes();
        expect(Array.isArray(response)).toBe(true);
    });

    it('Deve adicionar um docente corretamente', async () => {
        const novoDocente = { nome: "Dr. Strange", departamento: "Mágica" };
        const response = await controllerDocente.adicionarDocente(novoDocente);
        expect(response).toHaveProperty('id');
        expect(response.nome).toBe("Dr. Strange");
    });

    it('Deve lançar erro ao tentar adicionar um docente sem nome', async () => {
        const novoDocente = { nome: "", departamento: "Ciência" };
        await expect(controllerDocente.adicionarDocente(novoDocente)).rejects.toThrow();
    });

    it('Deve lançar erro ao tentar adicionar um docente sem departamento', async () => {
        const novoDocente = { nome: "Dr. House", departamento: "" };
        await expect(controllerDocente.adicionarDocente(novoDocente)).rejects.toThrow();
    });

    it('Deve retornar um docente pelo ID', async () => {
        const novoDocente = { nome: "Dr. Who", departamento: "Tempo" };
        const docenteAdicionado = await controllerDocente.adicionarDocente(novoDocente);
        const response = await controllerDocente.buscarDocente(docenteAdicionado.id);
        expect(response).toHaveProperty('id');
        expect(response.nome).toBe("Dr. Who");
    });

    it('Deve lançar erro ao tentar buscar um docente com ID inexistente', async () => {
        await expect(controllerDocente.buscarDocente(9999)).rejects.toThrow();
    });

    it('Deve atualizar um docente corretamente', async () => {
        const novoDocente = { nome: "Dr. Evil", departamento: "Maldade" };
        const docenteAdicionado = await controllerDocente.adicionarDocente(novoDocente);
        const docenteAtualizado = { id: docenteAdicionado.id, nome: "Dr. Good", departamento: "Bondade" };
        const response = await controllerDocente.atualizarDocente(docenteAtualizado);
        expect(response.nome).toBe("Dr. Good");
        expect(response.departamento).toBe("Bondade");
    });

    it('Deve lançar erro ao tentar atualizar um docente com ID inexistente', async () => {
        const docenteAtualizado = { id: 9999, nome: "Dr. Good", departamento: "Bondade" };
        await expect(controllerDocente.atualizarDocente(docenteAtualizado)).rejects.toThrow();
    });

    it('Deve remover um docente corretamente', async () => {
        const novoDocente = { nome: "Dr. Doom", departamento: "Destruição" };
        const docenteAdicionado = await controllerDocente.adicionarDocente(novoDocente);
        const response = await controllerDocente.remover
    });
    
});

