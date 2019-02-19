const Discord = require('discord.js')
const iyanwa = new Discord.Client()

iyanwa.on('ready', () => {
    console.log('Matilda Iyanwa!!')
})

iyanwa.on('message', (message) => {
    switch (message.content) {
        case "มาทิลด้า":
            message.reply("อิหยังวะ")
            break;
        case "Matilda":
            message.reply("Iyanwa!!")
            break;
        case "matilda":
            message.reply("iyanwa!!")
            break;
        case "ควย":
            message.reply("พูดหยาบตบปากสามทีนะคะ")
            break;
        case "นะค่ะ":
            message.reply("คุณพิมพ์ผิดค่ะ ที่ถูกต้องเป็น 'นะคะ' ไม่มีไม้เอกนะคะ ^^ ")
            break;
        case "ขอจีบหน่อย":
            message.reply("ไม่ให้ค่ะ อิอิ แต่ถ้าอยากมาหาก็มาเชกิกับมาทิลด้าบ่อยๆน้าา ><~ ")
            break;
        case "มีตังค์ให้ยืมมั้ย":
            message.reply("ไม่มีค่ะ อิอิ")
            break;
        default:
    }
})


iyanwa.login('') // Add Bot Token on Blank String