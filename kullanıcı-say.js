const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
  let boost = message.guild.premiumSubscriptionCount.toString().replace('0', '0').replace('1', '1').replace('2', '2').replace('3', '3').replace('4', '4').replace('5', '5').replace('6', '6').replace('7', '7').replace('8', '8').replace('9', '9');
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const infinity  = new Discord.MessageEmbed()
        .setColor("#fff000")
        .setThumbnail(``)
        .addField(` **Sunucudaki Toplam Üye Sayısı**`,`**\`${message.guild.memberCount}\`**`)
        .addField(` **Toplam Çevrimiçi Üye Sayısı**`, `**\`${çevrimiçi}\`**`) 
        .addField(` **Seslideki Üye Sayısı**`,`**\`${count}\`**`)
        .addField(` **Boost Sayısı**`,`**\`${boost}\`**`)
        .addField(` **Kullanıcılar**`, ` Çevrimiçi : **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** \n Rahatsız Etmeyin : **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** \n Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** \n Görünmez/Çevrimdışı : **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** \n  Botlar : **${botlar}**`, true)   
        .setTitle(`${message.author.tag} - Tarafından Kullanıldı`)
        .setFooter(`${message.author} tarafından istendi.`, message.author.avatarURL())
    message.channel.send(infinity);

} 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}