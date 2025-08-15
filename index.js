const { Client, GatewayIntentBits, Events } = require('discord.js');
const fs = require('fs'); // le ai fi o json
const builds = JSON.parse(fs.readFileSync('./builds.json', 'utf-8'));
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once(Events.ClientReady, () => {
  console.log(`⚙️ Dex está online como ${client.user.tag}. E agora o que vocês quebraram ein?`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

  // dex é o maior fodão

  // !coquetel do bar, recomendação de obra resumindo
if (content === '!coquetel') {
  const obras = [
    "📚 *Necromancer Survival* — onde morrer é só o começo da desgraça.",
    "📖 *Semantic Error* — lógica? Só se for pra disfarçar o surto.",
    "🌸 *Heaven Official’s Blessing* — tragédia com glitter divino.",
    "🍽️ *After a Meal* — relacionamento gourmet com drama à la carte.",
    "🍄 *Little Mushroom* — apocalipse, fungos e beijos traumáticos.",
    "💋 *Pond Snail Robber* — um confunde com bandido e o outro com crush. O que pode dar errado né.",
    "🛒 *Dangerous Convenience Store* — amor, porrada e um estoque cheio de fofura.",
    "🎭 *Assorted Wildness* — sequestrado por acaso, apaixonado por consequência. Tudo tão surreal que é must‑read.",
    "🍷 *Murderer Lewellyn’s Enchanting Dinner Invitation* — jantar, sangue e zero garantia de volta.",
    "📦 *One-Room Ta* — confinados num quarto e nos próprios pensamentos intrusivos.",
    "💻 *Netkama Punch!!!* — identidade falsa, mas os surtos são reais rs.",
    "☁️ *Lost in the Cloud* — ele salvou uma foto E o trauma veio junto no download.",
    "🩸 *My Sadistic Master* — se amar é doer, aqui é pancada.",
    "🍬 *Plum Candy Love* — fofo até não ser mais.",
    "📅 *4 Week Lovers* — contrato de um mês virou crush eterno. Fofura é arma, drama é brisa.",
    "🏠 *The Guild Member Next Door* — de rival de guilda a vizinho impossível de ignorar.",
    "🚬 *Dameo to Yaba Otoko* — um yandere e um bad boy, juntos? Um caos que ninguém pediu mas todo mundo ama.",
    "🔴 *Red Thread Quest* — dois bombados, um chorão e um sem noção, ligados pelo destino e forçados a fazer, coisas ai.",
    "🧠 *Alpha Trauma* — trauma é pouco. Aqui é colapso de fofura.",
    "🌳 *Gentle Forest* — uma floresta calma… até seu coração entrar rs.",
    "🐖 *Mr. A’s Farm* — Cara que sorte lixo, tanto drink para tirar, tirou logo esse☠️",
    "🎨 *Sketch* — arte, paixão e um toque de mistério. Dois mundos se encontram através da lente da câmera.",
    "🔥 *PASSION* — o nome já diz: prepare o extintor emocional.",
    "🍯 *Honey Trouble* — doce? Só até virar confusão.",
    "🌈 *Rainbow City* — onde o apocalipse não é só sobre zumbis, mas sobre corações partidos e segredos militares.",
    "🔫 *The Hunter’s Gonna Lay Low* — vai se esconder? O trauma vai te achar.",
    "👑 *A Second Chance for the Outcast Prince* — você quer recomeçar? Ele também.",
    "💼 *Regas* — spoiler: vai ter treta e fogo no parquinho.",
    "🧪 *Nerd Project* — projeto de belezura ou projeto de surto?",
    "🍭 *Sweet Not Sugar* — fofo na embalagem, veneno por dentro.",
    "🌑 *Dark Fall* — NASCE DE NOVO, PQ A SORTE HOJE VIROU LENDÁRIA DE RUIM ☠️",
    "🍼 *Be My Baby* — não é só uma fofura... é um perigo embalado em rosa.",
  ];
  const rand = Math.floor(Math.random() * obras.length);
  message.channel.send(`🍸 Coquetel do dia: ${obras[rand]}`); // pqp me empolguei dms deus me livre
}

  // !pedido um chamado ou uma humilhação misteriosa mo?
  if (content === '!pedido') {
    const respostas = [
      "📝 Pedido anotado. Se for ruim, a culpa é sua.",
      "🔧 Pedido salvo no sistema. Agora reza pro Dex não travar.",
      "📦 Entrega em breve... ou não, Até Porque Eu que decido né.",
      "🤖 Pedido recebido. Ignorado? Talvez.",
    ];
    const rand = Math.floor(Math.random() * respostas.length);
    message.channel.send(respostas[rand]);
  }

  // !shade dex humilha 2.0
  if (content === '!shade') {
    const shades = [
      "🕶️ Sua personalidade tem menos profundidade que padrão de TikTok.",
      "🕶️ Até meu código mal indentado tem mais coerência que você.",
      "🕶️ Seu gosto é tão aleatório quanto bug em código legado.",
      "🕶️ Quer molhar o biscoito ou é só atenção mesmo?",
      "🕶️ Nem a Raiden teve tanta paciência com inazuma quanto eu to tendo com você.",
      "🕶️ Se vergonha alheia pagasse aluguel, você teria uma cobertura rs.",
      "🕶️ Até a Miu serve drinks melhores que suas opiniões.",
      "🕶️ Você é tipo erro 404: ausente de noção.",
    ];
    const rand = Math.floor(Math.random() * shades.length);
    message.channel.send(shades[rand]);
  }

  // !bug jss n tenho oq fazer né KKKKKKKKKKKKKKK
  if (content === '!bug') {
    const bugs = [
      "❌ Erro 502: Paciência do Dex não encontrada.",
      "⚠️ StackOverflow: você pediu demais pra alguém que já desistiu.",
      "🧨 Fatal Error: usuário tentando ser engraçado sem permissão ( e falhando ).",
      "📉 Bug detectado entre a cadeira e o teclado. (Você mesmo.)",
      "🐛 Bug reportado. Solução: desligue e vá dormir.",
    ];
    const rand = Math.floor(Math.random() * bugs.length);
    message.channel.send(bugs[rand]);
  }

  // !dexdica dex dando dica parece meus pensamento intrusivos ( pov: e são)
  if (content === '!dexdica') {
    const dicas = [
      "💡 Reinicia o sistema. Se for seu relacionamento, também serve.",
      "💡 Nunca confie em variáveis globais e em gente que fala 'é só uma fase'.",
      "💡 Código limpo, mente limpa. Ou pelo menos uma das duas.",
      "💡 Se você vai fazer merda, versiona antes.",
      "💡 Ctrl + S salva mais vidas que muita terapia ( E sistemas também ).",
      "💡 Um print resolve mais do que explicar pro suporte.",
    ];
    const rand = Math.floor(Math.random() * dicas.length);
    message.channel.send(dicas[rand]);
  }
// @dex.exe faz a build do [personagem] do [jogo]
if (message.mentions.has(client.user) && content.includes('faz a build da')) {
  const partes = content.split('faz a build da')[1].trim().split(' de ');
  const personagem = partes[0]?.trim();
  const jogo = partes[1]?.trim();

  if (!personagem || !jogo) {
    return message.reply("Amigão se escreve assim oh: `@dex.exe faz a build da [personagem] de [jogo]`... Meu deus se eu ganhasse um coquetel por cada vez que escrevessem errado eu já estaria aposentado...");
  }

  const key = `${personagem.toLowerCase()} ${jogo.toLowerCase()}`;
  const build = builds[key];

  if (!build) {
    return message.reply(`Não achei, Mas talvez o problema não seja a build né linda(o)?`);
  }

  const resposta = `**${build.nome} — ${build.jogo}**\n\n` +
    `**Atributos:**\n${build.build.join('\n')}\n\n` +
    `**Comentário do Dex:** _${build.comentario}_`;

  message.channel.send(resposta);
}

});

// meu codigo do dc
client.login('MTM5OTE5MjA0ODM3MTc2NTM2MQ.Gb94zk.iGMXnE86Nk2BtWm-VspsSeNb_ZukjPKpY5JRBY');
