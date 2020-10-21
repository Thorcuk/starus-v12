const Discord = require('discord.js')

exports.run = async function(client, message, args) {
   if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu Komutu kullanmanız için `Mesajları Yönet` yetkisine sahip olmalısınız.') 
let embed = args.slice(0).join(' ');
        if (embed.length < 1) {
        return message.channel.send(`Embed olarak ne yazmamı istersin`);
            } else {
              
        const Embed = new Discord.MessageEmbed() 
        .setColor('#fff000')
        .setDescription(`${embed}`)
        .setFooter('', client.user.avatarURL)
        message.channel.send(Embed); 
      }
     }

  

  

  
;
  

exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
}
exports.help = {
  name:"embed",
  description: "",
  usage: ""
}