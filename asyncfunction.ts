// a

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

//------------------------BEGIN OF THE CREATEREACTIONEMBED FUNCTION---------------------------------//
var MSGIDb = '';
var AUTHORIDb = '';

var ka = discord.decor.Emojis.REGIONAL_INDICATOR_A;
var kb = discord.decor.Emojis.REGIONAL_INDICATOR_B;
var kc = discord.decor.Emojis.REGIONAL_INDICATOR_C;
var kd = discord.decor.Emojis.REGIONAL_INDICATOR_D;

export async function CreateReactionEmbed(
  msg: discord.GuildMemberMessage,
  e: number,
  channela: string,
  n: number
) {
  //REACTION ASSOCIATION , CODE, CHANNEL TO SEND
  console.log('createreactionembed');
  var channel = await discord.getGuildTextChannel(channela); //PROVA

  const menu = new discord.Embed();
  await menu.setColor(0x3f888f);
  await menu.setTitle(`Questão ${n}`);
  await menu.setDescription(
    `Alternativas
    ${ka}: ${await tagsKv.get<string>(e + ' 31')}
    ${kb}: ${await tagsKv.get<string>(e + ' 32')}
    ${kc}: ${await tagsKv.get<string>(e + ' 33')}
    ${kd}: ${await tagsKv.get<string>(e + ' 34')}`
  );
  //await menu.setImage( {url:`${await tagsKv.get<string>(e+' 1')}`});
  await menu.setFooter({
    text: `${await tagsKv.get<string>(e + ' 5')} by ${await tagsKv.get<string>(
      e + ' 2'
    )}`
  });

  const thehelpmsg = await channel?.sendMessage(menu);

  await thehelpmsg.addReaction(`${ka}`);
  await thehelpmsg.addReaction(`${kb}`);
  await thehelpmsg.addReaction(`${kc}`);
  await thehelpmsg.addReaction(`${kd}`);
  await thehelpmsg.addReaction('❌');

  MSGIDb = thehelpmsg.id;
  AUTHORIDb = msg.author.id;
}
discord.registerEventHandler('MESSAGE_REACTION_ADD', async (theReaction) => {
  //https://github.com/Kile/menu/blob/master/menu.ts
  const guild = await discord.getGuild(guildId);
  const theMsgChannel = await discord.getGuildTextChannel(
    theReaction.channelId
  );
  const theMsg = await theMsgChannel.getMessage(theReaction.messageId);

  if (
    theReaction.emoji.name == `${ka}` &&
    theReaction.messageId == MSGIDb &&
    theReaction.member.user.id == AUTHORIDb
  ) {
    //const option1 = new discord.Embed();
    //await option1.setColor(0x3f888f);
    //await option1.setTitle('Commads');
    //await option1.setDescription('Need a list of commands? Use `!commands`');
    //const theMsg2 = await theMsg.reply(option1);
    MSGIDb = '';
    AUTHORIDb = '';
    //await theMsg.delete();
  }

  if (
    theReaction.emoji.name == `${kb}` &&
    theReaction.messageId == MSGIDb &&
    theReaction.member.user.id == AUTHORIDb
  ) {
    //const option2 = new discord.Embed();
    //await option2.setColor(0x3f888f);
    //await option2.setTitle('New to discord');
    //await option2.setDescription(
    //  `Find a begginer tutorial to discord [here](https://www.youtube.com/watch?v=rnYGrq95ezA)`
    //);
    //const theMsg3 = await theMsg.reply(option2);
    MSGIDb = '';
    AUTHORIDb = '';
    //await theMsg.delete();
  }
  if (
    theReaction.emoji.name == `${kc}` &&
    theReaction.messageId == MSGIDb &&
    theReaction.member.user.id == AUTHORIDb
  ) {
    //const option3 = new discord.Embed();
    //await option3.setColor(0x3f888f);
    //await option3.setTitle('How to get a mod');
    //await option3.setDescription('Please apply as a mod by dming an admin');

    //const theMsg4 = await theMsg.reply(option3);
    MSGIDb = '';
    AUTHORIDb = '';
    ///await theMsg.delete();
  }
  if (
    theReaction.emoji.name == `${kd}` &&
    theReaction.messageId == MSGIDb &&
    theReaction.member.user.id == AUTHORIDb
  ) {
    //const option4 = new discord.Embed();
    //await option4.setColor(0x3f888f);
    //await option4.setTitle('How to get special ranks');
    //await option4.setDescription(
    //  'Go to #autoroles and asign yourself roles by reacting to the messages there'
    //);

    //const theMsg4 = await theMsg.reply(option4);
    MSGIDb = '';
    AUTHORIDb = '';
    //await theMsg.delete();
  }
  if (
    theReaction.emoji.name == '❌' &&
    theReaction.messageId == MSGIDb &&
    theReaction.member.user.id == AUTHORIDb
  ) {
    //const option8 = new discord.Embed();
    //await option8.setColor(0x3f888f);
    //await option8.setTitle('**Canceled**');
    //await option8.setDescription(`You chanceled the command selection`);

    //const theMsg4 = await theMsg.reply(option8);
    MSGIDb = '';
    AUTHORIDb = '';
    ////await theMsg.delete();
    setTimeout(() => theMsg.delete(), 5000);
  }
});
//--------------------------END OF THE CREATEREACTIONEMBED FUNCTION---------------------------------//

export async function NewEmbedCreate(
  message: discord.GuildMemberMessage,
  z: string,
  t: string,
  k: string
) {
  const a = new discord.Embed({
    title: `${t} ${k}`,
    color: 0xcee5ff,
    description: `${z}`,
    footer: {
      text: 'powered by https://pylon.bot'
    }
  });

  message.reply(a);
} //CRIAR EMBED ARG REPLY, TEXT AND TITLE + TITLE
