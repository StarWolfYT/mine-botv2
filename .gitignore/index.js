const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

client.login("NTA0NTY0MDk2ODE4MjE2OTkx.DrG7eg.9OQ9LP8XM7UOo95LuccjLk8tjnM");

//-------------------------------------------------------------------------------------|

client.on("ready", () => {
    console.log("Je suis prêt !");
    client.user.setGame("*help | MineBot");
});

client.on('message', message => {

    if(message.content === "*Partenaire"){
        message.reply ("Voici le lien du serveur discord de notre Partenaire : https://discord.gg/fErrhU");
        console.log('le bot donne un lien discord');
    }
    if(message.content === "*Youtube"){
        message.reply ("Voici la chaîne Youtube de mon créateur : https://www.youtube.com/channel/UCAPpEQiE0OmMkGm5M2EaI6w?view_as=subscriber");
        console.log('le bot donne un lien Youtube');
    }
        if(message.content === "*partenaire"){
            message.reply ("Voici le lien du serveur discord de notre Partenaire : https://discord.gg/fErrhU");
            console.log('le bot donne un lien discord');
    }
        if(message.content === "*youtube"){
            message.reply("Voici la chaîne Youtube de mon créateur : https://www.youtube.com/channel/UCAPpEQiE0OmMkGm5M2EaI6w?view_as=subscriber");
            console.log('le bot donne un lien Youtube');
    }
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici mes commandes")
        .addField("*help", "Affiche les commandes")
        .addField("*partenaire", "Affiche le lien du discord de notre partenaire")
        .addField("*youtube", "Affiche le lien de la chaîne Youtube de mon créateur.")
        .addField("*mute", "Mute les joueurs (Administrateur).")
        .addField("*unmute", "Unmute les joueurs muté (Administrateur).")
        .setFooter("Menu d'aide - MineBot")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide")}
    
        if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");
        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }
 
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        })
    }

    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");
 
        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }
 
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} n'est plus mute !`);
        })
    }
});
