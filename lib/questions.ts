export interface Question {
  id: number;
  dimension: string;
  text: string;
  options: {
    text: string;
    value: number;
  }[];
}

export const questions: Question[] = [
  // Dimensão 1: Estado Emocional Predominante
  {
    id: 1,
    dimension: "Estado Emocional",
    text: "Na maioria dos dias, quando você acorda, qual sensação mais se aproxima do seu estado interior?",
    options: [
      { text: "Sinto um peso enorme, vontade de não levantar, desânimo profundo", value: 1 },
      { text: "Acordo cansado, com preocupação sobre o dia que vem pela frente", value: 2 },
      { text: "Acordo com uma energia de luta, sabendo que preciso batalhar", value: 3 },
      { text: "Geralmente acordo com energia e disposição para realizar", value: 4 },
      { text: "Acordo em paz, grato, sentindo que a vida já é generosa comigo", value: 5 },
    ],
  },
  {
    id: 2,
    dimension: "Estado Emocional",
    text: "Quando algo inesperado e negativo acontece (um imprevisto financeiro, um conflito), qual é sua reação mais comum?",
    options: [
      { text: "Sinto que mereço isso, que sempre dá errado comigo", value: 1 },
      { text: "Fico abatido por um bom tempo, me vitimizando", value: 2 },
      { text: "Fico ansioso e preocupado com as consequências", value: 3 },
      { text: "Fico irritado mas busco uma solução rapidamente", value: 4 },
      { text: "Aceito com tranquilidade, confio que tudo tem um propósito", value: 5 },
    ],
  },
  {
    id: 3,
    dimension: "Estado Emocional",
    text: "Pensando nas últimas 2 semanas, qual emoção mais esteve presente no seu dia a dia?",
    options: [
      { text: "Vergonha ou culpa por algo que fiz ou deixei de fazer", value: 1 },
      { text: "Tristeza, desânimo, sensação de vazio", value: 2 },
      { text: "Medo ou ansiedade sobre o futuro", value: 3 },
      { text: "Frustração ou impaciência com as coisas não andarem", value: 4 },
      { text: "Alegria, gratidão e paz interior", value: 5 },
    ],
  },
  {
    id: 4,
    dimension: "Estado Emocional",
    text: "Quando você está sozinho consigo mesmo em silêncio, o que acontece?",
    options: [
      { text: "Evito ao máximo ficar sozinho, não gosto do que sinto", value: 1 },
      { text: "Sinto um aperto no peito, pensamentos tristes vêm à tona", value: 2 },
      { text: "Fico agitado, minha mente dispara com preocupações", value: 3 },
      { text: "Penso em tudo que preciso resolver e me planejo", value: 4 },
      { text: "Sinto paz, aproveito minha própria companhia", value: 5 },
    ],
  },

  // Dimensão 2: Relacionamento com Dinheiro e Abundância
  {
    id: 5,
    dimension: "Dinheiro e Abundância",
    text: "Quando você pensa em dinheiro, qual é o sentimento que surge primeiro?",
    options: [
      { text: "Vergonha — sinto que nunca tenho o suficiente", value: 1 },
      { text: "Tristeza — parece que dinheiro nunca dura comigo", value: 2 },
      { text: "Medo — tenho pavor de ficar sem", value: 3 },
      { text: "Desejo — quero mais e trabalho duro por isso", value: 4 },
      { text: "Gratidão — o dinheiro flui naturalmente para mim", value: 5 },
    ],
  },
  {
    id: 6,
    dimension: "Dinheiro e Abundância",
    text: "Qual dessas frases mais ressoa com sua realidade financeira atual?",
    options: [
      { text: "Não importa o quanto eu ganhe, sempre parece insuficiente", value: 1 },
      { text: "Sinto que a abundância dos outros me destaca o que me falta", value: 2 },
      { text: "Ganho mas não consigo reter, o dinheiro escorre", value: 3 },
      { text: "Conquisto com esforço, mas sei que poderia ser mais fácil", value: 4 },
      { text: "O dinheiro vem até mim de formas esperadas e inesperadas", value: 5 },
    ],
  },
  {
    id: 7,
    dimension: "Dinheiro e Abundância",
    text: "Quando vê alguém próximo conquistando prosperidade financeira, o que sente?",
    options: [
      { text: "Inveja e vergonha de mim mesmo por não conseguir o mesmo", value: 1 },
      { text: "Tristeza, pensando que comigo nunca vai acontecer", value: 2 },
      { text: "Ansiedade, me cobrando para ser como aquela pessoa", value: 3 },
      { text: "Admiração misturada com uma pontada de 'por que não eu?'", value: 4 },
      { text: "Alegria genuína pela pessoa, sabendo que também é possível para mim", value: 5 },
    ],
  },
  {
    id: 8,
    dimension: "Dinheiro e Abundância",
    text: "Qual é sua relação com oportunidades de ganhar mais ou crescer financeiramente?",
    options: [
      { text: "Não acredito que oportunidades existam para mim", value: 1 },
      { text: "Já perdi tantas que nem tento mais", value: 2 },
      { text: "Vejo oportunidades mas tenho medo de arriscar", value: 3 },
      { text: "Busco ativamente, mas nem sempre consigo aproveitar", value: 4 },
      { text: "Atraio oportunidades naturalmente, estou aberto e confiante", value: 5 },
    ],
  },

  // Dimensão 3: Qualidade dos Pensamentos Dominantes
  {
    id: 9,
    dimension: "Pensamentos Dominantes",
    text: "Se alguém pudesse ler seus pensamentos nos últimos 7 dias, o que encontraria mais?",
    options: [
      { text: "Pensamentos de que não sou bom o suficiente", value: 1 },
      { text: "Pensamentos sobre tudo que deu errado na minha vida", value: 2 },
      { text: "Preocupações constantes com o que pode dar errado", value: 3 },
      { text: "Planos, metas e estratégias para conquistar mais", value: 4 },
      { text: "Pensamentos de gratidão, paz e contentamento", value: 5 },
    ],
  },
  {
    id: 10,
    dimension: "Pensamentos Dominantes",
    text: "Quando você imagina seu futuro daqui a 5 anos, o que vê?",
    options: [
      { text: "Nada de bom — acho que vou estar no mesmo lugar ou pior", value: 1 },
      { text: "Um futuro incerto, sem clareza ou esperança", value: 2 },
      { text: "Algo preocupante — tenho medo do que vem pela frente", value: 3 },
      { text: "Um futuro que preciso construir com muito esforço", value: 4 },
      { text: "Um futuro brilhante, sinto que coisas boas estão vindo", value: 5 },
    ],
  },
  {
    id: 11,
    dimension: "Pensamentos Dominantes",
    text: "Qual é o diálogo interno que você mais repete quando olha no espelho?",
    options: [
      { text: "Por que eu não consigo mudar? Algo está errado comigo", value: 1 },
      { text: "Eu queria ser diferente, mas não sei como", value: 2 },
      { text: "Preciso mudar, senão vou perder tudo", value: 3 },
      { text: "Estou evoluindo, mas preciso me esforçar mais", value: 4 },
      { text: "Sou grato por quem sou e confio no meu caminho", value: 5 },
    ],
  },
  {
    id: 12,
    dimension: "Pensamentos Dominantes",
    text: "Quando pensa em suas conquistas passadas, o que sente?",
    options: [
      { text: "Vergonha — foram poucas ou insignificantes", value: 1 },
      { text: "Tristeza — podiam ter sido muito mais", value: 2 },
      { text: "Medo de não conseguir manter ou repetir", value: 3 },
      { text: "Orgulho, mas sei que custou mais do que deveria", value: 4 },
      { text: "Gratidão e alegria por tudo que vivi e conquistei", value: 5 },
    ],
  },

  // Dimensão 4: Impacto nas Relações Interpessoais
  {
    id: 13,
    dimension: "Relações Interpessoais",
    text: "Como as pessoas mais próximas descreveriam sua energia?",
    options: [
      { text: "Pesada, difícil de lidar — me evitam", value: 1 },
      { text: "Triste, sempre precisando de apoio", value: 2 },
      { text: "Ansiosa, sempre alertada e tensa", value: 3 },
      { text: "Determinada, forte, mas às vezes intensa demais", value: 4 },
      { text: "Leve, acolhedora, que transmite paz", value: 5 },
    ],
  },
  {
    id: 14,
    dimension: "Relações Interpessoais",
    text: "Quando está em um grupo de pessoas, qual é seu papel mais comum?",
    options: [
      { text: "O que fica quieto, se sentindo inferior", value: 1 },
      { text: "O que busca apoio e validação dos outros", value: 2 },
      { text: "O que fica em alerta, desconfiado das intenções", value: 3 },
      { text: "O que lidera ou quer estar no controle", value: 4 },
      { text: "O que harmoniza, acolhe e conecta as pessoas", value: 5 },
    ],
  },
  {
    id: 15,
    dimension: "Relações Interpessoais",
    text: "Quando alguém te critica, qual é sua reação interna?",
    options: [
      { text: "Destruído — sinto que sou um fracasso total", value: 1 },
      { text: "Magoado profundamente, levo para o lado pessoal", value: 2 },
      { text: "Na defensiva, já penso em como me proteger", value: 3 },
      { text: "Indignado — acho injusto e quero me defender", value: 4 },
      { text: "Aberto — escuto, avalio e uso para crescer", value: 5 },
    ],
  },
  {
    id: 16,
    dimension: "Relações Interpessoais",
    text: "O que mais te incomoda nos seus relacionamentos atualmente?",
    options: [
      { text: "Sinto que não mereço ser amado ou respeitado", value: 1 },
      { text: "As pessoas não entendem minha dor e não me apoiam", value: 2 },
      { text: "Tenho medo de ser abandonado ou traído", value: 3 },
      { text: "As pessoas não acompanham meu ritmo ou ambição", value: 4 },
      { text: "Nada me incomoda — vivo relações harmoniosas", value: 5 },
    ],
  },

  // Dimensão 5: Conexão Espiritual e Propósito de Vida
  {
    id: 17,
    dimension: "Espiritualidade e Propósito",
    text: "Quando pensa sobre o propósito da sua vida, o que sente?",
    options: [
      { text: "Vergonha — sinto que não tenho nenhum propósito relevante", value: 1 },
      { text: "Desesperança — acho que nasci para sofrer", value: 2 },
      { text: "Medo — tenho pavor de nunca encontrar meu lugar", value: 3 },
      { text: "Busca ativa — sei que existe algo maior e corro atrás", value: 4 },
      { text: "Certeza e paz — sei que estou no meu caminho", value: 5 },
    ],
  },
  {
    id: 18,
    dimension: "Espiritualidade e Propósito",
    text: "Qual é sua relação com práticas como meditação, oração ou conexão interior?",
    options: [
      { text: "Nunca consegui — me sinto desconectado de tudo", value: 1 },
      { text: "Tento mas não sinto nada, acho que não é para mim", value: 2 },
      { text: "Pratico por medo de estar perdido espiritualmente", value: 3 },
      { text: "Pratico com disciplina buscando evolução", value: 4 },
      { text: "Vivo em estado de presença e conexão natural", value: 5 },
    ],
  },
  {
    id: 19,
    dimension: "Espiritualidade e Propósito",
    text: "Se pudesse definir sua relação com o universo/Deus/vida, qual seria?",
    options: [
      { text: "Sinto que fui abandonado ou esquecido", value: 1 },
      { text: "Sinto que a vida é injusta comigo", value: 2 },
      { text: "Sinto que preciso lutar para receber algo", value: 3 },
      { text: "Sinto que conquisto o que mereço pelo esforço", value: 4 },
      { text: "Sinto que sou amado e guiado em tudo", value: 5 },
    ],
  },
  {
    id: 20,
    dimension: "Espiritualidade e Propósito",
    text: "Quando deita à noite e reflete sobre o dia, qual é o sentimento predominante?",
    options: [
      { text: "Culpa — sinto que desperdicei mais um dia", value: 1 },
      { text: "Tristeza — outro dia que passou sem brilho", value: 2 },
      { text: "Ansiedade — preocupado com amanhã", value: 3 },
      { text: "Satisfação parcial — fiz algo, mas podia ser mais", value: 4 },
      { text: "Gratidão — foi um bom dia, e amanhã será melhor", value: 5 },
    ],
  },
];
