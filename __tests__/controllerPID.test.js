const controllerPID = require('../controller/controllerPID');

describe('controllerPID', () => {
    let req, res;

    beforeEach(() => {
        req = {};
        res = {
            render: jest.fn(),
            redirect: jest.fn()
        };
    });

    test('lista deve renderizar pidProf', async () => {
        await controllerPID.lista(req, res);
        expect(res.render).toHaveBeenCalledWith('pidProf');
    });

    test('include deve redirecionar para ridProf', async () => {
        await controllerPID.include(req, res);
        expect(res.redirect).toHaveBeenCalledWith('ridProf');
    });
});
