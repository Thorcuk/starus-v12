const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Yardım Menüsü")
 .setTimestamp()
.addField("s!kullanıcı",   `Kullanıcı Komutlarını Gösterir.`,)
.addField("s!moderasyon",  `Moderasyon Komutlarını Gösteir.`,)
.addField("s!moderasyon2", `Moderasyon 2 Komutlarını Gösteir.`,)
.addField("s!koruma",      `Koruma Komutlarını Gösterir.`,)
.addField("s!eğlence",     `Eğlence Komutlarını Gösterir.`,)
.addField("s!logo",        `Logo Komutlarını Gösterir.`,)
.addField("s!bot",         `Bot Komutlarını Gösterir.`,)
.addField("s!eklenti",     `Eklenti Komutlarını Gösterir.`,)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}