export const perfil = {
    saudação: 'Olá, eu sou',
    nome: 'Heraclides Mourão',
    funcao: 'Bacharel em Sistemas de Informação, Pós Graduado em Ciências de Dados e IA',
    resumo:
        'Educador que ensina Programação e análise de dados construindo software de verdade, com projetos que ligam sala de aula e mercado',
    sobre:
        'atuo como professor de tecnologia com foco em aprendizagemprogressiva, prática acessível para iniciantes. Cada conteúdo novo é conectado ao que já foi estudado, sempre passando por contextualização, teória, exemplo real, demonstração passo a passo e prática guiada. Desenvolvo projetos integradores em front end, back end, dados, inteligência artificial, e cobro dos alunos mais do que copiar códigos: entender a finalidade, testar, identificar erros, corrigir, documentar e apresentar o resultado.',
    fatos: [
        {rotulo: 'Atuação', valor: 'Professor de tecnologia'},
        {rotulo: 'foco', valor:'Front end, back end, análise de dados e IA'},
        {rotulo: 'Stack principal', valor:'React, Node.Js, Python, Html, JavaScript, Big Data, PowerBI'},
        {rotulo: 'Método', valor:'Projetos integradores com enterga no GitHub'},
    ],
    email: 'heraclidesefg@gmail.com',
    github: 'https://github.com/heraclidesefg',
    linkedin: 'https://www.linkedin.com/in/heraclidesmourao/',
    instagram: 'https://www.instagram.com/hcm1978/',
}

export const projetos = [
  {
    id: 1,
    titulo: 'Login System',
    descricao:
      'Sistema completo de autenticação com cadastro, login, rotas protegidas e token JWT, do banco ao deploy.',
    tecnologias: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    link: 'https://github.com/heraclidesefg/Projeto_Login_Sytem',
    destaque: true,
  },
  {
    id: 2,
    titulo: 'Pipeline de Big Data',
    descricao:
      'Arquitetura Medallion com camadas bronze, prata e ouro para tratar dados brutos em tabelas confiáveis.',
    tecnologias: ['Python', 'PySpark', 'Databricks', 'Delta Lake'],
    link: 'https://github.com/heraclidesefg/Projeto_bigdata_databricks_datatran',
    destaque: true,
  },
  {
    id: 3,
    titulo: 'App Android em Kotlin',
    descricao:
      'Aplicativo nativo com navegação entre telas, formulários validados e consumo de API REST.',
    tecnologias: ['Kotlin', 'Android Studio', 'Retrofit'],
    link: 'https://github.com/heraclidesefg/Projeto-smartTask',
    destaque: false,
  },
  {
    id: 4,
    titulo: 'Laboratório de IA',
    descricao:
      'Atividades no Colab com reconhecimento de fala, tradução automática, GANs e análise exploratória de dados.',
    tecnologias: ['Python', 'Google Colab', 'TensorFlow', 'Pandas'],
    link: 'https://github.com/heraclides/laboratorio-ia',
    destaque: false,
  },
  {
    id: 5,
    titulo: 'Protótipos no Figma',
    descricao:
      'Wireframes e protótipos navegáveis usados como etapa obrigatória antes de codificar qualquer interface.',
    tecnologias: ['Figma', 'Design System', 'UX'],
    link: 'https://github.com/heraclides/prototipos-figma',
    destaque: false,
  },
  {
    id: 6,
    titulo: 'Biblioteca de Aulas',
    descricao:
      'Material didático aberto com roteiros, questões de fixação e rubricas de avaliação por projeto.',
    tecnologias: ['Markdown', 'Git', 'GitHub'],
    link: 'https://github.com/heraclides/biblioteca-de-aulas',
    destaque: false,
  },
]

export const habilidades = [
  { nome: 'HTML semântico', nivel: 95 },
  { nome: 'CSS e responsividade', nivel: 90 },
  { nome: 'JavaScript', nivel: 88 },
  { nome: 'React', nivel: 85 },
  { nome: 'Node.js e Express', nivel: 82 },
  { nome: 'MongoDB e JWT', nivel: 78 },
  { nome: 'Python e PySpark', nivel: 80 },
  { nome: 'Kotlin para Android', nivel: 70 },
  { nome: 'Git e GitHub', nivel: 92 },
  { nome: 'Figma', nivel: 75 },
]