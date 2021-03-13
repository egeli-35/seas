const Discord = require('discord.js')

const emojiler = {

"tehdit":"<a:arp:792474526456872971>"


}


module.exports = {
    name: "seskontrol",
    description: "Kullanıcının avatarını gösterir",
    aliases: [,"sorgula","kontrol"],
    async execute(client,message,args){


        let csm;
        let csm1 = message.mentions.members.first();
        let csm2 = message.guild.members.cache.get(args[0]);

        

        const emojiler = {


          "tehdit":"<a:arp:786030062629683220>"
        
        }



        if (csm1) {
          csm = csm1;
        }
        if (csm2) {
          csm = csm2;
        }
        if (!csm) {
          csm = message.member;
        if(csm) return message.channel.send(chery3 = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setDescription("**Bir Kullanıcı Belirtmelisin** `.seskontrol <@üye> / İd`").setColor("RED")).then(message.react(emojiler.tehdit)).then(x => x.delete({timeout:9000}))
        }
        let csc = csm.voice.channel
        if (!csc) {

       const chery2 = new Discord.MessageEmbed()
       .setColor("RED")
       .setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true}))
       .setDescription("**<@" + csm.id + "> Adlı  Kullanıcı Bir Sesli Kanalda Değil!**")
       message.channel.send(chery2).then(x => x.delete({timeout:9000}))
       message.react('786030062629683220')


        }
        if (csc) {
          const chery = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true}))
          .setDescription(`<@${csm.id}> isimli kişi \`${message.guild.channels.cache.get(csc.id).name}\` kanalında bulundu.`)
          message.channel.send(chery).then(x => x.delete({timeout:9000}))
          message.react('786030094832762920')
        }


    }
}