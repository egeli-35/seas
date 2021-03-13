const Discord = require('discord.js')
const db = require('quick.db')


// invisible
module.exports = {
    name: "stat",
    description: "Kullanıcının avatarını gösterir",
    aliases: [ "kayıtlar", "kayıt-kontrol"],
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

      if(!["794958057591406603"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(chery9 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**YETKİN YOK** `Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsn`").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))

     let kullanıcı = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        
      
     if(!kullanıcı) {
    
        let erkek = db.fetch(`yetkili.${message.author.id}.erkek`);
        let kadın = db.fetch(`yetkili.${message.author.id}.kadin`);
        let kayıtlar = db.fetch(`yetkili.${message.author.id}.toplam`);  
        
    
        if(erkek === null) erkek = "0"
        if(erkek === undefined) erkek = "0"
        if(kadın === null) kadın = "0"
        if(kadın === undefined) kadın = "0"
        if(kayıtlar === null) kayıtlar = "0"
        if(kayıtlar === undefined) kayıtlar = "0"
        message.react('786030094832762920')
        const kayıtlar2 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true}))
        .setDescription(`• Toplam Kayıtlar:  ${donustur(kayıtlar)}
        • Toplam Erkek Kayıtların: ${donustur(erkek)}       
        • Toplam Kadın Kayıtların: ${donustur(kadın)}
        `)
        .setColor("BLACK")
        .setFooter("Tedoa ❤️ Veliora");
        return message.channel.send(kayıtlar2)
    };

    
    
    if(kullanıcı) {
    let erkek1 = await db.fetch(`yetkili.${kullanıcı.id}.erkek`) 
    let kadin1 = await db.fetch(`yetkili.${kullanıcı.id}.kadin`) 
    let kayıtlar1 = await db.fetch(`yetkili.${kullanıcı.id}.toplam`);  
        
    
    if(kayıtlar1 === null) kayıtlar1 = "0"
    if(kayıtlar1 === undefined) kayıtlar1 = "0"
    if(erkek1 === null) erkek1 = "0"
    if(erkek1 === undefined) erkek1 = "0"
    if(kadin1 === null) kadin1 = "0"
    if(kadin1 === undefined) kadin1 = "0"
    const kayıtlar3 = new Discord.MessageEmbed()
    .setThumbnail(kullanıcı.avatarURL ({ dynamic: true})) 
    .setAuthor(`${kullanıcı.username}`)
    .setDescription(`• Toplam Kayıtların: ${donustur(kayıtlar1)}
    • Toplam Erkek Kayıtların: ${donustur(erkek1)}
    • Toplam Kadın Kayıtların: ${donustur(kadin1)}
    `)
    .setColor("0x2f3136")
    .setFooter("Tedoa ❤️ Veliora");
    return message.channel.send(kayıtlar3)

    }






    }
}