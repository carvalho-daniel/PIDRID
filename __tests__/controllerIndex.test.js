const controllerIndex = require('../controller/controllerIndex');

describe('controllerIndex', () => {
    let req, res;

    beforeEach(() => {
        req = {};
        res = { render: jest.fn() };
    });

    test('tela_principal deve renderizar index com contexto', async () => {
        await controllerIndex.tela_principal(req, res);

        expect(res.render).toHaveBeenCalledWith("index", {
            titulo_pagina: "Principal"
        });
    });

    test('lista deve renderizar pidProf', async () => {
        console.log = jest.fn(); // evita poluir testes

        await controllerIndex.lista(req, res);

        expect(console.log).toHaveBeenCalledWith("tem que passar por aqui");
        expect(res.render).toHaveBeenCalledWith("pidProf");
    });
});
