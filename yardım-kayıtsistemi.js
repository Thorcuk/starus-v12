const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const kayıtyardım = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Kayıt Sistemi")
    .setColor("#fff000")
    .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
    .addField(
      "__Kayıt Yardım__",
      `

\ \`s!kayıt-kanal/sıfırla\` : **Kayıt Yapılacak Kanal  __s!kayıt-kanal #kanal__**

\ \`s!yetkili-rol/sıfırla\` : **Kayıt Yapacak Yetkili Rol  __s!yetkili-rol @rol__**

\ \`s!erkek-rol/sıfırla\` : **Erkek Kayıt Rol  __s!erkek-rol @rol__**

\ \`s!kız-rol/sıfırla\` : **Kız/Bayan Kayıt Rol  __s!kız-rol @rol__**

\ \`s!alınacak-rol/sıfırla\` : **Kayıt Sonrası Alınacak Rol  __s!alınacak-rol @rol__***

\ \`s!erkek\` : **Erkek Kayıt __s!erkek @kullanıcı <İsim Yaş>__**

\ \`s!kız\` : **Kız Kayıt __s!kız @kullanıcı <İsim Yaş>__**
`
    );
 
  message.channel.send(kayıtyardım);                                          
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};



exports.help = {
  name: "kayıt-sistemi",
  description: "Yardım Menüsünü Gösterir.",
  usage: "kayıt-yardım"
};
