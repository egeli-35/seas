const dc = require('discord.js')
const db = require('quick.db')


// invisible
module.exports = {
    name: "topteyit",
    description: "Kullanıcının avatarını gösterir",
    aliases: ["top", "teyit", "top-teyit"],
    async execute(client,message,args){


      const emojiler = {


        "tehdit":"<a:arp:786030062629683220>"
      
      }

      if(!["794958057591406603"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(chery9 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**YETKİN YOK** `Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsn`").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))

        let uye = message.mentions.users.first() || message.author;
      let bilgi = db.get(`yetkili.${uye.id}.toplam`);
      let yazı = "Veliora Kayıt Top"
        
let top = message.guild.members.cache.filter(uye => db.get(`yetkili.${uye.id}.toplam`)).array().sort((uye1, uye2) => Number(db.get(`yetkili.${uye2.id}.toplam`))-Number(db.get(`yetkili.${uye1.id}.toplam`))).slice(0, 15).map((uye, index) => (index+1)+" • <@"+ uye +"> | \`" + db.get(`yetkili.${uye.id}.toplam`) +"\` Kayıta Sahip.").join('\n');
message.channel.send(new dc.MessageEmbed().setAuthor(yazı, message.guild.iconURL({dynamic: true})).setTimestamp().setColor("0x2f3136").setFooter(message.member.displayName+" tarafından istendi!", message.author.avatarURL).setDescription(top));
  message.react('786030094832762920')


    }
}