const Discord = require('discord.js')
const reqbot = new Discord.Client()
const token = "" // Add your Bot Token Here.

reqbot.on('ready', () => {
    console.log("Kaneyoko Come to listen your song request!!")
})

reqbot.on('message', async message => {
    const voicechannel = message.member.voiceChannel
    try {
        var connection = await voicechannel.join()
    } catch (error) {
        console.error(`Hey Boy! I can't join that Voice Channel because ${error}`)
        message.channel.send(`ข้าไม่สามารถเข้ารวมกับเจ้าได้เพราะว่า ${error}`)
    }
    switch (message.content) {
        case "ขอเพลงเพื่อนไม่จริง":
            message.channel.send("play https://www.youtube.com/watch?v=DNIDBbjqFCo")
            break
        case "ขอเพลงwhere you at":
            message.channel.send("play https://www.youtube.com/watch?v=5e8-4mBiCSI")
            break
        default:
    }
})

reqbot.login(`${token}`)