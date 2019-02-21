const Discord = require('discord.js')
const gachaman = new Discord.Client()
const gacha = require('./gacha')
const clip = require('./clip')
const token = "" // Add Your Bot Token Here.

gachaman.on('ready', () => {
    console.log(`Login as ${gachaman.user.tag}`)
})

gachaman.on('message', message => {
    if (message.content === "กาชา") {
        message.channel.sendMessage(`ผลที่ได้ออกมาคือ : ${gacha.pull()}`)
    } else if (message.content === "ขอคลิป") {
        message.channel.sendMessage(clip.randomClip())
    }
})

// gachaman.on('')


gachaman.login(`${token}`)
