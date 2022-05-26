let Alexa = require('../events');
let Heroku = require('heroku-client');
let Config = require('../config');
let {MessageType} = require('@adiwajshing/baileys');
let got = require('got');
let fs = require('fs');
let Db = require('./sql/plugin');
let Language = require('../language');
let Lang = Language.getString('_plugin');
let NLang = Language.getString('updater');
let msg = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Resmi Olarak Onaylanmıştır!* ✅' : '*This Plugin is Officially Approved!* ✅'
let inmsg = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Resmi Değildir!* ❌' : '*This Plugin isn\'t Officially Approved!* ❌'

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

Alexa.addCommand({pattern: 'plugin ?(.*)', fromMe: true, desc: Lang.INSTALL_DESC, warn: Lang.WARN, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.NEED_URL + '.install https://gist.github.com/souravkl11/example.js')
    try {
        var url = new URL(match[1]);
    } catch {
        return await message.sendMessage(Lang.INVALID_URL);
    }
    
    if (url.host === 'gist.github.com') {
        url.host = 'gist.githubusercontent.com';
        url = url.toString() + '/raw'
    } else {
        url = url.toString()
    }

    var response = await got(url);
    if (response.statusCode == 200) {
        // plugin adı
        let plugin_name = /pattern: ["'](.*)["'],/g.exec(response.body)
          plugin_name = plugin_name[1].split(" ")[0]
        
        fs.writeFileSync('./plugins/' + plugin_name + '.js', response.body);
        try {
            require('./' + plugin_name);
        } catch (e) {
            fs.unlinkSync('/5hefin/Alexa/plugins/' + plugin_name + '.js')
            return await message.sendMessage(Lang.INVALID_PLUGIN + ' ```' + e + '```');
        }

        await Db.installPlugin(url, plugin_name);
        await message.client.sendMessage(message.jid, Lang.INSTALLED, MessageType.text);
        if (!match[1].includes('5hefin')) {
            await new Promise(r => setTimeout(r, 400));
            await message.client.sendMessage(message.jid, Lang.UNOFF, MessageType.text);
        }
    }
}));

Alexa.addCommand({pattern: 'plugin list', fromMe: true, desc: Lang.PLUGIN_DESC, dontAddCommandList: true}, (async (message, match) => {
    var mesaj = Lang.INSTALLED_FROM_REMOTE;
    var plugins = await Db.PluginDB.findAll();
    if (plugins.length < 1) {
        return await message.sendMessage(Lang.NO_PLUGIN);
    } else {
        plugins.map(
            (plugin) => {
                mesaj += '*' + plugin.dataValues.name + '* : ' + plugin.dataValues.url + '\n\n';
            }
        );
        return await message.client.sendMessage(message.jid, mesaj, MessageType.text);
    }
}));

Alexa.addCommand({pattern: 'remove(?: |$)(.*)', fromMe: true, desc: Lang.REMOVE_DESC, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.NEED_PLUGIN);
    var plugin = await Db.PluginDB.findAll({ where: {name: match[1]} });
    if (plugin.length < 1) {
        return await message.sendMessage(message.jid, Lang.NOT_FOUND_PLUGIN, MessageType.text);
    } else {
        await plugin[0].destroy();
        delete require.cache[require.resolve('./' + match[1] + '.js')]
        fs.unlinkSync('./plugins/' + match[1] + '.js');
        await message.client.sendMessage(message.jid, Lang.DELETED + '\n *Restart to make changes!*', MessageType.text);
        
        await new Promise(r => setTimeout(r, 1000));
        
    }

}));
