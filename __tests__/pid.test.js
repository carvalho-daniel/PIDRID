const PID = require('../public/model/pid.js');


describe('Classe PID', () => {
    it('Deve criar um objeto PID corretamente', () => {
        var pid = new PID(101);
        expect(pid.idProf).toBe(101);
    });

    it('Deve lançar erro ao criar PID sem id ou se o id não for número', () => {
        expect(() => new PID()).toThrow(Error);
        expect(() => new PID({})).toThrow(Error);
        expect(() => new PID([])).toThrow(Error);
        expect(() => new PID("adsas")).toThrow(Error);
    });

    it('Deve mudar o id do PID', () => {
        var pid = new PID(101);
        pid.idProf = 102;
        expect(pid.idProf).toBe(102);
    });

    it('Deve atribuir todos as horas certas', ()=> {
        let vetorTeste = [1, 2, 3, 4, 5];
        let pid = new PID(1);
        pid.setChPrepManuEnsino(vetorTeste);
        // 5, 7, 7, 26, 20, 12, 5
        
        // Obtém as chaves do objeto dinamicamente
        let keys = Object.keys(pid.prep_manu_ensino);

        // Verifica se cada chave recebeu o valor correto em prep_manu_ensino
        keys.forEach((key, index) => {
            expect(pid.prep_manu_ensino[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em apoio_ensino
        vetorTeste = [1,2,3,4,5,6,7]
        keys = Object.keys(pid.apoio_ensino);
        pid.setChApoioEnsino(vetorTeste);
        keys.forEach((key, index) => {
            expect(pid.apoio_ensino[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em orientacao
        keys = Object.keys(pid.orientacao);
        pid.setOrientacao(vetorTeste);
        keys.forEach((key, index) => {
            expect(pid.orientacao[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em pesquisa_ino
        vetorTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
        keys = Object.keys(pid.pesquisa_ino);
        pid.setPesquisaIno(vetorTeste);
        keys.forEach((key, index) => {
            expect(pid.pesquisa_ino[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em extensao
        vetorTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        keys = Object.keys(pid.extensao);
        pid.setExtensao(vetorTeste);
        keys.forEach((key, index) => {
            expect(pid.extensao[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em gestao_inst_repre
        vetorTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        keys = Object.keys(pid.gestao_inst_repre);
        pid.setGestaoInstRepre(vetorTeste);
        keys.forEach((key, index) => {
            expect(pid.gestao_inst_repre[key]).toBe(vetorTeste[index]);
        });

        // Verifica se cada chave recebeu o valor correto em quali_capac
        vetorTeste = [1, 2, 3, 4, 5];
        keys = Object.keys(pid.quali_capac);
        pid.setQualiCapac(vetorTeste);
        keys.forEach((key, index) => {
            expect(pid.quali_capac[key]).toBe(vetorTeste[index]);
        });
        
    });

    it('Deve lançar erro caso não seja um array', () => {
        var pid = new PID(1);
        expect(() => pid.setChPrepManuEnsino("string")).toThrow("O parâmetro deve ser um array.");
        expect(() => pid.setChPrepManuEnsino(123)).toThrow("O parâmetro deve ser um array.");
        expect(() => pid.setChPrepManuEnsino({})).toThrow("O parâmetro deve ser um array.");
    });

    it('Os valores devem ser 0 por padrão', ()=>{
        var pid = new PID(1);
        
        let keys = Object.keys(pid.prep_manu_ensino);
        keys.forEach((key) => {
            expect(pid.prep_manu_ensino[key]).toBe(0);
        });

        keys = Object.keys(pid.apoio_ensino);
        keys.forEach((key) => {
            expect(pid.apoio_ensino[key]).toBe(0);
        });

        keys = Object.keys(pid.orientacao);
        keys.forEach((key) => {
            expect(pid.orientacao[key]).toBe(0);
        });

        keys = Object.keys(pid.pesquisa_ino);
        keys.forEach((key) => {
            expect(pid.pesquisa_ino[key]).toBe(0);
        });

        keys = Object.keys(pid.extensao);
        keys.forEach((key) => {
            expect(pid.extensao[key]).toBe(0);
        });

        keys = Object.keys(pid.gestao_inst_repre);
        keys.forEach((key) => {
            expect(pid.gestao_inst_repre[key]).toBe(0);
        });

        keys = Object.keys(pid.quali_capac);
        keys.forEach((key) => {
            expect(pid.quali_capac[key]).toBe(0);
        });
    });

    it('Deve lançar erro caso os ch não sejam arrays', ()=>{
        var pid = new PID(1);
        expect(()=> pid.setChApoioEnsino("")).toThrow(Error);
        expect(()=> pid.setChApoioEnsino("")).toThrow(Error);
        expect(()=> pid.setOrientacao("")).toThrow(Error);
        expect(()=> pid.setPesquisaIno("")).toThrow(Error);
        expect(()=> pid.setExtensao("")).toThrow(Error);
        expect(()=> pid.setGestaoInstRepre("")).toThrow(Error);
        expect(()=> pid.setQualiCapac("")).toThrow(Error);
    });

    it('Deve lançar erro caso o tamanho do vetor esteja errado', ()=>{
        var pid = new PID(1);
        expect(()=> pid.setChPrepManuEnsino([1,2])).toThrow(Error);
        expect(()=> pid.setChApoioEnsino([1,2])).toThrow(Error);
        expect(()=> pid.setOrientacao([1,2])).toThrow(Error);
        expect(()=> pid.setPesquisaIno([1,2])).toThrow(Error);
        expect(()=> pid.setExtensao([1,2])).toThrow(Error);
        expect(()=> pid.setGestaoInstRepre([1,2])).toThrow(Error);
        expect(()=> pid.setQualiCapac([1,2])).toThrow(Error);
    });

    it('Deve retornar um array', ()=>{
        var pid = new PID(1);
        expect(()=> pid.getChPrepManuEnsino()).toBe(Array);
        expect(()=> pid.getApoioEnsino()).toBe(Array);
        expect(()=> pid.getOrientacao()).toBe(Array);
        expect(()=> pid.getPesquisaIno()).toBe(Array);
        expect(()=> pid.getExtensao()).toBe(Array);
        expect(()=> pid.getGestaoInstRepre()).toBe(Array);
        expect(()=> pid.getQualiCapac()).toBe(Array);

    })

    it('A justificativa deve lançar erro caso não seja uma string', ()=>{
        var pid = new PID(1);
        expect(() => pid.setJustificativa([1,2])).toThrow("A justificativa deve ser uma string");
        expect(() => pid.setJustificativa(1)).toThrow("A justificativa deve ser uma string");
        expect(() => pid.setJustificativa({})).toThrow("A justificativa deve ser uma string");
    })
});
