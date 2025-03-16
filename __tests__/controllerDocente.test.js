const docenteController = require('../controller/controllerDocente.js'); // ajuste o caminho
const db = require('../database.js');

// Mock das funções do banco
jest.mock('../database', () => ({
    includeProfessor: jest.fn(),
    login: jest.fn(),
    getProfessores: jest.fn()
}));

describe('Controller Docente', () => {

    let req, res;

    beforeEach(() => {
        req = {
            body: {},
            params: {}
        };

        res = {
            render: jest.fn(),
            redirect: jest.fn()
        };
    });

    // ---------- Teste da função incluir ----------
    test('Deve incluir um professor e redirecionar para "/"', async () => {
        req.body = {
            nome: "João",
            email: "joao@email.com",
            password: "senha123",
            telefone: "123456789",
            siape: "987654",
            cargaH: "40"
        };

        await docenteController.incluir(req, res);

        expect(db.includeProfessor).toHaveBeenCalledWith(
            "João", "joao@email.com", "senha123", "123456789", "987654", "40"
        );

        expect(res.redirect).toHaveBeenCalledWith('/');
    });

    // ---------- Teste da função entrar (login bem-sucedido) ----------
    test('Deve fazer login com sucesso e renderizar pidProf', async () => {
        req.body = {
            email: "joao@email.com",
            password: "senha123"
        };

        db.login.mockResolvedValue({ id: 1 });

        await docenteController.entrar(req, res);

        expect(db.login).toHaveBeenCalledWith("joao@email.com", "senha123");
        expect(res.render).toHaveBeenCalledWith("pidProf", { id: 1 });
    });

    // ---------- Teste da função entrar (falha no login) ----------
    test('Deve falhar no login e renderizar index com nLogou true', async () => {
        req.body = {
            email: "joao@email.com",
            password: "senha123"
        };

        db.login.mockResolvedValue(undefined);

        await docenteController.entrar(req, res);

        expect(db.login).toHaveBeenCalledWith("joao@email.com", "senha123");
        expect(res.render).toHaveBeenCalledWith("index", { nLogou: true });
    });

    // ---------- Teste da função perfil ----------
    test('Deve renderizar a página dadosProf com contexto vazio', async () => {
        await docenteController.perfil(req, res);

        expect(res.render).toHaveBeenCalledWith("dadosProf", {});
    });

});
