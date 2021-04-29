//a

import { Filter } from './admin';
import { BOTCHANNELpraça } from './admin';
import { BOTCHANNELadmin } from './admin';
import { MUSICAS } from './admin';
import { ADMINID } from './admin';
import { PROGRAMMERID } from './admin';
import { YOUTUBETWITCH } from './admin';
import { tagsKv } from './admin';
import { cooldownKv } from './admin';
import { TAGRecieve } from './admin';
import { TAGRegister } from './admin';
import { PROPAGANDA } from './admin';
import { commands } from './admin';
import { guildId } from './admin';

import './admin';
import './mm';
import './asyncfunction';
import './banca';

import { NewEmbedCreate } from './asyncfunction';

/*commands.raw( {
  name: 'MODELO',
    filters: discord.command.filters.isChannelId(BOTCHANNELpraça)
  },
    (message) =>
  message.reply(
    'text'
    setTimeout(async () => await message.delete(), 1000)
  )
); //MODELO*/ 
/*discord.on('MODELO', async (data) => {
  const msgid = '768831127321313341';
  const emoji = discord.decor.Emojis.HAMBURGER;
  const roleid = '768825977295470592';
  if (msgid == data.messageId && emoji == data.emoji.name) {
    data.member.addRole(roleid);
  }
}); //MODELO*/

commands.raw(
  {
    name: 'DRIVE',
    filters: Filter.and(
      Filter.not(Filter.isChannelId(MUSICAS)),
      Filter.not(Filter.isChannelId(YOUTUBETWITCH)),
      Filter.or(
        Filter.isChannelId(BOTCHANNELpraça),
        Filter.isOwner(),
        Filter.hasRole(PROGRAMMERID)
      )
    )
  },
  (message) => {
    message.reply(
      new discord.Embed({
        title: 'DRIVE',
        color: 0xcee5ff,
        description:
          'Simuladores:https://drive.google.com/drive/folders/1FrOoQob4NBjeqbjHJci5IstiydmquI7l?usp=sharing\nPDFs:https://drive.google.com/drive/folders/18_QqhIvWQ6xmtGwMwECcNdAnn6_CQ46q?usp=sharing\n',
        footer: {
          text: 'powered by https://pylon.bot'
        }
      })
    );
    setTimeout(async () => await message.delete(), 1000);
  }
); //!DRIVE
commands.raw(
  {
    name: 'MONITOR',
    filters: Filter.and(
      Filter.not(Filter.isChannelId(MUSICAS)),
      Filter.not(Filter.isChannelId(YOUTUBETWITCH)),
      Filter.or(
        Filter.isChannelId(BOTCHANNELpraça),
        Filter.isOwner(),
        Filter.hasRole(PROGRAMMERID)
      )
    )
  },
  (message) => {
    message.reply(`Um <@&832592734622580799> aparecerá em breve`);
    setTimeout(async () => await message.delete(), 1000);
  }
); //!MONITOR
commands.raw(
  {
    name: 'ACADEMICO',
    filters: Filter.and(
      Filter.not(Filter.isChannelId(MUSICAS)),
      Filter.not(Filter.isChannelId(YOUTUBETWITCH)),
      Filter.or(
        Filter.isChannelId(BOTCHANNELpraça),
        Filter.isOwner(),
        Filter.hasRole(PROGRAMMERID)
      )
    )
  },
  (message) => {
    const k = '';
    const c = `CENTRO DE TECNOLOGIA - CT\n
  CENTRO DE BIOCIÊNCIAS - CB\n
  CENTRO DE EDUCAÇÃO - CE\n
  CENTRO DE CIÊNCIAS SOCIAIS APLICADAS - CCSA\n
  CENTRO DE CIÊNCIAS HUMANAS, LETRAS E ARTES - CCHLA\n
  CENTRO DE CIÊNCIAS EXATAS E DA TERRA - CCET\n
  CENTRO DE CIÊNCIAS DA SAÚDE - CCS\n\n
  ESCOLA DE SAUDE - ES\n
  ESCOLA DE MÚSICA - EM\n\n
  INSTITUTO HUMANITAS DE ESTUDOS INTEGRADOS - IHMI\n
  INSTITUTO METROPOLE DIGITAL - IMD`;
    NewEmbedCreate(message, c, 'Portal', k);
    setTimeout(async () => await message.delete(), 1000);
  }
); //!ACADEMICO
commands.raw(
  {
    name: 'MAPA',
    filters: Filter.and(
      Filter.not(Filter.isChannelId(MUSICAS)),
      Filter.not(Filter.isChannelId(YOUTUBETWITCH)),
      Filter.or(
        Filter.isChannelId(BOTCHANNELpraça),
        Filter.isOwner(),
        Filter.hasRole(PROGRAMMERID)
      )
    )
  },
  (message) => {
    message.reply(
      new discord.Embed({
        title: 'Mapa UFRN1',
        color: 0xcee5ff,
        image: {
          url:
            'https://ufrn.br/resources/img/institucional/localizacao/mapacampuscentral.png'
        },
        footer: {
          text: 'powered by https://ufrn.br/institucional/localizacao'
        }
      })
    );
    message.reply(
      new discord.Embed({
        title: 'Mapa UFRN2',
        color: 0xcee5ff,
        image: {
          url:
            'https://ufrn.br/resources/img/institucional/localizacao/mapacampuscentralcomvias.png'
        },
        footer: {
          text: 'powered by https://ufrn.br/institucional/localizacao'
        }
      })
    );
    setTimeout(async () => await message.delete(), 1000);
  }
); //!MAPA
commands.raw(
  //https://discordapp.com/channels/530557949098065930/744886063247654934/813713515118329856
  {
    name: 'ping',
    aliases: ['echo', 'beep'],
    description: "Responds with the bot's ping.",
    filters: Filter.and(
      Filter.not(Filter.isChannelId(MUSICAS)),
      Filter.not(Filter.isChannelId(YOUTUBETWITCH))
    )
  },
  async (msg) => {
    const embed = new discord.Embed();
    const start = Date.now();
    const latency = -(new Date(msg.timestamp).getTime() - start);
    embed.setTitle(`**__PING__**`);
    embed.setDescription(`The ping is ${latency}ms`);
    embed.setColor(0xf600ff);
    embed.setTimestamp(new Date().toISOString());
    await msg.reply({ embed: embed });
  }
);

const CursoCommands = commands.subcommandGroup({
  name: 'Cursos',
  filters: Filter.and(
    Filter.not(Filter.isChannelId(YOUTUBETWITCH)),
    Filter.not(Filter.isChannelId(MUSICAS)),
    Filter.or(
      Filter.isChannelId(BOTCHANNELpraça),
      Filter.isOwner(),
      Filter.hasRole(PROGRAMMERID)
    )
  )
}); //!CURSOS GROUP
CursoCommands.default(
  (ctx) => ({
    Curso: ctx.textOptional()
  }),
  async (message, { Curso }) => {
    var c;
    if (Curso == null) {
      message.reply(
        'Selecione um setor existente, tente !Academico para mais informações (Use a sigla)'
      );
      setTimeout(async () => await message.delete(), 1000);
      return 0;
    } else if (Curso.toLowerCase() == 'ccs')
      c = `Curso de Especialização em Gestão de Hospitais Públicos
        Educação Física
        Enfermagem
        Farmácia
        Fisioterapia
        Fonoaudiologia
        Medicina
        Nutrição
        Odontologia
        Saúde Coletiva`;
    else if (Curso.toLowerCase() == 'ccsa')
      c = `Administração
        Administração Pública
        Biblioteconomia
        Ciências Contábeis
        Ciências Econômicas
        Curso de Especialização em Auditoria e Controle Interno
        Direito
        Gestão de Cooperativas
        Serviço Social
        Turismo`;
    else if (Curso.toLowerCase() == 'ct')
      c = `Arquitetura e Urbanismo
        Engenharia Ambiental
        Engenharia Biomédica
        Engenharia Civil
        Engenharia de Alimentos
        Engenharia de Computação
        Engenharia de Materiais
        Engenharia de Petróleo
        Engenharia de Produção
        Engenharia de Telecomunicações
        Engenharia Elétrica
        Engenharia Mecânica
        Engenharia Mecatrônica
        Engenharia Química
        Engenharia Têxtil`;
    else if (Curso.toLowerCase() == 'cchla')
      c = `Artes Visuais
        Ciências Sociais
        Comunicação Social
        Comunicação Social - Audiovisual
        Comunicação Social- Publicidade e Propaganda
        Dança
        Design
        Especialização em Avaliação Psicológica
        Filosofia
        Geografia
        Gestão de Políticas Públicas
        História
        Jornalismo
        Letras - Francês
        Letras - Inglês
        Letras - Língua Espanhola e Literaturas
        Letras - Língua Portuguesa
        Letras - Língua Portuguesa e Libras
        Psicologia
        Teatro`;
    else if (Curso.toLowerCase() == 'cb')
      c = `Biomedicina
        Ciências Biológicas
        Ecologia
        Engenharia de Aquicultura`;
    else if (Curso.toLowerCase() == 'ccet')
      c = `Ciência da Computação
        Ciências Atuariais
        Engenharia de Software
        Estatística
        Física
        Geofísica
        Matemática
        Meteorologia
        Química
        Química do Petróleo`;
    else if (Curso.toLowerCase() == 'ce') c = 'Pedagogia\n';
    else {
      message.reply(
        'Setor inválido, tente !Academico para mais informações (Use a sigla)'
      );
      setTimeout(async () => await message.delete(), 1000);
      return 0;
    }
    NewEmbedCreate(message, c, 'CURSOS', Curso.toUpperCase());
    setTimeout(async () => await message.delete(), 1000);
  }
); //!CURSOS DEFAULT

//--------------------------------------!HELP-----------------------------------------------//
var ALAN = '';
var MSGID = '';
var AUTHORID = '';
var ALAN1;
////var C=[];C=C.concat(i);
commands.raw(
  {
    name: 'help',
    aliases: ['help'],
    filters: Filter.and(
      Filter.not(Filter.isChannelId(MUSICAS)),
      Filter.not(Filter.isChannelId(YOUTUBETWITCH))
    ),
    description: 'Displays help options'
  },
  async (msg) => {
    const menu = new discord.Embed();
    await menu.setColor(0x3f888f);
    await menu.setTitle('Help menu');
    await menu.setDescription(
      `What do you need help with?
  1️⃣: Commands 1
  2️⃣: Commands 2
  3️⃣: Commands Especial
  4️⃣: How to get ranks
  5️⃣: Staff`
    );
    await menu.setFooter({ text: `Use o canal #Praça para os comandos!` });
    const thehelpmsg = await msg.reply(menu);

    await thehelpmsg.addReaction('1️⃣');
    await thehelpmsg.addReaction('2️⃣');
    await thehelpmsg.addReaction('3️⃣');
    await thehelpmsg.addReaction('4️⃣');
    await thehelpmsg.addReaction('5️⃣');
    //await thehelpmsg.addReaction('6️⃣');
    //await thehelpmsg.addReaction('7️⃣');
    //await thehelpmsg.addReaction('8️⃣');
    //await thehelpmsg.addReaction('9️⃣');
    await thehelpmsg.addReaction('❌');

    ALAN = msg.id;

    const guild = await discord.getGuild(guildId);
    const theMsgChannel = await discord.getGuildTextChannel(msg.channelId);
    ALAN1 = await theMsgChannel.getMessage(ALAN);

    MSGID = thehelpmsg.id;
    AUTHORID = msg.author.id;

    setTimeout(async () => msg.delete(), 20000);
    setTimeout(async () => thehelpmsg.delete(), 20000);
  }
);
discord.registerEventHandler('MESSAGE_REACTION_ADD', async (theReaction) => {
  const guild = await discord.getGuild(guildId);
  const theMsgChannel = await discord.getGuildTextChannel(
    theReaction.channelId
  );
  const theMsg = await theMsgChannel.getMessage(theReaction.messageId);

  if (
    theReaction.emoji.name == '1️⃣' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    // '`GABIRU Ola amigos, como vocês estão?'+b+'Clotilde`'
    const option1 = new discord.Embed();
    await option1.setColor(0x3f888f);
    await option1.setTitle('Commands 1');
    await option1.setDescription(
      '`!Drive`    - Nossa base de PDFS\n' +
        '`!Monitor`  - Suporte quanto as mais diversas disciplinas\n' +
        '`!Academico`- Conheça as siglas dos setores da UFRN\n' +
        '`!Cursos`   - Pesquise por setor <sigla> \n' +
        '`!Mapa`     - Uma visão geral da UFRN\n' +
        '`!Ping`     - Pong\n' +
        '`!Quiz set` - <URL><FONTE><A><B><C><D> EXCLUSIVO:' +
        `<#${'832597670203621417'}>\n`
    );
    const theMsg2 = await theMsg.reply(option1);
    MSGID = '';
    AUTHORID = '';
    await ALAN1.delete();
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '2️⃣' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    const option2 = new discord.Embed();
    await option2.setColor(0x3f888f);
    await option2.setTitle('Commands 2');
    await option2.setDescription('`We´re working on it`\n');
    const theMsg3 = await theMsg.reply(option2);
    MSGID = '';
    AUTHORID = '';
    await ALAN1.delete();
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '3️⃣' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    const option3 = new discord.Embed();
    await option3.setColor(0x3f888f);
    await option3.setTitle('Commands Especial');
    await option3.setDescription(
      '\n*They need special permissions:*\n' +
        '`!Banca Aprovar`   - <CODE><CATEGORIA>\n' +
        '`!Banca Isolado`   - <NUMERO>\n' +
        '`!Banca Editar`    - <CODIGO><A><B><C><D>\n' +
        '`!Banca Listar`    - <CATEGORIA>\n' +
        '`!Banca Prova`     - <NUMERO><CATEGORIA><TEMPO>\n' +
        '`!Esporte Aula`    - Calendário das futuras aulas\n' +
        '`!Esporte Notícia` - Novidade do mundo dos esportes\n' +
        '`!MM`              - !help dos E-Sports\n' +
        '\n*Interação manual com o Pylon.bot*\n' +
        '`!Tag` `!Tag Set` `!Tag Delete` `!Tag Reset`\n' +
        '\n*Comandos de sistema*\n' +
        '`/admingroup`\n'
    );

    const theMsg4 = await theMsg.reply(option3);
    MSGID = '';
    AUTHORID = '';
    await ALAN1.delete();
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '4️⃣' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    const option4 = new discord.Embed();
    await option4.setColor(0x3f888f);
    await option4.setTitle('How to get ranks');
    await option4.setDescription(`AUTOROLES: <#${'832634830318469200'}>`);

    const theMsg4 = await theMsg.reply(option4);
    MSGID = '';
    AUTHORID = '';
    await ALAN1.delete();
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '5️⃣' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    const option4 = new discord.Embed();
    await option4.setColor(0x3f888f);
    await option4.setTitle('STAFF');
    await option4.setDescription(
      '*Nossa equipe atualmente é formada por*\n' +
        '**Davi Alves** - JSSDK Programmer and Owner\n' +
        '**João Victor Dantas** - Python e JQuerry Programmer\n' +
        '**João Artur** - Efective Teacher\n' +
        '**Caio Vitor** - Modder\n' +
        '**Daniel Luan** - Modder\n' +
        '**Natália Pereira** - Modder\n' +
        '**Klaus Reiniger** - Modder\n' +
        '**Pietra Freire** - Professor\n' +
        '**Maria Eduarda** - Monitor\n' +
        '**Hartur Souza** - Técnico\n' +
        'Estamos a procura de programadores em JS SDK e Professores, pingue algum moderador para mais informações'
    );

    const theMsg4 = await theMsg.reply(option4);
    MSGID = '';
    AUTHORID = '';
    await ALAN1.delete();
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '❌' &&
    theReaction.messageId == MSGID &&
    theReaction.member.user.id == AUTHORID
  ) {
    const option8 = new discord.Embed();
    await option8.setColor(0x3f888f);
    await option8.setTitle('**Canceled**');
    await option8.setDescription(`You chanceled the command selection`);

    const theMsg4 = await theMsg.reply(option8);
    MSGID = '';
    AUTHORID = '';
    await ALAN1.delete();
    await theMsg.delete();
    setTimeout(() => theMsg4.delete(), 5000);
  }
});
//------------------------------------------!ENDHELP------------------------------------------------//

discord.on('MESSAGE_REACTION_ADD', async (data) => {
  //AUTOROLE EMBED
  const msgid = '835708673492910150';
  const emoji = discord.decor.Emojis.THUMBSUP;
  const roleid = '833818556235645018';
  const emoji2 = discord.decor.Emojis.HAND_SPLAYED;
  const roleid2 = '833866589438607431';
  const emoji3 = discord.decor.Emojis.X;
  const emoji4 = discord.decor.Emojis.VIDEO_CAMERA;
  const roleid4 = '834507786397941860';
  const emoji5 = discord.decor.Emojis.MUSICAL_NOTE;
  const roleid5 = '834769763049799741';
  const emoji6 = discord.decor.Emojis.VIDEO_GAME;
  const roleid6 = '835697502279434250';
  const user = data.member.user.id;

  /*//CREATE A NEW EMBED
     const menu = new discord.Embed();
     await menu.setColor(0x3f888f);
     await menu.setTitle(`LISTA DE ROLES DISPONÍVEIS V1.1`);
     await menu.setDescription(
      `
     ${emoji}- Para ter acesso ao canal #admin, onde os comandos são testados
     
     ${emoji2}- Para ter acesso a categoria #E-SPORTS

     ${emoji4}- Para ter acesso ao canal #YOUTUBE-TWITCH

     ${emoji5}- Para ter acesso ao canal #MUSIC

     ${emoji6}- Para ter acesso ao canal #LEAGUEOFLEGENDS
     
     ${emoji3}- Para remover todos`
     );
     //await menu.setImage( {url:`${await tagsKv.get<string>(e+' 1')}`}); 
     await menu.setFooter( {text:`powered by https://pylon.bot`});

     const channela1 = await discord.getGuildTextChannel('832634830318469200');
     const thehelpmsg = await channela1?.sendMessage(menu); //*/

  if (msgid == data.messageId) {
    if (data.emoji.name == emoji) {
      data.member.addRole(roleid);
    } else if (data.emoji.name == emoji2) {
      data.member.addRole(roleid2);
      const channela = await discord.getGuildTextChannel('833869233959862292'); //ESPORTES
      channela?.sendMessage(`Bem vindo ao canal Esportes,<@${user}>`);
    } else if (data.emoji.name == emoji4) {
      data.member.addRole(roleid4);
      const channela = await discord.getGuildTextChannel('835223671945429012'); //YOUTUBE-TWITCH
      channela?.sendMessage(`Bem vindo ao canal Youtube-Twitch,<@${user}>`);
    } else if (data.emoji.name == emoji5) {
      data.member.addRole(roleid5);
      const channela = await discord.getGuildTextChannel('834769604790059038'); //MUSIC
      channela?.sendMessage(`Bem vindo ao canal Music,<@${user}>`);
    } else if (data.emoji.name == emoji6) {
      data.member.addRole(roleid6);
      const channela = await discord.getGuildTextChannel('835696158725898281'); //LOL
      channela?.sendMessage(`Bem vindo ao canal League of Legends,<@${user}>`);
    } else if (data.emoji.name == emoji3) {
      data.member.removeRole(roleid);
      data.member.removeRole(roleid2);
      data.member.removeRole(roleid4);
      data.member.removeRole(roleid5);
      data.member.removeRole(roleid6);
    }
  }
  //---------------------------------------------------------------------------------------------//
  //CANDIDATOS EMBED
  const amsgid = '835283322732281857';
  const aemoji = discord.decor.Emojis.ONE;
  const aroleid = '835266459672248371';
  const aemoji2 = discord.decor.Emojis.TWO;
  const aemoji3 = discord.decor.Emojis.THREE;
  const aemoji4 = discord.decor.Emojis.FOUR;
  const aemoji5 = discord.decor.Emojis.FIVE;
  const aemoji6 = discord.decor.Emojis.SIX;
  const aemoji7 = discord.decor.Emojis.SEVEN;

  //CREATE A NEW EMBED
  /*const menu = new discord.Embed();
     await menu.setColor(0x3f888f);
     await menu.setTitle(`STAFF APPLY`);
     await menu.setDescription(
     'Emote | Role | Skills\n'+
     `${aemoji}`+'--`Programador`: JS SDK, Python, JQuerry!\n'+
     `${aemoji2}`+'--`Moderador`: Manter a paz e evitar golpes de estado!\n'+
     `${aemoji3}`+'--`Professor`: Criar provas e avaliar questões!\n'+
     `${aemoji4}`+'--`Monitor`: Suporte ao professor e dar aulas!\n'+
     `${aemoji5}`+'--`Técnico`: Dar aulas ou suporte em qualquer jogo!\n'+
     `${aemoji6}`+'--`Palestrante`: Alugar o auditório!\n'+
     `${aemoji7}`+'--`Parceiro`: Associar o servidor ao seu canal!\n'
     );
     //await menu.setImage( {url:`${await tagsKv.get<string>(e+' 1')}`}); 
     await menu.setFooter( {text:`powered by https://pylon.bot`});

     const channela1 = await discord.getGuildTextChannel('832634830318469200');
     const thehelpmsg = await channela1?.sendMessage(menu);//*/

  if (amsgid == data.messageId) {
    var test = 1;
    var a = await tagsKv.get<number>('candidatos');
    if (a == null || a == undefined) await tagsKv.put('candidatos', 1);
    a = await tagsKv.get<number>('candidatos');
    data.member.addRole(aroleid);
    const channela = await discord.getGuildTextChannel('835266363094335528'); //STAFFAPPLY
    const menu = new discord.Embed();
    var description;
    await menu.setColor(0x3f888f);
    await menu.setTitle(`CANDIDATURA`);
    if (data.emoji.name == aemoji) {
      description = 'Programador';
    } else if (data.emoji.name == aemoji2) {
      description = 'Moderador';
    } else if (data.emoji.name == aemoji3) {
      description = 'Professor';
    } else if (data.emoji.name == aemoji4) {
      description = 'Monitor';
    } else if (data.emoji.name == aemoji5) {
      description = 'Técnico';
    } else if (data.emoji.name == aemoji6) {
      description = 'Palestrante';
    } else if (data.emoji.name == aemoji7) {
      description = 'Parceiro';
    } else {
      test = 0;
    }
    await menu.setDescription(
      `Nome: <@${user}>\nInteresse: ${description}\nNúmero de candidatura: ${a}\n\n\n <@&833849304601853952>`
    );
    //await menu.setImage( {url:`${await tagsKv.get<string>(e+' 1')}`});
    await menu.setFooter({ text: `powered by https://pylon.bot` });

    const channela1 = await discord.getGuildTextChannel('835266363094335528');
    if (test == 1) {
      const thehelpmsg = await channela1?.sendMessage(menu);
      var sdk = a + 1;
      tagsKv.put('candidatos', sdk);
    }
  }
}); //AUTOROLE,APPLY STAFF; */
discord.on('MESSAGE_CREATE', async (message) => {
  const channelDatabase = '832634283822022666'; //channel database

  if (message.channelId == channelDatabase) {
    const theMsg = await message.reply('Canal exclusivo para BOTS!!');
    setTimeout(async () => message.delete(), 1000);
    setTimeout(async () => await theMsg.delete(), 5000);
  } //DELETE ANY MESSAGE SEND TO #DATABASE

  if ((await tagsKv.get<string>('tagreset')) == '1') {
    console.log('tagreset');
    if (
      message.content == 'Y' ||
      message.content == '1' ||
      message.content == 'y'
    ) {
      const theMsg = await message.reply('Canal exclusivo para BOTS!!');
      setTimeout(async () => message.delete(), 1000);
      setTimeout(async () => await theMsg.delete(), 10000);
      await tagsKv.put('tagreset', '0');
    } else if (
      message.content == 'N' ||
      message.content == '0' ||
      message.content == 'n'
    ) {
      const theMsg = await message.reply(
        'Ufa!! Ainda bem que você mudou de idea'
      );
      setTimeout(async () => message.delete(), 1000);
      setTimeout(async () => await theMsg.delete(), 10000);
    } else await tagsKv.put('tagreset', '0');
  } //!TAG RESET CONFIRMATION MODULE
}); //MESSAGE VERIFY; */
discord.on('GUILD_MEMBER_ADD', async (member) => {
  const user = member.user.id;
  const channel = await discord.getTextChannel(BOTCHANNELpraça);
  //member.addRole('835000362804969473');
  await channel?.sendMessage(
    new discord.Embed({
      title: 'WELCOME',
      color: 0xcee5ff,
      description:
        `Bem vindo ao servidor <@${user}>\n` +
        `Utilize o canal <#${'832634830318469200'}> para AutoRoles não relacionadas a UF\n` +
        `Chame um <@&832592990060544070> para qualquer dúvida\n` +
        'E seja amigável, respeite os amiguinhos e não spame mensagens!\n' +
        'Tente um !help para uma lista de comandos',
      footer: {
        text: 'powered by https://pylon.bot'
      }
    })
  );
}); //NEW MEMBER WELCOME MESSAGE
discord.on('GUILD_MEMBER_REMOVE', async (member) => {
  const user = member.user.id;
  const channel = await discord.getTextChannel(BOTCHANNELpraça);
  //member.addRole('835000362804969473');
  await channel?.sendMessage(
    new discord.Embed({
      title: 'F',
      color: 0xcee5ff,
      description: `Acabamos de perder um membro :(\n`
    })
  );
}); //LOST A MEMBER MESSAGE
/*discord.on('MESSAGE_REACTION_ADD', async (data) => {
  const msgid = '';
  const emoji = discord.decor.Emojis.HAMBURGER;
  if (msgid == data.messageId && emoji == data.emoji.name) {
    const value = await tagsKv.get<string>(data.emoji.name);
    const channel = await discord.getGuildTextChannel(TAGRegister);
    if (value == '1') {
      await tagsKv.put(data.emoji.name, '2');
      channel.sendMessage(`${data.emoji.name} 1 voto`);
    } else if (value == '2') {
      await tagsKv.put(data.emoji.name, '3');
      channel.sendMessage(`${data.emoji.name} 2 votos`);
    } else if (value == '3') {
      await tagsKv.put(data.emoji.name, '1');
      channel.sendMessage(`${data.emoji.name} venceu`);
    } else tagsKv.put(data.emoji.name, '1');
  }
}); //TEST;*/
pylon.tasks.cron('BUTECO', '0 0 1 * * 7 *', async () => {
  console.log('buteco');
  const channela = await discord.getGuildTextChannel(PROPAGANDA);
  channela?.sendMessage(
    `O Buteco está aberto para os universitários hoje!! <@&832593966155300905>`
  );
  var channel = await discord.getGuildVoiceChannel('833033890213396480');
  channel?.edit({
    permissionOverwrites: [
      {
        type: discord.Channel.PermissionOverwriteType.ROLE,
        id: '832593966155300905', //UFNPC
        allow: 1024,
        deny: 0
      },
      {
        type: discord.Channel.PermissionOverwriteType.ROLE,
        id: '832591014711394315', //Everyone
        allow: 0,
        deny: 1024
      }
    ]
  });
  const t = await tagsKv.get<number>('buteco');
  if (t == null || t == undefined) await tagsKv.put('buteco', 0);
  else await tagsKv.put('buteco', 0);
  //setTimeout(async () => await message.delete(), 30000)
}); //BUTECO
pylon.tasks.cron('LEMBRETE', '0 0 15 * * * *', async () => {
  console.log('LEMBRETE');
  const channela = await discord.getGuildTextChannel('832613794231877682'); //ADMIN
  channela?.sendMessage(
    new discord.Embed({
      title: 'LEMBRETES',
      color: 0xcee5ff,
      description: `<@&833849304601853952>

        CODIGOS OAUTH2, API E DOCUMENTOS
          Keys:<#${'834651428311269416'}>
          PYLON: https://pylon.bot/docs/reference/index.html
          SUPORT: https://discord.com/invite/DCeH2Yk
          UFRN: https://api.ufrn.br/documentacao.html
          IFRN: https://dados.ifrn.edu.br/dataset
          YOUTUBE: https://developers.google.com/youtube/v3/docs?hl=pt-br
          TWITCH: https://dev.twitch.tv/console/apps 
        LINKS DE AGRADECIMENTO

        ADICIONAR
          Sistema MatchMaking | Esqueleto já pronto !MM
          Ranking CS
          Ranking LOL


        REPARAR
          !tag set insere números como string
          
          
    
        COMUNICAÇÃO PYLON <> PYTHON
         Algoritmo:
          usuario envia - prof aprova - pylon envia chat - python envia db - pylon apaga questão

        ERROS COMUNS
          url inválido impede a criação de embed!
          ex:await menu.setImage( {url:{a}});
          
          tagsKv sem await retorna undefined!
          ex: const a = tagsKv.get<value>(key) -> return error
          
          discord.embed object footer tem parametro tipo text
          ex: footer: {text: 'Powered by Pylon.bot'}
          

        ERROS DE ORIGEM DESCONHECIDA
          discord.registerEventHandler(MESSAGE_REACTION_ADD)
          retorna erro de API quando usuário spama emojis
          `,
      footer: {
        text: 'powered by https://pylon.bot'
      }
    })
  );
  //setTimeout(async () => await message.delete(), 30000)
}); //LEMBRETE
pylon.tasks.cron('CONTADOR', '0 0/10 * * * * *', async () => {
  console.log('CONTADOR');
  //BUTECO

  var sdka;
  const p = await tagsKv.get<number>('test');
  if (p == null || p == undefined) {
    sdka = 0;
    await tagsKv.put('test', 0);
  } else sdka = p + 10;
  await tagsKv.put('test', sdka);

  const t = await tagsKv.get<number>('buteco');
  if (t == null || t == undefined) return 0;
  else if (t >= 240) {
    const channela = await discord.getGuildTextChannel(PROPAGANDA);
    channela?.sendMessage(`O Buteco acabou de fechar!! <@&832593966155300905>`);
    await tagsKv.delete('buteco');
    var channel = await discord.getGuildVoiceChannel('833033890213396480');
    channel?.edit({
      permissionOverwrites: [
        {
          type: discord.Channel.PermissionOverwriteType.ROLE,
          id: '832593966155300905', //UFNPC
          allow: 0,
          deny: 1024
        },
        {
          type: discord.Channel.PermissionOverwriteType.ROLE,
          id: '832591014711394315', //Everyone
          allow: 0,
          deny: 1024
        }
      ]
    });
  } else {
    const sdk = t + 10;
    await tagsKv.put('buteco', sdk);
  }
  //BUTECO

  //setTimeout(async () => await message.delete(), 30000)
}); //CONTADOR GERAL

