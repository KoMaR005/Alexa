let simpleGit = require('simple-git');
let git = simpleGit();
let {shefin} = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let Config = require('../config');
let exec = require('child_process').exec;
let Heroku = require('heroku-client');
let { PassThrough } = require('stream');
let heroku = new Heroku({ token: Config.HEROKU.API_KEY })
let Language = require('../language');
let Lang = Language.getString('updater');

shefin({pattern: 'update check$', fromMe: true, dontAddCommandList: true, desc: Lang.UPDATER_DESC}, (async (message, match) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        var degisiklikler = Lang.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                degisiklikler += '(' + commit.date.substring(0, 10) + ') : *' + commit.message.replace('Update','Fixed').replace('.js','') + '*\n';
            }
        );
        
        await message.client.sendMessage(
            message.jid,
            degisiklikler, MessageType.text
        ); 
    }
}));

shefin({pattern: 'update start$', fromMe: true,dontAddCommandList: true, desc: Lang.UPDATE_NOW_DESC}, (async (message, match) => {
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
            await message.client.sendMessage(
                    message.jid,Lang.UPDATING, MessageType.text);
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(
                    message.jid,Lang.INVALID_HEROKU, MessageType.text);
                await new Promise(r => setTimeout(r, 1000));
                return await message.client.sendMessage(
                    message.jid,Lang.IN_AF, MessageType.text);
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Config.BRANCH);

            await message.client.sendMessage(
                message.jid,Lang.UPDATED, MessageType.text);

            await message.sendMessage(Lang.AFTER_UPDATE);
            
        
    }
}));
