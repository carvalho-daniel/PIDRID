const controllerRID = require('../controller/controllerRID');
const rid = require('../public/model/rid');

// Mock da função `consulta`
jest.mock('../public/model/rid', () => ({
    consulta: jest.fn()
}));

describe('controllerRID', () => {
    let req, res;

    beforeEach(() => {
        req = { params: { id: '1' } };
        res = { render: jest.fn() };
    });

    test('lista deve consultar rid e renderizar ridProf com contexto', async () => {
        rid.consulta.mockResolvedValue({ id: '1', valor: 'Teste' });

        await controllerRID.lista(req, res);
        expect(res.render).toHaveBeenCalledWith('ridProf', expect.any(Object));
    });
});
