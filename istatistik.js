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
    .setFooter("© Starus Bot", client.user.avatarURL())
    .addField("<a:dev14:764098390954213427> **Botun Sahibi**", "<@631545259297603625> <@766227781922586644>")
    .addField("<a:dev14:764098390954213427> **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<a:dev14:764098390954213427> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<a:dev14:764098390954213427> **Çalışma süresi**", seksizaman, true)
    .addField("<a:dev14:764098390954213427> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:dev14:764098390954213427> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<a:dev14:764098390954213427> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("<a:dev14:764098390954213427> **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("<a:dev14:764098390954213427> **Node.JS sürüm**", `${process.version}`, true)
    .addField("<a:dev14:764098390954213427> **Komutlar**", `${client.commands.size} `)
    .addField("**<a:krmzelmas:764099211536760845> Bot Davet**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};
