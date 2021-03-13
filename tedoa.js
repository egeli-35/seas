const Discord = require('discord.js');
const fs = require('fs')
const db = require('quick.db')
const ms = require('ms')
const moment = require('moment')
const ws = require('ws')
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');


var prefix = ayarlar.prefix;



client.on('ready', () => {
    client.user.setPresence({ activity: { name: "Tedoa ❤️ Marissa", type: "WATCHING"}, status: "online"})
    cmds.forEach(cmd => {
        console.log(`${cmd} tanımlandı`)
    })
    console.log(client.user.username)
  })
  
  
   
  client.on('message', msg => {
    if (msg.content === 'Burdamsın orspu çocu') {
      msg.reply('Burdayım Orospu Çocu');
    }
  });


  

  client.on("message", msg => {
    if (msg.content.toLowerCase() === "tag") {
    msg.channel.send("✬");
    msg.react("795299411408191498");
    }
   });

   



  client.on("message", msg => {
    if (msg.content.toLowerCase() === "!tag") {
    msg.channel.send("✬");
    msg.react("795299411408191498");
    }
   });
   




   client.on("message", msg => {
    if (msg.content.toLowerCase() === ".tag") {
    msg.channel.send("✬");
    msg.react("795299411408191498");
    }
   });

   
   client.on("message", msg => {
    if (msg.content.toLowerCase() === "-tag") {
    msg.channel.send("✬");
    msg.react("795299411408191498");
    }
   });

   



   client.on("guildMemberAdd", async member => {
    let csdb = require("quick.db")
    csdb.add(`csgiriş.${member.id}_${member.guild.id}`, 1)
  })










  client.on("guildMemberAdd", async member => {
    let csdb = require("quick.db")
    csdb.add(`csgiriş.${member.id}_${member.guild.id}`, 1)
  
    String.prototype.replaceA = function (find, replace) {
      return this.replace(new RegExp(find, 'g'), replace);
    }
    
    const donustur = function(sayi) {
      let gorunum = sayi.toString().replace('0', '0gif')
        .replaceA('1', '1gif')
        .replaceA('2', '2gif')
        .replaceA('3', '3gif')
        .replaceA('4', '4gif')
        .replaceA('5', '5gif')
        .replaceA('6', '6gif')
        .replaceA('7', '7gif')
        .replaceA('8', '8gif')
        .replaceA('9', '9gif')
      
      gorunum = gorunum
        .replaceA("0gif", '<a:0gif:762395131755495434>')
        .replaceA("1gif", "<a:1gif:762395131268562995>")
        .replaceA("2gif", "<a:2gif:762395131584053289>")
        .replaceA("3gif", "<a:3gif:762395131667152926>")
        .replaceA("4gif", '<a:4gif:762395131553906717>')
        .replaceA("5gif", '<a:5gif:762395131713421353>')
        .replaceA("6gif", '<a:6gif:762395132422782986>')
        .replaceA("7gif", '<a:7gif:762395131277344769>')
        .replaceA("8gif", '<a:8gif:762395131054915635>')
        .replaceA("9gif", '<a:9gif:762395128660361216>')
      
      return gorunum
    }
  
    var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
    var üs = üyesayısı.match(/([0-9])/g)
    üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
    if(üs) {
      üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
        return {
        '0': `<a:0gif:762395131755495434>`,
        '1': `<a:1gif:762395131268562995>`,
        '2': `<a:2gif:762395131584053289>`,
        '3': `<a:3gif:762395131667152926>`,
        '4': `<a:4gif:762395131553906717>`,                       
        '5': `<a:5gif:762395131713421353>`,
        '6': `<a:6gif:762395132422782986>`,
        '7': `<a:7gif:762395131277344769> `,
        '8': `<a:8gif:762395131054915635>`,
        '9': `<a:9gif:762395128660361216>`}[d];
        })
      }
  const kanal = member.guild.channels.cache.find(r => r.id === "794958190641938450");
  const ses = member.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  let user = client.users.cache.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
 
  var kontrol;
if (kurulus < 7) kontrol = 'Güvenilir Değil'
if (kurulus > 7) kontrol = 'Güvenilir'
  moment.locale("tr");



  let data = db.get(`csgiriş.${member.user.id}_${member.guild.id}`);
  if (data) {

  kanal.send(`<@&794958057591406603> `)
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`**Merhaba <@${member.user.id}> Sunucumuza Hoşgeldin Seninle Beraber ${üyesayısı} Kişiyiz
  Sunucumuzun Anlık Ses Aktifliği ${donustur(ses)} Görtünlünmektedir
  Sunucumuza Kayıt Olmak İçin <@&794958057591406603>  Yetkiye Sahip Olan Arkadaşlar Seni Kayıt Etmek İçin Sol Tarafta Bulunan Kayıtsız Odalarında Bekliyor Olucak**

  **Hesap Bilgilerin**
  <a:Veliora_ok:795296225947025409> Hesap ID: \`${member.user.id}\`
  <a:Veliora_ok:795296225947025409> Sunucuya \`${data}\` Kere Giriş Yapmış
  <a:Veliora_ok:795296225947025409> Katılım Sıralaması \`${member.guild.memberCount}/${member.guild.memberCount}\`
  <a:Veliora_ok:795296225947025409> Hesap Açılma Tarihi ${moment(member.user.createdAt).format("\`YYYY DD MMMM dddd\`")}
  <a:Veliora_ok:795296225947025409> Hesabınız \`${kontrol}\`Görünmektedir <a:Veliora_Opucuk:795299411408191498>`)
  .setFooter(`Tedoa ❤️ Veliora`)
  .setTimestamp()
  .setImage(`https://media.discordapp.net/attachments/791989409120780290/792518592830373899/hmhm.gif`)
  kanal.send(embed)
}});



 //fake ayrıl katıl
 client.on('message', async message => {
    if (message.content === '!fake-katıl') { // - yerine prefixi yaz
     client.emit('guildMemberAdd', message.member || await message.guild.users.members(message.author));
     }
    });








  
  
  
  
  client.commands = new Discord.Collection();
  
  const cmds = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
  for(const file of cmds){
      const cmd = require(`./Commands/${file}`);
  
      client.commands.set(cmd.name, cmd);
  }
  
  client.on('message', async message => {
      if(message.author.bot || !message.content.startsWith(prefix)) return
      const args = message.content.slice(prefix.length).split(/ +/);
      const cmdName = args.shift().toLowerCase();
      const cmd = client.commands.get(cmdName)
      || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName))
  
      if(!cmd) return
  
      try{
  cmd.execute(client, message, args)
      }catch(err){
          console.log(err)
      }
  })
  

  client.login(ayarlar.token)
