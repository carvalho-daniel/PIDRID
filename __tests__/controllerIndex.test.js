const controllerIndex = require('../controller/controllerIndex');

describe('Controller Index', () => {
    it('Deve retornar status 200 na home', async () => {
        const response = await controllerIndex.getHome();
        expect(response.status).toBe(200);
    });

    it('Deve retornar erro ao acessar rota inexistente', async () => {
        await expect(controllerIndex.getPageNotFound()).rejects.toThrow();
    });

    it('Deve retornar status 200 na pagina de login', async () => {
        const response = await controllerIndex.getLogin();
        expect(response.status).toBe(200);
    });


});
