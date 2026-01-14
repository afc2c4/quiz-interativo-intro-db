
import { Question } from './types';

export const questions: Question[] = [
  // Eixo I: Fundamentos Relacionais (01-25)
  {
    id: 1,
    axis: "Fundamentos Relacionais",
    content: "Em uma aula de história da computação na escola técnica, o professor destaca o ano de 1970 como um divisor de águas no gerenciamento de dados. Ele menciona a publicação de um artigo científico pela IBM que propôs separar a estrutura física do armazenamento da lógica dos dados. Qual pesquisador foi o responsável por essa publicação seminal que introduziu o Modelo Relacional?",
    options: {
      A: "O matemático Alan Turing.",
      B: "O cientista Edgar Frank Codd.",
      C: "O engenheiro Peter Chen.",
      D: "O pesquisador Carlo Strozzi.",
      E: "O desenvolvedor Johan Oskarsson."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Alan Turing é o pai da ciência da computação teórica e criptografia, mas não é o autor do modelo relacional.",
      B: "Correto! E.F. Codd, enquanto trabalhava na IBM em 1970, publicou o artigo que definiu as relações e a álgebra relacional.",
      C: "Incorreto. Peter Chen criou o Modelo Entidade-Relacionamento (MER) em 1976, uma técnica de modelagem posterior.",
      D: "Incorreto. Carlo Strozzi usou o termo NoSQL em 1998 para um banco relacional específico, não é o criador do modelo original.",
      E: "Incorreto. Johan Oskarsson popularizou o movimento NoSQL moderno em 2009."
    }
  },
  {
    id: 2,
    axis: "Fundamentos Relacionais",
    content: "Um estagiário de TI precisa justificar para a gerência a migração de dados críticos da empresa, que atualmente estão em planilhas, para um Sistema Gerenciador de Banco de Dados (SGBD). Qual é uma característica exclusiva dos Bancos de Dados em contraste com as planilhas?",
    options: {
      A: "São ideais para um único usuário realizar manipulações simples.",
      B: "Suportam múltiplos usuários simultâneos com integridade complexa.",
      C: "São projetados para baixo volume de registros para evitar lentidão.",
      D: "Possuem muitas redundâncias visuais para facilitar a leitura humana.",
      E: "Não exigem definição de tipos de dados antes da inserção."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Isso descreve justamente a facilidade das planilhas para produtividade pessoal rápida.",
      B: "Correto! SGBDs gerenciam transações simultâneas de milhares de usuários garantindo que os dados não se corrompam (ACID).",
      C: "Incorreto. Ao contrário, SGBDs são otimizados para volumes massivos (petabytes), onde planilhas travariam.",
      D: "Incorreto. Bancos de dados evitam redundância através da Normalização; planilhas incentivam a repetição visual.",
      E: "Incorreto. Bancos relacionais exigem tipos rígidos (int, date, etc.) para garantir a integridade."
    }
  },
  {
    id: 3,
    axis: "Fundamentos Relacionais",
    content: "Durante a modelagem de uma tabela de 'Estudantes', o instrutor aponta para uma linha completa que contém o RM, nome e turma de um aluno específico, explicando a terminologia técnica. Como é tecnicamente denominada uma linha que representa uma instância única de dados no modelo relacional?",
    options: {
      A: "Atributo.",
      B: "Coluna.",
      C: "Esquema.",
      D: "Tupla.",
      E: "Célula."
    },
    correctAnswer: "D",
    optionExplanations: {
      A: "Incorreto. Atributo é o nome formal para as colunas da tabela.",
      B: "Incorreto. Coluna é o termo comum para atributos; a questão pede o nome técnico da linha.",
      C: "Incorreto. Esquema refere-se à estrutura lógica (definição) de toda a base.",
      D: "Correto! No modelo relacional formal, uma linha é chamada de 'Tupla', representando um registro único.",
      E: "Incorreto. Célula é o cruzamento de linha/coluna, termo típico de planilhas."
    }
  },
  {
    id: 4,
    axis: "Fundamentos Relacionais",
    content: "Para garantir que não existam dois produtos com o mesmo código no sistema do almoxarifado da escola, os alunos devem configurar uma restrição na tabela 'Produtos'. Qual mecanismo é descrito no material como o identificador exclusivo de cada registro, que não pode conter valores nulos?",
    options: {
      A: "Chave Estrangeira (FK).",
      B: "Chave Primária (PK).",
      C: "Índice Secundário.",
      D: "Gatilho (Trigger).",
      E: "Visualização (View)."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. A FK serve para ligar tabelas, não para identificar exclusivamente a linha da própria tabela.",
      B: "Correto! A Primary Key é obrigatória e única, servindo como a identidade absoluta de cada registro.",
      C: "Incorreto. Índices melhoram a busca, mas nem todos garantem a unicidade obrigatória do registro.",
      D: "Incorreto. Triggers são códigos automáticos disparados por eventos, não identificadores de dados.",
      E: "Incorreto. Views são apenas consultas salvas (espelhos virtuais)."
    }
  },
  {
    id: 5,
    axis: "Fundamentos Relacionais",
    content: "Um sistema acadêmico precisa vincular as notas lançadas aos respectivos alunos. Para isso, a tabela de 'Notas' precisa referenciar a tabela de 'Alunos'. Qual elemento cria esse 'relacionamento' ao apontar para a Chave Primária de outra tabela?",
    options: {
      A: "Chave Mestra.",
      B: "Chave Candidata.",
      C: "Chave Estrangeira.",
      D: "Chave de Acesso.",
      E: "Chave Composta."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. 'Chave Mestra' não é um termo técnico para ligações entre tabelas no modelo relacional.",
      B: "Incorreto. Chaves candidatas são atributos que poderiam ser PKs mas não foram escolhidos.",
      C: "Correto! A Foreign Key estabelece a integridade referencial, ligando registros de tabelas distintas.",
      D: "Incorreto. Chave de acesso é um termo de segurança/criptografia.",
      E: "Incorreto. Chave composta é uma PK formada por mais de uma coluna."
    }
  },
  {
    id: 6,
    axis: "Fundamentos Relacionais",
    content: "Em um teste sobre integridade de dados, pede-se a definição de 'Integridade Referencial'. Qual alternativa descreve corretamente a Integridade Referencial segundo o documento?",
    options: {
      A: "Garante que cada linha seja única na tabela.",
      B: "Assegura que o banco reverta operações em caso de erro.",
      C: "Garante que uma chave estrangeira aponte para uma chave primária válida.",
      D: "Certifica que o usuário tenha permissão de escrita.",
      E: "Impede o acesso simultâneo de dois usuários."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Isso é a Integridade de Entidade, garantida pela PK.",
      B: "Incorreto. Isso refere-se à propriedade de Atomicidade.",
      C: "Correto! Garante que não existam 'links quebrados' entre tabelas; se você aponta para um aluno ID 10, esse aluno deve existir.",
      D: "Incorreto. Isso é parte do controle de privilégios (DCL).",
      E: "Incorreto. Isso é Isolamento de transações."
    }
  },
  {
    id: 7,
    axis: "Fundamentos Relacionais",
    content: "Ao explicar a importância de bancos relacionais para bancos financeiros, o professor detalha o acrônimo ACID. Qual propriedade do ACID garante a lógica do 'tudo ou nada', onde a transação é tratada como uma unidade única?",
    options: {
      A: "Atomicidade.",
      B: "Consistência.",
      C: "Isolamento.",
      D: "Durabilidade.",
      E: "Disponibilidade."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! A Atomicidade garante que, se um passo falhar, toda a transação é revertida.",
      B: "Incorreto. Consistência garante que o banco respeite todas as regras de negócio e integridade.",
      C: "Incorreto. Isolamento impede que transações simultâneas interfiram uma na outra.",
      D: "Incorreto. Durabilidade garante que os dados salvos persistam em caso de falha física.",
      E: "Incorreto. Disponibilidade não faz parte do ACID (é do Teorema CAP)."
    }
  },
  {
    id: 8,
    axis: "Fundamentos Relacionais",
    content: "Discutindo a robustez dos dados, um aluno pergunta o que acontece se o servidor desligar logo após uma venda ser confirmada. Qual propriedade ACID assegura que uma transação confirmada (committed) seja salva permanentemente, resistindo a falhas de energia?",
    options: {
      A: "Atomicidade.",
      B: "Consistência.",
      C: "Isolamento.",
      D: "Durabilidade.",
      E: "Elasticidade."
    },
    correctAnswer: "D",
    optionExplanations: {
      A: "Incorreto. Atomicidade foca na indivisibilidade, não na gravação física pós-falha.",
      B: "Incorreto. Consistência foca na validade das transições de estado.",
      C: "Incorreto. Isolamento foca na separação de processos simultâneos.",
      D: "Correto! A Durabilidade garante que o COMMIT seja escrito em armazenamento persistente (disco).",
      E: "Incorreto. Elasticidade é um termo de computação em nuvem, não de transações ACID."
    }
  },
  {
    id: 9,
    axis: "Fundamentos Relacionais",
    content: "A escola técnica está desenvolvendo um sistema para uma startup que possui dados híbridos: parte estruturada e parte variável. No conceito visual de dados híbridos, qual formato é utilizado em uma coluna específica para agrupar atributos variáveis, evitando campos nulos?",
    options: {
      A: "XML.",
      B: "CSV.",
      C: "JSON.",
      D: "HTML.",
      E: "YAML."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. XML é mais pesado e verboso; o mercado adotou outra tecnologia para dados híbridos em bancos.",
      B: "Incorreto. CSV é plano e não suporta aninhamento de atributos variáveis de forma eficiente.",
      C: "Correto! JSON permite armazenar objetos flexíveis dentro de colunas de bancos relacionais modernos (PostgreSQL, MySQL, etc.).",
      D: "Incorreto. HTML é marcação para páginas web.",
      E: "Incorreto. YAML é usado para configurações, raramente como tipo de dado interno de banco."
    }
  },
  {
    id: 10,
    axis: "Fundamentos Relacionais",
    content: "Um analista de sistemas precisa escolher um banco de dados para um sistema de transações financeiras críticas. Por que os BDRs são a escolha padrão para esse cenário, segundo o material?",
    options: {
      A: "Pela facilidade de escalar horizontalmente em hardware barato.",
      B: "Pelo suporte a transações complexas e conformidade com ACID.",
      C: "Pela capacidade de armazenar dados sem estrutura prévia.",
      D: "Pelo baixo custo de armazenamento em nuvem.",
      E: "Pela velocidade superior em dados não estruturados."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Relacionais tradicionalmente preferem escala vertical; a horizontal é ponto forte do NoSQL.",
      B: "Correto! A integridade financeira exige a segurança absoluta que só o ACID oferece em cenários críticos.",
      C: "Incorreto. BDRs exigem estrutura (esquema) prévia rígida.",
      D: "Incorreto. Custos de nuvem não são o motivo técnico para transações financeiras críticas.",
      E: "Incorreto. NoSQL é mais rápido para dados não estruturados, não o BDR."
    }
  },
  {
    id: 11,
    axis: "Fundamentos Relacionais",
    content: "Em uma aula sobre 'Consistência', é apresentado um cenário onde uma transação tenta salvar um texto em um campo definido como data. Se uma transação violar as regras de consistência, qual ação o banco deve realizar para manter o estado válido?",
    options: {
      A: "Corrigir o dado automaticamente.",
      B: "Reverter (rollback) toda a operação.",
      C: "Ignorar o campo inválido e salvar o restante.",
      D: "Criar uma nova tabela para o dado incorreto.",
      E: "Notificar o administrador por e-mail."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. O banco nunca deve 'adivinhar' a intenção do usuário; isso geraria dados inconsistentes.",
      B: "Correto! Se houver violação de regra (tipo, constraint, etc.), a transação é cancelada por completo.",
      C: "Incorreto. Isso deixaria o registro em estado parcial inválido.",
      D: "Incorreto. Estruturas de tabelas são fixas, não criadas por erros de input.",
      E: "Incorreto. Notificações ocorrem, mas a ação imediata do motor do banco é o rollback."
    }
  },
  {
    id: 12,
    axis: "Fundamentos Relacionais",
    content: "Os alunos devem instalar um SGBD Relacional Open Source para o laboratório, visando economizar com licenças. Qual das opções abaixo é listada como um exemplo de SGBD Open Source no material?",
    options: {
      A: "Oracle Database.",
      B: "Microsoft SQL Server.",
      C: "IBM Db2.",
      D: "PostgreSQL.",
      E: "SAP Sybase."
    },
    correctAnswer: "D",
    optionExplanations: {
      A: "Incorreto. Oracle é proprietário e de alto custo.",
      B: "Incorreto. SQL Server é proprietário da Microsoft.",
      C: "Incorreto. Db2 é proprietário da IBM.",
      D: "Correto! O PostgreSQL é a principal referência de SGBD relacional robusto e de código aberto.",
      E: "Incorreto. Sybase é um software comercial."
    }
  },
  {
    id: 13,
    axis: "Fundamentos Relacionais",
    content: "O material destaca que a estrutura física dos dados não precisa ser alterada para que se criem novas visualizações das informações. Essa característica é associada a qual benefício dos BDRs?",
    options: {
      A: "Independência de Dados.",
      B: "Redundância.",
      C: "Fragmentação.",
      D: "Latência.",
      E: "Volatilidade."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! Permite separar o 'como' o dado é guardado de 'como' ele é visto pelos apps.",
      B: "Incorreto. Redundância é algo que o modelo relacional luta para eliminar.",
      C: "Incorreto. Fragmentação é um conceito de bancos distribuídos.",
      D: "Incorreto. Latência é tempo de resposta.",
      E: "Incorreto. Volatilidade refere-se à frequência de mudança do dado."
    }
  },
  {
    id: 14,
    axis: "Fundamentos Relacionais",
    content: "Em um ambiente corporativo com centenas de funcionários acessando o mesmo banco, a colaboração é essencial. Qual mecanismo é citado para garantir que dois usuários não editem o mesmo dado exato no mesmo milissegundo, prevenindo conflitos?",
    options: {
      A: "Replicação.",
      B: "Sharding.",
      C: "Locking (Bloqueio).",
      D: "Parsing.",
      E: "Compilação."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Replicação é copiar dados para outros servidores.",
      B: "Incorreto. Sharding é dividir o banco em pedaços.",
      C: "Correto! O Locking trava o registro para um usuário até que a transação termine, impedindo edições cruzadas.",
      D: "Incorreto. Parsing é a análise sintática do comando SQL.",
      E: "Incorreto. Compilação é transformar código em binário."
    }
  },
  {
    id: 15,
    axis: "Fundamentos Relacionais",
    content: "A segurança é um pilar dos BDRs. O instrutor menciona que é possível definir exatamente quem pode ler e quem pode escrever. Esse recurso de segurança granular é denominado:",
    options: {
      A: "Criptografia em repouso.",
      B: "Privilégios de Acesso (GRANT/REVOKE).",
      C: "Autenticação de dois fatores.",
      D: "Firewall de banco de dados.",
      E: "Mascaramento de dados."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Criptografia protege contra roubo do HD físico.",
      B: "Correto! Através de comandos DCL, o DBA define as permissões de cada usuário por tabela/coluna.",
      C: "Incorreto. 2FA é um método de login externo.",
      D: "Incorreto. Firewall protege a rede contra intrusos.",
      E: "Incorreto. Mascaramento oculta dados mas não define permissões de leitura/escrita."
    }
  },
  {
    id: 16,
    axis: "Fundamentos Relacionais",
    content: "Analisando a estrutura de tabelas, o professor explica que 'Um lugar para cada coisa, e cada coisa em seu lugar' é o lema de um conceito importante. Qual é o objetivo principal da 'Normalização' citado no documento para melhorar a integridade?",
    options: {
      A: "Aumentar a redundância para backup.",
      B: "Eliminar a duplicação desnecessária de dados.",
      C: "Permitir campos multivalorados.",
      D: "Remover todas as chaves estrangeiras.",
      E: "Desnormalizar para ganhar velocidade."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Redundância gera inconsistência; backups são feitos por outros métodos.",
      B: "Correto! A normalização divide os dados para que cada fato seja armazenado em apenas um local.",
      C: "Incorreto. A Primeira Forma Normal proíbe justamente campos multivalorados.",
      D: "Incorreto. A normalização exige mais chaves estrangeiras para ligar as novas tabelas.",
      E: "Incorreto. Desnormalização é o oposto da normalização."
    }
  },
  {
    id: 17,
    axis: "Fundamentos Relacionais",
    content: "Um cliente muda de endereço e a empresa possui um banco de dados normalizado. Qual é a vantagem da normalização nesse cenário de manutenção?",
    options: {
      A: "O sistema cria um novo registro de cliente.",
      B: "Você atualiza o endereço em apenas um lugar.",
      C: "O endereço antigo é mantido como histórico automaticamente.",
      D: "É necessário atualizar cada pedido feito pelo cliente.",
      E: "A atualização é bloqueada para manter o histórico."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Isso geraria duplicidade de clientes.",
      B: "Correto! Como o endereço não está repetido nos pedidos (está na tabela de cliente), uma alteração reflete em todo o sistema.",
      C: "Incorreto. Histórico exige tabelas de auditoria específicas, não vem da normalização pura.",
      D: "Incorreto. Isso seria necessário em um banco não normalizado (onde o endereço estaria em cada pedido).",
      E: "Incorreto. Bancos normalizados permitem atualizações dinâmicas."
    }
  },
  {
    id: 18,
    axis: "Fundamentos Relacionais",
    content: "Ao revisar as características gerais dos BDRs, os alunos analisam um quadro resumo. Qual é apontada como a 'Principal Força' dos modelos relacionais nesse resumo?",
    options: {
      A: "Escalabilidade horizontal infinita.",
      B: "Flexibilidade de esquema (schema-less).",
      C: "Integridade de dados e Transações (ACID).",
      D: "Alta performance para Big Data não estruturado.",
      E: "Baixo custo de licenciamento em todas as versões."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Ponto forte do NoSQL.",
      B: "Incorreto. BDRs têm esquemas rígidos (rigidity).",
      C: "Correto! A confiabilidade técnica e jurídica das transações é o maior trunfo dos relacionais.",
      D: "Incorreto. BDRs sofrem para escalar com dados não estruturados.",
      E: "Incorreto. Muitos BDRs líderes (Oracle/SQL Server) são caros."
    }
  },
  {
    id: 19,
    axis: "Fundamentos Relacionais",
    content: "O setor de saúde exige rigor no gerenciamento de prontuários médicos. Segundo o material, por que BDRs são ideais para registros de pacientes?",
    options: {
      A: "Para permitir que médicos alterem dados sem rastro.",
      B: "Porque não se pode permitir 'dados órfãos' ou inválidos.",
      C: "Para suportar imagens de raio-x em alta resolução.",
      D: "Porque a estrutura dos dados médicos muda diariamente.",
      E: "Para facilitar o acesso público aos dados."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Alterações devem ser auditadas e rastreáveis.",
      B: "Correto! A integridade referencial garante que uma prescrição só exista ligada a um paciente real.",
      C: "Incorreto. Arquivos grandes costumam ser guardados fora do BDR (Object Storage).",
      D: "Incorreto. Prontuários são padronizados, a estrutura é estável.",
      E: "Incorreto. Prontuários são sigilosos."
    }
  },
  {
    id: 20,
    axis: "Fundamentos Relacionais",
    content: "A identificação única é um conceito central. O modelo relacional exige que cada linha tenha uma chave única para permitir:",
    options: {
      A: "Conexões precisas entre os dados.",
      B: "Consultas aproximadas.",
      C: "Duplicação controlada de registros.",
      D: "Acesso anônimo aos dados.",
      E: "Armazenamento em nuvem."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! Sem uma PK única, a FK não conseguiria referenciar o registro correto com precisão absoluta.",
      B: "Incorreto. Chaves servem para precisão absoluta, não aproximação.",
      C: "Incorreto. O objetivo das chaves é impedir a duplicação.",
      D: "Incorreto. Chaves identificam o dado, não o tornam anônimo.",
      E: "Incorreto. Chaves são necessárias em qualquer infra (local ou nuvem)."
    }
  },
  {
    id: 21,
    axis: "Fundamentos Relacionais",
    content: "Diferenciando tipos de integridade, o professor explica a 'Integridade de Entidade'. O que essa integridade garante especificamente?",
    options: {
      A: "Que a FK aponte para uma PK válida.",
      B: "Que cada linha é única via Chave Primária.",
      C: "Que o banco suporte transações bancárias.",
      D: "Que os dados sejam criptografados.",
      E: "Que o servidor tenha backup."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Isso é Integridade Referencial.",
      B: "Correto! Garante que cada tupla na tabela seja uma entidade identificável e distinta.",
      C: "Incorreto. ACID garante transações.",
      D: "Incorreto. Criptografia é segurança física/lógica.",
      E: "Incorreto. Backup é disponibilidade."
    }
  },
  {
    id: 22,
    axis: "Fundamentos Relacionais",
    content: "No contexto ACID, o 'Isolamento' é crucial para ambientes concorrentes. Como o material define o Isolamento?",
    options: {
      A: "A garantia de persistência dos dados.",
      B: "A validação de regras de negócio.",
      C: "Múltiplas transações ocorrendo simultaneamente sem interferência.",
      D: "A capacidade de reverter falhas.",
      E: "A unicidade das chaves primárias."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Isso é Durabilidade.",
      B: "Incorreto. Isso é Consistência.",
      C: "Correto! O isolamento faz com que cada usuário sinta que está usando o banco sozinho.",
      D: "Incorreto. Isso é Atomicidade.",
      E: "Incorreto. Isso é integridade de entidade."
    }
  },
  {
    id: 23,
    axis: "Fundamentos Relacionais",
    content: "Ao escolher um BDR, o fator 'Ecossistema' deve ser considerado. Qual pergunta é relevante para avaliar o ecossistema de uma tecnologia?",
    options: {
      A: "O banco é gratuito?",
      B: "É fácil encontrar desenvolvedores que conheçam essa tecnologia?",
      C: "O banco suporta tabelas coloridas?",
      D: "A instalação requer internet?",
      E: "O banco foi criado pela IBM?"
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Isso é avaliação de custo.",
      B: "Correto! Um bom ecossistema tem farta mão de obra, documentação e suporte comunitário.",
      C: "Incorreto. Visual não define ecossistema técnico.",
      D: "Incorreto. Isso é requisito de rede.",
      E: "Incorreto. A origem não dita a saúde atual do ecossistema."
    }
  },
  {
    id: 24,
    axis: "Fundamentos Relacionais",
    content: "Comparando com planilhas, os Bancos de Dados lidam com volumes diferentes. BDRs são projetados para suportar qual volume de registros?",
    options: {
      A: "Dezenas.",
      B: "Centenas.",
      C: "Milhares.",
      D: "Milhões/Bilhões.",
      E: "Trilhões apenas."
    },
    correctAnswer: "D",
    optionExplanations: {
      A: "Incorreto. Pouco volume para um SGBD.",
      B: "Incorreto. Planilhas lidam com isso tranquilamente.",
      C: "Incorreto. Planilhas lidam com isso.",
      D: "Correto! SGBDs corporativos são feitos para escala massiva de registros.",
      E: "Incorreto. Trilhões costumam exigir arquiteturas de Big Data específicas."
    }
  },
  {
    id: 25,
    axis: "Fundamentos Relacionais",
    content: "A definição de 'Colunas' envolve estrutura e tipagem. O que as colunas representam em uma tabela relacional?",
    options: {
      A: "As instâncias únicas de dados.",
      B: "As características ou propriedades da entidade.",
      C: "As conexões entre tabelas.",
      D: "Os arquivos de log do sistema.",
      E: "Os usuários do sistema."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Linhas representam as instâncias.",
      B: "Correto! Definem o que guardamos de cada registro (Nome, Idade, Salário).",
      C: "Incorreto. Chaves Estrangeiras estabelecem as conexões.",
      D: "Incorreto. Logs são metadados de auditoria.",
      E: "Incorreto. Usuários são agentes de acesso."
    }
  },

  // Eixo II: Paradigma NoSQL (26-60)
  {
    id: 26,
    axis: "Paradigma NoSQL",
    content: "Em uma aula introdutória sobre novas tecnologias de banco de dados, o professor corrige uma concepção errada comum sobre o significado da sigla NoSQL. Segundo o material, qual é o significado atual aceito para a sigla NoSQL?",
    options: {
      A: "No SQL Allowed (Não é permitido SQL).",
      B: "Not Only SQL (Não Apenas SQL).",
      C: "Never Open SQL (Nunca SQL Aberto).",
      D: "New Operating SQL (Novo SQL Operacional).",
      E: "Non-Structured Query Logic."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Muitos bancos NoSQL aceitam consultas SQL ou similares.",
      B: "Correto! Indica que o SQL continua relevante, mas há novos modelos de dados sendo usados.",
      C: "Incorreto. A sigla não se refere à abertura do software.",
      D: "Incorreto. Termo inexistente no paradigma.",
      E: "Incorreto. Embora NoSQL lide com dados semi-estruturados, a sigla não significa isso."
    }
  },
  {
    id: 27,
    axis: "Paradigma NoSQL",
    content: "A história do NoSQL teve um marco importante em 2009, com um evento que popularizou o termo. Quem foi o organizador do 'San Francisco Meetup' em 2009, onde a hashtag #NoSQL foi criada?",
    options: {
      A: "Edgar F. Codd.",
      B: "Tim Berners-Lee.",
      C: "Johan Oskarsson.",
      D: "Carlo Strozzi.",
      E: "Linus Torvalds."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Codd é do modelo relacional (1970).",
      B: "Incorreto. Tim criou a Web (WWW).",
      C: "Correto! Johan Oskarsson uniu a comunidade em torno das necessidades de escalabilidade da Web 2.0.",
      D: "Incorreto. Strozzi usou o termo em 1998, mas com outro significado técnico.",
      E: "Incorreto. Linus é do Linux e Git."
    }
  },
  {
    id: 28,
    axis: "Paradigma NoSQL",
    content: "Um arquiteto de soluções está comparando custos de expansão de infraestrutura. Como o documento caracteriza a escalabilidade horizontal (Scale-Out) típica do NoSQL?",
    options: {
      A: "Substituição do servidor por um mainframe mais potente.",
      B: "Adição de mais memória RAM ao servidor existente.",
      C: "Adição de mais servidores comuns ao cluster.",
      D: "Otimização do código fonte para reduzir CPU.",
      E: "Compressão dos dados para caber no disco."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Isso é Escalabilidade Vertical.",
      B: "Incorreto. Isso é Vertical Upgrade.",
      C: "Correto! Horizontal significa espalhar a carga em muitas máquinas baratas em vez de uma cara.",
      D: "Incorreto. Otimização é boa prática, não é o pilar físico da escalabilidade horizontal.",
      E: "Incorreto. Compressão economiza espaço, não aumenta poder de fogo do cluster."
    }
  },
  {
    id: 29,
    axis: "Paradigma NoSQL",
    content: "O Teorema CAP é uma regra fundamental para sistemas distribuídos. Segundo este teorema, quais das três garantias não podem ser obtidas simultaneamente em sua totalidade?",
    options: {
      A: "Consistência, Atomicidade, Performance.",
      B: "Consistência, Disponibilidade, Tolerância à Partição.",
      C: "Confiabilidade, Acesso, Persistência.",
      D: "Capacidade, Autonomia, Particionamento.",
      E: "Custo, Agilidade, Precisão."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Atomicidade é do ACID.",
      B: "Correto! Eric Brewer provou que em caso de falha de rede (P), você deve escolher entre C ou A.",
      C: "Incorreto. Termos genéricos de qualidade.",
      D: "Incorreto. Autonomia não é pilar do CAP.",
      E: "Incorreto. KPIs de negócio."
    }
  },
  {
    id: 30,
    axis: "Paradigma NoSQL",
    content: "Estudando os tipos de banco NoSQL, um aluno precisa classificar o MongoDB. O MongoDB é o líder de mercado em qual categoria de NoSQL?",
    options: {
      A: "Chave-Valor.",
      B: "Colunas Largas.",
      C: "Grafos.",
      D: "Documentos.",
      E: "Relacional."
    },
    correctAnswer: "D",
    optionExplanations: {
      A: "Incorreto. Líder em chave-valor é o Redis.",
      B: "Incorreto. Líder em colunas largas é o Cassandra.",
      C: "Incorreto. Líder em grafos é o Neo4j.",
      D: "Correto! O MongoDB armazena dados em documentos JSON/BSON flexíveis.",
      E: "Incorreto. MongoDB não é relacional (tabelas rígidas)."
    }
  },
  {
    id: 31,
    axis: "Paradigma NoSQL",
    content: "Para um sistema que precisa de velocidade extrema em memória RAM, como um cache de sessão. Qual banco é citado como exemplo popular de Chave-Valor operando em RAM?",
    options: {
      A: "Neo4j.",
      B: "Cassandra.",
      C: "Redis.",
      D: "HBase.",
      E: "Couchbase."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Neo4j é de grafos.",
      B: "Incorreto. Cassandra é de colunas largas.",
      C: "Correto! O Redis é famoso por ser um banco in-memory de baixíssima latência.",
      D: "Incorreto. HBase é orientado a colunas.",
      E: "Incorreto. Couchbase é de documentos."
    }
  },
  {
    id: 32,
    axis: "Paradigma NoSQL",
    content: "Uma empresa de logística precisa otimizar rotas de entrega complexas. Qual tipo de banco NoSQL é indicado para problemas de rotas e redes sociais devido ao foco em relacionamentos?",
    options: {
      A: "Documentos.",
      B: "Chave-Valor.",
      C: "Colunas Largas.",
      D: "Grafos.",
      E: "Tabulares."
    },
    correctAnswer: "D",
    optionExplanations: {
      A: "Incorreto. Documentos focam em aninhamento, não em conexões transversais massivas.",
      B: "Incorreto. Chave-valor é simples demais para rotas complexas.",
      C: "Incorreto. Colunas largas focam em analítica de grandes volumes.",
      D: "Correto! Bancos de grafos tratam relacionamentos como cidadãos de primeira classe.",
      E: "Incorreto. Tabulares são os relacionais clássicos."
    }
  },
  {
    id: 33,
    axis: "Paradigma NoSQL",
    content: "O desenvolvimento ágil se beneficia da flexibilidade do NoSQL. O que significa, na prática, um banco ser 'Schema-less'?",
    options: {
      A: "Os dados são apagados diariamente.",
      B: "Não é possível fazer consultas.",
      C: "Basta inserir o dado com a nova propriedade sem alterar a tabela antes.",
      D: "Todas as linhas devem ser idênticas.",
      E: "O banco não tem segurança."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Isso seria volatilidade total, não falta de esquema.",
      B: "Incorreto. Consultas são fundamentais em NoSQL.",
      C: "Correto! Permite que a aplicação evolua rápido sem migrações de banco (ALTER TABLE).",
      D: "Incorreto. Isso seria um esquema rígido.",
      E: "Incorreto. Segurança é independente do esquema de dados."
    }
  },
  {
    id: 34,
    axis: "Paradigma NoSQL",
    content: "A Netflix precisa armazenar o histórico de visualização de milhões de usuários com escrita massiva. Qual banco de Colunas Largas é utilizado pela Netflix e citado como 'mestre em escrita distribuída'?",
    options: {
      A: "Apache Cassandra.",
      B: "Redis.",
      C: "Neo4j.",
      D: "MySQL.",
      E: "SQLite."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! O Cassandra foi criado no Facebook para lidar com volumes de escrita brutais de forma descentralizada.",
      B: "Incorreto. Redis é para cache/velocidade, não histórico massivo persistente.",
      C: "Incorreto. Neo4j foca em grafos.",
      D: "Incorreto. MySQL é relacional e sofre para escalar escritas globais.",
      E: "Incorreto. SQLite é para uso local/embutido."
    }
  },
  {
    id: 35,
    axis: "Paradigma NoSQL",
    content: "Bancos de Grafos possuem uma arquitetura interna diferenciada. O que a 'Adjacência Livre de Índice' permite em bancos de Grafos?",
    options: {
      A: "Navegar de um nó para outro instantaneamente sem buscas complexas.",
      B: "Armazenar imagens no disco.",
      C: "Criptografar as conexões.",
      D: "Eliminar a necessidade de memória RAM.",
      E: "Usar SQL tradicional."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! Cada nó 'conhece' seus vizinhos, permitindo saltos ultrarrápidos entre dados relacionados.",
      B: "Incorreto. Não tem relação com armazenamento de imagens binárias.",
      C: "Incorreto. Criptografia é um processo à parte.",
      D: "Incorreto. RAM é essencial para o gráfico de conexões.",
      E: "Incorreto. Usam linguagens como Cypher, não SQL."
    }
  },
  {
    id: 36,
    axis: "Paradigma NoSQL",
    content: "Em 2006, o Google publicou um artigo que influenciou bancos como o HBase. Qual foi o sistema apresentado nesse artigo?",
    options: {
      A: "Google Spanner.",
      B: "Google Bigtable.",
      C: "Google Drive.",
      D: "Google Maps.",
      E: "Google Search."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Spanner é um banco NewSQL mais recente.",
      B: "Correto! O Bigtable fundamentou o conceito de colunas largas e influenciou todo o NoSQL moderno.",
      C: "Incorreto. Drive é armazenamento de arquivos.",
      D: "Incorreto. Maps é um serviço geográfico.",
      E: "Incorreto. Search é o motor de busca."
    }
  },
  {
    id: 37,
    axis: "Paradigma NoSQL",
    content: "A Amazon também influenciou o mercado com um paper em 2007. Qual sistema de chave-valor altamente disponível foi apresentado pela Amazon?",
    options: {
      A: "Amazon Prime.",
      B: "Amazon Dynamo.",
      C: "Amazon EC2.",
      D: "Amazon RDS.",
      E: "Amazon S3."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Serviço comercial de assinatura.",
      B: "Correto! O paper do Dynamo inspirou bancos como o Riak e as propriedades de alta disponibilidade.",
      C: "Incorreto. Máquinas virtuais.",
      D: "Incorreto. Bancos relacionais gerenciados.",
      E: "Incorreto. Armazenamento de objetos (arquivos)."
    }
  },
  {
    id: 38,
    axis: "Paradigma NoSQL",
    content: "Bancos de documentos lidam com dados hierárquicos de forma diferente dos relacionais. Como o modelo de documentos trata uma lista de endereços de um cliente?",
    options: {
      A: "Cria uma tabela separada.",
      B: "Permite o aninhamento dentro do documento do cliente.",
      C: "Ignora os endereços extras.",
      D: "Duplica o cliente para cada endereço.",
      E: "Cria um link para um arquivo externo."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Isso seria normalização relacional.",
      B: "Correto! Agregação: tudo o que pertence ao cliente viaja no mesmo documento JSON.",
      C: "Incorreto. Dados perdidos não são o objetivo.",
      D: "Incorreto. Isso geraria inconsistência grave.",
      E: "Incorreto. Os dados devem estar estruturados no banco."
    }
  },
  {
    id: 39,
    axis: "Paradigma NoSQL",
    content: "A Forbes precisava de agilidade editorial. Qual solução a Forbes adotou para alterar o layout do site rapidamente?",
    options: {
      A: "MongoDB.",
      B: "Oracle.",
      C: "Excel.",
      D: "Neo4j.",
      E: "Cassandra."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! A Forbes migrou para MongoDB para poder evoluir o portal de notícias sem as travas do SQL rígido.",
      B: "Incorreto. Oracle exigiria mudanças lentas no esquema para cada novo tipo de matéria.",
      C: "Incorreto. Excel não serve para gerenciar portais massivos de notícias.",
      D: "Incorreto. Neo4j é para grafos.",
      E: "Incorreto. Cassandra é complexo demais para simples CMS (Gestão de Conteúdo)."
    }
  },
  {
    id: 40,
    axis: "Paradigma NoSQL",
    content: "Em bancos de Colunas Largas, nem todas as linhas têm as mesmas colunas. Como é chamado o conceito onde células vazias não ocupam espaço?",
    options: {
      A: "Mapa de Calor.",
      B: "Mapa Esparso.",
      C: "Tabela Dinâmica.",
      D: "Vetor Denso.",
      E: "Matriz Invertida."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Visualização térmica de frequência.",
      B: "Correto! Mapas esparsos permitem ter milhões de colunas potenciais sem desperdiçar disco.",
      C: "Incorreto. Ferramenta de análise de dados (Excel/BI).",
      D: "Incorreto. Vetor denso é quando quase todas as células têm dados.",
      E: "Incorreto. Usada em motores de busca de texto."
    }
  },
  {
    id: 41,
    axis: "Paradigma NoSQL",
    content: "A latência do Redis é medida em microssegundos. Qual característica física permite essa velocidade?",
    options: {
      A: "Armazenamento em Fita.",
      B: "Processamento em GPU.",
      C: "Armazenamento em Memória RAM (In-Memory).",
      D: "Discos SSD.",
      E: "Cabos de Fibra Óptica."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Fitas são extremamente lentas (backup frio).",
      B: "Incorreto. GPU é para gráficos/IA.",
      C: "Correto! O acesso à RAM é ordens de magnitude mais rápido que qualquer disco.",
      D: "Incorreto. SSDs são rápidos, mas perdem feio para a RAM.",
      E: "Incorreto. Rede é fator externo ao motor do banco."
    }
  },
  {
    id: 42,
    axis: "Paradigma NoSQL",
    content: "No Teorema CAP, em caso de partição de rede, o sistema deve escolher. Quais são as duas opções de prioridade típicas no NoSQL?",
    options: {
      A: "Consistência (CP) ou Disponibilidade (AP).",
      B: "Custo ou Benefício.",
      C: "Hardware ou Software.",
      D: "Backup ou Restauração.",
      E: "Leitura ou Escrita."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! Ou o banco para para garantir consistência (CP), ou continua respondendo mesmo que dados divirjam (AP).",
      B: "Incorreto. Termos de gestão de negócios.",
      C: "Incorreto. Ambos são necessários em TI.",
      D: "Incorreto. Procedimentos de desastre.",
      E: "Incorreto. Decisões de carga de trabalho."
    }
  },
  {
    id: 43,
    axis: "Paradigma NoSQL",
    content: "Em contraste com o ACID, o NoSQL muitas vezes segue o modelo BASE. O que a abordagem BASE prioriza?",
    options: {
      A: "Consistência Imediata.",
      B: "Consistência Eventual e velocidade.",
      C: "Bloqueio de tabelas.",
      D: "Normalização estrita.",
      E: "Transações financeiras."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Isso é o modelo ACID.",
      B: "Correto! Garante que o sistema responda rápido e os dados se igualem com o tempo.",
      C: "Incorreto. Bloqueios matam a disponibilidade.",
      D: "Incorreto. NoSQL evita normalização estrita.",
      E: "Incorreto. Transações rígidas pedem ACID."
    }
  },
  {
    id: 44,
    axis: "Paradigma NoSQL",
    content: "Usando o Framework de Decisão, um analista tem dados 'altamente relacionais e financeiros'. Qual é a recomendação para esse caso?",
    options: {
      A: "Usar NoSQL Grafos.",
      B: "Usar NoSQL Documentos.",
      C: "Usar SQL (Relacional).",
      D: "Usar Chave-Valor.",
      E: "Usar Arquivos de Texto."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Grafos são para conexões, não para integridade financeira clássica.",
      B: "Incorreto. Documentos perdem em integridade referencial rígida.",
      C: "Correto! Se os dados são estruturados e financeiros, o SQL ainda é a ferramenta mais segura.",
      D: "Incorreto. Chave-valor é simples demais para relações complexas.",
      E: "Incorreto. Inviável para qualquer sistema corporativo."
    }
  },
  {
    id: 45,
    axis: "Paradigma NoSQL",
    content: "Sensores de IoT enviam milhões de leituras por segundo. Qual banco é sugerido para essa carga massiva de escrita?",
    options: {
      A: "Grafos.",
      B: "Colunas Largas.",
      C: "Documentos.",
      D: "Relacional.",
      E: "Planilha."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Grafos são lentos para ingestão massiva de dados sequenciais.",
      B: "Correto! Colunas largas (ex: Cassandra) são otimizadas para escrita sequencial de alta velocidade.",
      C: "Incorreto. Documentos têm overhead de processamento de JSON.",
      D: "Incorreto. Relacionais travam com bloqueios em cargas extremas.",
      E: "Incorreto. Inviável para milhões de dados por segundo."
    }
  },
  {
    id: 46,
    axis: "Paradigma NoSQL",
    content: "O Twitter precisava entregar timelines com latência zero. Qual tecnologia foi usada para cachear as timelines na memória?",
    options: {
      A: "Redis.",
      B: "MySQL.",
      C: "Oracle.",
      D: "PostgreSQL.",
      E: "Access."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! O Redis permite que o Twitter busque a timeline pronta na RAM sem ir ao disco lento.",
      B: "Incorreto. MySQL seria lento demais para ler o feed de milhões de pessoas simultaneamente.",
      C: "Incorreto. Oracle foca em ERPs corporativos.",
      D: "Incorreto. Postgres é excelente, mas não para o caso específico de cache ultrarrápido do Twitter.",
      E: "Incorreto. Access é para desktops individuais."
    }
  },
  {
    id: 47,
    axis: "Paradigma NoSQL",
    content: "O Walmart usa grafos para recomendação de produtos. Qual banco de grafos o Walmart utiliza para conectar produtos e usuários?",
    options: {
      A: "Neo4j.",
      B: "MongoDB.",
      C: "Cassandra.",
      D: "DynamoDB.",
      E: "Riak."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! O Neo4j é a referência de mercado em bancos de grafos citada no material.",
      B: "Incorreto. MongoDB é de documentos.",
      C: "Incorreto. Cassandra é de colunas largas.",
      D: "Incorreto. DynamoDB é chave-valor.",
      E: "Incorreto. Riak é chave-valor."
    }
  },
  {
    id: 48,
    axis: "Paradigma NoSQL",
    content: "O particionamento automático de dados é essencial no NoSQL. Qual termo descreve a distribuição de dados entre vários nós?",
    options: {
      A: "Sharding.",
      B: "Pooling.",
      C: "Parsing.",
      D: "Compiling.",
      E: "Rendering."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! Sharding é o ato de quebrar o banco em cacos (shards) e espalhar em vários servidores.",
      B: "Incorreto. Pooling é o reaproveitamento de conexões de banco.",
      C: "Incorreto. Parsing é análise de texto por compiladores.",
      D: "Incorreto. Compiling é transformar código em binário.",
      E: "Incorreto. Rendering é desenhar na tela."
    }
  },
  {
    id: 49,
    axis: "Paradigma NoSQL",
    content: "Comparando consultas, as APIs NoSQL são diferentes do SQL. O que as APIs NoSQL geralmente NÃO suportam nativamente para manter a velocidade?",
    options: {
      A: "Leitura por chave.",
      B: "JOINs complexos.",
      C: "Inserção de dados.",
      D: "Exclusão de dados.",
      E: "Atualização simples."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Leitura por chave é a operação mais rápida do NoSQL.",
      B: "Correto! NoSQL evita JOINs pois eles exigem cruzar dados de servidores diferentes, o que é muito lento.",
      C: "Incorreto. Operação básica.",
      D: "Incorreto. Operação básica.",
      E: "Incorreto. Operação básica."
    }
  },
  {
    id: 50,
    axis: "Paradigma NoSQL",
    content: "O ScyllaDB é uma versão otimizada de um banco popular. O ScyllaDB é escrito em C++ e compatível com qual banco?",
    options: {
      A: "MongoDB.",
      B: "Apache Cassandra.",
      C: "Redis.",
      D: "Neo4j.",
      E: "HBase."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. MongoDB usa outro protocolo.",
      B: "Correto! O ScyllaDB usa o protocolo do Cassandra mas com performance superior por ser em C++.",
      C: "Incorreto. Redis é chave-valor.",
      D: "Incorreto. Neo4j é grafos.",
      E: "Incorreto. HBase usa a stack Hadoop."
    }
  },
  {
    id: 51,
    axis: "Paradigma NoSQL",
    content: "O Couchbase é um banco de documentos focado em performance. Qual linguagem de consulta o Couchbase oferece para JSON?",
    options: {
      A: "N1QL.",
      B: "T-SQL.",
      C: "PL/SQL.",
      D: "CQL.",
      E: "GraphQL."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! N1QL é uma linguagem SQL-like voltada especificamente para documentos JSON no Couchbase.",
      B: "Incorreto. Dialeto da Microsoft.",
      C: "Incorreto. Dialeto da Oracle.",
      D: "Incorreto. Dialeto do Cassandra.",
      E: "Incorreto. Linguagem de consulta para APIs web."
    }
  },
  {
    id: 52,
    axis: "Paradigma NoSQL",
    content: "Em bancos Chave-Valor, a estrutura do valor é opaca para o banco. Como o banco enxerga o 'valor' armazenado?",
    options: {
      A: "Como colunas indexadas.",
      B: "Como uma 'caixa preta' (black box).",
      C: "Como um grafo.",
      D: "Como uma tabela relacional.",
      E: "Como um executável."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Chave-valor não indexa o conteúdo interno do valor.",
      B: "Correto! O banco apenas entrega o que você guardou, sem tentar entender se é texto, imagem ou JSON.",
      C: "Incorreto. Isso seria banco de grafos.",
      D: "Incorreto. O valor é treated como um bloco único.",
      E: "Incorreto. O valor é dado, não código rodando."
    }
  },
  {
    id: 53,
    axis: "Paradigma NoSQL",
    content: "A AWS oferece um serviço gerenciado de grafos. Qual é o nome desse serviço?",
    options: {
      A: "Amazon Neptune.",
      B: "Amazon Jupiter.",
      C: "Amazon Mars.",
      D: "Amazon Pluto.",
      E: "Amazon Saturn."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! Neptune é o serviço de banco de grafos escalável e gerenciado da AWS.",
      B: "Incorreto. Nome de planeta, mas não do serviço.",
      C: "Incorreto. Nome de planeta.",
      D: "Incorreto. Nome de planeta.",
      E: "Incorreto. Nome de planeta."
    }
  },
  {
    id: 54,
    axis: "Paradigma NoSQL",
    content: "O 'Time-to-market' é crucial para startups. Por que o NoSQL acelera o desenvolvimento?",
    options: {
      A: "O banco escreve o código sozinho.",
      B: "Não é preciso esperar aprovação de mudança de esquema (schema).",
      C: "Não precisa de servidor.",
      D: "É gratuito sempre.",
      E: "Usa menos energia."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Desenvolvedores ainda são necessários.",
      B: "Correto! Adicionar um campo novo na interface não exige parar o banco para dar ALTER TABLE.",
      C: "Incorreto. Todo software precisa de hardware.",
      D: "Incorreto. Muitos têm versões Enterprise pagas.",
      E: "Incorreto. Consumo depende da carga e hardware."
    }
  },
  {
    id: 55,
    axis: "Paradigma NoSQL",
    content: "A alta disponibilidade geográfica é uma vantagem do NoSQL. O que a 'Replicação Global' permite?",
    options: {
      A: "Acesso apenas na sede.",
      B: "Dados replicados em datacenters ao redor do mundo.",
      C: "Acesso lento mas seguro.",
      D: "Cópia em fita enviada por correio.",
      E: "Centralização em um único país."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Isso seria centralização.",
      B: "Correto! Se o usuário está no Japão, ele lê os dados de um servidor no Japão, ganhando velocidade.",
      C: "Incorreto. O objetivo é ser rápido.",
      D: "Incorreto. Antiga logística de backup.",
      E: "Incorreto. NoSQL visa descentralizar."
    }
  },
  {
    id: 56,
    axis: "Paradigma NoSQL",
    content: "Sensores IoT e logs de servidores geram dados temporais. Bancos de Colunas Largas são ideais para qual tipo de dado?",
    options: {
      A: "Séries Temporais.",
      B: "Imagens Bitmap.",
      C: "Vídeos 4K.",
      D: "Documentos Word.",
      E: "Planilhas Excel."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! A estrutura de colunas largas lida muito bem com dados que crescem linearmente no tempo.",
      B: "Incorreto. Imagens são BLOBs, melhor em Object Storage.",
      C: "Incorreto. Vídeos são arquivos grandes.",
      D: "Incorreto. Arquivos binários não são o foco.",
      E: "Incorreto. Planilhas são para produtividade pessoal."
    }
  },
  {
    id: 57,
    axis: "Paradigma NoSQL",
    content: "O banco Apache HBase é baseado em qual tecnologia do Google? Qual tecnologia serviu de base para o HBase?",
    options: {
      A: "Bigtable.",
      B: "Spanner.",
      C: "File System.",
      D: "MapReduce.",
      E: "Android."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! O HBase é a implementação open-source do conceito de Bigtable do Google.",
      B: "Incorreto. Spanner é NewSQL posterior.",
      C: "Incorreto. GFS é sistema de arquivos, o HBase roda em cima do HDFS.",
      D: "Incorreto. MapReduce é processamento, HBase é armazenamento.",
      E: "Incorreto. Sistema operacional móvel."
    }
  },
  {
    id: 58,
    axis: "Paradigma NoSQL",
    content: "Em bancos de Documentos, formatos como BSON são usados. Qual banco popular utiliza BSON (Binary JSON)?",
    options: {
      A: "MongoDB.",
      B: "Redis.",
      C: "Neo4j.",
      D: "Cassandra.",
      E: "HBase."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! O MongoDB usa BSON para otimizar o armazenamento e a busca em documentos JSON.",
      B: "Incorreto. Redis usa estruturas customizadas in-memory.",
      C: "Incorreto. Neo4j foca em grafos.",
      D: "Incorreto. Cassandra foca em colunas.",
      E: "Incorreto. HBase foca em colunas."
    }
  },
  {
    id: 59,
    axis: "Paradigma NoSQL",
    content: "Para sistemas de mensageria como o Inbox do Facebook, a ordem de escrita importa. Bancos de Colunas Largas são otimizados para qual tipo de operação?",
    options: {
      A: "Leitura aleatória.",
      B: "Escrita sequencial (append-only).",
      C: "Exclusão em massa.",
      D: "Atualização complexa.",
      E: "Join entre tabelas.",
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Leitura em disco aleatória é lenta.",
      B: "Correto! Gravar novos dados ao final do arquivo é muito mais rápido que procurar espaços vazios no disco.",
      C: "Incorreto. Exclusões geram fragmentação.",
      D: "Incorreto. NoSQL evita atualizações que exigem múltiplos bloqueios.",
      E: "Incorreto. NoSQL evita Joins."
    }
  },
  {
    id: 60,
    axis: "Paradigma NoSQL",
    content: "O termo 'Consistência Eventual' é chave no NoSQL. O que isso significa para o usuário final?",
    options: {
      A: "O dado nunca será salvo.",
      B: "O dado pode não estar disponível imediatamente em todas as réplicas.",
      C: "O dado é perdido se a energia cair.",
      D: "O sistema para de responder.",
      E: "O dado é convertido para texto."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. O dado é salvo, mas demora um pouco para viajar pelo mundo.",
      B: "Correto! Se você postar algo em NY, um amigo em Londres pode demorar milissegundos a mais para ver.",
      C: "Incorreto. Durabilidade continua existindo.",
      D: "Incorreto. Isso seria Consistência Imediata (ACID).",
      E: "Incorreto. Tipos de dados são mantidos."
    }
  },

  // Eixo III: Modelagem de Dados (61-80)
  {
    id: 61,
    axis: "Modelagem de Dados",
    content: "Na aula de projeto de banco de dados, o professor explica os níveis de abstração. Qual é a característica principal do Modelo Conceitual?",
    options: {
      A: "Define índices e partições.",
      B: "Visão de alto nível, livre de detalhes tecnológicos.",
      C: "Foca em como os dados são gravados no disco.",
      D: "Define tipos de dados (int, varchar).",
      E: "É gerado pelo banco automaticamente."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Isso é do Modelo Físico.",
      B: "Correto! É o modelo que o dono do negócio entende, focado em entidades reais.",
      C: "Incorreto. Detalhe de hardware (Físico).",
      D: "Incorreto. Tipagem ocorre no Modelo Lógico.",
      E: "Incorreto. Design humano prévio."
    }
  },
  {
    id: 62,
    axis: "Modelagem de Dados",
    content: "A modelagem serve como ferramenta de comunicação. Segundo o material, a modelagem facilita o entendimento entre quais grupos?",
    options: {
      A: "Equipes técnicas e de negócios.",
      B: "Servidor e Cliente.",
      C: "Sistema Operacional e Hardware.",
      D: "Vendedor e Comprador.",
      E: "Rede e Internet."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! Serve como ponte para o analista validar as regras com o cliente final.",
      B: "Incorreto. Comunicação de protocolo técnico.",
      C: "Incorreto. Gestão de recursos do SO.",
      D: "Incorreto. Relação comercial.",
      E: "Incorreto. Infraestrutura de rede."
    }
  },
  {
    id: 63,
    axis: "Modelagem de Dados",
    content: "No diagrama MER, formas geométricas têm significados específicos. O que o 'Losango' representa graficamente?",
    options: {
      A: "Atributos.",
      B: "Entidades.",
      C: "Relacionamentos.",
      D: "Chaves.",
      E: "Notas."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Atributos são elipses.",
      B: "Incorreto. Entidades são retângulos.",
      C: "Correto! O losango descreve a ação entre duas entidades (ex: 'Compra').",
      D: "Incorreto. Chaves são indicadas por atributos sublinhados.",
      E: "Incorreto. Notas não têm forma fixa."
    }
  },
  {
    id: 64,
    axis: "Modelagem de Dados",
    content: "Um 'Item de Pedido' não faz sentido se o 'Pedido' não existir. Como é classificada essa entidade que depende de outra?",
    options: {
      A: "Entidade Forte.",
      B: "Entidade Fraca.",
      C: "Entidade Mestra.",
      D: "Entidade Global.",
      E: "Entidade Abstrata."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Entidade Forte tem existência própria.",
      B: "Correto! Entidade Fraca (ou Dependente) precisa de uma dona para existir legalmente.",
      C: "Incorreto. Termo de ERPs corporativos.",
      D: "Incorreto. Termo genérico.",
      E: "Incorreto. No MER todas as entidades mapeadas são concretas ao contexto."
    }
  },
  {
    id: 65,
    axis: "Modelagem de Dados",
    content: "Uma regra diz que um Gerente cuida de uma Filial, e a Filial tem apenas um Gerente. Qual é a cardinalidade dessa relação?",
    options: {
      A: "1:1 (Um para Um).",
      B: "1:N (Um para Vários).",
      C: "N:1 (Vários para Um).",
      D: "N:N (Vários para Vários).",
      E: "0:0."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! Relacionamento exclusivo de ambos os lados.",
      B: "Incorreto. Seria se um gerente cuidasse de várias filiais.",
      C: "Incorreto. Seria se várias filiais tivessem o mesmo gerente.",
      D: "Incorreto. Seria se muitos gerentes cuidassem de muitas filiais ao mesmo tempo.",
      E: "Incorreto. Cardinalidade zero não existe em modelagem útil."
    }
  },
  {
    id: 66,
    axis: "Modelagem de Dados",
    content: "Um Pedido pode ter vários Livros, e um Livro pode estar em vários Pedidos. Qual é a cardinalidade resultante?",
    options: {
      A: "1:1.",
      B: "1:N.",
      C: "N:N (Vários para Vários).",
      D: "Linear.",
      E: "Unitária."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Limitaria o pedido a um único livro.",
      B: "Incorreto. Limitaria o livro a participar de apenas um pedido.",
      C: "Correto! É a relação mais complexa, exigindo uma tabela associativa no modelo lógico.",
      D: "Incorreto. Termo inválido para cardinalidade.",
      E: "Incorreto. Termo inválido."
    }
  },
  {
    id: 67,
    axis: "Modelagem de Dados",
    content: "Comparando estruturas, o material diferencia MER de NoSQL. Qual é a característica de estrutura do MER (Relacional)?",
    options: {
      A: "Flexível.",
      B: "Schema-less.",
      C: "Rígida, tabelar e pré-definida.",
      D: "Baseada em grafos.",
      E: "Baseada em documentos."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. MER é rígido para garantir integridade.",
      B: "Incorreto. NoSQL é schema-less.",
      C: "Correto! Tudo deve ser planejado antes de inserir o primeiro dado.",
      D: "Incorreto. Isso é NoSQL Grafos.",
      E: "Incorreto. Isso é NoSQL Documentos."
    }
  },
  {
    id: 68,
    axis: "Modelagem de Dados",
    content: "Em um exercício de modelagem NoSQL para um pedido. Diferente do MER, como os dados do Cliente são tratados no documento do Pedido em NoSQL?",
    options: {
      A: "Em tabela separada.",
      B: "Tornam-se parte do documento (aninhados).",
      C: "São excluídos.",
      D: "São transformados em PDF.",
      E: "São ignorados."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. NoSQL evita tabelas separadas para fugir do Join.",
      B: "Correto! Agregação: guardamos o cliente dentro do pedido para ler tudo de uma vez.",
      C: "Incorreto. Dados perdidos matam o sistema.",
      D: "Incorreto. Documentos JSON são dados estruturados, não arquivos PDF.",
      E: "Incorreto. O banco guarda o que o dev define."
    }
  },
  {
    id: 69,
    axis: "Modelagem de Dados",
    content: "O modelo agregado oferece vantagem de performance na leitura. Por que a leitura é mais rápida no modelo agregado?",
    options: {
      A: "Usa JOINs complexos.",
      B: "Realiza leitura única do documento (sem JOINs).",
      C: "Os dados são menores.",
      D: "Não usa disco.",
      E: "Usa menos rede."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. JOINs são lentos e o NoSQL tenta evitá-los.",
      B: "Correto! O banco faz um único acesso ao disco e traz o objeto inteiro pronto para o app.",
      C: "Incorreto. Pela redundância, o dado pode até ser maior.",
      D: "Incorreto. Persistência exige gravação física.",
      E: "Incorreto. Pode até usar mais banda por trazer dados repetidos."
    }
  },
  {
    id: 70,
    axis: "Modelagem de Dados",
    content: "Na entidade 'Livro' do estudo de caso, existem atributos específicos. Quais atributos são citados para 'Livro'?",
    options: {
      A: "Nome e CPF.",
      B: "ID, Título e Autor.",
      C: "Data e Valor.",
      D: "Cor e Peso.",
      E: "Rua e CEP."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Atributos de Pessoa.",
      B: "Correto! Identificadores e metadados básicos de uma obra literária.",
      C: "Incorreto. Atributos de Transação/Carga.",
      D: "Incorreto. Atributos Físicos genéricos.",
      E: "Incorreto. Atributos de Endereço."
    }
  },
  {
    id: 71,
    axis: "Modelagem de Dados",
    content: "A forma geométrica 'Elipse' aparece no diagrama. O que a Elipse representa no MER?",
    options: {
      A: "Entidades.",
      B: "Relacionamentos.",
      C: "Atributos.",
      D: "Chaves.",
      E: "Ligações."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Entidades são retângulos.",
      B: "Incorreto. Relacionamentos são losangos.",
      C: "Correto! Elipses ligadas às entidades definem as propriedades do objeto.",
      D: "Incorreto. Chave primária é um atributo sublinhado.",
      E: "Incorreto. Ligações são as linhas."
    }
  },
  {
    id: 72,
    axis: "Modelagem de Dados",
    content: "A modelagem previne problemas futuros nos dados. A segurança e integridade garantidas pela modelagem previnem o quê?",
    options: {
      A: "Backups lentos.",
      B: "Anomalias nos dados.",
      C: "Uso de CPU.",
      D: "Acesso à internet.",
      E: "Atualização de software."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Backup depende do volume total e hardware.",
      B: "Correto! Impede deletar um pai e deixar filhos órfãos, ou ter dados contraditórios.",
      C: "Incorreto. CPU é ligada à lógica do algoritmo.",
      D: "Incorreto. Fator de infra externa.",
      E: "Incorreto. Fator de gestão de SO."
    }
  },
  {
    id: 73,
    axis: "Modelagem de Dados",
    content: "Para sistemas de 'Big Data e Redes Sociais'. Qual modelo é classificado como 'Ideal para' esse cenário?",
    options: {
      A: "MER (Relacional).",
      B: "Modelo Agregado (NoSQL).",
      C: "Planilhas.",
      D: "Arquivos físicos.",
      E: "Cadernos."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Sofreria com rigidez em escala de bilhões.",
      B: "Correto! Oferece a flexibilidade e escalabilidade horizontal necessária para redes sociais.",
      C: "Incorreto. Inviável para Big Data.",
      D: "Incorreto. Inviável.",
      E: "Incorreto. Inviável."
    }
  },
  {
    id: 74,
    axis: "Modelagem de Dados",
    content: "O Modelo Físico é a etapa final. Em que foca o Modelo Físico?",
    options: {
      A: "Negócio abstrato.",
      B: "Desenho de retângulos.",
      C: "Como os dados são realmente armazenados no disco e SGBD.",
      D: "Cores da tela.",
      E: "Linguagem do site."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Isso é Modelo Conceitual.",
      B: "Incorreto. Estética não é foco técnico.",
      C: "Correto! Envolve comandos CREATE TABLE, definição de Índices e tipos físicos.",
      D: "Incorreto. Isso é UI/UX Design.",
      E: "Incorreto. Isso é desenvolvimento front-end."
    }
  },
  {
    id: 75,
    axis: "Modelagem de Dados",
    content: "Na estrutura JSON, uma lista de itens é representada por um símbolo. Qual símbolo denota uma lista/array em JSON?",
    options: {
      A: "Chaves { }.",
      B: "Colchetes [ ].",
      C: "Parênteses ( ).",
      D: "Aspas \" \".",
      E: "Barras / /."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Chaves delimitam um Objeto.",
      B: "Correto! Colchetes são usados para coleções ordenadas de itens.",
      C: "Incorreto. Não usados na sintaxe JSON.",
      D: "Incorreto. Aspas delimitam strings.",
      E: "Incorreto. Não usados na sintaxe."
    }
  },
  {
    id: 76,
    axis: "Modelagem de Dados",
    content: "O 'Aluno' é uma entidade independente. Como é classificada a entidade 'Aluno'?",
    options: {
      A: "Entidade Forte.",
      B: "Entidade Fraca.",
      C: "Entidade Nula.",
      D: "Entidade Dependente.",
      E: "Entidade Virtual."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! Aluno existe por si mesmo no mundo real do negócio.",
      B: "Incorreto. Aluno não precisa de outra entidade para ser um Aluno.",
      C: "Incorreto. Termo inexistente.",
      D: "Incorreto. Sinônimo de Fraca.",
      E: "Incorreto. Entidades mapeadas são concretas."
    }
  },
  {
    id: 77,
    axis: "Modelagem de Dados",
    content: "A relação 'Cliente e Pedidos' é um exemplo clássico. Qual cardinalidade representa Cliente e Pedidos?",
    options: {
      A: "1:1.",
      B: "1:N (Um para Vários).",
      C: "N:N.",
      D: "N:1.",
      E: "0:0."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Impediria o cliente de comprar mais de uma vez.",
      B: "Correto! Um cliente faz muitos pedidos, mas cada pedido pertence a um único cliente.",
      C: "Incorreto. Pedidos não pertencem a vários clientes simultâneos.",
      D: "Incorreto. Inverso do correto.",
      E: "Incorreto. Inválido."
    }
  },
  {
    id: 78,
    axis: "Modelagem de Dados",
    content: "A redundância no modelo NoSQL é vista de forma diferente. Como a redundância é encarada na solução agregada?",
    options: {
      A: "Erro grave.",
      B: "Aceitável para ganhar performance de busca.",
      C: "Proibida.",
      D: "Impossível.",
      E: "Falha de segurança."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Isso é verdade no Relacional; no NoSQL é estratégia.",
      B: "Correto! Trocamos espaço em disco (barato) por velocidade de resposta (caro).",
      C: "Incorreto. Pelo contrário, é incentivada.",
      D: "Incorreto. Ocorre propositalmente.",
      E: "Incorreto. Redundância não abre brechas de segurança por si só."
    }
  },
  {
    id: 79,
    axis: "Modelagem de Dados",
    content: "Dica visual para diagramas MER. Qual é a dica de design mencionada?",
    options: {
      A: "Usar baixo contraste.",
      B: "Usar formas 3D.",
      C: "Utilize formas simples e contraste alto.",
      D: "Não usar texto.",
      E: "Desenhar sem padrão."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Dificulta a leitura.",
      B: "Incorreto. Polui o diagrama.",
      C: "Correto! O diagrama é uma ferramenta de comunicação, deve ser claro e legível.",
      D: "Incorreto. Impossível saber o que é o quê sem nomes.",
      E: "Incorreto. Padrões garantem entendimento universal."
    }
  },
  {
    id: 80,
    axis: "Modelagem de Dados",
    content: "No desafio final, propõe-se um cenário de vendas. Quais são as três entidades do desafio?",
    options: {
      A: "Aluno, Professor, Aula.",
      B: "Cliente, Pedido, Produto.",
      C: "Médico, Paciente, Exame.",
      D: "Carro, Pista, Piloto.",
      E: "Filme, Ator, Diretor."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Entidades escolares.",
      B: "Correto! É o trio clássico de qualquer sistema de e-commerce.",
      C: "Incorreto. Entidades hospitalares.",
      D: "Incorreto. Entidades esportivas.",
      E: "Incorreto. Entidades artísticas."
    }
  },

  // Eixo IV: Distribuição e Escalabilidade (81-100)
  {
    id: 81,
    axis: "Distribuição e Escalabilidade",
    content: "Uma escola quer melhorar seu servidor comprando peças melhores. Essa ação caracteriza qual tipo de escalabilidade?",
    options: {
      A: "Horizontal.",
      B: "Vertical (Scale Up).",
      C: "Diagonal.",
      D: "Distribuída.",
      E: "P2P."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Horizontal seria comprar mais servidores baratos.",
      B: "Correto! Envolve 'bombar' a máquina atual com CPU/RAM melhor.",
      C: "Incorreto. Termo raramente usado em hardware de servidor.",
      D: "Incorreto. Hardware melhor em um único nó não é distribuição.",
      E: "Incorreto. P2P é modelo de comunicação entre nós."
    }
  },
  {
    id: 82,
    axis: "Distribuição e Escalabilidade",
    content: "O hardware de ponta tem um problema de custo. O que acontece com o custo ao escalar verticalmente no topo?",
    options: {
      A: "Diminui.",
      B: "Aumenta exponencialmente.",
      C: "Fica estável.",
      D: "Zera.",
      E: "É linear."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Peças high-end são muito caras.",
      B: "Correto! Um processador 10% melhor pode custar 500% mais no limite tecnológico.",
      C: "Incorreto. Peças de elite nunca são baratas.",
      D: "Incorreto. Nada é gratuito.",
      E: "Incorreto. A curva de preço de mainframes e servidores topo de linha é exponencial."
    }
  },
  {
    id: 83,
    axis: "Distribuição e Escalabilidade",
    content: "Um servidor único tem limite de usuários ao mesmo tempo. O que ocorre no 'Gargalo de Conexões'?",
    options: {
      A: "O servidor explode.",
      B: "Novas conexões são travadas/rejeitadas.",
      C: "A internet cai.",
      D: "O disco apaga.",
      E: "A CPU esfria."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Servidores têm proteções térmicas, não explodem por excesso de software.",
      B: "Correto! O SO tem um limite de 'file descriptors' ou soquetes que pode abrir simultaneamente.",
      C: "Incorreto. O problema é local no servidor.",
      D: "Incorreto. Erros de conexão não deletam dados.",
      E: "Incorreto. CPUs esquentam sob carga."
    }
  },
  {
    id: 84,
    axis: "Distribuição e Escalabilidade",
    content: "Migrando para Big Data, usa-se clusters. O que é Escalabilidade Horizontal (Scale Out)?",
    options: {
      A: "Usar um supercomputador.",
      B: "Dividir o trabalho entre múltiplos servidores comuns.",
      C: "Aumentar o monitor.",
      D: "Usar apenas memória RAM.",
      E: "Reduzir os dados."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Isso é Escalabilidade Vertical extrema.",
      B: "Correto! É a base da nuvem moderna: o poder está na união de muitas máquinas simples.",
      C: "Incorreto. Irrelevante.",
      D: "Incorreto. Isso é banco In-memory.",
      E: "Incorreto. Impossível para Big Data."
    }
  },
  {
    id: 85,
    axis: "Distribuição e Escalabilidade",
    content: "O conceito de Sharding é vital. O que significa Sharding?",
    options: {
      A: "Backup em fita.",
      B: "Dividir os dados em múltiplos servidores (fragmentação).",
      C: "Criptografia.",
      D: "Juntar tabelas.",
      E: "Comprimir arquivos."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Procedimento de segurança.",
      B: "Correto! Cada shard cuida de uma parte da base, ex: Clientes A-M no Servidor 1, N-Z no Servidor 2.",
      C: "Incorreto. Isso é segurança lógica.",
      D: "Incorreto. Sharding é fragmentar, não juntar.",
      E: "Incorreto. Compactação."
    }
  },
  {
    id: 86,
    axis: "Distribuição e Escalabilidade",
    content: "Particionamento manual (ex: por região) traz problemas. Qual o principal problema do particionamento manual?",
    options: {
      A: "Distribuição desigual (balanceamento imperfeito).",
      B: "Custo de software.",
      C: "Excesso de cabos.",
      D: "Falta de energia.",
      E: "Corrupção de dados."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! Se você divide por cidade, a cidade maior terá um servidor sobrecarregado e a menor um servidor ocioso.",
      B: "Incorreto. Problema de lógica, não de licença.",
      C: "Incorreto. Infra física.",
      D: "Incorreto. Problema elétrico.",
      E: "Incorreto. Não corrompe, apenas fica ineficiente."
    }
  },
  {
    id: 87,
    axis: "Distribuição e Escalabilidade",
    content: "O Consistent Hashing resolve o rebalanceamento. O que o Anel de Hash permite ao adicionar servidores?",
    options: {
      A: "Mover todos os dados.",
      B: "Mover apenas uma pequena quantidade de dados vizinhos.",
      C: "Formatar os discos.",
      D: "Desligar a rede.",
      E: "Reiniciar o sistema."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Mover tudo geraria um caos de rede.",
      B: "Correto! É a técnica que permite escalar o cluster sem parar a operação ou gerar tráfego massivo de migração.",
      C: "Incorreto. Perda de dados.",
      D: "Incorreto. Escalabilidade deve ser online.",
      E: "Incorreto. Causa indisponibilidade."
    }
  },
  {
    id: 88,
    axis: "Distribuição e Escalabilidade",
    content: "O Cassandra usa um valor para saber onde gravar. Como chama esse valor de localização?",
    options: {
      A: "Chave Mestra.",
      B: "Chave de Partição (Partition Key).",
      C: "Senha de Root.",
      D: "Endereço MAC.",
      E: "Porta lógica."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Termo genérico.",
      B: "Correto! É o valor que passa pela função de hash para decidir em qual nó do cluster o dado mora.",
      C: "Incorreto. Credencial de acesso.",
      D: "Incorreto. ID físico de rede.",
      E: "Incorreto. Identifica serviço de rede."
    }
  },
  {
    id: 89,
    axis: "Distribuição e Escalabilidade",
    content: "Em arquitetura Master-Slave, o Master tem função única. Qual a função do Master?",
    options: {
      A: "Apenas leitura.",
      B: "Aceitar operações de escrita.",
      C: "Fazer café.",
      D: "Servir de backup.",
      E: "Monitorar a rede."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Slaves são para leitura.",
      B: "Correto! Ele é o ponto central de alteração para garantir a ordem das escritas.",
      C: "Incorreto.",
      D: "Incorreto. Standby é backup inativo.",
      E: "Incorreto. Sensores fazem isso."
    }
  },
  {
    id: 90,
    axis: "Distribuição e Escalabilidade",
    content: "E as réplicas (Slaves)? Para que servem as réplicas?",
    options: {
      A: "Aceitar escrita.",
      B: "Receber cópias e servir apenas leitura.",
      C: "Processar pagamentos.",
      D: "Armazenar o SO.",
      E: "Nada."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Em modelos Master-Slave simples, só o Master escreve.",
      B: "Correto! Alivia o Master permitindo que milhões leiam sem travar a gravação.",
      C: "Incorreto. Função da app.",
      D: "Incorreto. Guardam dados do banco.",
      E: "Incorreto. Réplicas são ativos caros que devem trabalhar."
    }
  },
  {
    id: 91,
    axis: "Distribuição e Escalabilidade",
    content: "A cópia de dados tem atraso. Como chama a replicação com tempo de propagação (latência)?",
    options: {
      A: "Síncrona.",
      B: "Assíncrona.",
      C: "Instantânea.",
      D: "Telepática.",
      E: "Imediata."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Síncrona obriga o Master a esperar o Slave antes de responder ao usuário.",
      B: "Correto! O Master salva e avisa: 'Slaves, aqui está o novo dado, peguem quando puderem'.",
      C: "Incorreto. Termo fictício.",
      D: "Incorreto.",
      E: "Incorreto."
    }
  },
  {
    id: 92,
    axis: "Distribuição e Escalabilidade",
    content: "Se leio de uma réplica desatualizada, o dado não está lá ainda. Qual termo descreve essa situação de sincronia futura?",
    options: {
      A: "Consistência Forte.",
      B: "Consistência Eventual.",
      C: "ACID.",
      D: "Normalização.",
      E: "Bloqueio."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Forte exige que todos vejam o mesmo dado agora.",
      B: "Correto! Eventualmente todos os nós terão a mesma versão da informação.",
      C: "Incorreto. ACID é para transações rígidas locais.",
      D: "Incorreto. Design de tabelas.",
      E: "Incorreto. Bloqueio mata a performance da rede."
    }
  },
  {
    id: 93,
    axis: "Distribuição e Escalabilidade",
    content: "O Teorema CAP exige escolhas. A consistência eventual é um trade-off para ganhar o quê?",
    options: {
      A: "Espaço.",
      B: "Performance de leitura e disponibilidade.",
      C: "Segurança.",
      D: "Beleza.",
      E: "Conformidade."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Consistência eventual costuma gastar mais espaço pelas réplicas.",
      B: "Correto! O sistema nunca para de responder (A), mesmo que o dado esteja milissegundos atrasado.",
      C: "Incorreto. Não protege contra malware.",
      D: "Incorreto.",
      E: "Incorreto."
    }
  },
  {
    id: 94,
    axis: "Distribuição e Escalabilidade",
    content: "O BitTorrent não tem servidor central. Qual a característica do P2P?",
    options: {
      A: "Centralizado.",
      B: "Descentralizado; cada nó é cliente e servidor.",
      C: "Lento.",
      D: "Apenas local.",
      E: "Pago."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. P2P evita o nó central para ser resiliente.",
      B: "Correto! Você baixa de quem já tem e ajuda quem está começando a baixar.",
      C: "Incorreto. Pode ser muito rápido com muitos pares.",
      D: "Incorreto. Roda globalmente.",
      E: "Incorreto. Protocolos abertos."
    }
  },
  {
    id: 95,
    axis: "Distribuição e Escalabilidade",
    content: "Arquivos no BitTorrent são divididos. Como são chamados os pedaços distribuídos?",
    options: {
      A: "Chunks.",
      B: "Blocos.",
      C: "Pedaços.",
      D: "Bytes.",
      E: "Bits."
    },
    correctAnswer: "A",
    optionExplanations: {
      A: "Correto! O arquivo é picotado em chunks para facilitar o download simultâneo de fontes diferentes.",
      B: "Incorreto. Termo de sistemas de arquivos rígidos.",
      C: "Incorreto. Termo informal.",
      D: "Incorreto. Unidade mínima de dado.",
      E: "Incorreto. Unidade binária."
    }
  },
  {
    id: 96,
    axis: "Distribuição e Escalabilidade",
    content: "Git é um sistema distribuído. Por que o Git é resiliente?",
    options: {
      A: "Código fica só na nuvem.",
      B: "Cada dev tem uma cópia completa do repositório.",
      C: "Impede trabalho simultâneo.",
      D: "Usa SQL.",
      E: "Apaga versões velhas."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Na nuvem seria centralizado.",
      B: "Correto! Se o servidor central cair, qualquer desenvolvedor pode restaurar o projeto inteiro.",
      C: "Incorreto. Git incentiva o trabalho paralelo.",
      D: "Incorreto. Git usa sistema de arquivos próprio.",
      E: "Incorreto. Git guarda todo o histórico."
    }
  },
  {
    id: 97,
    axis: "Distribuição e Escalabilidade",
    content: "Modelos híbridos usam Sharding e Replicação. Qual o objetivo dessa combinação?",
    options: {
      A: "Economizar luz.",
      B: "Distribuir escrita (sharding) e garantir segurança (replicação).",
      C: "Deixar o sistema lento.",
      D: "Complicar o uso.",
      E: "Usar peças velhas."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Sistemas distribuídos consomem mais energia.",
      B: "Correto! É a arquitetura de estado da arte para bancos NoSQL modernos em produção massiva.",
      C: "Incorreto. Objetivo é velocidade extrema.",
      D: "Incorreto. Objetivo é escala.",
      E: "Incorreto. Hardware moderno é preferível."
    }
  },
  {
    id: 98,
    axis: "Distribuição e Escalabilidade",
    content: "Consistência Forte exige mais do sistema. O que caracteriza a Consistência Forte?",
    options: {
      A: "Uma confirmação basta.",
      B: "Nenhuma confirmação.",
      C: "Exige confirmação de todas as réplicas; é mais lenta.",
      D: "É a mais rápida.",
      E: "É insegura."
    },
    correctAnswer: "C",
    optionExplanations: {
      A: "Incorreto. Isso seria consistência fraca.",
      B: "Incorreto. Perda de dados.",
      C: "Correto! Garante que ninguém leia dado velho, mas o sistema demora mais para confirmar a gravação.",
      D: "Incorreto. É a mais lenta por causa da rede.",
      E: "Incorreto. É a mais segura."
    }
  },
  {
    id: 99,
    axis: "Distribuição e Escalabilidade",
    content: "DHT é usado em P2P. O que significa DHT?",
    options: {
      A: "Digital High Tech.",
      B: "Distributed Hash Tables.",
      C: "Data Hosting Transfer.",
      D: "Direct Hard Transmission.",
      E: "Disk Heat Temperature."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. Termo de marketing.",
      B: "Correto! É o mecanismo que permite encontrar um arquivo na rede P2P sem um servidor central de busca.",
      C: "Incorreto. Termo genérico.",
      D: "Incorreto. Termo genérico.",
      E: "Incorreto. Sensor de hardware."
    }
  },
  {
    id: 100,
    axis: "Distribuição e Escalabilidade",
    content: "A evolução para sistemas distribuídos é necessária. A distribuição troca a simplicidade centralizada pelo quê?",
    options: {
      A: "Complexidade inútil.",
      B: "Resiliência e escala horizontal.",
      C: "Baixo custo.",
      D: "Estética.",
      E: "Redução de equipe."
    },
    correctAnswer: "B",
    optionExplanations: {
      A: "Incorreto. A complexidade é necessária para os ganhos de escala.",
      B: "Correto! Embora mais difícil de gerenciar, permite que o sistema nunca caia e cresça indefinidamente.",
      C: "Incorreto. Manter 100 servidores é mais caro que manter 1.",
      D: "Incorreto. Código distribuído é mais complexo.",
      E: "Incorreto. Exige equipes mais especializadas (DevOps/SRE)."
    }
  }
];
