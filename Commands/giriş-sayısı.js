const Discord = require('discord.js')
const db = require('quick.db');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');





module.exports = {
    name: "kayıtlar",
    description: "Kullanıcının avatarını gösterir",
    aliases: ['kullanııc-kayıt',"kkb"],
    async execute(client,message,args){


        let csm;
        let csm1 = message.mentions.members.first();
        let csm2 = message.guild.members.cache.get(args[0]);
        if (csm1) {
          csm = csm1;
        }
        if (csm2) {
          csm = csm2;
        }
        if (!csm) {
          csm = message.member;
        }
      
        let data = db.get(`csgiriş.${csm.user.id}_${message.guild.id}`);
        if (data) {
          let cse = new Discord.MessageEmbed()
            .setTitle("Kayıt Bilgisi")
            .setThumbnail(csm.user.avatarURL())
            .setColor("BLACK")
            .addField("Giriş Sayısı", `\`${data}\``)
            .setTimestamp()
            .setFooter("Tedoa ❤️ Veliora");
          message.channel.send(cse);
          message.react('786030094832762920')
        } else {
          message.reply("**Kayıtlı Bir Data Bulunamadı!**");
        }
      









    }
}