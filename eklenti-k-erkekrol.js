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
      .setTitle(`${client.user.username} - Erkek Rol Sıfırla `)
      .setColor("RED")
      .setDescription(
        `Sunucu İçin Ayarladığınız Erkek Rolü Başarıyla Sıfırlandı !`
      )
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
    message.channel.send(kayıtsistemi);
    db.delete(`erkekrol_${message.guild.id}`);
    return;
  }

  let rol = message.mentions.roles.first();
  if (!rol) {
    const kayıtsistemi = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle(`${client.user.username} - Erkek Rol Ayarla `)
      .setColor("RED")
      .setDescription(`Ayarlayacağınız Erkek Rolünü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
    message.channel.send(kayıtsistemi);
  }
  db.set(`erkekrol_${message.guild.id}`, rol.id);
  const kayıtsistemi = new discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle(`${client.user.username} - Erkek Rol Ayarlandı `)
    .setColor("RED")
    .setDescription(`Erkek Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
  message.channel.send(kayıtsistemi);
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["kayıt-erkek-rol","erkek-rol"],
  permlevel: 0
};
exports.help = {
  name: "kayıt-erkek-rol",
  description: "erkek rolünü ayarlar",
  usage: "-erkek-rol @rol"
};
