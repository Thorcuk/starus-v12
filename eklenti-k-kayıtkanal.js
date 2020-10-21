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
      .setTitle(`${client.user.username} - Kayıt Kanal Sıfırla `)
      .setColor("RED")
      .setDescription(`Kayıt Olunacak Kanal Başarıyla Sıfırlandı ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
    message.channel.send(kayıtsistemi);
    db.delete(`kayıtkanal_${message.guild.id}`);
    return;
  }

  let kanal = message.mentions.channels.first();
  if (!kanal) {
    const kayıtsistemi = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setTitle(`${client.user.username} - Kayıt Kanal Ayarla `)
      .setColor("RED")
      .setDescription(`Kayıt Olunacak Kanalı Belirtiniz !  `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
    message.channel.send(kayıtsistemi);
  }

  db.set(`kayıtkanal_${message.guild.id}`, kanal.id);
  const kayıtsistemi = new discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle(`${client.user.username} - Kayıt Kanal Ayarlandı `)
    .setColor("RED")
    .setDescription(`Kayıt Olunacak Kanal ${kanal} Olarak Ayarlandı ! `)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `);
  message.channel.send(kayıtsistemi);
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["kayıt-kanal"],
  permlevel: 0
};
exports.help = {
  name: "kayıt-kanal",
  description: "Kayıt Olunacak Kanalı Ayarlar",
  usage: ".kayıt-kanal #kanal"
};
