const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** <a:Yldz:742698148329291826>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Yeşil Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'yeşil',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'green <yazı>'
}