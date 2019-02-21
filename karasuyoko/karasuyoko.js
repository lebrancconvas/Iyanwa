const Discord = require('discord.js')
const ytdl = require('ytdl-core')
const musicbot = new Discord.Client()
const token = "" // Add Your Bot Token Here.

musicbot.on('ready', () => {
    console.log("Let's Fun with Sound!")
})

musicbot.on('message', async message => {
    if (message.author === musicbot.user) return undefined
    if (message.content.startsWith("play")) {
        let track = message.content.split(" ").slice(1)

        const voicechannel = message.member.voiceChannel
        if (!voicechannel) return message.channel.send("เจ้ายังไม่ได้ต่อเข้ากับ Voice Channel นะจ๊ะ xoxo")

        const permission = voicechannel.permissionsFor(musicbot.user)
        if (!permission.has('CONNECT')) return message.channel.send("เจ้ายังไม่สามารถเชื่อมต่อข้าได้นะ")
        if (!permission.has('SPEAK')) return message.channel.send("ข้ายังพูดกับเจ้าไม่ได้ทีนะจ๊ะ")

        var connection

        try {
            var connection = await voicechannel.join()
        } catch (error) {
            console.error(`Hey Boy! I can't join that Voice Channel because ${error}`)
            message.channel.send(`ข้าไม่สามารถเข้ารวมกับเจ้าได้เพราะว่า ${error}`)
        }

        const dispatcher = connection.playStream(ytdl(track[0]))
            .on('end', () => {
                console.log("Song End! It's so fun!!")
                voicechannel.leave()
            })
            .on('error', err => {
                console.error(err)
            })
        dispatcher.setVolumeLogarithmic(5 / 5)
    } else if (message.content.startsWith("stop")) {
        const voicechannel = message.member.voiceChannel
        if (!voicechannel) return message.channel.send("เจ้าต้องอยู่ใน Voice Channel ก่อนเด้อ")
        voicechannel.leave()
        return
    }
})


musicbot.login(`${token}`)
