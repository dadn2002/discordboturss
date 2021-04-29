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

import './asyncfunction';

import { CreateReactionEmbed } from './asyncfunction';

const quiz = commands.subcommandGroup({
  name: 'quiz',
  filters: Filter.and(
    Filter.not(Filter.hasRole('833546252514885704')), //TEMPOBAN
    Filter.not(Filter.hasRole('832657308685041674')), //ASPIRANTE A CALOURO
    Filter.and(
      Filter.hasRole('832593966155300905'), //UF NPC
      Filter.isChannelId('832597670203621417')
    )
  ) //MONITORIA GERAL

  //filters: Filter.and(Filter.isChannelId(BOTCHANNELadmin)) //enable test mode
}); //!QUIZ GROUP
quiz.default(
  (ctx) => ({
    a: ctx.stringOptional()
  }),
  async (message, { a }) => {
    if (a == null) a = '';
    message.reply(`${a} não é um comando existente\n` + 'Tente `!Quiz Set`');
    setTimeout(async () => await message.delete(), 1000);
  }
); //!QUIZ DEFAULT

const banca = commands.subcommandGroup({
  name: 'banca',
  filters: Filter.or(
    Filter.isOwner(),
    Filter.and(
      Filter.or(
        Filter.hasRole('833521530180468816'),
        Filter.hasRole(PROGRAMMERID)
      ),
      Filter.not(Filter.hasRole('833546252514885704')), //TEMPBAN ROLE
      Filter.isChannelId('833522363382628372')
    )
  ) //PRODUÇÃO DE PROVAS
  //filters: Filter.and(Filter.isChannelId(BOTCHANNELadmin)) //enable test mode
}); //!BANCA GROUP
quiz.on(
  'SET',
  (ctx) => ({
    a: ctx.stringOptional(), //IMAGE URL

    b: ctx.stringOptional(), //LINK DA FONTE

    c: ctx.stringOptional(), //ALTERNATIVA A

    d: ctx.stringOptional(), //ALTERNATIVAS B

    e: ctx.stringOptional(), //ALTERNATIVAS C

    f: ctx.stringOptional() //ALTERNATIVAS D
  }),
  async (message, { a, b, c, d, e, f }) => {
    if (
      a == null ||
      a == undefined ||
      b == null ||
      b == undefined ||
      c == null ||
      c == undefined
    ) {
      message.reply(
        new discord.Embed({
          title: 'Missing Arguments',
          color: 0xee82ee,
          description:
            'For this command please supply the following arguments\n' +
            '`Image Url:` Required\n' +
            '`Fonte:` Required\n' +
            '`Alternative A:` Required\n' +
            '`Alternative B:` Optional\n' +
            '`Alternative C:` Optional\n' +
            '`Alternative D:` Optional\n'
        })
      );
      setTimeout(async () => message.delete(), 30000);
      return 0;
    }

    //await tagsKv.put(key, value); await tagsKv.get<string>(key); tagsKv.delete(key);
    const x = '"iaunsdv94n9v"';
    var k = await tagsKv.get<value>(x);
    if (k == null || k == undefined) {
      await tagsKv.put(x, 1);
      k = 1;
    }

    await tagsKv.put(k + ' 1', a);
    await tagsKv.put(k + ' 2', b);
    await tagsKv.put(k + ' 31', c);
    await tagsKv.put(k + ' 32', d);
    await tagsKv.put(k + ' 33', e);
    await tagsKv.put(k + ' 34', f);
    await tagsKv.put(k + ' 4', 0);
    const channel = await discord.getGuildTextChannel('833522363382628372'); //PRODUÇÃO DE PROVAS
    channel.sendMessage(
      `Candidato a Embed:${k}\n\nURL: ${a}\nFONTE: ${b}\nALTERNATIVAS: \nA)${c}\nB)${d}\nC)${e}\nD)${f}\n`
    );

    await tagsKv.put(x, k + 1);
    console.log(`${a},${b},${k}`);
    message.reply('Candidatura efetuada com sucesso');
    setTimeout(async () => await message.delete(), 1000);
  }
); //!QUIZ SET URL, FONTE E ALTERNATIVAS.
banca.on(
  'APROVAR',
  (ctx) => ({
    a: ctx.numberOptional(), //CODE APPROVED

    b: ctx.stringOptional() //categoria
  }),
  async (message, { a, b }) => {
    if (a == null || a == undefined || b == null || b == undefined) {
      message.reply(
        new discord.Embed({
          title: 'Missing Arguments',
          color: 0xee82ee,
          description:
            'For this command please supply the following arguments\n' +
            '`Code:` Required\n' +
            '`Category:` Required\n'
        })
      );
      setTimeout(async () => message.delete(), 30000);
      return 0;
    }
    //await tagsKv.put(key, value); await tagsKv.get<string>(key); tagsKv.delete(key);
    const y = await tagsKv.get<value>(a + ' 4');

    if (y == null || y == undefined) {
      message.reply(`A questão ${a} ainda não foi enviada`);
      return 0;
    } else if (y == 1) {
      message.reply(`${a} já foi aprovada.`);
      return 0;
    }
    await tagsKv.put(a + ' 4', 1);
    await tagsKv.put(a + ' 5', b);

    const x = '"iumynrterb"';
    var k = await tagsKv.get<number>(x);
    if (k == null || k == undefined) {
      await tagsKv.put(x, 1);
      k = await tagsKv.get<number>(x);
    }
    await tagsKv.put(b + `code${k}`, a);
    var sdk = k + 1;

    await tagsKv.put(x, sdk);

    await tagsKv.put(b + `c${a}`, a);

    const channel = await discord.getGuildTextChannel('833522363382628372'); //PRODUÇÃO DE PROVAS
    channel.sendMessage(`Questão registrada!\nCódigo: ${a}\nCategoria: ${b}`);

    console.log(`${a},${b}`);
    console.log('QUIZ APROVAR DONE');
    setTimeout(async () => await message.delete(), 1000);
  }
); //!BANCA APROVAR CODE CATEGORIA
banca.on(
  'ISOLADO',
  (ctx) => ({
    a: ctx.stringOptional() //CODIGO
  }),
  async (message, { a }) => {
    if (a == null || a == undefined) {
      message.reply(
        new discord.Embed({
          title: 'Missing Arguments',
          color: 0xee82ee,
          description:
            'For this command please supply the following arguments\n' +
            '`Codigo:` Required\n'
        })
      );
      setTimeout(async () => message.delete(), 30000);
      return 0;
    }

    //await tagsKv.put(key, value); await tagsKv.get<string>(key); tagsKv.delete(key);

    if ((await tagsKv.get<string>(a + ' 4')) != '1') {
      message.reply('questão não aprovada');
      return 0;
    }
    var k1 = await tagsKv.get<string>(a + ' 4');
    var k2 = await tagsKv.get<string>(a + ' 2');
    var k31 = await tagsKv.get<string>(a + ' 31');
    var k32 = await tagsKv.get<string>(a + ' 32');
    var k33 = await tagsKv.get<string>(a + ' 33');
    var k34 = await tagsKv.get<string>(a + ' 34');
    var k4 = await tagsKv.get<string>(a + ' 1');
    var k5 = await tagsKv.get<string>(a + ' 5');

    const channel = await discord.getGuildTextChannel('832634283822022666'); //DATABASE
    channel.sendMessage(
      new discord.Embed({
        title: `Questão ${a}`,
        color: 0xcee5ff,
        description: `${k31}\n${k32}\n${k33}\n${k34}\n`,
        image: { url: `${k4}` },
        footer: {
          text: `${k5} by ${k2}`
        }
      })
    );

    console.log('ISOLADO');
    setTimeout(async () => await message.delete(), 1000);
  }
); //!BANCA ISOLADO NUMERO
banca.on(
  'PROVA',
  (ctx) => ({
    a: ctx.stringOptional(), //CATEGORIA

    b: ctx.numberOptional(), //NUMERO DE QUESTÕES

    C: ctx.integerOptional() //TEMPORIZADOR
  }),
  async (message, { a, b, c }) => {
    /* AGRADECIMENTOS A:
    https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
    https://www.educba.com/javascript-array-concat/
    https://discordapp.com/channels/530557949098065930/696860766665703515/726870877668507658
    */
    //await tagsKv.put(key, value); await tagsKv.get<string>(key); tagsKv.delete(key); CATEGORIA: (a+'  2');

    if (a == null || a == undefined || b == null || b == undefined) {
      message.reply(
        new discord.Embed({
          title: 'Missing Arguments',
          color: 0xee82ee,
          description:
            'For this command please supply the following arguments\n' +
            '`Category:` Required\n' +
            '`Number:` Required\n' +
            '`Timer:` Optional\n'
        })
      );
      setTimeout(async () => message.delete(), 30000);
      return 0;
    }
    var l;
    var m = 0;
    var n = 0;
    var z = 0;
    var lm = 0;

    for (var g = 1; g <= 100; g++) {
      if (lm > 10) break;
      if (
        (await tagsKv.get<string>(g + ' 1')) == null ||
        (await tagsKv.get<string>(g + ' 1')) == undefined
      ) {
        lm++;
      } else if (a != (await tagsKv.get<string>(g + ' 5'))) {
        lm++;
      } else {
        z = z + 1;
        lm = 0;
      }
    }
    console.log(`Quantidade de questões válidas: ${z}`);

    /*Math.floor(Math.random()*z);
    const x = '"iaunsdv94n9v"';
    var k = await tagsKv.get<number>(x);
    await tagsKv.put(b+`code${k}`,a);
    */

    //c=c.concat(b);

    var C = [];
    for (var i = 1; i <= z; i++) {
      await tagsKv.get<number>(a + `code${i}`);
      C = C.concat(i);
    }

    //console.log(C);
    console.log(C);

    var s = C.length,
      j = 0,
      temp;

    while (s--) {
      j = Math.floor(Math.random() * (s + 1));

      // swap randomly chosen element with current element
      temp = C[s];
      C[s] = C[j];
      C[j] = temp;
    }
    //console.log(`SWAP ${C}`);
    message.reply(`${C}`);

    for (var i = 1; i <= z; i++) {
      var la;
      la = await tagsKv.get<number>(a + `code${C[i - 1]}`);
      l = await tagsKv.get<number>(i + ' 4');
      if (l == null || l == undefined || l == 0) {
      } else if (a != (await tagsKv.get<string>(i + ' 5'))) {
      } else {
        m = 1;
        n = n + 1;
        console.log(
          `C:${C[i - 1]}|LA:${la}|N:${n}|K:${await tagsKv.get<number>(
            a + `code${C[i - 1]}`
          )}`
        );

        CreateReactionEmbed(message, la, '833562583830626325', n);
        //console.log(`${i}`);
      }
    }
    if (m == 0) message.reply(`${a} não possue questões associadas`);
    console.log('PROVA');
    setTimeout(async () => await message.delete(), 1000);
  }
); //!BANCA PROVA NUMERO CATEGORIA
banca.on(
  'listar',
  (ctx) => ({
    a: ctx.stringOptional() //CATEGORIA
  }),
  async (message, { a }) => {
    if (a == null || a == undefined) {
      message.reply(
        new discord.Embed({
          title: 'Missing Arguments',
          color: 0xee82ee,
          description:
            'For this command please supply the following arguments\n' +
            '`Category:` Required\n'
        })
      );
      setTimeout(async () => message.delete(), 30000);
      return 0;
    }

    //await tagsKv.put(key, value); await tagsKv.get<string>(key); tagsKv.delete(key); CATEGORIA: (a+'  2');
    var l;
    var k = 0;
    var m;
    for (var i = 1; i <= 100; i++) {
      if (k > 3) break;
      l = await tagsKv.get<value>(i + ' 5');
      if (l == null || l == undefined || l == 0) {
      } else {
        //var k1 = await tagsKv.get<string>(l+' 4');
        //console.log(l,a,i);
        if (l == a) {
          k = 0;
          var k2 = await tagsKv.get<string>(i + ' 2');
          var k31 = await tagsKv.get<string>(i + ' 31');
          var k32 = await tagsKv.get<string>(i + ' 32');
          var k33 = await tagsKv.get<string>(i + ' 33');
          var k34 = await tagsKv.get<string>(i + ' 34');
          var k4 = await tagsKv.get<string>(i + ' 1');
          var k5 = await tagsKv.get<string>(i + ' 5');
          await tagsKv.put(a + `c${i}`, i);
          //const channel = await discord.getGuildTextChannel('833562583830626325'); //PROVA
          message.reply(
            new discord.Embed({
              title: `Questão ${i}`,
              color: 0xcee5ff,
              description: `
      A)${k31}
      B)${k32}
      C)${k33}
      D)${k34}
      Image:${k4}`,
              //image: { url:(`${k4}`) },
              footer: {
                text: `${k5} by ${k2}`
              }
            })
          );
        } else k = k + 1;
      }
    }
    setTimeout(async () => await message.delete(), 1000);
    console.log('LISTA');
  }
); //!BANCA LISTA CATEGORIA
banca.on(
  'editar',
  (ctx) => ({
    a: ctx.stringOptional(), //CODIGO
    b: ctx.stringOptional(), //ALTERNATIVAS1
    b1: ctx.stringOptional(), //ALTERNATIVAS2
    b2: ctx.stringOptional(), //ALTERNATIVAS3
    b3: ctx.stringOptional() //ALTERNATIVAS4
  }),
  async (message, { a, b, b1, b2, b3 }) => {
    if (
      a == null ||
      a == undefined ||
      b == null ||
      b == undefined ||
      b1 == null ||
      b1 == undefined ||
      b2 == null ||
      b2 == undefined ||
      b3 == null ||
      b3 == undefined
    ) {
      message.reply(
        new discord.Embed({
          title: 'Missing Arguments',
          color: 0xee82ee,
          description:
            'For this command please supply the following arguments\n' +
            '`Code:` Required\n' +
            '`Alternative A:` Required\n' +
            '`Alternative B:` Required\n' +
            '`Alternative C:` Required\n' +
            '`Alternative D:` Required\n'
        })
      );
      setTimeout(async () => message.delete(), 30000);
      return 0;
    }

    var k2 = await tagsKv.get<string>(a + ' 2');
    var k3 = await tagsKv.get<string>(a + ' 31');
    var k4 = await tagsKv.get<string>(a + ' 1');
    var k5 = await tagsKv.get<string>(a + ' 5');
    /*var c = await StringtoText(`${b}`);
    tagsKv.put(a+' 2', c);*/
    tagsKv.put(a + ' 31', b);
    tagsKv.put(a + ' 32', b1);
    tagsKv.put(a + ' 33', b2);
    tagsKv.put(a + ' 34', b3);

    setTimeout(async () => await message.delete(), 1000);
  }
); //!BANCA EDITAR CATEGORIA
banca.default(
  (ctx) => ({
    a: ctx.stringOptional()
  }),
  async (message, { a }) => {
    message.reply(
      `${a} não é um comando existente\n Contate um <@&832592990060544070> para mais informações`
    );
    setTimeout(async () => await message.delete(), 1000);
  }
); //!BANCA DEFAULT
