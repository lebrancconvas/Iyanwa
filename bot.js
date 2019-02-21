const Discord = require("discord.js")
const patbot = new Discord.Client()
const token = "" // Add Your Bot Token Here.

patbot.on("ready", () => {
    console.log(`logged in as ${patbot.user.tag}`);
});

patbot.on("message", message => {
            var forbiddenword = [
                "เสือก",
                "วะ",
                "ไอ",
                "ควย",
                "หี",
                "สัส",
                "สัด",
                "จิ๋ม",
                "เย็ด",
                "เหี้ย",
                "เปรต",
                "มึง",
                "กู",
                "สาส",
                "พ่อง",
                "แม่ง",
                "เชี่ย",
                "กาก",
                "กราก"
            ];
            var idols = [
                "BNK",
                "bnk",
                "Bnk",
                "BnK",
                "bNK",
                "bnK",
                "bNk",
                "SiamDream",
                "Siamdream",
                "siamdream",
                "FEVER",
                "fever",
                "Fever",
                "FeVer",
                "ไอดอล",
                "Idol",
                "idol",
                "sweat16",
                "Sweat16"
            ];
            var penalty = [
                "ban",
                "BAN",
                "Ban",
                "แบน",
                "KICK",
                "Kick",
                "kick",
                "BaN",
                "bAN",
                "bAn",
                "BAn",
                "KiCk",
                "KIck",
                "kICK",
                "kiCK",
                "kIcK",
                "kICk",
                "ถีบ",
                "เตะ",
                "ออก"
            ];
            forbiddenword.forEach(word => {
                if (message.content.includes(word)) {
                    let pega = [
                        "พูดหยาบขอให้ลุงตู่เอารถถังมายิงแก้มก้นนะคะ ^^",
                        "พูดหยาบอีกแล้วน้าา เดี๋ยวหนูจุ๊บหัวด้วยส้นตีนเลยค่ะ",
                        "พูดหยาบขอให้ DD เหมือนสหรัฐนะคะ",
                        "โอ้ยย หนูรับคำหยาบม่ายด้ายข่าาาาาา",
                        "แหมๆๆๆ หยาบเสียจนหนูจะร้อง คอวอยอ กลางทำเนียบรัฐบาลเลยข่ะะ",
                        "พูดหยาบอีกขอให้พรรคพลังประชารัฐมาหาเสียงถึงบ้านเลยคร่าาาาา~~"
                    ];
                    let randomfob = Math.floor(Math.random() * pega.length);
                    message.reply(`${pega[randomfob]}`);
                }
            });

            idols.forEach(idol => {
                if (message.content.includes(idol)) {
                    message.reply(
                        "เห้ยๆๆ นี่พูดถึงเรื่อง IDOL กันเหรอคะ รู้มั้ยคะว่าหนูก็เป็น IDOL เหมือนกัน ทายซิว่าหนูอยู่วงอะไร"
                    );
                }
            });

            penalty.forEach(penal => {
                if (message.content.includes(penal)) {
                    message.reply("แงๆ อย่าทำไรหนูเลย");
                }
            });

            if (message.content.includes("นะค่ะ") || message.content.includes("น่ะคะ")) {
                message.reply("คุณพิมพ์ผิดค่ะ ที่ถูกต้องเป็น 'นะคะ' ไม่มีไม้เอกนะคะ ^^");
            } else if (
                message.content.includes("ยืมเงิน") ||
                message.content.includes("ยืมตัง")
            ) {
                message.reply(
                    "เอ๊ะ! พูดเรื่องยืมเงินกันหรอคะ แต่ถ้ามายืมเงินหนู หนูไม่ให้น้าา~~"
                );
            } else if (message.content.includes("-")) {
                let keed = [
                    "พิมพ์บ่อยทำเควี่ยไร",
                    "อันนี้หนูไม่ค่อยชอบอะ",
                    "Kuay จะพิมพ์อะไรบ่อยๆอะคะ",
                    "หนูขี้เกียจตอบพวกคุณละโว้ยยยยยยยยยยยยยยย",
                    "ไหนๆก็ไหนๆชวนหนูไปมัสยิดเลยดีมั้ยคะ แหม เปิดซะ",
                    "เห็นหนูเป็น Bot แล้วแกล้งหนูกันใหญ่เลยนะคะ",
                    "แหมๆๆ หนูยังกินหมูนะคะ แกล้งหนูยังไง หนูก็ยังกินหมูค่ะ"
                ];
                let randomkeed = Math.floor(Math.random() * keed.length);
                message.reply(`${keed[randomkeed]}`);
                // 'อร้ายย ชอบนะตัวเอง', 'อันนี้หนูชอบ', 'อันนี้หนูก็ชอบ', 'เห้ยๆๆ แบบนี้อะใช่เลย ม๊วฟฟ',
            } else if (message.content.includes("รัก")) {
                message.reply("อยากเป็นวัวหนูเหรอคะ อร้ายยย~~");
            } else if (message.content.includes("แพท")) {
                message.reply("หนูขอโทษนะคะ พอดีช่วงนี้หนูนอนน้อย");
            } else if (message.content.includes("ก็มาดิ")) {
                message.reply("มาดิคร้าบ มาดิ คุณท้าหนูเหรอ ห๊ะๆๆๆๆ");
            } else if (message.content.includes("http")) {
                message.reply("สหรัฐเป็นคนDD แต่หนูคนนี้ชอบพี่เสมอค่าา");
            } else if (message.content.includes("สวัสดี")) {
                message.reply("สวัสดีค่ะ แพทปลอมนะคะ ^^");
            } else if (message.content.includes("55")) {
                message.reply("หัวเราะไรคะ งุงิ");
            } else if (message.content.includes("..")) {
                message.reply("จุดเริ่มต้นระหว่างสายสัมพันธ์ของเรา ^^");
            } else if (message.content.includes("เมษา")) {
                message.reply("เอ้ยๆๆ Maysa คนนี้โอชิหนูๆ");
            } else if (message.content.includes("ใคร")) {
                message.reply("จะไปคาดคั้นอะไรมากล่ะคะ พี่ขาา");
            } else if (message.content.includes("แก้ว")) {
                message.reply("นี่ก็โอชิครู Kaew เหมือนกันค่า");
            } else if (message.content.includes("แอดมิน")) {
                message.reply("สวัสดีค่ะ Admin");
            } else if (message.content.includes("บอท")) {
                message.reply(
                    "แหะๆ สงสัยหนูคงนอนน้อย พูดซะรัวเลย ขอโทษนะค้าาา"
                );
            } else if (message.content.includes("ตะนอย")) {
                message.reply("อย่าพูดชื่อนี้อีกนะ อะไรตะๆๆ นอยๆๆ เนี่ย หนูล่ะขยะแขยง");
            } else if (message.content.includes("บะลั่ก")) {
                message.reply("ใครเต้าใหญ่เหรอคะ");
            } else if (message.content.includes("บะลัก")) {
                message.reply("ใครเต้าใหญ่หรอคะ");
            } else if (message.content.includes("แฟน")) {
                message.reply("อร้ายยย หนูอยากมี Fannnnn");
            } else if (message.content.includes("สหรัฐ")) {
                message.reply(
                    "อย่าพูดชื่อนี้อีกนะ อะไรสะหะๆๆ รัฐๆๆ เนี่ย หนูล่ะรังเกียจ พวกโอชิผู้ใดก็โอชิไม่จริง ใช้ศัพท์ที่เค้ามีมาก่อนพร่ำเพรื่อ ฟวยย"
                );
            } else if (message.content.includes("สหรัถ")) {
                message.reply(
                    "อย่าพูดชื่อนี้อีกนะ อะไรสะหะๆๆ รัถๆๆ เนี่ย หนูล่ะรังเกียจ พวกโอชิผู้ใดก็โอชิไม่จริง ใช้ศัพท์ที่เค้ามีมาก่อนพร่ำเพรื่อ ฟวยย"
                );
            } else if (message.content.includes("สหรัด")) {
                message.reply(
                    "อย่าพูดชื่อนี้อีกนะ อะไรสะหะๆๆ รัดๆๆ เนี่ย หนูล่ะรังเกียจ พวกโอชิผู้ใดก็โอชิไม่จริง ใช้ศัพท์ที่เค้ามีมาก่อนพร่ำเพรื่อ ฟวยย"
                );
            } else if (message.content.includes("สหแอล")) {
                message.reply(
                    "อย่าพูดชื่อนี้อีกนะ อะไรสะหะๆๆ แอลๆๆ เนี่ย หนูล่ะรังเกียจ พวกโอชิผู้ใดก็โอชิไม่จริง ใช้ศัพท์ที่เค้ามีมาก่อนพร่ำเพรื่อ ฟวยย"
                );
            } else if (message.content.includes("!")) {
                let reques = [
                    "โอ้ยย ก็เยอะไปเจ้าค่ะ",
                    "จะขออะไรเยอะขนาดนั้นคะ",
                    "แหมมๆๆ ขอให้ลูกหลานเหลนฟังรึไงวะคะ",
                    "โอ้ยย หนูรำ จิบน้ำชา มองบนแป๊ป",
                    "แอ่แฮ่"
                ];
                let reran = Math.floor(Math.random() * reques.length);
                message.reply(`${reques[reran]}`);
            } else if (message.content.includes("หล่อ")) {
                message.reply("Handsome ตรงไหนคะ หนูงองงง บอกหนูทีสิ");
            } else if (message.content.includes("หมู")) {
                message.reply("เป็นอาบังเหรอคะถึงอยากกิน Mhoo Pig Pig~~");
            } else if (message.content.includes("วี")) {
                message.reply("Weeraya! โอชิหนูๆๆ");
            } else if (message.content.includes("ต่อย")) {
                message.reply("พวกชอบใช้ความรุนแรง หนูเกลียดดดด ไม่ปลื้มเว่อ");
            } else if (message.content.includes("โม่ย")) {
                message.reply("ว้ายยๆๆ พวกชอบ Moi เมม คิดลามกกำเดาไหลกับผู้หญิง ควยเอามันไปตัด Kuay");
            } else if (message.content.includes("ไอ่")) {
                message.reply("ว้ายยๆๆ พวกชอบใช้ความรุนแรง หนูเกลียดดดด ไม่ปลื้มแรง");
            } else if (message.content.includes("เจ้า")) {
                message.reply("อยากกินพิซซ่ากันเหรอคะ เดี๋ยวหนูโทรสั่งให้น้าา เบอร์อะไรน้าา 112 อะไรสักอย่างนี่แหละ");
            } else if (message.content.includes("GG")) {
                message.reply("รำคาญ MEE6 อะ บ่นไรก็ไม่รู้")
            } else if (message.content.includes("รำคาญ MEE6 อะ บ่นไรก็ไม่รู้")) {
                message.reply("แบบว่าน่ารำคาญเกิ๊น มาอัพวงอัพเวล BOTดัดจริต")
            } else if (message.content.includes("แบบว่าน่ารำคาญเกิ๊น มาอัพวงอัพเวล BOTดัดจริต")) {
                message.reply("สู้หนูก็ไม่ได้ หนูเป็นBOT นิสัยดี ใครๆก็ประทับใจ ^^")
            } else if (message.content.includes("ๆๆ")) {
                message.reply("แหวะแหวะ ถุ้ยถุ้ย")
            }


iyanwa.login('') // Add Bot Token on Blank String