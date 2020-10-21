const discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      ` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`
    );

  if (args[0] === "sıfırla") {
    const kayıtsistemi = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle(`${client.user.username} - Yetkili Rol Sıfırla `)
      .setColor("BLACK")
      .setDescription(
        `Sunucu İçin Ayarladığınız Yetkili Rol Başarıyla Sıfırlandı ! `
      )
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
    message.channel.send(kayıtsistemi);
    db.delete(`kayıtçırol_${message.guild.id}`);
    return;
  }

  let rol = message.mentions.roles.first();
  if (!rol) {
    const kayıtsistemi = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle(`${client.user.username} - Yetkili Rol Ayarla `)
      .setColor("BLACK")
      .setDescription(`Ayarlayacağınız Yetkili Rolü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
    message.channel.send(kayıtsistemi);
  } 
  db.set(`kayıtçırol_${message.guild.id}`, rol.id);
  const kayıtsistemi = new discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle(`${client.user.username} - Yetkili Rol Ayarlandı `)
    .setColor("BLACK")
    .setDescription(`Kayıt Edecek Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
  message.channel.send(kayıtsistemi);
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["kayıtçı-rol"],  
  permlevel: 0
};
exports.help = {
  name: "yetkili-rol",
  description: "yetkili rolünü ayarlar",
  usage: "-yetkili-rol @rol"
};  //RexusLeyn Youtube | https://discord.gg/kvJ3p9z
