const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : s!hata-bildir <hatamız>')
const embed = new Discord.MessageEmbed()
.setColor('#00ff00')
.setDescription('Bildiriniz başarıyla iletildi  \nEn Yakın Zamanda <#765583673373753356>  Kanalından Cevap Vereceğiz. :dikat:')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** adlı kullanıcının **bildirisi ;**`)
.addField(`:envelope: **Gönderen Kişinin Bilgileri**`, `:white_small_square:Kullanıcı ID: ${message.author.id}\n:white_small_square:Kullanıcı Adı: ${message.author.username}\n:white_small_square:Kullanıcı Tagı: ${message.author.discriminator}`)
.addField(":pencil: **Gönderilen Hatalı/Buglu Kod Mesajı**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('765583673373753356').send(embed2); //Mesajın Gideceği Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['hatabildir','hata  '],
  permLevel: 0
}

exports.help = {
    name: 'hata-bildir',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'hata <hata>'
}