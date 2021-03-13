const Discord = require('discord.js')
const db = require('quick.db')


// invisible
module.exports = {
    name: "sıfırla",
    description: "Kullanıcının avatarını gösterir",
    aliases: ["kayıt-sıfırla", "kayıtları-sıfırla", "db-sıfırla", "dbisil", "db-sil"],
    async execute(client,message,args){

  
        if(!["794958019657072680"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(chery9 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**YETKİN YOK** `Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsn`").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))

        const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.channel.send(`Bir Kullanıcı Belirt.`)
        if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
        
          
        let bilgi = db.get(`yetkili.${member.id}`); 
        db.delete(`yetkili.${message.author.id}.kadin`) 
        db.delete(`yetkili.${message.author.id}.erkek`)
        db.delete(`yetkili.${message.author.id}.toplam`)  
        let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  
        
        message.react('786030094832762920')
        
        message.channel.send(new Discord.MessageEmbed().setAuthor(`Kayıt Sıfırlandı`).setColor("BLACK").setDescription(`${member} Adlı Kullanıcının Db'si Silindi, <@${message.author.id}> Tarafından Sıfırlandı.`))
          
        
        


    }
}