const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')



let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
 	
 let tarih = ` ${moment(Date.now()).format("DD")} ${aylar[moment(Date.now()).format("MM")]} ${moment(Date.now()).add(0,"hours").format("YYYY HH:mm:ss")}`


// invisible
module.exports = {
    name: "vip",
    description: "Kullanıcının avatarını gösterir",
    aliases: ["v"],
    async execute(client,message,args){




        
  

    
  
      if(!["794958019657072680"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(chery9 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**YETKİN YOK** `Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsn`").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))
  
        const vip = message.guild.roles.cache.find(r => r.id === "794958107197308929")
        const log = message.guild.channels.cache.find(c => c.id === "798278867566461028")

        const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.channel.send(`Bir Kullanıcı Belirt.`)
        if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
        const x = message.guild.member(member)
        
   
        x.roles.add(vip)
         
         

        const chery = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`${member} Kullanıcısına ${vip} Rolü Verildi `)
        .setFooter(`Tedoa ❤️ Veliora`)
       message.channel.send(chery).then(x => x.delete({timeout:8000}))
      message.react(`786030094832762920`)
          
      


      const chery2 = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setDescription(`**${member} Kullanıcısına ${message.author} Tarafından ${vip} Rolü \`${tarih}\` Tarihinde Başarılı Bir Şekilde Verildi**`)
      log.send(chery2)

    






    }
}