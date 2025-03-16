export default class pid {
    idProf;
    prep_manu_ensino = [] // 5
    apoio_ensino = [] // 7
    orientacao = [] // 7
    pesquisa_ino = [] // 26
    extensao = [] // 20
    gestao_inst_repre = [] // 12
    quali_capac = [] // 5
    justificativa = ""

    constructor(idProf) {
        if(idProf == undefined)
            throw new Error("Sem id");
        if(typeof idProf != "number")
            throw new Error("O id do professor deve ser um número")
        this.idProf = idProf;
        
        // atividades de preparação de manutenção do ensino
        this.prep_manu_ensino["Estudo, Planejamento e Elaboração de Materiais e Práticas Pedagógicas"] = 0 
        this.prep_manu_ensino["Preparação de Aulas Teóricas e Práticas"] = 0 
        this.prep_manu_ensino["Organização de Material Pedagógico"] = 0
        this.prep_manu_ensino["Produção e Correção dos Instrumentos de Avaliação"] = 0
        this.prep_manu_ensino["Registro de Atividades Acadêmicas"] = 0

        // atividades de apoio ao ensino
        this.apoio_ensino["Atendimento de Alunos Extraclasse (física ou virtual)"] = 0
        this.apoio_ensino["Reuniões Pedagógicas, Conselhos de Classe e/ou Reuniões de Pais"] = 0
        this.apoio_ensino["Participação Banca de Trabalho de Conclusão de Curso"] = 0
        this.apoio_ensino["Atendimento de Alunos em Regime de Exercício Domiciliar"] = 0
        this.apoio_ensino["Orientação em Olímpiadas do Conhecimento e/ou Competições Diversas"] = 0
        this.apoio_ensino["Organização, Coordenação e/ou Acompanhamento de Visitas Técnicas"] = 0
        this.apoio_ensino["Nivelamento sem Constituição de Turma"] = 0

        // atividades de orientação 
        this.orientacao["Orientação de Estágio "] = 0
        this.orientacao["Coordenação e Participação como Colaborador em Projeto de Ensino"] = 0
        this.orientacao["Orientação Acadêmica"] = 0
        this.orientacao["Orientação em Monitorias de Ensino e Iniciação à Docência"] = 0
        this.orientacao["Orientação de Trabalhos de Conclusão de Curso"] = 0
        this.orientacao["Orientação ou Coorientação de Mestrado ou Doutorado"] = 0
        this.orientacao["Participação na Elaboração e Revisão de Projetos Pedagógicos de Cursos "] = 0

        // atividades de pesquisa e inovação
        this.pesquisa_ino["Coordenação e Participação como colaborador em Projeto de Pesquisa"] = 0        
        this.pesquisa_ino["Orientação de Aluno de Iniciação à Pesquisa Científica e/ou Tecnológica"] = 0        
        this.pesquisa_ino["Coordenação e/ou Participação de Grupo de Pesquisa Cadastrado no CNPq"] = 0        
        this.pesquisa_ino["Participação de Banca Examinadora de Tese de Doutorado e/ou Dissertação de Mestrado e/ou Monografia de Especialização"] = 0        
        this.pesquisa_ino["Participação de Banca Examinadora de Monografica de Graduação e/ou Trabalho de Conclusão de Curso de Graduação ou de Curso Técnico"] = 0        
        this.pesquisa_ino["Participação de Banca Examinadora de Qualificação de Mestrado ou Douturado "] = 0        
        this.pesquisa_ino["Preparação de Artigo Técnico-Científico a ser publicado em anais de Eventos Acadêmico-Científicos Locais, Regionais, Nacionais ou Internacionais "] = 0        
        this.pesquisa_ino["Preparação de Artigo Técnico-Científico a ser publicado em periódico de circulação local ou nacional "] = 0  
        this.pesquisa_ino["Preparação de Artigo Técnico-Científico a ser publicado em periódico indexado nacional ou internacional "] = 0      
        this.pesquisa_ino["Preparação de Livro ou de Capítulo de Livro Didático, Cultural ou Técnico; Produção de Relatório Técnico, Maniual Técnico e/ou Didático com ISBN "] = 0        
        this.pesquisa_ino["Editoração de Revistas Científicas Locais, Regionais, Nacionais ou Internacionais "] = 0        
        this.pesquisa_ino["Editoração, Organização e/ou Tradução de Livros e/ou Periódicos Acadêmicos, Científicos ou Técnicos"] = 0        
        this.pesquisa_ino["Participação em Conselho Editoral Local, Regional, Nacional ou Internacional "] = 0        
        this.pesquisa_ino["Participação, como editor, membro de conselho e/ou parecerista de Publicações Acadêmico Científicas"] = 0        
        this.pesquisa_ino["Tradução de Artigo Didático, Cultural, Artístico ou Técnico"] = 0        
        this.pesquisa_ino["Participação em Banco de Avaliadores de Pesquisa, Comitê ou Comissão Científica"] = 0        
        this.pesquisa_ino["Consultor ad hoc na Análise de Projetos, em Seleção de Editais"] = 0        
        this.pesquisa_ino["Consultor ad hoc, na Condição de Convidado, em Eventos Acadêmicos"] = 0        
        this.pesquisa_ino["Coordenação ou Participação em Comissão Organizadora de Oficinas, Seminários e outros Eventos Científicos, Locais, Regionais, Nacionais ou Internacional "] = 0        
        this.pesquisa_ino["Participação como Conferencista Convidado em Eventos Científicos, Locais, Regionais, Nacionais ou Internacionais"] = 0        
        this.pesquisa_ino["Participação em Eventos Acadêmicos-Científicos Locais, Regionais, Nacionais e Internacionais"] = 0        
        this.pesquisa_ino["Participação em Visita ou Missão Internacional, Devidamente autorizada pela Instituição para Desenvolver Atividades Acadêmicas "] = 0        
        this.pesquisa_ino["Desenvolvimento e Registro de propriedades Imtelectuais ou Inovação Tecnológica Cadastradas no NITTEC, tais como Elaboração, Submissão e Registro de Patentes, Registro de Software, Desenho Industrial ou Projeto Piloto, Entre Outras"] = 0        
        this.pesquisa_ino["Desenvolvimento de Aplicativos Computacionais, Registrados ou Publicados em Livros ou Revistas Indexadas"] = 0        
        this.pesquisa_ino["Organização e/ou Coordenação de Pesquisa de Campo Institucional "] = 0        
        this.pesquisa_ino["Coordenação de Institutos nacionais de Ciência e Tecnologia e Inovação Externos"] = 0          

        // atividades de extensão
        this.extensao["Coordenação e Participação como Colaborador em Programas e Projetos de Extensão"] = 0 
        this.extensao["Coordenação de Cursos e Eventos de Extensão "] = 0 
        this.extensao["Publicação de Pôsters, Resumos e/ou artigos Resultantes de Projetos de Extensão, em Periódicos de Extensão "] = 0 
        this.extensao["Prestação de Serviços: Conjunto de Ações, tais como Consultorias, Laudos Técnicos e Assessorias, vinculadas às Áres de Atuação do IF Sudeste MG "] = 0 
        this.extensao["Atividades Resultantes de Projetos e Programas de Extensão, Tais como Apresentações em Eventos e Publicações de Caráter Extensionista "] = 0 
        this.extensao["Organização e/ou Coordenação de Visitas Técnicas Institucionais de Caráter Extensionista"] = 0 
        this.extensao["Coordenação e/ou Participação de Grupos de Estudos em Ativiades de Extensão Cadastrados na Diretoria de Extensão "] = 0 
        this.extensao["Relatório, Parcial ou Final, de Atividades Locais, Regionais, Nacionais ou Internacionais de Extensão"] = 0 
        this.extensao["Orientação de Alunos em Cumprimento de Atividades e/ou de Projetos de Extensão "] = 0 
        this.extensao["Coordenação de Núcleos de Estudos Interdisciplinares "] = 0 
        this.extensao["Tutoria de Empresas Juniores"] = 0 
        this.extensao["Atividades em Cursos e Eventos de Extensão Aprovados e Cadastrados na PROEX ou Diretorias de Extensão"] = 0 
        this.extensao["Preparação de Trabalho a ser Apresentado em Eventos Artísticos-Culturais "] = 0 
        this.extensao["Editoração de Revistas Culturais, de Extensão Locais, Regionais, Nacionais ou Internacionais"] = 0 
        this.extensao["Participação como Conferencista Convidado em Eventos Desportivos ou ArtísticoCulturais, Locais, Regionais, Nacionais ou Internacionais "] = 0 
        this.extensao["Atividades de Assessoria, Minicursoen Congresso, Consultoria, Perícia ou Sindiância cadastradas na PROEX e ou Diretorias de Extensão "] = 0 
        this.extensao["Participação em Concertos, Recitais e Apresentações Diversas como Instrumentista, Orquestradorm Arranjador, Compositor, Regente ou Solista "] = 0 
        this.extensao["Produção Artística em Mídia: Documentarios e/ou Material Didático, Programa de Televisão, Rádio, Video ou Videoconferência, Gravação e Edição de CD, DVD ou Outras Mídias"] = 0 
        this.extensao["Direção e Montagem de Espetáculos Musicais, Teatrais, Dança e Exposições Apresentadas ao Público"] = 0 
        this.extensao["Outras Atividades de Natureza Similar"] = 0 

        // atividades de gestão institucional e representações
        this.gestao_inst_repre["Diretorias Sistêmicas, Chefias e Coordenadorias e Ensino, Pesquisa e Extensão, Planejamento Institucional"] = 0
        this.gestao_inst_repre["Atividades de Coordenação de Curso"] = 0
        this.gestao_inst_repre["Atividades de Chefia ou Coordenação de Laboratório de Pesquisa, Ensino, Desenvolvimento Tecnológico e/ou Inovação"] = 0
        this.gestao_inst_repre["Atividades Referentes aos Processos de Cotação, Compra, Conferência de Materiais de Processos Licitatórios"] = 0
        this.gestao_inst_repre["Atividades não Remuneradas de Participação em Comissões Permanentes, Comitês, Fóruns e Representações Internas e Externas ao IF Sudeste MG "] = 0
        this.gestao_inst_repre["Representação Acadêmica e Participação em Órgãos de Formulação e Execução de Políticas Públicas de Ensino, Ciência e Tecnologia e de Políticas Sociais"] = 0
        this.gestao_inst_repre["Atividades de Participação em Comissões Temporarias"] = 0
        this.gestao_inst_repre["Atividades de Representação Interna tais como Colegiados, Conselhos, Núcleos e Docentes Estruturantes"] = 0
        this.gestao_inst_repre["Atividade de Representação Externa"] = 0
        this.gestao_inst_repre["Representação na Entidade Sindical ou de Associação de Docentes que Legalmente Representa a Categoria "] = 0
        this.gestao_inst_repre["Atividades de Participação em Banca Examinadora de Concurso Público para Professor Efetivo, Processos Simplificados de Docentes, bem Como Bancas de Seleção de Estagiários"] = 0
        this.gestao_inst_repre["Participação em Banca Examinadora de Seleção de Doutorado, Mestrado e Especialização"] = 0
        
        // atividades de qualificação e capacitação
        this.quali_capac["Curso de Graduação"] = 0
        this.quali_capac["Curso de Pós-Graduação"] = 0
        this.quali_capac["Curso de Mestrado"] = 0
        this.quali_capac["Curso de Doutorado"] = 0
        this.quali_capac["Curso de Capacitação"] = 0

    }

    setChPrepManuEnsino(vetor) {
        if (!Array.isArray(vetor)) {
            throw new Error("O parâmetro deve ser um array.");
            return;
        }
    
        let keys = Object.keys(this.prep_manu_ensino);
    
        if (vetor.length !== keys.length) {
            console.error("O número de valores não corresponde ao número de chaves.");
            return;
        }
    
        keys.forEach((key, index) => {
            this.prep_manu_ensino[key] = vetor[index];
        });
    }

    setChApoioEnsino(vetor) {
        if (!Array.isArray(vetor)) {
            throw new Error("O parâmetro deve ser um array.");
        }
    
        let keys = Object.keys(this.apoio_ensino);
    
        if (vetor.length !== keys.length) {
            throw new Error("O número de valores não corresponde ao número de chaves.");
        }
    
        keys.forEach((key, index) => {
            this.apoio_ensino[key] = vetor[index];
        });
    }

    setOrientacao(vetor) {
        if (!Array.isArray(vetor)) {
            throw new Error("O parâmetro deve ser um array.");
        }
    
        let keys = Object.keys(this.orientacao);
    
        if (vetor.length !== keys.length) {
            throw new Error("O número de valores não corresponde ao número de chaves.");
        }
    
        keys.forEach((key, index) => {
            this.orientacao[key] = vetor[index];
        });
    }

    setPesquisaIno(vetor) {
        if (!Array.isArray(vetor)) {
            throw new Error("O parâmetro deve ser um array.");
        }
    
        let keys = Object.keys(this.pesquisa_ino);
    
        if (vetor.length !== keys.length) {
            throw new Error("O número de valores não corresponde ao número de chaves.");
        }
    
        keys.forEach((key, index) => {
            this.pesquisa_ino[key] = vetor[index];
        });
    }

    setExtensao(vetor) {
        if (!Array.isArray(vetor)) {
            throw new Error("O parâmetro deve ser um array.");
        }
    
        let keys = Object.keys(this.extensao);
    
        if (vetor.length !== keys.length) {
            throw new Error("O número de valores não corresponde ao número de chaves.");
        }
    
        keys.forEach((key, index) => {
            this.extensao[key] = vetor[index];
        });
    }

    setGestaoInstRepre(vetor) {
        if (!Array.isArray(vetor)) {
            throw new Error("O parâmetro deve ser um array.");
        }
    
        let keys = Object.keys(this.gestao_inst_repre);
    
        if (vetor.length !== keys.length) {
            throw new Error("O número de valores não corresponde ao número de chaves.");
        }
    
        keys.forEach((key, index) => {
            this.gestao_inst_repre[key] = vetor[index];
        });
    }

    setQualiCapac(vetor) {
        if (!Array.isArray(vetor)) {
            throw new Error("O parâmetro deve ser um array.");
        }
    
        let keys = Object.keys(this.quali_capac);
    
        if (vetor.length !== keys.length) {
            throw new Error("O número de valores não corresponde ao número de chaves.");
        }
    
        keys.forEach((key, index) => {
            this.quali_capac[key] = vetor[index];
        });
    }

    setJustificativa(just) {
        if(typeof just != "string")
            throw new Error("A justificativa deve ser uma string");

        this.justificativa = just;
    }

    getChPrepManuEnsino() { return this.prep_manu_ensino; }
    getApoioEnsino() { return this.apoio_ensino; }
    getOrientacao() { return this.orientacao; }
    getPesquisaIno() { return this.pesquisa_ino; }
    getExtensao() { return this.extensao; }
    getGestaoInstRepre() { return this.gestao_inst_repre; }
    getQualiCapac() { return this.quali_capac; }
    getJustificativa() { return this.justificativa; }

}
