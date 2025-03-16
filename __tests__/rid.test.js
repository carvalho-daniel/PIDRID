const RID = require('../public/model/rid.js');


describe('Classe PID', () => {
    it('Deve criar um objeto RID corretamente', () => {
        var rid = new RID(101);
        expect(rid.idProf).toBe(101);
    });

    it('Deve lançar erro ao criar RID sem id', () => {
        expect(() => new RID()).toThrow(Error);
    });

    it('Deve mudar o id do RID', () => {
        var rid = new RID(101);
        rid.idProf = 102;
        expect(rid.idProf).toBe(102);
    });

    it('Deve atribuir todos as horas certas', ()=> {
        let vetorTeste = [1, 2, 3, 4, 5];
        let rid = new RID(1);
        rid.setChPrepManuEnsino(vetorTeste);
        // 5, 7, 7, 26, 20, 12, 5
        
        // Obtém as chaves do objeto dinamicamente
        let keys = Object.keys(rid.prep_manu_ensino);

        // Verifica se cada chave recebeu o valor correto em prep_manu_ensino
        keys.forEach((key, index) => {
            expect(rid.prep_manu_ensino[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em apoio_ensino
        vetorTeste = [1,2,3,4,5,6,7]
        keys = Object.keys(rid.apoio_ensino);
        rid.setChApoioEnsino(vetorTeste);
        keys.forEach((key, index) => {
            expect(rid.apoio_ensino[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em orientacao
        keys = Object.keys(rid.orientacao);
        rid.setOrientacao(vetorTeste);
        keys.forEach((key, index) => {
            expect(rid.orientacao[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em pesquisa_ino
        vetorTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
        keys = Object.keys(rid.pesquisa_ino);
        rid.setPesquisaIno(vetorTeste);
        keys.forEach((key, index) => {
            expect(rid.pesquisa_ino[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em extensao
        vetorTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        keys = Object.keys(rid.extensao);
        rid.setExtensao(vetorTeste);
        keys.forEach((key, index) => {
            expect(rid.extensao[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em gestao_inst_repre
        vetorTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        keys = Object.keys(rid.gestao_inst_repre);
        rid.setGestaoInstRepre(vetorTeste);
        keys.forEach((key, index) => {
            expect(rid.gestao_inst_repre[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em quali_capac
        vetorTeste = [1, 2, 3, 4, 5];
        keys = Object.keys(rid.quali_capac);
        rid.setQualiCapac(vetorTeste);
        keys.forEach((key, index) => {
            expect(rid.quali_capac[key]).toBe(vetorTeste[index]);
        });
        

        expect(() => rid.setJustificativa([1,2])).toThrow("A justificativa deve ser uma string");
        expect(() => rid.setJustificativa(1)).toThrow("A justificativa deve ser uma string");
        expect(() => rid.setJustificativa({})).toThrow("A justificativa deve ser uma string");
    });

    it('Deve lançar erro caso não seja um array', () => {
        var pid = new RID(1);
        expect(() => pid.setChPrepManuEnsino("string")).toThrow("O parâmetro deve ser um array.");
        expect(() => pid.setChPrepManuEnsino(123)).toThrow("O parâmetro deve ser um array.");
        expect(() => pid.setChPrepManuEnsino({})).toThrow("O parâmetro deve ser um array.");
    });


});
