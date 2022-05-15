let Alexa = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let c = require('../config');
let s = c.SUPPORT2
let {upload} = require('alexa-bot');
let public = Config.WORKTYPE == 'public' ? false : true
let private = Config.WORKTYPE == 'private' ? false : true

Alexa.addCommand({pattern: 'url ?(.*)', fromMe: private, desc:'Uploads image to imgur.com'}, (async (m, match) => { 
    if (!m.reply_message.image && !m.reply_message.video ) return;
    var a = await m.client.downloadAndSaveMediaMessage({key: {remoteJid: m.reply_message.jid,id: m.reply_message.id},message: m.reply_message.data.quotedMessage});
    var res = await upload(a,s)
    await m.client.sendMessage(m.jid, res.link, MessageType.text, { quoted: m.data });}));

Alexa.addCommand({pattern: 'url ?(.*)', fromMe: public, desc:'Uploads image to imgur.com'}, (async (m, match) => { 
    if (!m.reply_message.image && !m.reply_message.video ) return;
    var a = await m.client.downloadAndSaveMediaMessage({key: {remoteJid: m.reply_message.jid,id: m.reply_message.id},message: m.reply_message.data.quotedMessage});
    var res = await upload(a,s)
    await m.client.sendMessage(m.jid, res.link, MessageType.text, { quoted: m.data });}));
