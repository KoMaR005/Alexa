let Alexa = require('../events');
let Config = require('../config');
let {MessageType} = require('@adiwajshing/baileys');
let Language = require('../language');
let Lang = Language.getString('alexa');
Alexa.addCommand({pattern: 'list ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
var _0x3af1c9=_0x5d7d;(function(_0x14aed9,_0x1f5188){var _0x27c752=_0x5d7d,_0xb11637=_0x14aed9();while(!![]){try{var _0x14a095=parseInt(_0x27c752(0x13f))/0x1+-parseInt(_0x27c752(0x14a))/0x2*(-parseInt(_0x27c752(0x14e))/0x3)+-parseInt(_0x27c752(0x144))/0x4+-parseInt(_0x27c752(0x13e))/0x5*(parseInt(_0x27c752(0x145))/0x6)+parseInt(_0x27c752(0x156))/0x7*(-parseInt(_0x27c752(0x153))/0x8)+parseInt(_0x27c752(0x151))/0x9*(-parseInt(_0x27c752(0x157))/0xa)+parseInt(_0x27c752(0x142))/0xb*(parseInt(_0x27c752(0x14c))/0xc);if(_0x14a095===_0x1f5188)break;else _0xb11637['push'](_0xb11637['shift']());}catch(_0x110d22){_0xb11637['push'](_0xb11637['shift']());}}}(_0x2459,0xa90df));function _0x2459(){var _0x5a959d=['push','1390DeFCjA','2tzZgjd','match','24pqoNTM','dontAddCommandList','2810535unLSVl','shift','toString','1083033iDuqQw','5xuLEUD','3016MLEfAS','commands','map','14693JtodOS','10bwuNHS','*\x20:\x20_','3muoOJi','desc','length','581668GPtNpQ','*➥\x20','3830GZtdXg','1107675iOhrEu','_\x0a\x0a','1285134hqiAoo','5262521yMuuwy','3839dTsTlg','2822148yeYQkA','5418oAivDT','test','pattern'];_0x2459=function(){return _0x5a959d;};return _0x2459();}var _0x42046c=_0x33a3;(function(_0x37bde7,_0x4e79fb){var _0x1aed98=_0x5d7d,_0x288f48=_0x33a3,_0x349086=_0x37bde7();while(!![]){try{var _0x37730a=parseInt(_0x288f48(0x11a))/0x1*(-parseInt(_0x288f48(0x106))/0x2)+parseInt(_0x288f48(0x110))/0x3*(parseInt(_0x288f48(0x10b))/0x4)+parseInt(_0x288f48(0x114))/0x5*(-parseInt(_0x288f48(0x117))/0x6)+parseInt(_0x288f48(0x111))/0x7*(-parseInt(_0x288f48(0x10f))/0x8)+parseInt(_0x288f48(0x113))/0x9+-parseInt(_0x288f48(0x118))/0xa*(parseInt(_0x288f48(0x10d))/0xb)+-parseInt(_0x288f48(0x112))/0xc*(-parseInt(_0x288f48(0x11d))/0xd);if(_0x37730a===_0x4e79fb)break;else _0x349086[_0x1aed98(0x148)](_0x349086[_0x1aed98(0x14f)]());}catch(_0x5aa996){_0x349086['push'](_0x349086['shift']());}}}(_0x2ef1,0x21ec4));function _0x2ef1(){var _0x5830cf=_0x5d7d,_0x5a1f95=[_0x5830cf(0x13d),_0x5830cf(0x146),_0x5830cf(0x141),_0x5830cf(0x149),_0x5830cf(0x155),'553UffiOt','pattern','length','169iqpIIy','782svkpcn',_0x5830cf(0x14b),'HANDLERS',_0x5830cf(0x13a),_0x5830cf(0x150),_0x5830cf(0x13c),'*\x0a\x0a',_0x5830cf(0x143),_0x5830cf(0x158),'523592uZJNqo',_0x5830cf(0x159),'14vqCDmM','485796MZrhOR','693657pZkiGf',_0x5830cf(0x152)];return _0x2ef1=function(){return _0x5a1f95;},_0x2ef1();}function _0x33a3(_0xadaa45,_0x13ebc8){var _0x1872e2=_0x2ef1();return _0x33a3=function(_0x45d578,_0x2d4a9e){_0x45d578=_0x45d578-0x106;var _0x3b6f24=_0x1872e2[_0x45d578];return _0x3b6f24;},_0x33a3(_0xadaa45,_0x13ebc8);}function _0x5d7d(_0x3df53a,_0x5473e9){var _0x2459ea=_0x2459();return _0x5d7d=function(_0x5d7d09,_0x319069){_0x5d7d09=_0x5d7d09-0x13a;var _0x44fa=_0x2459ea[_0x5d7d09];return _0x44fa;},_0x5d7d(_0x3df53a,_0x5473e9);}var CMD_HELP='';Alexa[_0x3af1c9(0x154)][_0x42046c(0x119)](async _0x4c163e=>{var _0x18e0f3=_0x3af1c9,_0x346466=_0x42046c;if(_0x4c163e[_0x18e0f3(0x14d)]||_0x4c163e['pattern']===undefined)return;try{var _0x18c82f=_0x4c163e[_0x346466(0x11b)][_0x346466(0x10a)]()[_0x18e0f3(0x14b)](/(\W*)([A-Za-zğüşiöç1234567890]*)/);}catch{var _0x18c82f=[_0x4c163e[_0x346466(0x11b)]];}var _0xcc68f1='';/\[(\W*)\]/[_0x346466(0x116)](Config[_0x346466(0x108)])?_0xcc68f1=Config[_0x346466(0x108)][_0x346466(0x107)](/\[(\W*)\]/)[0x1][0x0]:_0xcc68f1='';if(_0x4c163e[_0x346466(0x109)]!=='')CMD_HELP+=_0x18e0f3(0x13d)+(_0x18c82f[_0x18e0f3(0x13b)]>=0x3?_0xcc68f1+_0x18c82f[0x2]:_0x4c163e[_0x346466(0x11b)])+_0x346466(0x10e)+_0x4c163e[_0x346466(0x109)]+_0x18e0f3(0x140);if(_0x4c163e[_0x346466(0x109)]==='')CMD_HELP+=_0x346466(0x115)+(_0x18c82f[_0x346466(0x11c)]>=0x3?_0xcc68f1+_0x18c82f[0x2]:_0x4c163e[_0x18e0f3(0x147)])+_0x346466(0x10c);}),await message['sendReply'](CMD_HELP);
}));
