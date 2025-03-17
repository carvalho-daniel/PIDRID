const RID = require('../public/model/rid.js');


describe('Classe rid', () => {
    it('Deve criar um objeto rid corretamente', () => {
        var rid = new RID(101);
        expect(rid.idProf).toBe(101);
    });

    it('Deve lançar erro ao criar rid sem id ou se o id não for número', () => {
        expect(() => new RID()).toThrow(Error);
        expect(() => new RID({})).toThrow(Error);
        expect(() => new RID([])).toThrow(Error);
        expect(() => new RID("adsas")).toThrow(Error);
    });

    it('Deve mudar o id do rid', () => {
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
        
    });

    it('Deve lançar erro caso não seja um array', () => {
        var rid = new RID(1);
        expect(() => rid.setChPrepManuEnsino("string")).toThrow("O parâmetro deve ser um array.");
        expect(() => rid.setChPrepManuEnsino(123)).toThrow("O parâmetro deve ser um array.");
        expect(() => rid.setChPrepManuEnsino({})).toThrow("O parâmetro deve ser um array.");
    });

    it('Os valores devem ser 0 por padrão', ()=>{
        var rid = new RID(1);
        
        let keys = Object.keys(rid.prep_manu_ensino);
        keys.forEach((key) => {
            expect(rid.prep_manu_ensino[key]).toBe(0);
        });

        keys = Object.keys(rid.apoio_ensino);
        keys.forEach((key) => {
            expect(rid.apoio_ensino[key]).toBe(0);
        });

        keys = Object.keys(rid.orientacao);
        keys.forEach((key) => {
            expect(rid.orientacao[key]).toBe(0);
        });

        keys = Object.keys(rid.pesquisa_ino);
        keys.forEach((key) => {
            expect(rid.pesquisa_ino[key]).toBe(0);
        });

        keys = Object.keys(rid.extensao);
        keys.forEach((key) => {
            expect(rid.extensao[key]).toBe(0);
        });

        keys = Object.keys(rid.gestao_inst_repre);
        keys.forEach((key) => {
            expect(rid.gestao_inst_repre[key]).toBe(0);
        });

        keys = Object.keys(rid.quali_capac);
        keys.forEach((key) => {
            expect(rid.quali_capac[key]).toBe(0);
        });
    });

    it('Deve lançar erro caso os ch não sejam arrays', ()=>{
        var rid = new RID(1);
        expect(()=> rid.setChApoioEnsino("")).toThrow(Error);
        expect(()=> rid.setChApoioEnsino("")).toThrow(Error);
        expect(()=> rid.setOrientacao("")).toThrow(Error);
        expect(()=> rid.setPesquisaIno("")).toThrow(Error);
        expect(()=> rid.setExtensao("")).toThrow(Error);
        expect(()=> rid.setGestaoInstRepre("")).toThrow(Error);
        expect(()=> rid.setQualiCapac("")).toThrow(Error);
    });

    it('Deve lançar erro caso o tamanho do vetor esteja errado', ()=>{
        var rid = new RID(1);
        expect(()=> rid.setChPrepManuEnsino([1,2])).toThrow(Error);
        expect(()=> rid.setChApoioEnsino([1,2])).toThrow(Error);
        expect(()=> rid.setOrientacao([1,2])).toThrow(Error);
        expect(()=> rid.setPesquisaIno([1,2])).toThrow(Error);
        expect(()=> rid.setExtensao([1,2])).toThrow(Error);
        expect(()=> rid.setGestaoInstRepre([1,2])).toThrow(Error);
        expect(()=> rid.setQualiCapac([1,2])).toThrow(Error);
    });

    it('Deve retornar um array', ()=>{
        var rid = new RID(1);
        expect(()=> rid.getChPrepManuEnsino()).toBe(Array);
        expect(()=> rid.getApoioEnsino()).toBe(Array);
        expect(()=> rid.getOrientacao()).toBe(Array);
        expect(()=> rid.getPesquisaIno()).toBe(Array);
        expect(()=> rid.getExtensao()).toBe(Array);
        expect(()=> rid.getGestaoInstRepre()).toBe(Array);
        expect(()=> rid.getQualiCapac()).toBe(Array);

    })

    it('A justificativa deve lançar erro caso não seja uma string', ()=>{
        var rid = new RID(1);
        expect(() => rid.setJustificativa([1,2])).toThrow("A justificativa deve ser uma string");
        expect(() => rid.setJustificativa(1)).toThrow("A justificativa deve ser uma string");
        expect(() => rid.setJustificativa({})).toThrow("A justificativa deve ser uma string");
    })
});
