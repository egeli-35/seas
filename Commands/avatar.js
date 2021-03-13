const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');


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
    name: "avatar",
    description: "Kullanıcının avatarını gösterir",
    aliases: ['av',"profil"],
    async execute(client,message,args){
        if(!message.guild) return;
     let user = message.mentions.users.first() || message.author

     message.channel.send(embed = new Discord.MessageEmbed().setImage(user.displayAvatarURL({dynamic:true})).setColor('BLACK'))
    }
}