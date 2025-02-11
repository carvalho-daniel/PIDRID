class pid {
    prep_manu_ensino = {}
    apoio_ensino = {}
    orientacao = {}
    pesquisa_ino = {}
    extensao = {}
    gestao_inst_repre = {}
    quali_capac = {}
    justificativa = ""

    constructor() {
        this.prep_manu_ensino["Estudo, Planejamento e Elaboração de Materiais e Práticas Pedagógicas"] = 0
        this.prep_manu_ensino["Preparação de Aulas Teóricas e Práticas"] = 0
        this.prep_manu_ensino["Organização de Material Pedagógico"] = 0
        this.prep_manu_ensino["Produção e Correção dos Instrumentos de Avaliação"] = 0
        this.prep_manu_ensino["Registro de Atividades Acadêmicas"] = 0

        this.apoio_ensino["Atendimento de Alunos Extraclasse (física ou virtual)"] = 0
        this.apoio_ensino["Reuniões Pedagógicas, Conselhos de Classe e/ou Reuniões de Pais"] = 0
        
    }

    get teste() {
        for (let sla in this.prep_manu_ensino) {
            console.log(sla + "\n") // Chave
            console.log(this.prep_manu_ensino[sla] + "\n") // Valor correspondente à chave
        }
    }

}

export default pid;