let Alexa = require("../events");
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let QRReader = require("qrcode-reader");
let jimp = require("jimp");
let Language = require("../language");
let Lang = Language.getString("web");

Alexa.addCommand(
  { pattern: "ping", fromMe: true, desc: Lang.PING_DESC },
  async (message, match) => {
    let start = new Date().getTime();
    await message.sendMessage('```Ping!```');
    let end = new Date().getTime();
    await message.client.sendMessage(
    message.jid,'*Pong!*\n```' + (end - start) + 'ms```', MessageType.text, { quoted: message.data });
    }))

Alexa.addCommand(
  { pattern: "qr", fromMe: true, desc: "Read Qr.", owner: false },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.image)
    return await message.sendMessage("*Reply to a qr image.*")
    let location = await message.reply_message.downloadMediaMessage()
    let img = await jimp.read(location)
    let qr = new QRReader()
    qr.callback = async (err, value) => {
    if (err) return await message.sendMessage(err, { quoted: message.data })
    return await message.sendMessage(value.result, { quoted: message.data })
    }
    qr.decode(img.bitmap)
    })
