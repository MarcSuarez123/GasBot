const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '!';

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    //console.log(message.content);
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'gas':
            message.channel.send("@everyone GAS GAS GAS" , {
                tts: true
            })
        break;
    }

})


//client.login(token);
client.login(process.env.BOT_TOKEN);
