const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#fff000")
.setTitle("Eğlence Menüsü")
 .setTimestamp()
.addField("s!fbi-gif",    `**FBİ Gif Atar.**`,)
.addField("s!tersyazı",   `**Tersden Yazarsınız.**`,)
.addField("s!öp",         `**Öpersiniz.**`,)
.addField("s!tokat",      `**Tokat Atarsınız.**`,)
.addField("s!kralol",     `**Kral Olursunuz.**`,)
.addField("s!espri",      `**Espri Yapar.**`,)
.addField("s!efkarım",    `**Efkarınızı Ölçer.**`,)
.addField("s!ara155",     `**Polisi Ararsınız.**`,)
.addField("s!balık-tut",  `**Balık Tutarsınız.**`,)
.addField("s!taksimdayı", `**Hello Hawğii.**`,)
.addField("s!sarıl",      `**Sarılırsın**`)

.addField("<a:krmzelmas:764099211536760845> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["eğlence","Eğlence"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'Eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}