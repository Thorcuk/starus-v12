const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const exampleEmbed = new Discord.MessageEmbed()  
.setColor('#fff000 ')
.addField('**Sayaç Sistemi**','**s!sayaç-ayarla**  \n <a:krmzelmas:764099211536760845> Örnek: `s!sayaç-ayarla #kanal <sayı>`')
.addField('**s!sayaç-kapat**','Sayaçı Kapatırsınız')
     .setFooter('© Starus',client.user.avatarURL)
.setTimestamp()
message.channel.send(exampleEmbed); 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'sayaç',
  description: 'sayaç', 
  usage: 'sayaç'
};
