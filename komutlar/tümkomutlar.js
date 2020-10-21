const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("Gelişmiş Türkçe Bot", client.user.avatarURL())
    .addField("<a:dev14:764098390954213427> **Toplam Komutlar** " `${client.commands.size}` )
   
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tümkomutlar"],
  permLevel: 0
};

exports.help = {
  name: "komutlar",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};
