const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Bot Menüsü")
 .setTimestamp()
.addField("s!ping",         `**Botun Gecikmesini Gösterir.**`,)
.addField("s!davet",        `**Botun Davet Linki.**`,)
.addField("s!prefix",       `**Botun Prefix'ini Değişdirirsiniz.**`,)
.addField("s!hata-bildir",  `**Botun Hatasını Bildirirsiniz.**`,)
.addField("s!istek-bilgi",  `**Botumuza İstek Komut Önerirsiniz.**`,)
.addField("s!", `**.**`,)
.addField("s!", `**.**`,)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["Bot","bot"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'Bot',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}