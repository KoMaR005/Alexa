const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./Alexa/');
const fs = require('fs');

async function startAlexa() {
    const Alexa = new WAConnection();
    const Session = new StringSession();
    Alexa.version = [3, 3430, 9]
    Alexa.logger.level = 'warn';
    Alexa.regenerateQRIntervalMs = 50000;
    
    Alexa.on('connecting', async () => {
        console.log(`${chalk.green.bold('Alexa')}
${chalk.white.italic('Made By ')}${chalk.red.bold('Shefin!')}
${chalk.blue.italic('Loading QR Code...')}`);
    });
    

    Alexa.on('open', () => {
        var st = Session.createStringSession(Alexa.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('YOUR SESSION: '), Session.createStringSession(Alexa.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `SESSION="${st}"`);
        }

        console.log(
            chalk.red.bold('⚠ COPY THIS CODE, IT IS IMPORTANT... ⚠'))
            
        console.log(
            chalk.blue.bold('Thank You For Using Alexa 💖'))

        process.exit(0);
    });

    await Alexa.connect();
}

startAlexa()
