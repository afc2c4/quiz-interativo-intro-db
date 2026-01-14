
import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    axis: "Fundamentos Relacionais",
    context: "Em uma aula de história da computação na escola técnica, o professor destaca o ano de 1970 como um divisor de águas no gerenciamento de dados. Ele menciona a publicação de um artigo científico pela IBM que propôs separar a estrutura física do armazenamento da lógica dos dados.",
    statement: "Com base no material de referência, qual pesquisador foi o responsável por essa publicação seminal que introduziu o Modelo Relacional?",
    options: {
      A: "O matemático Alan Turing.",
      B: "O cientista Edgar Frank Codd.",
      C: "O engenheiro Peter Chen.",
      D: "O pesquisador Carlo Strozzi.",
      E: "O desenvolvedor Johan Oskarsson."
    },
    correctAnswer: "B"
  },
  {
    id: 2,
    axis: "Fundamentos Relacionais",
    context: "Um estagiário de TI precisa justificar para a gerência a migração de dados críticos da empresa, que atualmente estão em planilhas, para um Sistema Gerenciador de Banco de Dados (SGBD).",
    statement: "Segundo a comparação apresentada no documento, qual é uma característica exclusiva dos Bancos de Dados em contraste com as planilhas?",
    options: {
      A: "São ideais para um único usuário realizar manipulações simples.",
      B: "Suportam múltiplos usuários simultâneos com integridade complexa.",
      C: "São projetados para baixo volume de registros para evitar lentidão.",
      D: "Possuem muitas redundâncias visuais para facilitar a leitura humana.",
      E: "Não exigem definição de tipos de dados antes da inserção."
    },
    correctAnswer: "B"
  },
  {
    id: 3,
    axis: "Fundamentos Relacionais",
    context: "Durante a modelagem de uma tabela de 'Estudantes', o instrutor aponta para uma linha completa que contém o RM, nome e turma de um aluno específico, explicando a terminologia técnica.",
    statement: "No contexto da estrutura do modelo relacional, como é tecnicamente denominada uma linha que representa uma instância única de dados?",
    options: {
      A: "Atributo.",
      B: "Coluna.",
      C: "Esquema.",
      D: "Tupla.",
      E: "Célula."
    },
    correctAnswer: "D"
  },
  {
    id: 4,
    axis: "Fundamentos Relacionais",
    context: "Para garantir que não existam dois produtos com o mesmo código no sistema do almoxarifado da escola, os alunos devem configurar uma restrição na tabela 'Produtos'.",
    statement: "Qual mecanismo é descrito no material como o identificador exclusivo de cada registro, que não pode conter valores nulos?",
    options: {
      A: "Chave Estrangeira (FK).",
      B: "Chave Primária (PK).",
      C: "Índice Secundário.",
      D: "Gatilho (Trigger).",
      E: "Visualização (View)."
    },
    correctAnswer: "B"
  },
  {
    id: 7,
    axis: "Fundamentos Relacionais",
    context: "Ao explicar a importância de bancos relacionais para bancos financeiros, o professor detalha o acrônimo ACID.",
    statement: "Qual propriedade do ACID garante a lógica do 'tudo ou nada', onde a transação é tratada como uma unidade única?",
    options: {
      A: "Atomicidade.",
      B: "Consistência.",
      C: "Isolamento.",
      D: "Durabilidade.",
      E: "Disponibilidade."
    },
    correctAnswer: "A"
  },
  {
    id: 9,
    axis: "Fundamentos Relacionais",
    context: "A escola técnica está desenvolvendo um sistema para uma startup que possui dados híbridos: parte estruturada e parte variável.",
    statement: "No conceito visual de dados híbridos, qual formato é utilizado em uma coluna específica para agrupar atributos variáveis, evitando campos nulos?",
    options: {
      A: "XML.",
      B: "CSV.",
      C: "JSON.",
      D: "HTML.",
      E: "YAML."
    },
    correctAnswer: "C"
  },
  {
    id: 26,
    axis: "Paradigma NoSQL",
    context: "Em uma aula introdutória sobre novas tecnologias de banco de dados, o professor corrige uma concepção errada comum sobre o significado da sigla NoSQL.",
    statement: "Segundo o material, qual é o significado atual aceito para a sigla NoSQL?",
    options: {
      A: "No SQL Allowed (Não é permitido SQL).",
      B: "Not Only SQL (Não Apenas SQL).",
      C: "Never Open SQL (Nunca SQL Aberto).",
      D: "New Operating SQL (Novo SQL Operacional).",
      E: "Non-Structured Query Logic."
    },
    correctAnswer: "B"
  },
  {
    id: 29,
    axis: "Paradigma NoSQL",
    context: "O Teorema CAP é uma regra fundamental para sistemas distribuídos.",
    statement: "Segundo este teorema, quais das três garantias não podem ser obtidas simultaneamente em sua totalidade?",
    options: {
      A: "Consistência, Atomicidade, Performance.",
      B: "Consistência, Disponibilidade, Tolerância à Partição.",
      C: "Confiabilidade, Acesso, Persistência.",
      D: "Capacidade, Autonomia, Particionamento.",
      E: "Custo, Agilidade, Precisão."
    },
    correctAnswer: "B"
  },
  {
    id: 31,
    axis: "Paradigma NoSQL",
    context: "Para um sistema que precisa de velocidade extrema em memória RAM, como um cache de sessão.",
    statement: "Qual banco é citado como exemplo popular de Chave-Valor operando em RAM?",
    options: {
      A: "Neo4j.",
      B: "Cassandra.",
      C: "Redis.",
      D: "HBase.",
      E: "Couchbase."
    },
    correctAnswer: "C"
  },
  {
    id: 33,
    axis: "Paradigma NoSQL",
    context: "O desenvolvimento ágil se beneficia da flexibilidade do NoSQL.",
    statement: "O que significa, na prática, um banco ser 'Schema-less'?",
    options: {
      A: "Os dados são apagados diariamente.",
      B: "Não é possível fazer consultas.",
      C: "Basta inserir o dado com a nova propriedade sem alterar a tabela antes.",
      D: "Todas as linhas devem ser idênticas.",
      E: "O banco não tem segurança."
    },
    correctAnswer: "C"
  },
  {
    id: 61,
    axis: "Modelagem de Dados",
    context: "Na aula de projeto de banco de dados, o professor explica os níveis de abstração.",
    statement: "Qual é a característica principal do Modelo Conceitual?",
    options: {
      A: "Define índices e partições.",
      B: "Visão de alto nível, livre de detalhes tecnológicos.",
      C: "Foca em como os dados são gravados no disco.",
      D: "Define tipos de dados (int, varchar).",
      E: "É gerado pelo banco automaticamente."
    },
    correctAnswer: "B"
  },
  {
    id: 63,
    axis: "Modelagem de Dados",
    context: "No diagrama MER, formas geométricas têm significados específicos.",
    statement: "O que o 'Losango' representa graficamente?",
    options: {
      A: "Atributos.",
      B: "Entidades.",
      C: "Relacionamentos.",
      D: "Chaves.",
      E: "Notas."
    },
    correctAnswer: "C"
  },
  {
    id: 71,
    axis: "Modelagem de Dados",
    context: "A forma geométrica 'Elipse' aparece no diagrama.",
    statement: "O que a Elipse representa no MER?",
    options: {
      A: "Entidades.",
      B: "Relacionamentos.",
      C: "Atributos.",
      D: "Chaves.",
      E: "Ligações."
    },
    correctAnswer: "C"
  },
  {
    id: 81,
    axis: "Distribuição e Escalabilidade",
    context: "Uma escola quer melhorar seu servidor comprando peças melhores.",
    statement: "Essa ação caracteriza qual tipo de escalabilidade?",
    options: {
      A: "Horizontal.",
      B: "Vertical (Scale Up).",
      C: "Diagonal.",
      D: "Distribuída.",
      E: "P2P."
    },
    correctAnswer: "B"
  },
  {
    id: 85,
    axis: "Distribuição e Escalabilidade",
    context: "O conceito de Sharding é vital.",
    statement: "O que significa Sharding?",
    options: {
      A: "Backup em fita.",
      B: "Dividir os dados em múltiplos servidores (fragmentação).",
      C: "Criptografia.",
      D: "Juntar tabelas.",
      E: "Comprimir arquivos."
    },
    correctAnswer: "B"
  },
  {
    id: 98,
    axis: "Distribuição e Escalabilidade",
    context: "Consistência Forte exige mais do sistema.",
    statement: "O que caracteriza a Consistência Forte?",
    options: {
      A: "Uma confirmação basta.",
      B: "Nenhuma confirmação.",
      C: "Exige confirmação de todas as réplicas; é mais lenta.",
      D: "É a mais rápida.",
      E: "É insegura."
    },
    correctAnswer: "C"
  }
];
