const Discord = require('discord.js');

//
//const dcs = function(sayı) {

module.exports = {
    name: "say",
    description: "Kullanıcının avatarını gösterir",
    aliases: [ "online", "hüğğ"],
    async execute(client,message,args){






        
String.prototype.replaceA = function (find, replace) {
    return this.replace(new RegExp(find, 'g'), replace);
  }
  
  const donustur = function(sayi) {
    let gorunum = sayi.toString().replace('0', '0chery')
      .replaceA('1', '1chery')
      .replaceA('2', '2chery')
      .replaceA('3', '3chery')
      .replaceA('4', '4chery')
      .replaceA('5', '5chery')
      .replaceA('6', '6chery')
      .replaceA('7', '7chery')
      .replaceA('8', '8chery')
      .replaceA('9', '9chery')
    
    gorunum = gorunum
      .replaceA("0chery", '<a:chery_0:786039662678376458>')
      .replaceA("1chery", "<a:chery_1:786039674892189706>")
      .replaceA("2chery", "<a:chery_2:786039692704481313>")
      .replaceA("3chery", "<a:chery_3:786039711893291038>")
      .replaceA("4chery", '<a:chery_4:786039733209137172>')
      .replaceA("5chery", '<a:chery_5:786039757322584064>')
      .replaceA("6chery", '<a:chery_6:786039785025699841>')
      .replaceA("7chery", '<a:chery_7:786039817976021002>')
      .replaceA("8chery", '<a:chery_8:786039843724722206>')
      .replaceA("9chery", '<a:chery_9:786039865434439680>')
    
    return gorunum
  }

       
  if(!['ROL ID'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(`Başarısız !`).setDescription(`Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta :no: \n \`u!ban @Etiket Sebep\` `))


  let tag = "✬";
  const booster = message.guild.roles.cache.get("795311298816507936").members.size
  const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
  const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new Discord.MessageEmbed()
  .setTimestamp()
  .setFooter('Tєdoα ❤️ Veliora')
  .setColor('BLUE')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed
.setDescription(`

∎ Sunucumuzda Toplam ${donustur(toplam)} **Üye** Bulunmaktadır.

∎ Sunucumuzda Toplam ${donustur(online)} **Aktif** Üye Bulunmaktadır.

∎ Sunucumuzda Toplam ${donustur(ttag)} **Taglı** Üye Bulunmaktadır.

∎ Sunucumuzda Toplam ${donustur(booster)} **Booster** Bulunmaktadır.

∎ Sunucumuzda Toplam ${donustur(ses)} **Üye Ses** Kanallarında Bulunmaktadır.
  `)).then(x => x.delete({timeout:18000}))

  message.react('786030094832762920')

    }
}
