const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './alexa.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v1.0.0',
    CHANNEL: 'undefined',
    SESSION: process.env.ALEXA_SESSION === undefined ? '' : process.env.ALEXA_SESSION,
    ALL_CAP: process.env.ALL_CAPTION === undefined ? '*Made by Alexa*' : process.env.ALL_CAPTION,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    SUPPORT: process.env.ASENA === undefined ? '919074309534-1632403322,120363038867058369' : process.env.ASENA,
    AUTO_FAKE: process.env.ANTI_FAKE === undefined ? 'false' : process.env.ANTI_FAKE,
    CODE: process.env.C_CODE === undefined ? '91' : process.env.C_CODE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    GIF_WEL: process.env.GIF_WEL === undefined ? 'https://c.tenor.com/G9Bu13ZlhVkAAAPo/dancing-funny-dance.mp4' : process.env.GIF_WEL,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://c.tenor.com/6tlIWiAlT_gAAAPo/cat-impressed-cat-wow.mp4' : process.env.GIF_BYE,
    take_key: process.env.TAKE_KEY === undefined ? '' : process.env.TAKE_KEY,
    find_key: process.env.FIND_KEY === undefined ? '' : process.env.FIND_KEY,
    SHEFINKL14: process.env.STICKER_DATA === undefined ? 'sᴏᴜʀᴀᴠᴋʟ¹¹|ʀᴀɢᷨᴀͦɴͭᴏʀᴋ' : process.env.STICKER_DATA,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    YAK: process.env.YAK === undefined ? '919567489404' : process.env.YAK,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './alexa.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? '919567489404,0' : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT2: "916282344739",
    SUPPORT3: "919074309534"
};
