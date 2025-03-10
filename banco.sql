create database dbTeste;
use dbTeste;

create table professor (
    id int primary key auto_increment,
    nome VARCHAR(80) not null,
    email VARCHAR(80) not null,
    senha VARCHAR(80) not null,
    telefone VARCHAR(45) not null,
    siape VARCHAR(7) not null,
    ch DOUBLE not null
);

insert into professor(nome, email, senha, telefone, siape, ch) values ("Fulano", "teste@gmail.com", md5("123456"), "3312341234", "1234567", 40);

CREATE TABLE pid (
    id INT AUTO_INCREMENT PRIMARY KEY,

    -- Preparação, Manutenção e Ensino
    estudo_planejamento_elaboracao_materiais_praticas_pedagogicas INT DEFAULT 0,
    preparacao_aulas_teoricas_praticas INT DEFAULT 0,
    organizacao_material_pedagogico INT DEFAULT 0,
    producao_correcao_instrumentos_avaliacao INT DEFAULT 0,
    registro_atividades_academicas INT DEFAULT 0,

    -- Atividades de Apoio ao Ensino
    atendimento_alunos_extraclasse INT DEFAULT 0,
    reunioes_pedagogicas_conselhos_classe_reunioes_pais INT DEFAULT 0,
    participacao_banca_trabalho_conclusao_curso INT DEFAULT 0,
    atendimento_alunos_regime_exercicio_domiciliar INT DEFAULT 0,
    orientacao_olimpiadas_conhecimento_competicoes_diversas INT DEFAULT 0,
    organizacao_coordenacao_acompanhamento_visitas_tecnicas INT DEFAULT 0,
    nivelamento_sem_constituicao_turma INT DEFAULT 0,

    -- Atividades de Orientação
    orientacao_estagio INT DEFAULT 0,
    coordenacao_participacao_projeto_ensino INT DEFAULT 0,
    orientacao_academica INT DEFAULT 0,
    orientacao_monitorias_ensino_iniciacao_docencia INT DEFAULT 0,
    orientacao_trabalhos_conclusao_curso INT DEFAULT 0,
    orientacao_coorientacao_mestrado_doutorado INT DEFAULT 0,
    participacao_elaboracao_revisao_projetos_pedagogicos_cursos INT DEFAULT 0,

    -- Atividades de Pesquisa e Inovação
    coordenacao_participacao_projeto_pesquisa INT DEFAULT 0,
    orientacao_aluno_iniciacao_pesquisa_cientifica_tecnologica INT DEFAULT 0,
    coordenacao_participacao_grupo_pesquisa_cnpq INT DEFAULT 0,
    participacao_banca_examinadora_tese_dissertacao_monografia INT DEFAULT 0,
    participacao_banca_examinadora_monografia_graduacao_tcc_curso_tecnico INT DEFAULT 0,
    participacao_banca_examinadora_qualificacao_mestrado_doutorado INT DEFAULT 0,
    preparacao_artigo_publicacao_evento_academico INT DEFAULT 0,
    preparacao_artigo_publicacao_periodico INT DEFAULT 0,
    preparacao_livro_capitulo_manual_relatorio_tecnico INT DEFAULT 0,
    editoracao_revistas_cientificas INT DEFAULT 0,
    editoracao_organizacao_traducao_livros_periodicos INT DEFAULT 0,
    participacao_conselho_editorial INT DEFAULT 0,
    participacao_editor_membro_parecerista_publicacoes INT DEFAULT 0,
    traducao_artigo_didatico_cultural_tecnico INT DEFAULT 0,
    participacao_banco_avaliadores_pesquisa_comissao_cientifica INT DEFAULT 0,
    consultor_analise_projetos_selecao_editais INT DEFAULT 0,
    consultor_eventos_academicos INT DEFAULT 0,
    coordenacao_participacao_comissao_organizadora_eventos_cientificos INT DEFAULT 0,
    participacao_conferencista_eventos_cientificos INT DEFAULT 0,
    participacao_eventos_academicos_cientificos INT DEFAULT 0,
    participacao_visita_missao_internacional_academica INT DEFAULT 0,
    desenvolvimento_registro_propriedade_intelectual_inovacao_tecnologica INT DEFAULT 0,
    desenvolvimento_aplicativos_computacionais_publicados INT DEFAULT 0,
    organizacao_coordenacao_pesquisa_campo_institucional INT DEFAULT 0,
    coordenacao_institutos_nacionais_ciencia_tecnologia_inovacao INT DEFAULT 0,

    -- Atividades de Extensão
    coordenacao_participacao_programas_projetos_extensao INT DEFAULT 0,
    coordenacao_cursos_eventos_extensao INT DEFAULT 0,
    publicacao_posters_resumos_artigos_extensao INT DEFAULT 0,
    prestacao_servicos_consultorias_laudos_tecnicos_assessorias INT DEFAULT 0,
    atividades_resultantes_projetos_programas_extensao INT DEFAULT 0,
    organizacao_coordenacao_visitas_tecnicas_extensionistas INT DEFAULT 0,
    coordenacao_participacao_grupos_estudo_extensao INT DEFAULT 0,
    orientacao_alunos_atividades_projetos_extensao INT DEFAULT 0,
    coordenacao_nucleos_estudos_interdisciplinares INT DEFAULT 0,
    tutoria_empresas_juniores INT DEFAULT 0,
    atividades_cursos_eventos_extensao_aprovados INT DEFAULT 0,
    preparacao_trabalho_eventos_artistico_culturais INT DEFAULT 0,
    editoracao_revistas_culturais_extensao INT DEFAULT 0,
    participacao_conferencista_eventos_desportivos_artistico_culturais INT DEFAULT 0,
    atividades_assessoria_minicurso_congresso INT DEFAULT 0,
    participacao_concertos_recitais_apresentacoes INT DEFAULT 0,
    producao_artistica_midia INT DEFAULT 0,
    direcao_montagem_espetaculos_apresentacoes INT DEFAULT 0,
    outras_atividades_natureza_similar INT DEFAULT 0,

    -- Atividades de Gestão Institucional e Representação
    diretorias_sistemicas_chefias_coordenadorias INT DEFAULT 0,
    atividades_coordenacao_curso INT DEFAULT 0,
    atividades_chefia_coordenacao_laboratorio INT DEFAULT 0,
    atividades_processos_licitatorios INT DEFAULT 0,
    atividades_participacao_comissoes_nao_remuneradas INT DEFAULT 0,
    representacao_academica_participacao_orgaos_formulacao INT DEFAULT 0,
    atividades_participacao_comissoes_temporarias INT DEFAULT 0,
    atividades_representacao_interna_externa INT DEFAULT 0,
    representacao_sindical_associacao_docentes INT DEFAULT 0,
    atividades_participacao_banca_examinadora_concurso_publico INT DEFAULT 0,
    participacao_banca_selecao_doutorado_mestrado_especializacao INT DEFAULT 0,
    representacao_organismos_nacionais_internacionais INT DEFAULT 0,

    -- Atividades de Qualificação e Capacitação
    curso_graduacao INT DEFAULT 0,
    curso_pos_graduacao INT DEFAULT 0,
    curso_mestrado INT DEFAULT 0,
    curso_doutorado INT DEFAULT 0,
    curso_capacitacao INT DEFAULT 0
);

