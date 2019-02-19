const Discord = require('discord.js')
const iyanwa = new Discord.Client()

iyanwa.on('ready', () => {
    console.log('Matilda Iyanwa!!')
})

iyanwa.on('message', (message) => {
    if (message.content === 'มาทิลด้า' || message.content.toLowerCase() === 'matilda') {
        message.reply('อิหยังวะ!')
    }
})


iyanwa.login('') // Add Bot Token on Blank String