//

export const Filter = discord.command.filters;
export const BOTCHANNELpraça = '832591015449067533';
export const BOTCHANNELadmin = '832613794231877682';
export const MUSICAS = '834769604790059038';
export const ADMINID = '832592990060544070';
export const PROGRAMMERID = '833849304601853952';
export const YOUTUBETWITCH = '835223671945429012';
//const BOTCHANNEL3 = '832591015449067533';
//const BOTCHANNEL4 = '832591015449067533';
export const tagsKv = new pylon.KVNamespace('tags');
export const cooldownKv = new pylon.KVNamespace('cooldowns');
export const TAGRecieve = '832634830318469200';
export const TAGRegister = '832634283822022666';
export const PROPAGANDA = '832598928389046392';
export const guildId = '832591014711394315';


const admincommands = new discord.command.CommandGroup({
  defaultPrefix: '/',
  filters: Filter.or(Filter.isOwner(), Filter.hasRole(PROGRAMMERID))
}); //ADMINCOMMANDS
admincommands.on(
  { name: 'admin' },
  (args) => ({
    channel: args.guildTextChannelOptional()
  }),
  async (message, {}) => {
    
    var channel = await discord.getGuildVoiceChannel('833033890213396480');
    channel?.edit({
      permissionOverwrites: [
        {
          type: discord.Channel.PermissionOverwriteType.ROLE,
          id: '832593966155300905', //UFNPC
          allow: 1024,
          deny: 0
        }
        {
          type: discord.Channel.PermissionOverwriteType.ROLE,
          id: '832591014711394315', //Everyone
          allow: 0,
          deny: 1024
        }
      ]
    });

    message.reply('funfa');

    setTimeout(async () => await message.delete(), 1000);
  }
); //ADMIN SOMETHING */
admincommands.on(
  'ATU',
  (ctx) => ({
    b: ctx.numberOptional()
  }),
  async (message, { b }) => {
    const channel = await discord.getGuildTextChannel(PROPAGANDA);
    channel?.sendMessage(
      new discord.Embed({
        title: 'Jornal diário 27/04',
        color: 0xf600ff,
        description:
          'ATUALIZAÇÃO SOBRE O SERVIDOR\n' +
          '1º **NEWCOMMAND** `!ranking xadrez`- Retorna a lista atual dos melhores jogadores do mundo!\n' +
          '2º Novo discord.on para membros que sairam do servidor... F\n' +
          '3º Reparado um erro no `!banca listar` que fazia o bot entrar em um laço infinito\n' +
          '4º Bot Python está em fase beta, em breve teremos um suporte de armazenamento para o servidor poder rodar a todo vapor!!\n' +
          '5º **MODIFICAÇÂO ESTRUTURAL**: Separamos os blocos de comandos em arquivos .ts diferentes, para organizar e otimizar o funcionamento do bot, além de termos reunido todas as variáveis globais em um único arquivo! Por causa disso, podem existir alguns erros provindos de variáveis não exportadas e funções não declaradas... Ao longo do tempo vamos arrumando estes problemas e tudo voltará ao normal!\n' +
          '<@&832593966155300905><@&832657308685041674>', 
          //  <#${'CHANNEL'}>, <@&ROLE>; <@${'MEMBER'}> 
        footer: {
          text: 'powered by https://pylon.bot'
        }
      })
    );

    setTimeout(async () => await message.delete(), 1000);
  }
); //ATUALIZAÇÃO*/
admincommands.on(
  'enquete',
  (ctx) => ({
    b: ctx.numberOptional()
  }),
  async (message, { b }) => {
    const channel = await discord.getGuildTextChannel(BOTCHANNELpraça);
    channel?.sendMessage(
      new discord.Embed({
        title: 'EVENTO QUADRO E CIÊNCIA',
        color: 0xffa500,
        description:
          '**O quiz e ciência** é uma competição que será realizada no mês de **maio** e exibida no canal ' +
          'no youtube **Quadro e Ciência**. A competição consiste em questões diretas sobre conhecimento ' +
          'geral a nível de Ensino Médio. O quiz e ciência será disputado em fases, sendo a primeira ' +
          `classificatória e as demais confronto direto. Haverá premiações para o primeiro, segundo e terceiro colocado.
           **Será gravado no discord.**\n` +
          '`Regulamento`: https://drive.google.com/file/d/1m8ySifyOhFPiE4IlZc1Hf1SAHm-k1hs_/view?usp=sharing\n' +
          '`Inscrições`: https://forms.gle/fvrM861PGZ73PvWU7\n ' +
          `<@&832593966155300905>`,
        image: { url: 'https://i.imgur.com/fhZ1Tr1.jpg' },
        footer: {
          text: 'powered by pylon.bot'
        }
      })
    );

    setTimeout(async () => await message.delete(), 1000);
  }
); //EMBED SOMETHING */
admincommands.raw('test', async (message) => {
  const channel = await discord.getGuildTextChannel('832613794231877682');
  channel.sendMessage(`
   ${await tagsKv.list()}`);

  //channel.sendMessage(`Atenção <@&832593966155300905>, BlackPenRedPen está AO VIVO:\nhttps://www.youtube.com/watch?v=jD4gxwV8SKQ`);
  setTimeout(async () => await message.delete(), 1000);
}); //ALERT CODE */
admincommands.on(
  'fetch',
  (ctx) => ({
    b: ctx.numberOptional()
  }),
  async (msg, { b }) => {
    const channel = await discord.getGuildTextChannel(BOTCHANNELadmin);
    msg.reply('https://www.youtube.com/watch?v=djV11Xbc914');

    setTimeout(async () => await msg.delete(), 1000);
  }
); //FETCH */

export const commands = new discord.command.CommandGroup({
  defaultPrefix: '!'
  //filters: Filter.or(Filter.isChannelId(BOTCHANNELpraça)), //enable user mode
  //filters: Filter.or(Filter.isChannelId(BOTCHANNELadmin)), //enable test mode
  //filters: Filter.or(Filter.hasRole('832593966155300905'))
}); //COMMANDS
commands.defaultRaw(async (message) => {
  await message.reply(
    `!help para ver lista de comandos, use o <#${'832591015449067533'}>`
  );
  //setTimeout(async () => await message.delete(), 1000)
}); //!DEFAULT 


const tagCommands = commands.subcommandGroup({
  name: 'tag',
  filters: Filter.and(
    //Filter.isChannelId(TAGRecieve),
    //Filter.hasRole('832598978503770112')
    Filter.hasRole(PROGRAMMERID)
  )
  /*(filters: Filter.and(
    Filter.isChannelId(BOTCHANNELadmin),
    Filter.hasRole('832592990060544070')
  )*/
});//!TAG GROUP
tagCommands.on(
  'set',
  (ctx) => ({
    // `ctx.string()` tells Pylon to parse a single "token", so for example,
    // if we invoked this with `!tag set help There is many things you can do`,
    // Then we'd expect the `key` to get set to `"help"`.
    key: ctx.stringOptional(),
    // `ctx.text()` tells Pylon to parse until the end of the message and accumulate
    // that into a string. So, with the above example, `value` would end up being:
    // `"There is many things you can do"`.
    value: ctx.numberOptional()
  }),
  async (message, { key, value }) => {
    if (key == null || value == null) {
      message.reply('Por favor insira uma Key e um Value válidos');
      return 0;
    }
    // Now we can store the key in the database. This is as simple as invoking `.put`.
    // Since this is an asynchronous operation (as we need to communicate with the underlying
    // database) we must `await` the promise returned by `tagsKv.put`.
    await tagsKv.put(key, value);
    // Now we can reply with an acknowledgement that the task was set.
    await message.reply({
      content: `OK! Tag **${key}** has been set to **${value}**`,
      allowedMentions: {}
    });
    const channel = await discord.getGuildTextChannel(TAGRegister);
    channel.sendMessage(`KEY **${key}** VALUE **${value}** `);
    setTimeout(async () => await message.delete(), 1000);
  }
); //!TAG SET
tagCommands.default(
  (ctx) => ({
    // The default command only takes a `key`, as we want it to behave like:
    // `!tags help`, which would return `"There is many things you can do"`,
    // if `!tags set help There is many things you can do` was handledearlier.
    key: ctx.stringOptional()
  }),
  async (message, { key }) => {
    if (key == null) {
      message.reply('Por favor insira uma Key válida');
      return 0;
    }
    // We want to retrieve a `string` from our tagsKv. So we use `tagsKv.get<string>`.
    const value = await tagsKv.get<string>(key);
    if (value === undefined) {
      // There was no tag set for the given `key`, so let's return an error message.
      await message.reply({
        content: `Unknown tag: **${key}**`,
        allowedMentions: {}
      });
    } else {
      // We've got a value, so let's return it.

      await message.reply(tagsKv.get<string>(key));
    }
    setTimeout(async () => await message.delete(), 1000);
  }
); //!TAG DEFAULT
tagCommands.on(
  'delete',
  (ctx) => ({
    key: ctx.stringOptional()
  }),
  async (message, { key }) => {
    try {
      // `tagsKv.delete()` will throw an error if the key does not exist.
      await tagsKv.delete(key);
    } catch (error) {
      // We catch that error and return an error message to the user.
      await message.reply({
        content: `Unknown tag: **${key}**`,
        allowedMentions: {}
      });
      return;
    }

    // If no error occurred, we'll return an acknowledgement that the tag was deleted.
    await message.reply({
      content: `OK! Tag **${key}** has been deleted.`,
      allowedMentions: {}
    });
    const channel = await discord.getGuildTextChannel(TAGRegister);
    channel.sendMessage(`Deleted **${key}**`);
    setTimeout(async () => await message.delete(), 1000);
  }
); //!TAG DELETE
tagCommands.raw('Reset', async (msg) => {
  //Mode confirmation required//
  const k = await msg.reply(
    'você tem certeza que quer resetar todas as keys do Pylon.Bot?? Y:N or 1:0'
  );
  await tagsKv.put('tagreset', '1'); //ir observar o DISCORD.ON('MESSAGE_CREATE')
  setTimeout(async () => msg.delete(), 2000);
  setTimeout(async () => k.delete(), 10000);
  tagsKv.put('tagreset', '0');
  setTimeout(async () => tagsKv.put('tagreset', '0'), 10000);
  //Mode confirmation non-required//
  /*tagsKv.clear();
    msg.reply('ALL KEYS DELETED!! PLEASE CONTACT <@316363300319526915> TO DISABLE THIS CODE');*/
  const channel = await discord.getGuildTextChannel(TAGRegister);
  channel.sendMessage(
    `ALL KEYS DELETED!! ${new Date(msg.timestamp).getTime()}`
  );
});//!TAG RESET


