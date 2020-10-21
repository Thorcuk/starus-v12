const Discord = require('discord.js');

exports.run = async(client, message) => {

    const exampleEmbed = new Discord.MessageEmbed() 
    
      .setColor('RED')
      .addField(`Kurallar`, [`
      
      - Küfür, argo ve reklam kesinlikle **yasaktır**!
      - Spam ve flood **yasaktır**!
      - Din, ırk ve siyaset konuşmak **yasaktır**!
      - Herkes birbirine saygılı olmalıdır!
      - Herkesin görüşü kendinedir bu yüzden tartışmak **yasaktır**!
      - Üstünlük göstermek/taslamak **yasaktır**!
      - Caps ve emoji kullanımı **yasaktır**! (Aşırı Olmadıkça)
      - Oynuyor kısmına reklam, küfür koymak **yasaktır**!
      - Yetkililere karşı gelmek **yasaktır**!
      - Bot basmak/j4j yapmak **yasaktır**!
      - Rahatsızlık vermek **yasaktır**! \n\n
      - SUNUCUYA GİRDİĞİNİZ ANDA OKUMUŞ SAYILACAKSINIZ!

      `])

       message.delete();
      //message.react("?");

    message.channel.send(exampleEmbed); 

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rules'],
    permLevel: 1
}

exports.help = {
    name : 'kurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}