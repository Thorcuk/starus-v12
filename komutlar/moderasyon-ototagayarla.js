const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{
  
let ototag = await db.fetch(`judgeteam?Ototag_${message.guild.id}`) || await db.fetch(`judgeteam?OtotagKanal_${message.guild.id}`)
if(ototag) return message.reply(`:x: Bu sistem zaten aktif durumda. Kapatmak için **${prefix}ototagkapat**`)
let ototagkanal = message.mentions.channels.first()
let judge_tag = args.slice(1).join(' ')
if(!ototagkanal || !ototagkanal) return message.reply(`Ototag sistemini ayarlamak için **kanal ve tag** belirtmelisin.`)
  
db.set(`judgeteam?Ototag_${message.guild.id}`,judge_tag) 
db.set(`judgeteam?OtotagKanal_${message.guild.id}`,ototagkanal.id)
message.channel.send(`Ototag aktif edildi!\nYeni gelen kullanıcılara **${judge_tag}** Tagını vereceğim.`)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['ototagayarla','oto-tag-ayarla'],
  permLevel: 4 
};
exports.help = {
  name: 'ototag',
  description: 'Ototag Sistemi',
  usage: 'ototag kanal tag'
};