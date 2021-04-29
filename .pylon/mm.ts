//

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

const MatchMaking = commands.subcommandGroup({
  name: 'MM',
  filters: Filter.or(
    Filter.isChannelId('834515270671794176'),
    Filter.hasRole(PROGRAMMERID),
    Filter.isChannelId('833869233959862292')
  )
}); //!MM GROUP

var MSGID2 = '';
var ALANa = '';
var AUTHORIDa = '';
var ALAN1a;

const esporte = commands.subcommandGroup({
  name: 'esporte',
  filters: Filter.or(
    Filter.isChannelId('833869233959862292'), //Channel Ginásio
    Filter.isChannelId('833869727880183898'), //Channel Xadrez
    Filter.isChannelId(BOTCHANNELadmin), //enable test mode
    Filter.hasRole(PROGRAMMERID)
  )
}); //!ESPORTES GROUP
esporte.on(
  'noticia',
  (ctx) => ({
    a: ctx.stringOptional()
  }),
  async (message, { a }) => {
    message.reply(
      new discord.Embed({
        title: `NOTÍCIA`,
        color: 0xcee5ff,
        description: `
      JOGOS INTERCAMPI ANUNCIADOS
      Desde 2019 não ocorre nenhuma edição dos JIFS, dessa vez nem mesmo o CoronaVírus irá nos parar!!
      Link do regulamento abaixo
      https://drive.google.com/file/d/1eMTGt4HYisZ8ta2Alb8rPLQIYG0jN2qi/view?usp=sharing`,
        image: { url: `https://i.imgur.com/gL0HkGM.jpg` },
        footer: {
          text: `Powered by https://www.xadrezpotiguar.com.br/index.php`
        }
      })
    );

    setTimeout(async () => await message.delete(), 1000);
  }
); //!ESPORTE NOTICIA
esporte.on(
  'aula',
  (ctx) => ({
    a: ctx.stringOptional()
  }),
  async (message, { a }) => {
    message.reply(
      new discord.Embed({
        title: `PROGRAMAÇÃO`,
        color: 0xcee5ff,
        description: `
      Início: 23:00
      Duração: 02:00
      Programação: Análise das rodadas 1->4 do candidatos
      Convidados: Membros do IFRN
      Os JIFS começam daqui a um dia amigos, então vamos aproveitar o tempo que ainda nos resta
       <@&833866589438607431>`,
        image: { url: `` },
        footer: {
          text: `Powered by Pylon.bot`
        }
      })
    );
    setTimeout(async () => await message.delete(), 1000);
  }
); //!ESPORTE AULA
esporte.default(
  (ctx) => ({
    a: ctx.stringOptional()
  }),
  async (message, { a }) => {
    message.reply(
      `${a} não é um comando existente\n Contate um <@833870917260148746> para mais informações`
    );
    setTimeout(async () => await message.delete(), 1000);
  }
); //!ESPORTE DEFAULT

const Ranking = commands.subcommandGroup({
  name: 'Ranking',
  filters: Filter.and(
    Filter.not(Filter.isChannelId(MUSICAS)),
    Filter.not(Filter.isChannelId(YOUTUBETWITCH)),
    Filter.or(
      Filter.isChannelId(BOTCHANNELpraça),
      Filter.isOwner(),
      Filter.hasRole(PROGRAMMERID),
      Filter.isChannelId('833869233959862292'), //Channel Ginásio
      Filter.isChannelId('833869727880183898') //Channel Xadrez
    )
  )
}); //!RANKING GROUP
Ranking.default(
  (ctx) => ({
    a: ctx.stringOptional()
  }),
  async (message, { a }) => {
    message.reply(
      `Não é um comando existente\n Tente !help para mais informações`
    );
    setTimeout(async () => await message.delete(), 1000);
  }
); //!RANKING DEFAULT
Ranking.raw('Xadrez', async (message) => {
  const channel = await discord.getGuildTextChannel(BOTCHANNELadmin);
  message.reply(
    new discord.Embed({
      title: 'Live Chess Ratings',
      color: 0xffa500,
      image: { url: 'http://www.2700chess.com/files/topten.png' },
      footer: {
        text: 'powered by https://2700chess.com'
      }
    })
  );
  setTimeout(async () => await message.delete(), 1000);
}); //!RANKING XADREZ

MatchMaking.default(
  (ctx) => ({
    a: ctx.stringOptional()
  }),
  async (msg) => {
    const menu = new discord.Embed();
    await menu.setColor(0xff0000);
    await menu.setTitle('MM Menu');
    await menu.setDescription(
      'Sobre qual categoria você quer ter mais informações?\n' +
        '1️⃣: `!Lichess`\n' +
        '2️⃣: `!Chesscom`\n' +
        '3️⃣: `!Lol`\n' +
        '4️⃣: `!CS`\n' +
        '5️⃣: Others\n'
    );
    await menu.setFooter({ text: `Use o canal #MM para os comandos!` });
    const thehelpmsgk = await msg.reply(menu);

    await thehelpmsgk.addReaction('1️⃣');
    await thehelpmsgk.addReaction('2️⃣');
    await thehelpmsgk.addReaction('3️⃣');
    await thehelpmsgk.addReaction('4️⃣');
    await thehelpmsgk.addReaction('5️⃣');
    //await thehelpmsgk.addReaction('6️⃣');
    //await thehelpmsgk.addReaction('7️⃣');
    //await thehelpmsgk.addReaction('8️⃣');
    //await thehelpmsgk.addReaction('9️⃣');
    await thehelpmsgk.addReaction('❌');

    ALANa = msg.id;

    const guild = await discord.getGuild(guildId);
    const theMsgChannel = await discord.getGuildTextChannel(msg.channelId);
    ALAN1a = await theMsgChannel.getMessage(ALANa);

    MSGID2 = thehelpmsgk.id;
    AUTHORIDa = msg.author.id;

    setTimeout(async () => msg.delete(), 5000);
    //setTimeout(async () => thehelpmsg.delete(), 20000);
  }
); //!MM DEFAULT
discord.registerEventHandler('MESSAGE_REACTION_ADD', async (theReaction) => {
  const guild = await discord.getGuild(guildId);
  const theMsgChannel = await discord.getGuildTextChannel(
    theReaction.channelId
  );
  const theMsg = await theMsgChannel.getMessage(theReaction.messageId);

  if (
    theReaction.emoji.name == '1️⃣' &&
    theReaction.messageId == MSGID2 &&
    theReaction.member.user.id == AUTHORIDa
  ) {
    // '`GABIRU Ola amigos, como vocês estão?'+b+'Clotilde`'
    const option1 = new discord.Embed();
    await option1.setColor(0xff0000);
    await option1.setTitle('!Lichess');
    await option1.setDescription(
      'O prefixo de todos os comandos abaixo é `!Lichess`\n' +
        '`User <NICK>`- Busque informações de um usuário\n' +
        '`Tournament` - Lista dos torneios recentes\n' +
        '`Play`       - Entre em uma Queue para jogar com outro usuário\n' +
        'OBS: !Lichess user <nick> retorna erro caso o nick não exista\n'
      //`Para ter acesso a esses comandos reaja no <#${'832634830318469200'}>`
    );
    const theMsg2 = await theMsg.reply(option1);
    MSGID2 = '';
    AUTHORIDa = '';
    await ALAN1a.delete();
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '2️⃣' &&
    theReaction.messageId == MSGID2 &&
    theReaction.member.user.id == AUTHORIDa
  ) {
    const option2 = new discord.Embed();
    await option2.setColor(0xff0000);
    await option2.setTitle('!Chesscom');
    await option2.setDescription(
      'O prefixo de todos os comandos abaixo é `!Chesscom`\n' +
        '\n**ATUALMENTE NÃO IMPLEMENTADO**\n\n' +
        '`User <NICK>`- Busque informações de um usuário\n' +
        '`Tournament` - Lista dos torneios recentes\n' +
        '`Play`       - Entre em uma Queue para jogar com outro usuário\n'
      //`Para ter acesso a esses comandos reaja no <#${'832634830318469200'}>`
    );
    const theMsg3 = await theMsg.reply(option2);
    MSGID2 = '';
    AUTHORIDa = '';
    await ALAN1a.delete();
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '3️⃣' &&
    theReaction.messageId == MSGID2 &&
    theReaction.member.user.id == AUTHORIDa
  ) {
    const option3 = new discord.Embed();
    await option3.setColor(0xff0000);
    await option3.setTitle('!Lol');
    await option3.setDescription(
      'Comandos do bot @ZOE\n' +
        '`>config`\n' +
        '`>create player` @DiscordMentionOfPlayer (Region) (SummonerName)\n' +
        '`>add account` @MentionPlayer (Region) (accountName)\n' +
        '`>stats profile` @playerMention OR (Region) (summonerName)\n' +
        '`>refresh`\n' +
        '`>show players`\n' +
        '`>show players`\n' +
        '`>setup` Para mais comandos\n' +
        `Exclusivo do canal <#${'835696158725898281'}>\n` +
        `Para ter acesso a esse canal reaja no <#${'832634830318469200'}>`
    );

    const theMsg4 = await theMsg.reply(option3);
    MSGID2 = '';
    AUTHORIDa = '';
    await ALAN1a.delete();
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '4️⃣' &&
    theReaction.messageId == MSGID2 &&
    theReaction.member.user.id == AUTHORIDa
  ) {
    const option4 = new discord.Embed();
    await option4.setColor(0xff0000);
    await option4.setTitle('!CS');
    await option4.setDescription(
      'O prefixo de todos os comandos abaixo é `!CS`\n' +
        '\n**ATUALMENTE NÃO IMPLEMENTADO**\n\n' +
        '`User <NICK>`- Busque informações de um usuário\n' +
        '`Play`       - Encontre algum usuário para jogar\n' +
        '`Register`   - Entrar no canal\n' +
        `Para ter acesso a esses comandos reaja no <#${'832634830318469200'}>`
    );

    const theMsg4 = await theMsg.reply(option4);
    MSGID2 = '';
    AUTHORIDa = '';
    await ALAN1a.delete();
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '5️⃣' &&
    theReaction.messageId == MSGID2 &&
    theReaction.member.user.id == AUTHORIDa
  ) {
    const option4 = new discord.Embed();
    await option4.setColor(0xff0000);
    await option4.setTitle('Others');
    await option4.setDescription(`Contate um <@&833870917260148746>`);

    const theMsg4 = await theMsg.reply(option4);
    MSGID2 = '';
    AUTHORIDa = '';
    await ALAN1a.delete();
    await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '❌' &&
    theReaction.messageId == MSGID2 &&
    theReaction.member.user.id == AUTHORIDa
  ) {
    const option8 = new discord.Embed();
    await option8.setColor(0xff0000);
    await option8.setTitle('**Canceled**');
    await option8.setDescription(`You chanceled the command selection`);

    const theMsg4 = await theMsg.reply(option8);
    MSGID2 = '';
    AUTHORIDa = '';
    await ALAN1a.delete();
    await theMsg.delete();
    setTimeout(() => theMsg4.delete(), 5000);
  }
}); //!MM EMBED DINAMIC */

const Lichess = commands.subcommandGroup({
  name: 'Lichess',
  filters: Filter.or(
    Filter.isChannelId('834515270671794176'), //CHANNEL MM
    Filter.hasRole(PROGRAMMERID)
  )
}); //!LICHESS GROUP
Lichess.on(
  'user',
  (ctx) => ({
    a: ctx.stringOptional()
  }),
  async (message, { a }) => {
    if (a == null || a == undefined) {
      message.reply('Insira um nome de usuário, use !MM para mais informações');
      return 0;
    }
    const reqLichess = await fetch(`https://lichess.org/api/user/${a}`);
    if (reqLichess == null || reqLichess == undefined) {
      message.reply('Usuário não encontrado!');
      return 0;
    }
    const dataLichess = await reqLichess.json();
    if (dataLichess == null || dataLichess == undefined) {
      message.reply('Usuário não encontrado!');
      return 0;
    }
    var sortdataLichess6 = '';
    var sortdataLichess7 = '';
    var sortdataLichess11 = '';
    const sortdataLichess = dataLichess['username'];
    const sortdataLichess2 = dataLichess['online'];
    const sortdataLichess3 = dataLichess['perfs']['rapid']['rating'];
    const sortdataLichess4 = dataLichess['perfs']['blitz']['rating'];
    const sortdataLichess5 = dataLichess['perfs']['bullet']['rating'];
    if (sortdataLichess == null || sortdataLichess == undefined) {
      message.reply('Usuário não encontrado!');
      return 0;
    }
    if (
      (dataLichess['profile'] && dataLichess['profile']['firstName']) !=
      (null || undefined)
    ) {
      sortdataLichess6 = dataLichess['profile']['firstName'];
    }
    if (
      (dataLichess['profile'] && dataLichess['profile']['lastName']) !=
      (null || undefined)
    ) {
      sortdataLichess7 = dataLichess['profile']['lastName'];
    }
    if (dataLichess['title'] != (null || undefined)) {
      sortdataLichess11 = dataLichess['title'];
    }
    const sortdataLichess8 = dataLichess['url'];
    const sortdataLichess9 = dataLichess['playing'];
    const sortdataLichess10 = dataLichess['streaming'];

    if (sortdataLichess == 'Gamextreme') sortdataLichess11 = 'NM';
    else if (sortdataLichess == 'Raphachess') sortdataLichess11 = 'MLBX';
    else if (sortdataLichess == 'Mjgeo') sortdataLichess11 = 'NM';
    else if (sortdataLichess == 'gilmilos') sortdataLichess11 = 'GM';
    else if (sortdataLichess == 'canacomxadrez') sortdataLichess11 = 'NM';
    else if (sortdataLichess == 'fviana') sortdataLichess11 = 'FM';
    else if (sortdataLichess == 'istudent') sortdataLichess11 = 'FM';
    else if (sortdataLichess == 'lucasmito') sortdataLichess11 = 'FM';
    else if (sortdataLichess == 'jaymemaceio') sortdataLichess11 = 'CM';
    else if (sortdataLichess == 'VGCDO') sortdataLichess11 = 'CM';
    else if (sortdataLichess == 'Fredim007') sortdataLichess11 = 'FM';
    else if (sortdataLichess == 'idiamant') sortdataLichess11 = 'GM';
    else if (sortdataLichess == 'Xadrez_Potiguar') sortdataLichess11 = 'IA';
    else if (sortdataLichess == 'Thibault') sortdataLichess11 = 'MOD';
    else if (sortdataLichess == 'Supi96') sortdataLichess11 = 'GM';

    message.reply(
      new discord.Embed({
        title: `**${sortdataLichess11}** ${sortdataLichess}`,
        color: 0xcee5ff,
        description:
          '`Name:`' +
          ` ${sortdataLichess6} ${sortdataLichess7}\n` +
          '`Online:`' +
          ` ${sortdataLichess2}\n` +
          '`Rapid:`' +
          ` ${sortdataLichess3}\n` +
          '`Blitz:`' +
          ` ${sortdataLichess4}\n` +
          '`Bullet:`' +
          ` ${sortdataLichess5}\n` +
          '`Link:`' +
          ` ${sortdataLichess8}\n`,
        //image: { url:(`https://i.imgur.com/gL0HkGM.jpg`) },
        footer: {
          text: `Powered by lichess.org`
        }
      })
    );

    setTimeout(async () => await message.delete(), 1000);
  }
); //!LICHESS USER

const Chesscom = commands.subcommandGroup({
  name: 'Chesscom',
  filters: Filter.or(
    Filter.isChannelId('834515270671794176'), //CHANNEL MM
    Filter.hasRole(PROGRAMMERID)
  )
}); //!CHESSCOM GROUP
Chesscom.on(
  'user',
  (ctx) => ({
    a: ctx.stringOptional()
  }),
  async (message, { a }) => {
    if (a == null || a == undefined) {
      message.reply('Insira um nome de usuário, use !MM para mais informações');
      return 0;
    }
    const req1 = await fetch(`https://api.chess.com/pub/player/${a}`);
    const req2 = await fetch(`https://api.chess.com/pub/player/${a}/is-online`);
    const req3 = await fetch(`https://api.chess.com/pub/player/${a}/stats`);
    const data = await req1.json();
    const data2 = await req2.json();
    const data3 = await req3.json();

    const sortdata2 = data['url'];
    const sortdata3 = data['username'];

    if (sortdata3 == null || sortdata3 == undefined) {
      message.reply('Usuário não encontrado!');
      return 0;
    }
    if (sortdata2 == null || sortdata2 == undefined) {
      message.reply('Usuário não encontrado!');
      return 0;
    }

    const sortdata6 = data['status'];
    const sortdata7 = data['name'];
    var sortdata8 = 'https://i.imgur.com/IhdgKQO.png';
    const sortdata9 = data['location'];
    const sortdata10 = data['country'];
    const sortdata11 = data['joined'];
    const sortdata12 = data['last_online'];
    const sortdata13 = data['followers'];
    const sortdata14 = data['is_streamer'];
    const sortdata15 = data['twitch_url'];
    const sortdata16 = data['fide'];
    const sortdata17 = data2['online'];
    var sortdata18 = '?';
    var sortdata19 = '?';
    var sortdata20 = '?';
    var sortdata21 = '';

    if (data['avatar'] != (null || undefined)) {
      sortdata8 = data['avatar'];
    }
    if (
      (data3['chess_blitz'] &&
        data3['chess_blitz']['last'] &&
        data3['chess_blitz']['last']['rating']) != (null || undefined)
    ) {
      sortdata18 = data3['chess_blitz']['last']['rating'];
    }
    if (
      (data3['chess_rapid'] &&
        data3['chess_rapid']['last'] &&
        data3['chess_rapid']['last']['rating']) != (null || undefined)
    ) {
      sortdata19 = data3['chess_rapid']['last']['rating'];
    }
    if (
      (data3['chess_bullet'] &&
        data3['chess_bullet']['last'] &&
        data3['chess_bullet']['last']['rating']) != (null || undefined)
    ) {
      sortdata20 = data3['chess_bullet']['last']['rating'];
    }
    if (data['title'] != (null || undefined)) {
      sortdata21 = data['title'];
    } //*/

    if (sortdata3 == 'dadn02') sortdata21 = 'NM';
    else if (sortdata3 == 'mnvf') sortdata21 = 'NM';

    message.reply(
      new discord.Embed({
        title: `${sortdata21} ${sortdata3}`,
        color: 0xcee5ff,
        description:
          '`Name:`' +
          ` ${sortdata7}\n` +
          '`Online:`' +
          ` ${sortdata17}\n` +
          '`Rapid:`' +
          ` ${sortdata19}\n` +
          '`Blitz:`' +
          ` ${sortdata18}\n` +
          '`Bullet:`' +
          ` ${sortdata20}\n` +
          '`Account Type:`' +
          ` ${sortdata6}\n` +
          '`Link:`' +
          ` ${sortdata2}\n`,
        image: { url: `${sortdata8}` },
        footer: {
          text: `Powered by lichess.org`
        }
      })
    );

    setTimeout(async () => await message.delete(), 1000);
  }
); //!CHESSCOM USER
