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
      .setTitle(`${client.user.username} - Kız Rol Sıfırla `)
      .setColor("RED")
      .setDescription(
        `Sunucu İçin Ayarladığınız Kız Rolü Başarıyla Sıfırlandı !`
      )
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
    message.channel.send(kayıtsistemi);
    db.delete(`kızrol_${message.guild.id}`);
    return;
  }

  let rol = message.mentions.roles.first();
  if (!rol) {
    const kayıtsistemi = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle(`${client.user.username} - Kız Rol Ayarla `)
      .setColor("RED")
      .setDescription(`Ayarlayacağınız Kız Rolünü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
    message.channel.send(kayıtsistemi);
  }
  db.set(`kızrol_${message.guild.id}`, rol.id);
  const kayıtsistemi = new discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle(`${client.user.username} - kız Rol Ayarlandı `)
    .setColor("RED")
    .setDescription(`Kız Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
  message.channel.send(kayıtsistemi);
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["kayıt-kız-rol"],
  permlevel: 0
};
exports.help = {
  name: "kız-rol",
  description: "kız rolünü ayarlar",
  usage: "-kız-rol @rol"
};
