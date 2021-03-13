const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix




module.exports = {
    name: "me",
    description: "Kullanıcının avatarını gösterir",
    aliases: [],
    async execute(client,message,args){


      const emojiler = {


        "tehdit":"<a:arp:786030062629683220>"
      
      }



        let booster = message.guild.roles.cache.get("795311298816507936")
        if(!booster) return message.channel.send("Sunucuda Böyle Bir rol Bulanamadı!")
          if(!message.member.roles.cache.has(booster.id)) return message.reply("**Bu Komutu Kullanabilmek İçin \`Boost\` Basmalsın** !").then(tedoad => tedoad.delete({timeout: 5000}))
        
        let isim = args[0]
        let yas = args[1]
        if(message.content.toLowerCase().includes('31')) return message.channel.send(tedoa = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**Yasaklı Sayı** `İsmine 31 Ekleyemesin`").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))
        if(message.content.toLowerCase().includes('52')) return message.channel.send(tedoa2 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**Yasaklı Sayı** `İsmine 52 Ekleyemesin`").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))
        if(message.content.toLowerCase().includes('62')) return message.channel.send(tedoa3 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**Yasaklı Sayı** `İsmine 62 Ekleyemesin`").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))

      if(!isim) return message.reply(`Lütfen bir kullanıcı adı giriniz!`).then(codework => codework.delete({timeout: 5000}))

      if(isim.length > 32) return message.reply(`Lütfen **32** Karakteri Geçmeyen Bir İsim Giriniz!`).then(codework => codework.delete({timeout: 5000}))
      if(yas){ 
      message.guild.members.cache.get(message.author.id).setNickname(`✬ ${isim} | ${yas}`)
      return message.channel.send(chery3 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription(`Başarılı Kullanıcı Adını \`✬ ${isim} | ${yas}\` Olarak Değiştirdin`).setColor("RED")).then(message.react('786030094832762920')).then(x => x.delete({timeout:9000}))
      } else
      message.guild.members.cache.get(message.author.id).setNickname(`✬ ${isim}`)
      const chery2 = new Discord.MessageEmbed()
      .setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true}))
      .setColor('BLACK')
      .setDescription(`Başarılı Kullanıcı Adını \`✬ ${isim}\` Olarak Değiştirdin`)
      message.channel.send(chery2)
      message.react('786030094832762920')
    }
}