const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "kız",
  description: "Kullanıcının avatarını gösterir",
  aliases: ["k","kadın","görl","avrat"],
  async execute(client,message,args){

const emojiler = {


  "tehdit":"<a:arp:786030062629683220>"

}

  
    if(!["794958057591406603"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(chery9 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**YETKİN YOK** `Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsn`").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))
        
      const kadin = message.guild.roles.cache.find(r => r.id === "794958109595926548")
      const xx = message.guild.roles.cache.find(r => r.id === "794958110082203699")
      const kayıtsız = message.guild.roles.cache.find(r => r.id === "794958155372167190")
      const reglog = message.guild.channels.cache.find(c => c.id === "795295641801719809")
      const genelchat = message.guild.channels.cache.find(g => g.id === "794958240110739507")
      
      const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
      if(!member) return message.channel.send(chery6 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**Hatalı Kullanım** `Bir Üye Etiketle` ").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))
      if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
      const x = message.guild.member(member)

      let tag = "✬"
      let isim = args[1]
      let yas = Number(args[2])
      if(!isim) return message.channel.send(chery5 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**Hatalı Kullanım** `Bir İsim Girmelisn` ").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))
      if(!yas) return message.channel.send(chery4 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**Hatalı Kullanım** `Bir Yaş Girmelisn` ").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))
      if(member.id === message.author.id) return message.channel.send(chery10 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("`Kendini Kayıt Edemesin`").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))
        ////// Data /////////////
      let bilgi = db.get(`yetkili.${member.id}`);  
      db.add(`yetkili.${message.author.id}.kadin`,1 )
      db.add(`yetkili.${message.author.id}.toplam`, 1)  
      let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  
     //// Data ////// 

     x.setNickname(`${tag} ${isim} | ${yas}`)
     x.roles.add(kadin)
     x.roles.add(xx)
     x.roles.remove(kayıtsız)
     
     const chery = new Discord.MessageEmbed()
     .setColor("RED")
     .setDescription(`${member} Kullanıcısına <@&794958109595926548> Rolleri Verildi`)
      .setFooter(`Toplam Kayıtın ${toplami}`)
     reglog.send(chery)
     message.react('786030094832762920')



     var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
     var üs = üyesayısı.match(/([0-9])/g)
     üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
     if(üs) {
       üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
         return {
           '0': `<a:chery_0:786039662678376458>`,
           '1': `<a:chery_1:786039674892189706>`,
           '2': `<a:chery_2:786039692704481313>`,
           '3': `<a:chery_3:786039711893291038>`,
           '4': `<a:chery_4:786039733209137172>`,
           '5': `<a:chery_5:786039757322584064>`,
           '6': `<a:chery_6:786039785025699841>`,
           '7': `<a:chery_7:786039817976021002>`,
           '8': `<a:chery_8:786039843724722206>`,
           '9': `<a:chery_9:786039865434439680>`}[d];
         })
       }
 


       genelchat.send(`<@${member.id}>, Aramıza Hoş Geldin Seninle ${üyesayısı} Kişi Olduk `).then(x => x.delete({timeout:10000}))
       



  }
}