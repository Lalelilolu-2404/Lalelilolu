 /*
* ShanBot es una creación de shanduy
* ShanBot no tiene ningun fin de lucro
* shanduy se reserva todos los derechos de autor
* © 2021 shanduy, INC.

Cualquier copia que utilize mi ApiKey sera dado de baja

- Que hay de nuevo?
* Nada
*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    rugaapi,
    GroupSettingChange
} = require('@adiwajshing/baileys')

/******COMIENZO DE LA ENTRADA DEL ARCHIVO******/
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
/******FIN DE ENTRADA DE ARCHIVO******/

/******COMIENZO DE LA ENTRADA DEL PAQUETE NPM******/
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
/*const tiktod = require('tiktok-scraper')*/
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
/******FIN DE ENTRADA DEL PAQUETE NPM******/

/******COMIENZO DE LA ENTRADA JSON******/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
/******FIN DE ENTRADA JSON******/

/******INICIO DE LA ENTRADA DEL MENÚ******/
const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { toinmenu } = require('./src/toinmenu')
const { menuadmin } = require('./src/menuadmin')
const { nsfwmenu } = require('./src/nsfwmenu')
const { desmenu } = require('./src/desmenu')
const { version } = require('./src/version')
const { shantera } = require('./src/shantera')
const { welmenu } = require('./src/welmenu')
const { otak } = require('./src/otak')
/*const { mediamenu } = require('./database/menu/mediamenu')
const { educationmenu } = require('./database/menu/educationmenu')
const { downloadermenu } = require('./database/menu/downloadermenu')
const { mememenu } = require('./database/menu/mememenu')
const { kerangmenu } = require('./database/menu/kerangmenu')
const { groupmenu } = require('./database/menu/groupmenu')
const { soundmenu } = require('./database/menu/soundmenu')
const { musicmenu } = require('./database/menu/musicmenu')
const { islammenu } = require('./database/menu/islammenu')
const { stalkmenu } = require('./database/menu/stalkmenu')
const { wibumenu } = require('./database/menu/wibumenu')
const { funmenu } = require('./database/menu/funmenu')
const { informationmenu } = require('./database/menu/informationmenu')
const { 18+menu } require('./database/menu/18+menu')
const { ownermenu } require('./database/menu/ownermenu')
const { othermenu } require('./database/menu/othermenu')*/
/******FIN DE ENTRADA DEL MENÚ******/

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:Shan\n' // Nombre
            + 'ORG:Shanduy;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=593967689722:+593 96 768 9722\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/

prefix = '*'
blocked = []

/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	author,
	pack
} = settingan

/******INICIO DE FUNCIONES ENTRADA******/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
	
const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }

function addMetadata(packname, author) {	
	if (!packname) packname = 'ShanBot'; if (!author) author = 'shanduy';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
	
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.version = [2, 2119, 6]
        client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el codigo QR es temporal no te tardes Rapido!!!  '))
	})

	fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	client.on('connecting', () => {
		start('2', 'Desconectado. Utiliza npm start Para conectarte')
	})
	client.on('open', () => {
		success('2', 'Conectado by shanduy')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `Mi loco @${num.split('@')[0]}\nTodo bien NEFASTO!!!! Bienvenido a *${mdata.subject}* el mejor grupo una locura 👉😎👈\n\nUn gusto conocerte hijo de la maraca 😀\n\nOjito sigue las reglas del grupo si no, pa fuera mi loco los admins te eliminan 🧐\n\nPara utilizar el bot registrate con el comando ${prefix}daftar y tu nombre\n\nPara ver los demas comandos utiliza ${prefix}help\n\nOjito con el spam 🧐\n\nby shanduy`
                          client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `NOOOO se nos fue un NEFASTO 😎 @${num.split('@')[0]}👋\n\nQue dios lo bendiga 😎`
				client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Guayaquil').format('HH:mm:ss')
			const date = moment.tz('America/Guayaquil').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: 'Calmao pa estoy procesando😎\n\n❗Por favor no hacer spam👏❗\n\nby shanduy',
				success: '✔️ Listo ✔️',
                                levelon: '❬ ✅ ❭ *Level activado*',
				leveloff: ' ❬ ✅ ❭  *Level desactivado*',
				levelnoton: '❬ ❎ ❭ *Level no esta activado*',
				levelnol: '*Nivel* 0 ',
				error: {
					stick: '[❎] Falló, se produjo un error al convertir la imagen en una pegatina',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '[❗] Este comando es solo para grupos!',
					ownerG: '[❗] Este comando solo puede ser utilizado por un admin del grupo!',
					ownerB: '[❗] Este comando solo lo usa ShanBot!',
					admin: '[❗] Este comando solo puede ser utilizado por administradores del grupo!',
					Badmin: '[❗] Este comando solo se puede usar cuando el bot se convierte en administrador!',
                                        pegatina: 'Calma crack estoy haciendo tu sticker 👏\n\n*Recuerda los stickersgif son de 6 segundos ❗*',
					attp: 'Calma crack estoy haciendo tu texto a sticker 👏\n\n*Esto puede demorar unos minutos*',
					imgs: 'Euu flaco 🥴\n\n*Convirtiendo tu Sticker a Imagen 🔄*\n\n',
					mpcancion: 'Calmaoooo estoy procesando 😎\n\n*Convirtiendo de MP4 a MP3 🔄*\n\n',
					mpa: 'Euu flaco 🥴\n\n*Estoy decargando tu cancion 🔄*\n\nAguarde un momento, por favor\n\n',
                                        mpv: 'Calmao pa 😎\n\n*Estoy descargando tu video 🔄*\n\nAguarde un momento, por favor\n\n',
					musica: 'Calmao pa estoy bucando tu canción 😎\n\n*Recuerda colocar bien el nombre de la cancion o el link del video de youtube ❗*\n\n',
					daftarB: `「NEFASTOOOOO」\n\nPERO PAAAAAAAAAA!\n\nNo estas registrado en mi base de datos 😳 \n\nComando : ${prefix}daftar Nombre\nEjemplo : ${prefix}daftar shanduy`,
				}
			}
    			const apakah = ['Si','No']
                        const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
			const botNumber = client.user.jid
			const ownerNumber = ["33749258491@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
	                const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '593997889284@s.whatsapp.net'
                        /******Entrada ApiKey******/
                        const BarBarKey = 'Mn2Bf58QHQ8kABoLq80g'
                        /******Fin de la entrada de ApiKey******/

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

	        //FUNCION DE LEVEL
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nombre*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nFelicidades weon!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 
       /******ENTRADA FIN DE FUNCIONES******/
			function addMetadata(packname, author) {	
				if (!packname) packname = 'ShanBot'; if (!author) author = 'Shanduy';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
		case 'help':
		case 'menu':
		client.sendMessage(from, help(prefix), text)
		break
                case 'otak':
		client.sendMessage(from, otak(prefix, sender), text, {quoted: mek})
		break
		case 'idioma':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
		break
		case 'shanmenu':
		client.sendMessage(from, toinmenu(prefix, sender), text, {quoted: mek})
		break
		case 'menuadmin':
		client.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
		break
		case 'nsfwmenu':
		client.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
		break
		case 'desmenu':
		client.sendMessage(from, desmenu(prefix, sender), text, {quoted: mek})
		break
		case 'versión':
		case 'version':
		client.sendMessage(from, version(prefix, sender), text, {quoted: mek})
		break
                case 'welmenu':
		client.sendMessage(from, welmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shantera':
		client.sendMessage(from, shantera(prefix, sender), text, {quoted: mek})
		break
					
		/*case 'virtex':
	       case 'troleo':
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break*/
                            case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('La etiqueta de destino que el administrador quiere transmitir')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Pedido recibido✅\n\nRetirando cargo como administrador :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pedido recibido✅\n\nRetirando cargo como administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
                 case 'promote':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('¡La etiqueta de destino que desea promocionar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido✅\n\nAgregando cargo como administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
	      case 'gay':
                client.updatePresence(from, Presence.composing) 
              if (!isUser) return reply(mess.only.daftarB)
                random = gay[Math.floor(Math.random() * (gay.length))]
	      break
				  case 'wa.me':
				  case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break
		/*case 'tneon':
                data = await await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=tshanduyx&text=${body.slice(8)}`)
                if (!isUser) return reply(mess.only.daftarB)
                client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(8)})
                break*/
	case 'creador':
	    case 'owner':
                case 'creator':
                client.sendMessage(from, {displayname: "Shan", vcard: vcard}, MessageType.contact, { quoted: mek})
		client.sendMessage(from, 'Arriba está el número del creador del bot <ShanBot>\n\nNO SOY UN BOT LPM 🥸\n\nAhi puedes resolver tus preguntas y errores :)\n\nEste no es el numero del propietario del bot que estas usando, si no del creador de la base de datos del bot❗\n\nby shanduy',MessageType.text, { quoted: mek} )
                const none = fs.readFileSync('./mp3/shan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break
	case 'hidetag':
                client.updatePresence(from, Presence.composing) 
                if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
               		       case 'ytmp3':
					if (args.length < 1) return reply('Donde esta la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.only.mpa)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*DESCARGA EXITOSA ✅*\n◉ *Título* : ${anu.title}\n\nDALE NEFASTO NO SPAMES TE ESTOY ENVIANDO EL AUDIO ESPERAME 😡`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytmp4':
					if (args.length < 1) return reply('Donde esta la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.only.mpv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*DESCARGA EXITOSA ✅*\n◉ *Título* : ${anu.title}\n\n*EL VIDEO SE ESTÁ ENVIANDO, NO SPAM PEDAZO DE DOWN*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
                                 case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Cual es el código de idioma?\n\nPara saber el codigo de idioma coloque el comando ${prefix}idioma', text, {quoted: mek})
                                   if (!isUser) return reply(mess.only.daftarB)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Y el texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Texto muy largo weon')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
                                case 'listadmins':
				case 'adminlist':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista De Nefastos Del Grupo*${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
					break
			case 'todos':
			case 'tagall':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 MENCIONANDO 〙✪══\n╠➥'+teks+'╚═〘 by shanduy 〙', members_id, true)
					break
                                case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Sube fotos con subtítulos ${prefix}Ok`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil')
					break
				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 Shanduy 」*\n\n${body.slice(4)}`)
						}
						reply('Transmisión exitosa')
					}
					break
					case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 GRUPO BC 」*\n*Grupo* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmisión exitoso')
					}
					
                     case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Chao Pa👋', text) // ur cods
					}, 0)
                     break
       /*case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `El NEFASTO de este grupo es :@${from.split("-")[0]}`, 
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break*/
                                      case 'kick':
					case 'pafuera':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca al que vamos a funar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, chao nefastooo 👋 :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedido recibido, chao pa 👋 : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, 'Chao puta gorda', text)
					}
					break
				case 'exe':
	              client.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return client.sendMessage(from, "Adios", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
                 case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    client.updatePresence(from, Presence.composing) 
				    if (!isGroup) return reply(mess.only.group)
                                     if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await client.groupInviteCode (from)
					yeh = `Aqui esta el link del grupo 🤑\n\nhttps://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName}*`
					client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
					break
                case 'qrcode':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
				break
		          		
			case 'closegc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}\nAhora *solo administradores* puede enviar mensajes`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
                case 'opengc':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo abierto por administrador @${sender.split("@")[0]}\nAhora *todos los participantes* pueden enviar mensajes`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessage(from, open, text, {quoted: mek})
					break
				                case 'attp':
						if (!isUser) return reply(mess.only.daftarB)
					        if (args.length < 1) return reply(`¿Dónde está el texto?\n*Ejemplo:* ${prefix}attp shanduy`)
						reply(mess.only.attp)
					        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						client.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
				case 's':
				case 'tucson':
				case 'cuties':
				case 'nefasto':
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
			        if (!isUser) return reply(mess.only.daftarB)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									 if (error) {
											 reply(ind.stikga())
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.only.pegatina)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`[❗] Fallo, al momento de convertir ${tipe} al sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) {
											 reply(ind.stikga())
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Envíe una imagen con el comando ${prefix}s o etiqueta a una imagen que ya se haya enviado`)
					}
					break
			            case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❌ Solo stickers')
					reply(mess.only.imgs)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el sticker en imágenes')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*⌈ Imagen convertida ✅ ⌉*\n\nby shanduy'})
						fs.unlinkSync(ran)
					})
					break
                        case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('❌ Solo videos')
					reply(mess.only.mpcancion)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el video a mp3')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
                case 'play':   
	        if (!isUser) return reply(mess.only.daftarB)
                reply(mess.only.musica)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=shanduy25`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*⌈ Canción Encontrada ✅ ⌉*\n◉ *Título* : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                                case 'daftar':
					client.updatePresence(from, Presence.composing)
					if (isUser) return reply('Ya estas registrado gordo trolo 🧐')
					if (args.length < 1) return reply(`Incorrecto \nCommand : ${prefix}daftar Nombre\nComando : ${prefix}daftar shanduy`)
					var reg = body.slice(8)
					var nombre = reg.split("|")[0];
                                                user.push(sender)
						fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
						client.sendMessage(from, `\`\`\`REGISTRADO ✅\`\`\`\n\n\`\`\`DNI: Tucson 🤙🤪\`\`\`\n\n\`\`\`Hora 🇪🇨: ${time}\`\`\`\n\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`Para usar el bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: mek})
					break
                                case 'welcome':
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Para activar está funcion coloca *welcome 1')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya esta activada!!!')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('❬ ✅ ❭ La funcion de bienvenida esta habilitada en este grupo')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('❬ ✅ ❭ La funcion de bienvenida esta deshabilitada en este grupo')
					} else {
						reply('Escribe el comando 1 para activarlo y 0 para desactivarlo Ejemplo: *welcome 1')
					}
					break
                               case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('❌ *NSFW NO ESTA ATIVADO* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'mesum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                              	case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Digita 1 para activar los NSFW')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Recursos Activados ✅')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ EXITO ❭ La funcion NSFW esta habilitado en este grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta deshabilitado en este grupo')
					} else {
						reply('Digite 1 para activarlo, 0 para desactivarlo')
					}
					break	
				case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
					break
				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break						
                             case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
		                        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                 case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `◪ *⬆LEVEL⬆*\n  ├─ ❏ *Nombre* : ${sem}\n  ├─ ❏ *XP* : ${userXp}\n  └─ ❏ *Level* : ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				case 'fitnah':
				if (args.length < 1) return reply(`Uso :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @Un weon del grupo|Hola|Hola también`)
				var gh = body.slice(7)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digita 1 para ativar el recurso')
                if (args[0] === 1) {
                    if (isLevelingOn) return reply('*La función de nivel ya estaba activa*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === 0) {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(` *Digita el comando 1 para activar, 0 para desactivar *\n * Ejemplo: ${prefix}leveling 1*`)
                }
            break
                                /*case 'nsfwtrap':
                                        try{
                                                if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
                                                res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=APIKEYLU`, {method: 'get'})
                                                buffer = await getBuffer(res.result)
                                                client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Estas enfermo flaco NEFASTOOOOO'})
                                        } catch (e) {
                                                console.log(`*Error* :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
										break*/
										case 'randomhentaio': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Otaku que se esperaba'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					/*case 'nsfwloli':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Alto pedofilo socio'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break*/
					case 'nsfwbobs': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Quiero ver tetas'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwblowjob':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'No antojen'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwneko':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/neko`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Pero que wea?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					/*case 'nsfwyuri':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/yuri`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'NEFASTOOOOOOO'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					break*/
				case 'nsfwass':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`'https://meme-api.herokuapp.com/gimme/animebooty`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ese es el culo que querías?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwsidebobs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'La vieja de gabo, tremenda puta'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					    break
					case 'nsfwahegao':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Joder, quisiera follarmela'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwthighs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Por que muslos?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwfeets':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'MMMMM PATAS'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌') 
						}
						break
					case 'nsfwarmpits':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animearmpits`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'A?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
						case 'nsfwtoin':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/nsfwtrap?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Bro....'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
                                case 'ping':    
			   	        if (!isUser) return reply(mess.only.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Second_*\nDevice: *Alcatel Pixi 4*\nRAM: *6Mb*\nData: *10GB*\nJaringan: *2G*\nStatus: *Bateria Baja*`, text, { quoted: mek})
                                        break
                                case 'ttp':
					if (args.length < 1) return reply('Y el texto flaco?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                default:
		if (budy.includes(`Todo bien`)) {
                  reply(`Si amigo todo, bien vite`)
                  }

		if (budy.includes(`Buenos dias`)) {
                  reply(`Buenos Dias trolos de mierda`)
                  }

		if (budy.includes(`Bot gay`)) {
                  reply(`Miren a este boludito`)
                  }

		if (budy.includes(`Gracias`)) {
                  reply(`De nada padre`)
                  }

		if (budy.includes(`Hola`)) {
                  reply(`hola, apeteces de sexo?`)
                  }
                 
		if (budy.includes(`Fua`)) {
                  reply(`uff si, fuaaa`)
                  }
        if (budy.startsWith(`La toca 7w7`)) {
        const none = fs.readFileSync('./anishan/anime5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Quien es tu sempai botsito`)) {
        const none = fs.readFileSync('./anishan/anime4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me gimes 7u7`)) {
        const none = fs.readFileSync('./anishan/anime3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Te amo botsito uwu`)) {
        const none = fs.readFileSync('./anishan/anime2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Onichan`)) {
        const none = fs.readFileSync('./anishan/anime1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Pasen sexo`)) {
        const none = fs.readFileSync('./mp3/fernan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	
	if (budy.startsWith(`Ya me voy a dormir`)) {
        const none = fs.readFileSync('./mp3/sombare12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
       
	if (budy.startsWith(`Bot de mierda`)) {
        const none = fs.readFileSync('./mp3/sombare10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Apurate bot`)) {
        const none = fs.readFileSync('./mp3/sombare9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
					
        if (budy.startsWith(`No funciona`)) {
        const none = fs.readFileSync('./mp3/sombare8.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	
	if (budy.startsWith(`Y las minitas`)) {
        const none = fs.readFileSync('./mp3/gaspi6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	
	if (budy.startsWith(`Me quiero suicidar`)) {
        const none = fs.readFileSync('./mp3/gaspi81.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	
	if (budy.startsWith(`Contate algo bot`)) {
        const none = fs.readFileSync('./mp3/gaspi5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
               if (budy.startsWith(`Sexo`)) { 
        const none = fs.readFileSync('./mp3/sexo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
             
		if (budy.startsWith(`El bot del orto no funciona`)) {
        const none = fs.readFileSync('./mp3/sombare2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		
		if (budy.startsWith(`Insta de la minita`)) {
        const none = fs.readFileSync('./mp3/sombare4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 if (budy.startsWith(`Una mierda de bot`)) {
        const none = fs.readFileSync('./mp3/sombare5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		
				if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()

const _0x5e7d=['cum','hidetag*\x20[\x20your\x20message\x20]\x0a├\x20*','setprefix*\x0a├\x20*','https://nekos.life/api/v2/img/nsfw_avatar','split','MB\x20/\x20','generateLinkPreview','./lib/fetcher','Tag\x20yg\x20ingin\x20angda\x20tusbol!','\x0a\x0aMuerto\x20:\x20','\x0a*HP*\x20:\x20','\x0a\x0aHelado\x20:\x20','herodetail','LINK\x20ERROR!','\x0a├\x20*Rol*:\x20','73357uWfCcA','error','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','all','ero','Teniente\x20II','pesoff*\x0a├\x20*','Enviar\x20pedido\x20*','\x1b[1;36mEVALL\x1b[1;37m','ytmp4','Ingrese\x20texto!','kuni','avatar*\x0a├\x20*','wallpaperanime','status@broadcast','kontag*\x20[\x20687xx|aku\x20>\x20tag\x20]\x0a├\x20*','awesome-phonenumber','audio/mp4','giftag','stickerMessage','pesoff','floor','https://api.fdci.se/rep.php?gambar=','content-type','Sgt\x201st\x20class\x20III','test','./config/cnn.js','https://nekos.life/api/v2/img/pwankg','\x0a│\x0a└─\x20❏\x20Numero:\x20','doc.txt','upswvideo','offense','Error\x20:\x20','level','\x0a*Ext*\x20:\x20MP4\x0a*Size*\x20:\x20','biography','\x0a-\x20\x20*Grupos\x20:*\x20','public*\x0a├\x20*','fdeface*\x0a├\x20*','\x0a├\x20Número\x20:\x20wa.me/','magic_defense','args\x20:','release_date','.webp','upswimage*\x0a├\x20*','https://nekos.life/api/v2/img/neko','join','cumimage','https://nekos.life/api/v2/img/femdom','chats','Master\x20sgt\x20I','./stik','on*\x0a├\x20*','remoteJid','tiktokaudio*\x20[\x20query\x20]\x20\x0a├\x20*',',;;;\x0aFN:','unlinkSync','./session.json','qrcode-terminal','fromCharCode','tourl*\x20[\x20image\x20>\x20url]\x0a├\x20*','BOT','\x0aWilayah\x20:\x20','goose','fetchUser','lo\x20siento\x20hermano:(','◩\x20*SATANCITO\x20ᵈᵃʳʸ⛥*','\x0a└\x20\x20*Nivel*\x20:\x20','role','remove','SATANCITO\x20ᵈᵃʳʸ⛥','child_process','\x0a*Fitur\x20Hero*\x20:\x20','https://nekos.life/api/v2/img/pussy','\x0a*Ext*\x20:\x20MP3\x0a*Filesize*\x20:\x20','\x0a*Spesial*\x20:\x20','save','status*\x0a├\x20*','open','\x20-O\x20','swm*\x20[\x20author|packname\x20]\x0a├\x20*','sticker\x0aDuracion\x20del\x20video\x20de\x201-9\x20segundos','./database/welkom.json','head','demote*\x20[\x20tag\x20admin\x20]\x0a├\x20*','tovid','solog','succes\x20mute\x20chat\x20=\x20','A\x20quien\x20quieres\x20agregar\x20oni\x20chan\x20O~O?','hidetag','emoji-api','setreply','Sargento\x20III','format','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','getInfo','https://nekos.life/api/v2/img/hentai','\x0aPor\x20puto\x20Ojala\x20no\x20vuelva\x20UnU~~','wait','log','\x0a\x0a_Silahkan\x20tunggu\x20file\x20media\x20sedang\x20dikirim\x20mungkin\x20butuh\x20beberapa\x20menit_','oppai','match','attp*\x0a├\x20*','28777','take','setfake','\x0a*Sejak\x20:*\x20','lewd','input','6289523258649-1604595598@g.us','doctag*\x20[\x20document\x20>\x20tag\x20]\x0a├\x20*','setfakeimg','DONE','56299BnpvpB','ping','*Ya\x20puedo\x20ver\x20sus\x20webadas\x20UnU*','subject','modStick','https://nekos.life/api/v2/img/pussy_jpg','Error\x20:\x20%s','http://api.lolhuman.xyz/api/welcomeimage?apikey=','durability','\x20Sedang\x20Offline!\x0a\x0a\x20*Alasan\x20:*\x20','version','quotedM','\x20[Battle\x20point]\x20|\x20','startsWith','json','Lito','*Muteados\x20putos\x20ÙwÚ*','Invalid\x20domain/ip','stringify','image/jpeg','tiktokaudio','\x20[Fragment]\x0a*Rilis*\x20:\x20','user','CB:action,,call','groupAdd','vname','length','following','add*\x20[\x20503xxxx\x20]\x0a├\x20*','\x0a\x0a_Para\x20duraciones\x20superiores\x20al\x20límite\x20se\x20presentan\x20en\x20el\x20enlace_','physical_attack','covidindo','feed','Lito\x20UwU','attp*\x20_Aku\x20Ganz_','parse','INGFO','&text=','\x0aLee\x20las\x20reglas\x20y\x20comportate\x20y\x20no\x20spam\x20con\x20el\x20bot,\x20gracias\x20UvU\x0a','includes','Asia/Jakarta','ephemeralMessage','audioMessage','play*\x20[\x20query\x20]\x20\x0a├\x20*','./lib/functions','Sargento\x20IV','\x0a\x0aTitle\x20:\x20','\x0a*Mana*\x20:\x20','key','fitnah\x20[@tag|pesan|balasanbot]]\x0a\x0aEx\x20:\x20\x0a','profile_id','timestamp','covidworld*\x0a├\x20*','succes\x20delete\x20chat\x20=\x20','tiktok*\x20[\x20link\x20]\x20\x0a├\x20*','./stik/thumb.jpeg','image-to-base64','*[███▒▒▒▒▒▒▒]\x20','2nd\x20Lt\x20III','ytsearch*\x20[\x20query\x20]\x20\x0a├\x20*','Oke\x20@','2nd\x20Lt\x20I','*OFFLINE*','libwebp','Invalid\x20phone\x20number','g-i-s','toFixed','Responde\x20a\x20un\x20sticker!','waifu*\x0a├\x20*','internasional','thumb','https://nekos.life/api/v2/img/avatar','fitnah','then','Reponde\x20video\x20UnU\x20📸','Sargento\x20II','❏\x20Duracion:\x20','\x20[DM]\x20|\x20','call\x20dari\x20','https://sonar.omnisint.io/reverse/','url_list','twitter.com','memoryUsage','participants','\x0a├\x20XP\x20:\x20\x20','8XgDxGK','shift','Pwro','mentionedJid','sethumb','hours','❏\x20Link:\x20','\x0a\x0aMuertos\x20:\x20','createExif','Gatau\x20caption\x20nya\x20apa','delete','setthumb','imageMessage','seconds','https://nekos.life/api/v2/img/feed','moment-timezone','spam\x20teks|jumlah','2nd\x20Lt\x20IV','No\x20soy\x20una\x20admin\x20T-T','setprefix','-set','Teniente','slice','menu','full_name','\x0a*Verified*\x20:\x20','https://nekos.life/api/v2/img/blowjob','Waktu\x20:\x20','map','\x0a*Followers*\x20:\x20','Succes\x20Mengganti\x20target\x20fitnahpc\x20:\x20','profile_pic_url_hd','Ingrese\x20el\x20enlace\x20del\x20grupo','attributes','*YTMP\x204!*\x0a\x0a*Title*\x20:\x20','instagram.com','Y\x20ese\x20link\x20funciona?\x20U.U','participant','@s.whatsapp.net','Hola\x20','Sukses\x20Upload\x20Story\x20Video\x20dengan\x20Caption:\x20','Link?','.jpg','delete*\x0a├\x20*','\x20Menit,\x20','Usage\x20:\x0a','minutes','reverse','Err:\x20','blowjob','performance-now','de\x20nuevo\x20genial?\x20qué\x20estás\x20buscando?','No\x20eres\x20mi\x20dueño\x20UnU','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','welcome\x201/0*\x0a├\x20*','2434cFTyvw','brainly*\x20[\x20query\x20]\x20\x0a├\x20*','self*\x0a├\x20*','\x0a├\x20\x20*Xp*\x20:\x20','https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=https://www.google.com/search?q=','is_private','./stik/fake.jpeg','modifyChat','video','\x0a\x20*Sejak\x20:*\x20','fdeface\x20link|title|desc|teks','@adiwajshing/baileys','https://nekos.life/api/v2/img/lewdk','Etto\x20UvU','demote','\x0a*Quotes*\x20:\x20','\x0aLintang\x20:\x20','\x20Scan\x20the\x20qr\x20code\x20above','message','hero_name','*PLAY\x20MUSIC*\x0a\x0a*Title*\x20:\x20','Holi\x20cosita\x20UwU\x20','totag','Intenta\x20de\x20nuevo','utf-8','conversation','request','\x20Second\x0a-\x20*Mi\x20tiempo\x20vivo:*\x20','Badmin','slow*\x20[\x20video\x20>\x20slow\x20]\x0a├\x20*','*Datos\x20obtenidos\x20con\x20éxito!*\x0a\x0a*Titulo*\x20:\x20','download','swm','https://nekos.life/api/v2/img/erokemo','get','forEach','image/gif','extendedText','cnn*\x0a├\x20*','1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==','pussyimage','skill_effects','doctag','Hecho\x20mi\x20amo\x207~7','\x0a-\x20*RAM\x20:*\x20','Aun\x20noob','HH:mm:ss','settarget\x20503xxxxx','Ok\x20brother','random','◪\x20chao\x20','\x0aLink\x20:\x20','price','Penggunaan\x20','unmute*\x0a├\x20*','admin','base64EncodedAuthInfo','\x20kamu\x20gak\x20admin\x20lagi\x20yaa!','status','get*\x20[\x20google.com\x20]\x0a├\x20*','Solo\x20mi\x20dueño\x20satan\x20UnU','entrance_quotes','Responde\x20video\x20o\x20imagen\x20nwn','herolist','@g.us','.gif','./lib/offline','red','api','\x20&&\x20ffmpeg\x20-i\x20','fromMe','Connecting...','addOutputOptions','battle_point','audio','exif','skill','https://nekos.life/api/v2/img/wallpaper','\x0a*Difficulty*\x20:\x20','pow','term','kiss','spam','./database/off.json','infogempa','holoero','runtime*\x0a├\x20*','Que\x20buscare?\x20O.O','herodetail*\x0a\x0a','./lib/webp2mp4','\x20」\x0a\x0aGrupo\x20oficial\x20:\x20https://chat.whatsapp.com/J72bXsh3gRxKufBl8iikDO\x0a\x0a╭─Comandos\x20UwU\x20\x0a├\x20*','ability_crit_rate','brainly-scraper','succes\x20unmute\x20chat\x20=\x20','*List\x20hero\x20untuk\x20feature\x20','google','En\x20linea\x20:D','hentai*\x20\x0a├\x20*','>\x20PUBLIC-MODE','Asalto','wallpaperanime*\x0a├\x20*','https://tinyurl.com/api-create.php?url=','MB\x0a-\x20*Android\x20:*\x20','pipe','endsWith','s.whatsapp.net','quotedMessage','Caso\x20:\x20','Responde\x20video\x20UnU!','sticker*\x20[\x20image\x20>\x20sticker]\x0a├\x20*','\x0a>Broadcast','./lib/ytdl','upswteks','*[█▒▒▒▒▒▒▒▒▒]\x20','peson*\x0a├\x20*','c.us','\x0a>\x20Izin\x20Broadcast','text/plain','name','Pwrdon...\x20T_T','ping*\x0a├\x20*','.png','*[▒▒▒▒▒▒▒▒▒▒]\x200%*','TEL;type=CELL;type=VOICE;waid=','off','\x0a*Offence*\x20:\x20','les','*[██████▒▒▒▒]\x20','Repitiendo\x20señor\x20hay\x20un\x20errorc...','play*\x20_Judul\x20lagu\x20yang\x20akan\x20dicari_','byee..\x20@','https://api.xteam.xyz/attp?file&text=','lewdk','speciality','cnn','El\x20texto?\x20._.','https://nekos.life/api/v2/img/bj','Succes\x20Mengganti\x20Prefix\x20:\x20','Kirim\x20gambar\x20dengan\x20caption\x20','Error\x207-7','-vcodec','white','Ggt\x201st\x20class\x20IV','contextInfo','mute*\x0a├\x20*','ffmpeg\x20-i\x20','*Reply\x20sticker\x20yang\x20sudah\x20dikirim*','ytmp4\x20[linkYt]*','kirim/reply\x20image\x20dengan\x20capion\x20','\x0a\x0a_Untuk\x20durasi\x20lebih\x20dari\x20batas\x20disajikan\x20dalam\x20mektuk\x20link_','*[████████▒▒]\x20','toggleDisappearingMessages','Speed:\x20','\x0a*Role*\x20:\x20','wget\x20','\x20})()','keta','Master\x20sgt\x20III','infogempa*\x0a├\x20*','link\x20:3?','\x0a-\x20*Velocidad\x20:*\x20','\x0a*Ability\x20Crit\x20Rate*\x20:\x20','https://nekos.life/api/v2/img/eron','>\x20ONLINE','\x20ke\x20stiker','sticker','add','video/gif','blockUser','\x0a*Private*\x20:\x20','*[██▒▒▒▒▒▒▒▒]\x20','\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=20\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20','https://nekos.life/api/v2/img/solog','Succes\x20Mengganti\x20Conversation\x20Fake\x20:\x20','Perdon...\x20T-T','data','Responder\x20imagen!','nsfwavatar','Gagal,\x20pada\x20saat\x20mengkonversi\x20','help','*Title*\x20:\x20','kick*\x20[\x20tag\x20]\x0a├\x20*','deleteMessage','facebook.com','close','Soldado','./config/gempa.js','Text\x20Nya\x20Mana\x20Ajg?\x0a>\x20*Contoh*\x20:\x20*','anime*\x20[\x20random\x20]\x0a├\x20*','hentai','pwankg','slow','Pwro..','nekopoi','totalmem','*[███████▒▒▒]\x20','Error\x207-7.','*[██████████]\x20','heapUsed','\x0a◪\x20Bienvenido\x20UwU\x20a\x0a├─\x20','blue','catch','unmute','168xOxqqZ','tiktok.com','Holi\x20cosita\x20^-^','uptime','brainly','Hay\x20un\x20error','\x20Second*','\x20-filter_complex\x20\x22[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]\x22\x20-map\x20\x22[v]\x22\x20-map\x20\x22[a]\x22\x20','\x0a*Mana\x20Regen*\x20:\x20','reverse*\x20[\x20video\x20>\x20reverse\x20]\x0a├\x20*','50373488366','push','existsSync','5168TRfgsX','inputFormat','kontag','VERSION:3.0\x0a','messages','setfake*\x0a├\x20*','Menglogin\x20kawan...','toString','https://nekos.life/api/v2/img/anal','futanari','&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load','husbu*\x0a├\x20*','Kirim\x20perintah\x20*','-vf','「\x20*Privado\x20UwU*\x20」','Connected','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','waifu','./stik/data.exif','No\x20se\x20pudo\x20agregar\x20el\x20objetivo,\x20tal\x20vez\x20porque\x20en\x20privado','createWriteStream','replace','\x0a*Skill\x20Effect*\x20:\x20','\x20Detik\x20lalu\x0a\x0aSilahkan\x20Hubungi\x20Lagi\x20Nanti','\x1b[1;37m>','notify','webpmux','❏\x20Title:\x20','emoji','images','https://nekos.life/api/v2/img/les','Auto\x20block\x20system,\x20don\x27t\x20call\x20please','Reponde\x20video\x20UnU','now','https://nekos.life/api/v2/img/tits','toFormat','undefined','setthumb*\x0a├\x20*','\x0aBujur\x20:\x20','jpegThumbnail','connecting','./lib/color','Master\x20sgt\x20II','keys','Solo\x20los\x20admins\x20UvU','ytmp3\x20[linkYt]*','NIH','Degradar\x20con\x20éxito\x20UnU\x0a','stickerwm','2nd\x20Lt\x20II','base64','getNumber','description','webp','Ok\x20@','Started\x20:\x20','https://nekos.life/api/v2/img/holoero','emoji*\x0a├\x20*','blocked','10353cpsDyb','downloadAndSaveMediaMessage','hex','Utilice\x20el\x20código\x20de\x20país','\x0a\x0a└─\x20❏\x20Numero:\x20','groupMetadata','*\x0a-\x20*Celular\x20:*\x20','text','\x0a└\x20Nivel\x20:\x20','https://nekos.life/api/v2/img/keta','image*\x20[\x20random\x20]\x0a├\x20*','787PsLGhl','yuri','giftag.gif','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','\x0aImage:\x20','https://nekos.life/api/v2/img/ero','loli','messageID','got','exit','wrongFormat',',\x0aitem1.TEL;waid=','\x0a*Link*\x20:\x20','upswimage','https://nekos.life/api/v2/img/hololewd','Done','videoMessage','action','https://nekos.life/api/v2/img/kiss','WEA','difficulty','*ID*\x20:\x20','loadAuthInfo','[\x20\x1b[1;36mEXECC\x1b[1;37m\x20]','jid','tourl','kick','No\x20eres\x20mi\x20dueño\x20UnU?','contacts','0@s.whatsapp.net','No\x20eres\x20mi\x20dueño\x20UnU...','\x20-filter_complex\x20\x22[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]\x22\x20-map\x20\x22[v]\x22\x20-map\x20\x22[a]\x22\x20','acceptInvite','Master\x20sgt\x20IV','\x0a\x0aReponerse\x20:\x20','caption','from','aqua','Sargento','revip*\x20[\x208.8.8.8\x20]\x0a├\x20*','feetg','\x0a├\x20*Número*\x20:\x20wa.me/','\x20Jam,\x20','hasNewMessage','diamond','screenshot','Ten\x20paciencia\x20soy\x20lenta\x20TwY','Oki\x20doki\x20^w^','promote','\x0a*「\x20_BRAINLY_\x20」*\x0a\x0a*➸\x20Pregunta:*\x20','gif','is_verified','\x0a*Bio*\x20:\x20','https://','*PLAY\x20VIDEO*\x0a\x0a*Title*\x20:\x20','writeFileSync','wenas🌚','BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;','Error\x207-7..','video/mp4','peson','groupRemove','loli*\x0a├\x20*','pinterest','igstalk','./database/leveling.json','extendedTextMessage','\x0a\x0a*Story*\x20:\x20','hololewed','insta-fetcher','\x0a-\x20*Chats\x20:*\x20','video*\x20[\x20query\x20]\x20\x0a├\x20*','\x0a-\x20*Total\x20de\x20chat\x20:*\x20','Finish','anal','./config/herodetail.js','nekopoi*\x20\x20\x0a├\x20*','nsfwavatar*\x20\x0a├\x20*','mana','fb*\x20[\x20link\x20]\x20\x0a├\x20*','>\x20[\x20JAPRI\x20]','tovideo','DD/MM\x20HH:mm:ss','Noob','pertanyaan','https://nekos.life/api/v2/img/boobs','sticktag','husbu','https://shot.screenshotapi.net/screenshot?token=D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB&url=','readFileSync','round','\x0a________________________\x0a\x0a','\x0a-\x20Prefix\x20:\x20「\x20','*STATUS*\x0a','10459tCvIyv','title','trap','ssstik','\x0a*Ext*\x20:\x20MP3\x0a*Size*\x20:\x20','\x20Apagado\x20UvU\x20','hero','group','groupDemoteAdmin','SELF','Bueno,\x20falló,\x20inténtalo\x20de\x20nuevo\x20^_^','headers','fb-video-downloader','https://nekos.life/api/v2/img/eroyuri','\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20','666.webp','\x0a*Harga*\x20:\x20','mp4Audio','trim','twitter*\x20[\x20link\x20]\x20\x0a├\x20*','spam*\x0a├\x20*','judul','anime','sendMessage','tiktok','\x0a*Rekomendasi\x20Lane*\x20:\x20','take*\x20[\x20author|packname\x20]\x0a├\x20*','\x0a*「\x20FELICIDADES\x20」*\x0a┌\x20*Nombre*\x20:\x20','swm\x20teks|teks\x20atau\x20tag\x20gambar\x20yang\x20sudah\x20dikirim','util','https://nekos.life/api/v2/img/nsfw_neko_gif','ytmp3','2ASeNEL','Que\x20clase\x20de\x20pregunta\x20es\x20esa','mute','downloadMediaMessage','desc','reply','result','done','Promovido\x20Mi\x20niñ@\x20lind@\x20UwU\x0a','end','settarget','Ocurrió\x20un\x20error\x20','Hola\x20cosita\x20UwU','igstalk*\x20[username]\x0a├\x20*','*\x0a\x0a*Nama*\x20:\x20','ytmp3*\x20[\x20link\x20]\x20\x0a├\x20*','*[█████████▒]\x20','*[████▒▒▒▒▒▒]\x20','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','Domain/Ip\x20nya\x20mana\x20bang??','only','off*\x0a├\x20*','owner','B826873620DD5947E683E3ABE663F263','wenas👋','Etto\x20O^O?','\x20conversación','\x0a\x20\x0a\x0a*Movement\x20Speed*\x20:\x20','\x20⊱\x20','image','eron','Master\x20sgt\x20V','60mEBIUq','mana_regen','./database/level.json','&img=','url','fdeface','Yang\x20mau\x20di\x20cari\x20afa?','&safe=strict&sxsrf=ALeKk03WtBNqunvK303Qm3aEToejzpQvag%3A1621384426733&source=hp&ei=6lykYJbUKtPmz7sP-MugmAU&oq=p&gs_lcp=ChFtb2JpbGUtZ3dzLXdpei1ocBADMgQIIxAnMgQIIxAnMgQIIxAnMggIABCxAxCDATIFCAAQsQMyBQguELEDMggIABCxAxCDATIICAAQsQMQgwE6BwgjEOoCECdQlg9Ylg9g9hJoAXAAeACAAVmIAVmSAQExmAEAoAEBsAEP&sclient=mobile-gws-wiz-hp&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load','.mp4'];const _0x585279=_0x3bd0;(function(_0x13f1a6,_0x115859){const _0x40f20c=_0x3bd0;while(!![]){try{const _0x23e145=parseInt(_0x40f20c(0x294))+-parseInt(_0x40f20c(0x181))*parseInt(_0x40f20c(0x33d))+-parseInt(_0x40f20c(0x31d))*-parseInt(_0x40f20c(0x355))+parseInt(_0x40f20c(0x24c))*parseInt(_0x40f20c(0x29f))+-parseInt(_0x40f20c(0x14a))*parseInt(_0x40f20c(0x2fd))+parseInt(_0x40f20c(0x259))+parseInt(_0x40f20c(0x3c7));if(_0x23e145===_0x115859)break;else _0x13f1a6['push'](_0x13f1a6['shift']());}catch(_0x19608d){_0x13f1a6['push'](_0x13f1a6['shift']());}}}(_0x5e7d,0x1d8ce));function _0x3bd0(_0x5727df,_0xabe555){_0x5727df=_0x5727df-0x114;let _0x5e7d3f=_0x5e7d[_0x5727df];return _0x5e7d3f;}const qrcode=require('qrcode-terminal'),moment=require(_0x585279(0x159)),speed=require(_0x585279(0x17c)),request=require(_0x585279(0x19b)),{spawn,exec,execSync}=require(_0x585279(0x39c)),fs=require('fs'),axios=require('axios'),ffmpeg=require('fluent-ffmpeg'),{EmojiAPI}=require(_0x585279(0x3af)),tik=require('tiktok-scraper-without-watermark'),ig=require(_0x585279(0x2e4)),emoji=new EmojiAPI(),fetch=require('node-fetch'),Fb=require(_0x585279(0x309)),twitterGetUrl=require('twitter-url-direct'),phoneNum=require(_0x585279(0x365)),gis=require(_0x585279(0x136)),got=require(_0x585279(0x2a7)),imageToBase64=require(_0x585279(0x12d)),ID3Writer=require('browser-id3-writer'),brainly=require(_0x585279(0x1dd)),yts=require('yt-search'),ms=require('parse-ms'),toMs=require('ms'),{error}=require(_0x585279(0x38f)),util=require(_0x585279(0x31a)),{getBuffer,h2k,generateMessageID,getGroupAdmins,getRandom,banner,start,info,success,close}=require(_0x585279(0x121)),{color,bgcolor}=require(_0x585279(0x282)),{fetchJson,getBase64,kyun,createExif}=require(_0x585279(0x34d)),{yta,ytv,igdl,upload}=require(_0x585279(0x1f0)),{webp2mp4File}=require(_0x585279(0x1da)),{sleep,isAfk,cekafk,addafk}=require(_0x585279(0x1c3)),time=moment()['tz'](_0x585279(0x11d))[_0x585279(0x3b2)](_0x585279(0x1af)),_leveling=JSON['parse'](fs[_0x585279(0x2f8)](_0x585279(0x2e0))),_level=JSON[_0x585279(0x118)](fs['readFileSync'](_0x585279(0x33f))),afk=JSON['parse'](fs[_0x585279(0x2f8)](_0x585279(0x1d4))),welkom=JSON['parse'](fs[_0x585279(0x2f8)](_0x585279(0x3a7))),{covidworld}=require('./config/covidworld.js'),{cnn}=require(_0x585279(0x36f)),{Gempa}=require(_0x585279(0x23b)),{herolist}=require('./config/herolist.js'),{herodetails}=require(_0x585279(0x2ea)),{WAConnection,MessageType,Presence,MessageOptions,Mimetype,WALocationMessage,WA_MESSAGE_STUB_TYPES,WA_DEFAULT_EPHEMERAL,ReconnectMode,ProxyAgent,GroupSettingChange,ChatModification,waChatKey,mentionedJid,processTime}=require(_0x585279(0x18c));prefix='.',hit_today=[],blocked=[],banChats=![],offline=![],targetpc=_0x585279(0x256),owner=_0x585279(0x256),fake=_0x585279(0x39b),numbernye='0',waktu='-',alasan='-';async function starts(){const _0x2168a9=_0x585279,_0x446871=new WAConnection();_0x446871[_0x2168a9(0x3d1)]=[0x2,0x847,0x6],_0x446871['logger'][_0x2168a9(0x376)]='warn',console['log']('>','[',color(_0x2168a9(0x119),'blue'),']',_0x2168a9(0x25f)),_0x446871['on']('qr',()=>{const _0xb0d8d4=_0x2168a9;console['log'](color('[',_0xb0d8d4(0x20e)),color('!',_0xb0d8d4(0x1c4)),color(']',_0xb0d8d4(0x20e)),color(_0xb0d8d4(0x192)));}),fs[_0x2168a9(0x258)]('./session.json')&&_0x446871[_0x2168a9(0x2b5)]('./session.json'),_0x446871['on'](_0x2168a9(0x281),()=>{const _0xc39223=_0x2168a9;console[_0xc39223(0x3b8)](color('>\x20[\x20INGFO\x20]',_0xc39223(0x20e)),color(_0xc39223(0x1c8)));}),_0x446871['on'](_0x2168a9(0x3a3),()=>{const _0x53d20c=_0x2168a9;console[_0x53d20c(0x3b8)](color('>\x20[\x20INGFO\x20]','white'),color(_0x53d20c(0x268)));}),await _0x446871['connect']({'timeoutMs':0x1e*0x3e8}),fs['writeFileSync'](_0x2168a9(0x38e),JSON[_0x2168a9(0x3d9)](_0x446871[_0x2168a9(0x1b9)](),null,'\x09')),_0x446871['on'](_0x2168a9(0x3de),async _0x2a9640=>{const _0x26b91c=_0x2168a9,_0x5d67a0=_0x2a9640[0x2][0x0][0x1][_0x26b91c(0x2c3)];console['log'](_0x26b91c(0x143)+_0x5d67a0),_0x446871[_0x26b91c(0x314)](_0x5d67a0,_0x26b91c(0x278),MessageType['text']),await sleep(0xfa0),await _0x446871[_0x26b91c(0x229)](_0x5d67a0,_0x26b91c(0x227));}),_0x446871['on']('group-participants-update',async _0x112556=>{const _0x477711=_0x2168a9;if(!welkom[_0x477711(0x11c)](_0x112556['jid']))return;try{num=_0x112556[_0x477711(0x148)][0x0];const _0x24f5d0=await _0x446871[_0x477711(0x299)](_0x112556[_0x477711(0x2b7)]);try{var _0x2266bb=await _0x446871['getProfilePicture'](num);}catch(_0x2596af){var _0x2266bb='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';}_0x112556[_0x477711(0x2b0)]==_0x477711(0x227)&&(ini_user=_0x446871[_0x477711(0x2bb)][num],ini_img=await getBuffer(_0x477711(0x3ce)+LolHuman+_0x477711(0x340)+_0x2266bb+_0x477711(0x11a)+ini_user[_0x477711(0x272)]),group_info=await _0x446871[_0x477711(0x299)](_0x112556[_0x477711(0x2b7)]),welkam=_0x477711(0x171)+ini_user[_0x477711(0x272)]+_0x477711(0x248)+_0x24f5d0[_0x477711(0x3ca)]+_0x477711(0x298)+num[_0x477711(0x26e)](_0x477711(0x170),'')+_0x477711(0x11b)+ini_user[_0x477711(0x272)],_0x446871[_0x477711(0x314)](_0x112556[_0x477711(0x2b7)],ini_img,MessageType[_0x477711(0x33a)],{'caption':welkam})),_0x112556['action']==_0x477711(0x39a)&&(ini_user=_0x446871[_0x477711(0x2bb)][num],ini_img=await getBuffer('http://api.lolhuman.xyz/api/welcomeimage?apikey='+LolHuman+_0x477711(0x340)+_0x2266bb+_0x477711(0x11a)+ini_user[_0x477711(0x272)]),out=_0x477711(0x1b3)+ini_user[_0x477711(0x272)]+'\x0a◪\x20se\x20fue\x20de:\x0a'+_0x24f5d0['subject']+_0x477711(0x371)+num['replace'](_0x477711(0x170),'')+_0x477711(0x3b6),_0x446871[_0x477711(0x314)](_0x112556[_0x477711(0x2b7)],ini_img,MessageType[_0x477711(0x33a)],{'caption':out}));}catch(_0x58e39b){console[_0x477711(0x3b8)]('Error\x20:\x20%s',color(_0x58e39b,_0x477711(0x1c4)));}}),_0x446871['on']('chat-update',async _0xf543a4=>{const _0x196182=_0x2168a9;try{if(!_0xf543a4[_0x196182(0x2ca)])return;_0xf543a4=_0xf543a4[_0x196182(0x25d)][_0x196182(0x358)]()[0x0];if(!_0xf543a4[_0x196182(0x193)])return;if(_0xf543a4[_0x196182(0x125)]&&_0xf543a4[_0x196182(0x125)][_0x196182(0x38a)]==_0x196182(0x363))return;global[_0x196182(0x293)],_0xf543a4[_0x196182(0x193)]=Object['keys'](_0xf543a4['message'])[0x0]===_0x196182(0x11e)?_0xf543a4['message'][_0x196182(0x11e)][_0x196182(0x193)]:_0xf543a4['message'];const _0x2b4b62=JSON[_0x196182(0x3d9)](_0xf543a4[_0x196182(0x193)]),_0x24b867=_0xf543a4[_0x196182(0x125)][_0x196182(0x38a)],{text:_0x52614d,extendedText:_0x12886d,contact:_0x52b919,location:_0x312c25,liveLocation:_0x5c222a,image:_0x5909a9,video:_0xd4e35,sticker:_0x52acfb,document:_0x2880f2,audio:_0x4bcb24,product:_0x42bce6}=MessageType,_0x3ce644=moment['tz'](_0x196182(0x11d))[_0x196182(0x3b2)](_0x196182(0x2f1)),_0x4f6e94=Object['keys'](_0xf543a4['message'])[0x0];body=_0x4f6e94==='conversation'&&_0xf543a4[_0x196182(0x193)][_0x196182(0x19a)][_0x196182(0x3d4)](prefix)?_0xf543a4[_0x196182(0x193)]['conversation']:_0x4f6e94==_0x196182(0x156)&&_0xf543a4[_0x196182(0x193)][_0x196182(0x156)]['caption']['startsWith'](prefix)?_0xf543a4['message'][_0x196182(0x156)][_0x196182(0x2c2)]:_0x4f6e94==_0x196182(0x2af)&&_0xf543a4[_0x196182(0x193)][_0x196182(0x2af)][_0x196182(0x2c2)][_0x196182(0x3d4)](prefix)?_0xf543a4[_0x196182(0x193)][_0x196182(0x2af)][_0x196182(0x2c2)]:_0x4f6e94==_0x196182(0x2e1)&&_0xf543a4[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x29b)][_0x196182(0x3d4)](prefix)?_0xf543a4[_0x196182(0x193)]['extendedTextMessage'][_0x196182(0x29b)]:'',budy=_0x4f6e94===_0x196182(0x19a)?_0xf543a4[_0x196182(0x193)][_0x196182(0x19a)]:_0x4f6e94===_0x196182(0x2e1)?_0xf543a4['message'][_0x196182(0x2e1)][_0x196182(0x29b)]:'';const _0x1fc7c9=body[_0x196182(0x160)](0x0)[_0x196182(0x30f)]()[_0x196182(0x34a)](/ +/)[_0x196182(0x14b)]()['toLowerCase']();hit_today[_0x196182(0x257)](_0x1fc7c9);const _0x2e5875=budy[_0x196182(0x160)](_0x1fc7c9[_0x196182(0x3e1)]+0x1,budy['length']),_0x353e66=body[_0x196182(0x30f)]()[_0x196182(0x34a)](/ +/)[_0x196182(0x160)](0x1),_0x44bb25=body[_0x196182(0x3d4)](prefix),_0x3e4ab9=_0x353e66[_0x196182(0x383)]('\x20'),_0x2cd642=_0x446871[_0x196182(0x3dd)][_0x196182(0x2b7)],_0x3b88f7=['50373488366@s.whatsapp.net'],_0x176503=_0x24b867['endsWith'](_0x196182(0x1c1)),_0x4f108c=_0x176503?_0xf543a4[_0x196182(0x16f)]:_0xf543a4[_0x196182(0x125)][_0x196182(0x38a)],_0x35b488=_0xf543a4[_0x196182(0x16f)],_0x57fe75=_0x3b88f7['includes'](_0x4f108c),_0xff6e92=_0x2cd642[_0x196182(0x11c)](_0x35b488),_0x480925=await _0x446871[_0x196182(0x386)][_0x196182(0x358)](),_0x313eca=_0x176503?await _0x446871[_0x196182(0x299)](_0x24b867):'',_0x36ab81=_0x176503?_0x313eca[_0x196182(0x3ca)]:'',_0x2d4f8d=_0x176503?_0x313eca[_0x196182(0x2b7)]:'',_0x1ab715=_0x176503?_0x313eca[_0x196182(0x148)]:'',_0x201554=_0x176503?_0x313eca[_0x196182(0x321)]:'',_0x9c8970=_0x176503?_0x313eca[_0x196182(0x333)]:'',_0xf1fbe4=_0x176503?getGroupAdmins(_0x1ab715):'',_0xb700d6=_0xf1fbe4[_0x196182(0x11c)](_0x2cd642)||![],_0x57ac26=_0xf1fbe4[_0x196182(0x11c)](_0x4f108c)||![],_0x5a9684=_0xf543a4['key'][_0x196182(0x1c7)]?_0x446871[_0x196182(0x3dd)][_0x196182(0x2b7)]:_0x446871['contacts'][_0x4f108c]||{'notify':jid[_0x196182(0x26e)](/@.+/,'')},_0x451f1b=_0xf543a4[_0x196182(0x125)][_0x196182(0x1c7)]?_0x446871[_0x196182(0x3dd)][_0x196182(0x1f7)]:_0x5a9684['notify']||_0x5a9684[_0x196182(0x3e0)]||_0x5a9684[_0x196182(0x1f7)]||'-';mess={'wait':_0x196182(0x2cd),'success':_0x196182(0x2ce),'wrongFormat':'Formato\x20incorrecto,\x20intenta\x20denuevo\x20UwU','error':{'stick':'No\x20pude\x20convertirlo,\x20perdon\x20T~T','Iv':_0x196182(0x16e)},'only':{'group':'Solo\x20en\x20grupos\x20ÙnÚ','admin':_0x196182(0x285),'Badmin':_0x196182(0x15c)}};const _0x215ee0=_0x44ced6=>{const _0x1711df=_0x196182;return _0x44ced6[_0x1711df(0x3bb)](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,'gi'));},_0x5e4187=_0xace5e9=>{const _0x198d09=_0x196182;_0x446871[_0x198d09(0x314)](_0x24b867,_0xace5e9,_0x52614d,{'quoted':_0xf543a4});},_0x17786d=(_0x12e1ac,_0x34cd21)=>{const _0x20b658=_0x196182;_0x446871[_0x20b658(0x314)](_0x12e1ac,_0x34cd21,_0x52614d,{'sendEphemeral':!![]});},_0xdbacf8=(_0x139a47,_0x74266e,_0x515ab4)=>{const _0x5b0188=_0x196182;_0x515ab4==null||_0x515ab4==undefined||_0x515ab4==![]?_0x446871[_0x5b0188(0x314)](_0x24b867,_0x139a47['trim'](),_0x12886d,{'contextInfo':{'mentionedJid':_0x74266e}}):_0x446871[_0x5b0188(0x314)](_0x24b867,_0x139a47[_0x5b0188(0x30f)](),_0x12886d,{'quoted':_0xf543a4,'contextInfo':{'mentionedJid':_0x74266e}});},_0x3c2a39=_0x5dfabe=>{const _0x451edc=_0x196182;_0x446871[_0x451edc(0x314)](_0x24b867,_0x5dfabe,MessageType['text'],{'quoted':{'key':{'fromMe':![],'participant':_0x451edc(0x2bc),..._0x24b867?{'remoteJid':_0x451edc(0x2bc)}:{}},'message':{'contactMessage':{'displayName':_0x451edc(0x171)+_0x451f1b,'vcard':_0x451edc(0x2d8)+_0x56c581+_0x451edc(0x38c)+_0x56c581+_0x451edc(0x2aa)+_0x4f108c[_0x451edc(0x34a)]('@')[0x0]+':'+_0x4f108c[_0x451edc(0x34a)]('@')[0x0]+_0x451edc(0x357),'jpegThumbnail':fs[_0x451edc(0x2f8)]('./stik/thumb.jpeg')}}}});},_0x4c514e=(_0x179f37,_0x3937f7)=>{const _0x3192f3=_0x196182;_0x446871['sendMessage'](_0x24b867,_0x179f37,_0x5909a9,{'thumbnail':fs['readFileSync'](_0x3192f3(0x187)),'quoted':_0xf543a4,'caption':_0x3937f7});},_0x5cffe0=_0x243262=>{const _0x441a1c=_0x196182;_0x446871[_0x441a1c(0x314)](_0x24b867,_0x243262,_0x52614d,{'quoted':{'key':{'fromMe':![],'participant':_0x441a1c(0x2bc),..._0x24b867?{'remoteJid':_0x441a1c(0x363)}:{}},'message':{'imageMessage':{'url':_0x441a1c(0x2a2),'mimetype':_0x441a1c(0x3da),'caption':_0x441a1c(0x24e)+_0x451f1b,'fileSha256':_0x441a1c(0x269),'fileLength':_0x441a1c(0x3bd),'height':0x438,'width':0x437,'mediaKey':'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','fileEncSha256':_0x441a1c(0x3b3),'directPath':_0x441a1c(0x32f),'mediaKeyTimestamp':'1610993486','jpegThumbnail':fs['readFileSync']('./stik/thumb.jpeg'),'scansSidecar':_0x441a1c(0x1a8)}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]}}});},_0x14e199=_0x57616c=>{const _0x56b78f=_0x196182;_0x446871[_0x56b78f(0x314)](_0x24b867,_0x57616c,_0x52614d,{'quoted':{'key':{'fromMe':![],'participant':_0x56b78f(0x2bc),..._0x24b867?{'remoteJid':_0x56b78f(0x3c3)}:{}},'message':{'imageMessage':{'url':_0x56b78f(0x2a2),'mimetype':'image/jpeg','caption':_0x56b78f(0x196)+_0x451f1b,'fileSha256':'+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','fileLength':_0x56b78f(0x3bd),'height':0x438,'width':0x437,'mediaKey':'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','fileEncSha256':'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','directPath':'/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','mediaKeyTimestamp':'1610993486','jpegThumbnail':fs[_0x56b78f(0x2f8)](_0x56b78f(0x12c)),'scansSidecar':_0x56b78f(0x1a8)}}}});},_0x544350=_0x5ace55=>{const _0xdb49ad=_0x196182;_0x446871[_0xdb49ad(0x314)](_0x24b867,_0x5ace55,_0x52614d,{'quoted':{'key':{'fromMe':![],'participant':_0xdb49ad(0x2bc),..._0x24b867?{'remoteJid':_0xdb49ad(0x363)}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':_0xdb49ad(0x3da),'jpegThumbnail':fs[_0xdb49ad(0x2f8)](_0xdb49ad(0x12c))},'title':_0xdb49ad(0x329)+_0x451f1b,'productImageCount':0x270f},'businessOwnerJid':_0xdb49ad(0x2bc)}}}});},_0x3a47b5=_0x479683=>{const _0x255328=_0x196182;_0x25f94e={'key':{'fromMe':![],'participant':_0x255328(0x2bc),..._0x24b867?{'remoteJid':'status@broadcast'}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':'image/jpeg','jpegThumbnail':fs[_0x255328(0x2f8)]('./stik/thumb.jpeg')},'title':_0x255328(0x196)+_0x451f1b+',\x20'+_0x56c581,'retailerId':'Self\x20Bot','productImageCount':0x1},'businessOwnerJid':_0x255328(0x2bc)}}},_0x446871['sendMessage'](_0x24b867,_0x479683,_0x52614d,{'quoted':_0x25f94e,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]}});},_0xdf1892=async(_0x22a9b8,_0x307a73)=>{const _0x556efd=_0x196182;var _0x1b2c13=Date[_0x556efd(0x27a)]()/0x2710,_0x17c356=function(_0x56be3d,_0x4ba60d,_0xdd05e3){const _0x4c5f87=_0x556efd;request[_0x4c5f87(0x3a8)](_0x56be3d,function(_0x28144b,_0x3aaefe,_0x19997b){const _0x5428f7=_0x4c5f87;request(_0x56be3d)[_0x5428f7(0x1e8)](fs[_0x5428f7(0x26d)](_0x4ba60d))['on'](_0x5428f7(0x239),_0xdd05e3);});};_0x17c356(_0x307a73,_0x556efd(0x388)+_0x1b2c13+_0x556efd(0x1fa),async function(){const _0x4d58e2=_0x556efd;console[_0x4d58e2(0x3b8)]('selesai');let _0x501389=_0x4d58e2(0x388)+_0x1b2c13+_0x4d58e2(0x1fa),_0x140b25=_0x4d58e2(0x388)+_0x1b2c13+'.webp';exec(_0x4d58e2(0x212)+_0x501389+_0x4d58e2(0x22c)+_0x140b25,_0x34e0a8=>{const _0x24d178=_0x4d58e2;let _0x1e2f2e=fs[_0x24d178(0x2f8)](_0x140b25);_0x446871[_0x24d178(0x314)](_0x22a9b8,_0x1e2f2e,MessageType[_0x24d178(0x226)],{'quoted':_0xf543a4}),fs[_0x24d178(0x38d)](_0x501389),fs[_0x24d178(0x38d)](_0x140b25);});});},_0x106dee=async(_0x10bef8,_0x1e9a2d,_0x55fbb9='',_0x41908c=[])=>{const _0x50294b=_0x196182;_0x41908c[_0x50294b(0x3e1)]>0x0&&(_0x55fbb9=normalizeMention(_0x10bef8,_0x55fbb9,_0x41908c));const _0x35b269=Date[_0x50294b(0x27a)]()/0x2710,_0x230151=_0x35b269[_0x50294b(0x260)]();let _0x1ca17a='';var _0x1f1e54=function(_0x2ff958,_0x4e9a36,_0x1c110e){const _0x257c2c=_0x50294b;request[_0x257c2c(0x3a8)](_0x2ff958,function(_0x1d2f9a,_0x599323,_0x29950d){const _0x26b48b=_0x257c2c;_0x1ca17a=_0x599323[_0x26b48b(0x308)][_0x26b48b(0x36c)],request(_0x2ff958)['pipe'](fs[_0x26b48b(0x26d)](_0x4e9a36))['on'](_0x26b48b(0x239),_0x1c110e);});};_0x1f1e54(_0x1e9a2d,_0x230151,async function(){const _0x3756de=_0x50294b;console[_0x3756de(0x3b8)](_0x3756de(0x324));let _0x2f8562=fs[_0x3756de(0x2f8)](_0x230151),_0x1a15e5=_0x1ca17a['split']('/')[0x0]+'Message';_0x1ca17a===_0x3756de(0x1a5)&&(_0x1a15e5=MessageType[_0x3756de(0x189)],_0x1ca17a=Mimetype['gif']),_0x1ca17a[_0x3756de(0x34a)]('/')[0x0]===_0x3756de(0x1cb)&&(_0x1ca17a=Mimetype[_0x3756de(0x30e)]),_0x446871[_0x3756de(0x314)](_0x10bef8,_0x2f8562,_0x1a15e5,{'quoted':_0xf543a4,'mimetype':_0x1ca17a,'caption':_0x55fbb9,'contextInfo':{'mentionedJid':_0x41908c}}),fs[_0x3756de(0x38d)](_0x230151);});};cekafk(afk);if(!_0xf543a4[_0x196182(0x125)]['remoteJid'][_0x196182(0x1e9)]('@g.us')&&offline){if(!_0xf543a4['key'][_0x196182(0x1c7)]){if(isAfk(_0xf543a4[_0x196182(0x125)][_0x196182(0x38a)]))return;addafk(_0xf543a4[_0x196182(0x125)]['remoteJid']),heheh=ms(Date[_0x196182(0x27a)]()-waktu),_0x446871[_0x196182(0x314)](_0xf543a4[_0x196182(0x125)][_0x196182(0x38a)],'@'+owner+'\x20Sedang\x20Offline!\x0a\x0a*Alasan\x20:*\x20'+alasan+_0x196182(0x3c0)+heheh['hours']+_0x196182(0x2c9)+heheh['minutes']+_0x196182(0x176)+heheh[_0x196182(0x157)]+_0x196182(0x270),MessageType[_0x196182(0x29b)],{'contextInfo':{'mentionedJid':[owner+_0x196182(0x170)],'stanzaId':_0x196182(0x334),'participant':'0@s.whatsapp.net','remoteJid':'status@broadcast','quotedMessage':{'imageMessage':{'caption':_0x196182(0x133),'jpegThumbnail':fs['readFileSync'](_0x196182(0x12c))}}}});}}if(_0xf543a4[_0x196182(0x125)][_0x196182(0x38a)][_0x196182(0x1e9)](_0x196182(0x1c1))&&offline){if(!_0xf543a4[_0x196182(0x125)]['fromMe']){if(_0xf543a4['message'][_0x196182(0x2e1)]!=undefined){if(_0xf543a4['message'][_0x196182(0x2e1)][_0x196182(0x210)]!=undefined){if(_0xf543a4['message']['extendedTextMessage'][_0x196182(0x210)][_0x196182(0x14d)]!=undefined)for(let _0x303153 of _0xf543a4[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)][_0x196182(0x14d)]){if(_0x303153===owner+_0x196182(0x170)){if(isAfk(_0xf543a4[_0x196182(0x125)][_0x196182(0x38a)]))return;addafk(_0xf543a4[_0x196182(0x125)]['remoteJid']),heheh=ms(Date['now']()-waktu),_0x446871[_0x196182(0x314)](_0xf543a4['key'][_0x196182(0x38a)],'@'+owner+_0x196182(0x3d0)+alasan+_0x196182(0x18a)+heheh[_0x196182(0x14f)]+_0x196182(0x2c9)+heheh[_0x196182(0x178)]+_0x196182(0x176)+heheh[_0x196182(0x157)]+_0x196182(0x270),MessageType[_0x196182(0x29b)],{'contextInfo':{'mentionedJid':[owner+_0x196182(0x170)],'stanzaId':_0x196182(0x334),'participant':_0x196182(0x2bc),'remoteJid':'status@broadcast','quotedMessage':{'imageMessage':{'caption':_0x196182(0x133),'jpegThumbnail':fs['readFileSync'](_0x196182(0x12c))}}}});}}}}}}const _0x304f4f=_0x12c6ac=>{const _0xc71126=_0x196182;let _0x22f4f5=![];Object[_0xc71126(0x284)](_level)['forEach'](_0x246ca2=>{_level[_0x246ca2]['id']===_0x12c6ac&&(_0x22f4f5=_0x246ca2);});if(_0x22f4f5!==![])return _level[_0x22f4f5]['xp'];},_0x15d78f=(_0x338b71,_0x1d383a,_0x1b14e0,_0x44ef9d,_0x460da7)=>{const _0x16c33b=_0x196182,_0x5415f1={'id':_0x338b71,'name':_0x1d383a,'age':_0x1b14e0,'time':_0x44ef9d,'serial':_0x460da7};user['push'](_0x5415f1),fs[_0x16c33b(0x2d6)]('./database/user.json',JSON[_0x16c33b(0x3d9)](user));},_0x1386b8=_0x5dea2c=>{const _0x1f081c=_0x196182;return crypto['randomBytes'](_0x5dea2c)[_0x1f081c(0x260)](_0x1f081c(0x296))[_0x1f081c(0x160)](0x0,_0x5dea2c);},_0x401089=_0x30a56d=>{const _0x34b4cb=_0x196182;let _0x3b09e7=![];Object[_0x34b4cb(0x284)](_level)[_0x34b4cb(0x1a4)](_0x5c1fea=>{_level[_0x5c1fea]['id']===_0x30a56d&&(_0x3b09e7=_0x5c1fea);});if(_0x3b09e7!==![])return _level[_0x3b09e7][_0x34b4cb(0x376)];},_0x11280a=_0x1727e7=>{const _0x2bdca7=_0x196182;let _0x4e5c15=![];Object[_0x2bdca7(0x284)](_level)[_0x2bdca7(0x1a4)](_0x462769=>{_level[_0x462769]['id']===_0x1727e7&&(_0x4e5c15=_0x462769);});if(_0x4e5c15!==![])return _level[_0x4e5c15]['id'];},_0x19ac84=(_0x321619,_0x247fa7)=>{const _0x461f05=_0x196182;let _0x2e396c=![];Object[_0x461f05(0x284)](_level)[_0x461f05(0x1a4)](_0x18600b=>{_level[_0x18600b]['id']===_0x321619&&(_0x2e396c=_0x18600b);}),_0x2e396c!==![]&&(_level[_0x2e396c]['xp']+=_0x247fa7,fs[_0x461f05(0x2d6)](_0x461f05(0x33f),JSON['stringify'](_level)));},_0x540c3c=(_0x364308,_0x2c58c1)=>{const _0x590960=_0x196182;let _0x1b8e38=![];Object[_0x590960(0x284)](_level)[_0x590960(0x1a4)](_0x4255c8=>{_level[_0x4255c8]['id']===_0x364308&&(_0x1b8e38=_0x4255c8);}),_0x1b8e38!==![]&&(_level[_0x1b8e38][_0x590960(0x376)]+=_0x2c58c1,fs[_0x590960(0x2d6)](_0x590960(0x33f),JSON[_0x590960(0x3d9)](_level)));},_0x246bd9=_0x3e5c16=>{const _0x160105=_0x196182,_0x3ba157={'id':_0x3e5c16,'xp':0x1,'level':0x1};_level['push'](_0x3ba157),fs[_0x160105(0x2d6)](_0x160105(0x33f),JSON[_0x160105(0x3d9)](_level));};var _0x5ed702=_0x196182(0x1fb);const _0x81bda1=0x1388*(Math['pow'](0x2,_0x401089(_0x4f108c))-0x1),_0x1cb089=_0x81bda1-_0x304f4f(_0x4f108c),_0x349222=Math['round'](0x64-_0x1cb089/_0x304f4f(_0x4f108c)*0x64);if(_0x349222<=0xa)_0x5ed702=_0x196182(0x1f2)+_0x349222+'%*';else{if(_0x349222<=0x14)_0x5ed702=_0x196182(0x22b)+_0x349222+'%*';else{if(_0x349222<=0x1e)_0x5ed702=_0x196182(0x12e)+_0x349222+'%*';else{if(_0x349222<=0x28)_0x5ed702=_0x196182(0x32e)+_0x349222+'%*';else{if(_0x349222<=0x32)_0x5ed702='*[█████▒▒▒▒▒]\x20'+_0x349222+'%*';else{if(_0x349222<=0x3c)_0x5ed702=_0x196182(0x200)+_0x349222+'%*';else{if(_0x349222<=0x46)_0x5ed702=_0x196182(0x244)+_0x349222+'%*';else{if(_0x349222<=0x50)_0x5ed702=_0x196182(0x217)+_0x349222+'%*';else{if(_0x349222<=0x5a)_0x5ed702=_0x196182(0x32d)+_0x349222+'%*';else _0x349222<=0x64&&(_0x5ed702=_0x196182(0x246)+_0x349222+'%*');}}}}}}}}const _0x3def96=_0x401089(_0x4f108c);var _0x2d719b=_0x196182(0x2f2);if(_0x3def96<=0x3)_0x2d719b=_0x196182(0x1ae);else{if(_0x3def96<=0x5)_0x2d719b=_0x196182(0x23a);else{if(_0x3def96<=0x7)_0x2d719b=_0x196182(0x1e4);else{if(_0x3def96<=0x8)_0x2d719b=_0x196182(0x2c5);else{if(_0x3def96<=0x9)_0x2d719b=_0x196182(0x140);else{if(_0x3def96<=0xa)_0x2d719b=_0x196182(0x3b1);else{if(_0x3def96<=0xb)_0x2d719b=_0x196182(0x122);else{if(_0x3def96<=0xc)_0x2d719b=_0x196182(0x15f);else{if(_0x3def96<=0xd)_0x2d719b=_0x196182(0x35a);else{if(_0x3def96<=0xe)_0x2d719b=_0x196182(0x36d);else{if(_0x3def96<=0xe)_0x2d719b=_0x196182(0x20f);else{if(_0x3def96<=0xf)_0x2d719b=_0x196182(0x387);else{if(_0x3def96<=0x10)_0x2d719b=_0x196182(0x283);else{if(_0x3def96<=0x11)_0x2d719b=_0x196182(0x21e);else{if(_0x3def96<=0x12)_0x2d719b=_0x196182(0x2c0);else{if(_0x3def96<=0x13)_0x2d719b=_0x196182(0x33c);else{if(_0x3def96<=0x14)_0x2d719b=_0x196182(0x132);else{if(_0x3def96<=0x15)_0x2d719b=_0x196182(0x28a);else{if(_0x3def96<=0x16)_0x2d719b=_0x196182(0x12f);else _0x3def96<=0x17&&(_0x2d719b=_0x196182(0x15b));}}}}}}}}}}}}}}}}}}const _0x56b1a7=(_0x3785e5,_0xe72515,_0x465aca,_0x1eb14a,_0x3db8cb,_0x1ce163)=>{const _0x4108cf=_0x196182;_0x3c2a39(_0x4108cf(0x318)+_0x3785e5+_0x4108cf(0x2c8)+_0xe72515[_0x4108cf(0x34a)]('@')[0x0]+_0x4108cf(0x184)+_0x465aca(_0xe72515)+_0x4108cf(0x354)+_0x1ce163+_0x4108cf(0x398)+_0x1eb14a+_0x4108cf(0x339)+_0x3db8cb(_0xe72515));};if(_0x176503){const _0x2a2aad=_0x401089(_0x4f108c),_0x5180e9=_0x11280a(_0x4f108c);try{if(_0x2a2aad===undefined&&_0x5180e9===undefined)_0x246bd9(_0x4f108c);const _0x1ea63c=Math[_0x196182(0x36a)](Math[_0x196182(0x1b2)]()*0xa)+0x1f4,_0x24eefc=0x1388*(Math[_0x196182(0x1d0)](0x2,_0x2a2aad)-0x1),_0x171d2d=_0x401089(_0x4f108c);_0x19ac84(_0x4f108c,_0x1ea63c),_0x24eefc<=_0x304f4f(_0x4f108c)&&(_0x540c3c(_0x4f108c,0x1),await _0x5cffe0(_0x56b1a7(_0x451f1b,_0x4f108c,_0x304f4f,_0x171d2d,_0x401089,_0x2d719b)));}catch(_0x2faa5a){console[_0x196182(0x356)](_0x2faa5a);}}const _0x4d2a90=moment()['format']('HH');var _0x56c581='wenas👋';if(_0x4d2a90>='03'&&_0x4d2a90<='10')_0x56c581=_0x196182(0x335);else{if(_0x4d2a90>='10'&&_0x4d2a90<='14')_0x56c581='wenas👋';else{if(_0x4d2a90>='14'&&_0x4d2a90<='17')_0x56c581=_0x196182(0x335);else{if(_0x4d2a90>='17'&&_0x4d2a90<='18')_0x56c581=_0x196182(0x335);else _0x4d2a90>='18'&&_0x4d2a90<='23'?_0x56c581=_0x196182(0x2d7):_0x56c581=_0x196182(0x2d7);}}}colors=[_0x196182(0x249)];const _0x4506a5=_0x4f6e94===_0x196182(0x156)||_0x4f6e94===_0x196182(0x2af),_0x44b2cb=_0x4f6e94===_0x196182(0x2e1)&&_0x2b4b62[_0x196182(0x11c)](_0x196182(0x156)),_0x657b7f=_0x4f6e94==='extendedTextMessage'&&_0x2b4b62['includes'](_0x196182(0x2af)),_0x35df3e=_0x4f6e94==='extendedTextMessage'&&_0x2b4b62[_0x196182(0x11c)](_0x196182(0x11f)),_0x21e922=_0x4f6e94===_0x196182(0x2e1)&&_0x2b4b62[_0x196182(0x11c)](_0x196182(0x368)),_0x4b639d=_0x4f6e94===_0x196182(0x2e1)&&_0x2b4b62[_0x196182(0x11c)]('documentMessage');if(!_0x176503&&_0x44bb25)console[_0x196182(0x3b8)](_0x196182(0x271),'[\x20\x1b[1;36mEXECC\x1b[1;37m\x20]',_0x3ce644,color(_0x1fc7c9),'from',color(_0x4f108c['split']('@')[0x0]));if(_0x44bb25&&_0x176503)console['log'](_0x196182(0x271),_0x196182(0x2b6),_0x3ce644,color(_0x1fc7c9),'from',color(_0x4f108c['split']('@')[0x0]),'in',color(_0x36ab81));if(!_0xf543a4[_0x196182(0x125)][_0x196182(0x1c7)]&&banChats===!![])return;switch(_0x1fc7c9){case prefix+_0x196182(0x161):case prefix+_0x196182(0x234):case prefix+'?':let _0x3101a2=[],_0x287a1c=[];for(_0x6b0d93 of _0x480925){_0x3101a2[_0x196182(0x257)](_0x6b0d93[_0x196182(0x2b7)]);}for(id of _0x3101a2){id&&id[_0x196182(0x11c)]('g.us')&&_0x287a1c[_0x196182(0x257)](id);}let _0x5c1bf4=speed(),_0x731008=speed()-_0x5c1bf4;var {device_manufacturer:_0xc161c,device_model:_0x546f9c,mcc:_0x484b7c,mnc:_0x7a7d55,os_version:_0x3b036b,os_build_number:_0x4eccf6,wa_version:_0xbbad9d}=_0x446871[_0x196182(0x3dd)]['phone'];_0x25f94e=process[_0x196182(0x24f)](),runtem=''+kyun(_0x25f94e);var _0x35b7ee='\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SATANCITO\x20ᵈᵃʳʸ⛥\x0a\x20\x20\x20\x20\x0aBlackpink\x20\x20-\x20\x20How\x20you\x20like\x20that\x20\x0a01:52\x20━━━●─────\x2003:08\x0a\x20\x20\x20\x20\x20⇆ㅤㅤ\x20◁ㅤ\x20❚❚ㅤ\x20▷ㅤ\x20ㅤ↻\ufeff\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ılıılıılıılıılıılı\x0aᴠᴏʟᴜᴍᴇ\x20:\x20▮▮▮▮▮▮▮▯▯▯\x20\x0a\x0a-\x20*Hits\x20de\x20hoy\x20:\x20'+hit_today['length']+_0x196182(0x29a)+_0xc161c+'\x0a-\x20*Modelo\x20:*\x20'+_0x546f9c+_0x196182(0x1ad)+(process[_0x196182(0x147)]()[_0x196182(0x247)]/0x400/0x400)[_0x196182(0x137)](0x2)+_0x196182(0x34b)+Math[_0x196182(0x2f9)](require('os')[_0x196182(0x243)]/0x400/0x400)+_0x196182(0x1e7)+_0x3b036b+'\x0a-\x20*Versión\x20de\x20WhatsApp*\x20:\x20'+_0xbbad9d+_0x196182(0x379)+_0x287a1c[_0x196182(0x3e1)]+_0x196182(0x2e5)+(_0x480925[_0x196182(0x3e1)]-_0x287a1c['length'])+_0x196182(0x2e7)+_0x480925[_0x196182(0x3e1)]+_0x196182(0x221)+_0x731008['toFixed'](0x4)+_0x196182(0x19c)+runtem+_0x196182(0x2fb)+prefix+_0x196182(0x1db)+prefix+_0x196182(0x332)+prefix+_0x196182(0x389)+prefix+_0x196182(0x3a2)+prefix+_0x196182(0x183)+prefix+_0x196182(0x37a)+prefix+_0x196182(0x1f3)+prefix+_0x196182(0x35b)+prefix+_0x196182(0x311)+prefix+_0x196182(0x211)+prefix+_0x196182(0x1b7)+prefix+_0x196182(0x175)+prefix+_0x196182(0x25e)+prefix+_0x196182(0x180)+prefix+'setfakeimg*\x0a├\x20*'+prefix+_0x196182(0x348)+prefix+_0x196182(0x27e)+prefix+'settarget*\x0a├\x20*'+prefix+'covidindo*\x0a├\x20*'+prefix+_0x196182(0x129)+prefix+_0x196182(0x1a7)+prefix+_0x196182(0x21f)+prefix+_0x196182(0x1bc)+prefix+_0x196182(0x2c6)+prefix+_0x196182(0x361)+prefix+_0x196182(0x2dd)+prefix+_0x196182(0x139)+prefix+_0x196182(0x264)+prefix+_0x196182(0x29e)+prefix+'pinterest*\x20[\x20random\x20]\x0a├\x20*'+prefix+_0x196182(0x23d)+prefix+_0x196182(0x1e5)+prefix+_0x196182(0x2ec)+prefix+_0x196182(0x2eb)+prefix+_0x196182(0x1e2)+prefix+_0x196182(0x1ee)+prefix+_0x196182(0x3a5)+prefix+_0x196182(0x317)+prefix+_0x196182(0x37b)+prefix+_0x196182(0x292)+prefix+_0x196182(0x3bc)+prefix+'toimg*\x20[\x20sticker\x20>\x20image\x20]\x0a├\x20*'+prefix+'tovid*\x20[\x20sticker\x20>\x20video]\x0a├\x20*'+prefix+'tomp3*\x20[\x20sticker\x20>\x20mp3]\x0a├\x20*'+prefix+_0x196182(0x19e)+prefix+'fast*\x20[\x20video\x20>\x20fast\x20]\x0a├\x20*'+prefix+_0x196182(0x255)+prefix+_0x196182(0x391)+prefix+'upswteks*\x0a├\x20*'+prefix+_0x196182(0x381)+prefix+'upswvideo*\x0a├\x20*'+prefix+'herolist*\x0a├\x20*'+prefix+'herodetail*\x20[\x20Barats\x20]\x0a├\x20*'+prefix+_0x196182(0x32a)+prefix+'ig*\x20[\x20link\x20]\x20\x0a├\x20*'+prefix+_0x196182(0x120)+prefix+_0x196182(0x2e6)+prefix+_0x196182(0x32c)+prefix+'ytmp4*\x20[\x20link\x20]\x20\x0a├\x20*'+prefix+_0x196182(0x130)+prefix+_0x196182(0x310)+prefix+_0x196182(0x12b)+prefix+'tiktokaudio*\x20[\x20link\x20]\x20\x0a├\x20*'+prefix+_0x196182(0x2ee)+prefix+_0x196182(0x38b)+prefix+_0x196182(0x182)+prefix+_0x196182(0x3e3)+prefix+_0x196182(0x236)+prefix+'promote*\x20[\x20tag\x20member\x20]\x0a├\x20*'+prefix+_0x196182(0x3a9)+prefix+'kontak*\x20[\x20628xx|aku\x20]\x0a├\x20*'+prefix+_0x196182(0x347)+prefix+'sticktag*\x20[\x20sticker\x20>\x20tag\x20]\x0a├\x20*'+prefix+'giftag*\x20[\x20gif\x20>\x20tag\x20]\x0a├\x20*'+prefix+_0x196182(0x3c4)+prefix+_0x196182(0x364)+prefix+'totag*\x20[\x20media\x20>\x20tag\x20]\x0a├\x20*'+prefix+_0x196182(0x1f9)+prefix+'term*\x20[\x20code\x20]\x0a├\x20*'+prefix+_0x196182(0x1d7)+prefix+'speed*\x0a╰─\x20SATANCITO\x20ᵈᵃʳʸ⛥\x20\x0a√Eli.Hopeˢᵃᵗᵃⁿ💞\x0a√Satancitoᵈᵃʳʸ💞\x0a√Daricitaˢᵃᵗᵃⁿ💖\x0a√Mr.Patitoᵉᵛᵒˡᵉᵗ🦆\x0a√Felixcitoᵇʳⁱ🌚\x0a';_0x3a47b5(_0x35b7ee);break;case prefix+'on':if(!_0xf543a4[_0x196182(0x125)][_0x196182(0x1c7)])return;offline=![],_0x5cffe0(_0x196182(0x1e1));break;case prefix+_0x196182(0x1fd):if(!_0xf543a4['key'][_0x196182(0x1c7)])return;offline=!![],waktu=Date[_0x196182(0x27a)](),anuu=_0x353e66[_0x196182(0x383)]('\x20')?_0x353e66['join']('\x20'):'-',alasan=anuu,_0x5cffe0(_0x196182(0x302));break;case prefix+_0x196182(0x1bb):_0x5cffe0(_0x196182(0x2fc)+(offline?'>\x20OFFLINE':_0x196182(0x224))+'\x0a'+(banChats?'>\x20SELF-MODE':_0x196182(0x1e3)));break;case prefix+'self':if(!_0xf543a4[_0x196182(0x125)][_0x196182(0x1c7)])return _0x5cffe0(_0x196182(0x17e));if(banChats===!![])return;uptime=process[_0x196182(0x24f)](),banChats=!![],_0x5cffe0(_0x196182(0x267));break;case prefix+'public':if(!_0xf543a4[_0x196182(0x125)][_0x196182(0x1c7)])return _0x5cffe0(_0x196182(0x17e));if(banChats===![])return;banChats=![],_0x5cffe0('「\x20*PUBLICO\x20OwO*\x20」');break;case prefix+_0x196182(0x2db):_0x446871['toggleDisappearingMessages'](_0x24b867,WA_DEFAULT_EPHEMERAL);break;case prefix+_0x196182(0x369):_0x446871[_0x196182(0x218)](_0x24b867,0x0);break;case prefix+_0x196182(0x1d3):if(!_0xff6e92)return _0x5e4187(_0x196182(0x17e));if(!_0x2e5875)return _0x5e4187(_0x196182(0x1b6)+prefix+'spam\x20teks|jumlahspam');argz=_0x2e5875[_0x196182(0x34a)]('|');if(!argz)return _0x5e4187(_0x196182(0x1b6)+prefix+_0x196182(0x15a));if(isNaN(argz[0x1]))return _0x5e4187('harus\x20berupa\x20angka');for(let _0x27fb92=0x0;_0x27fb92<argz[0x1];_0x27fb92++){_0x446871[_0x196182(0x314)](_0x24b867,argz[0x0],MessageType[_0x196182(0x29b)],{'sendEphemeral':!![]});}break;case prefix+_0x196182(0x31f):if(!_0xff6e92)return _0x5e4187(_0x196182(0x17e));_0x446871[_0x196182(0x188)](_0x24b867,ChatModification[_0x196182(0x31f)],0x18*0x3c*0x3c*0x3e8),_0x5e4187(_0x196182(0x3d7)),console[_0x196182(0x3b8)](_0x196182(0x3ac)+_0x24b867);break;case prefix+_0x196182(0x24b):if(!_0xff6e92)return _0x5e4187(_0x196182(0x17e));_0x446871['modifyChat'](_0x24b867,ChatModification[_0x196182(0x24b)]),_0x5e4187(_0x196182(0x3c9)),console['log'](_0x196182(0x1de)+_0x24b867);break;case prefix+_0x196182(0x154):if(!_0xff6e92)return _0x5e4187('No\x20eres\x20mi\x20dueño\x20UnU');_0x5e4187('*Chats\x20borrados\x207n7*'),console['log'](_0x196182(0x12a)+_0x24b867),_0x446871[_0x196182(0x188)](_0x24b867,ChatModification[_0x196182(0x154)]);break;case prefix+_0x196182(0x3b0):case prefix+_0x196182(0x3bf):if(_0xff6e92)return'Especialmente\x20hermano,\x20¿quién\x20eres??';if(!_0x3e4ab9)return _0x14e199(mess['wrongFormat']);fake=_0x3e4ab9,_0x14e199(_0x196182(0x22e)+_0x3e4ab9);break;case prefix+_0x196182(0x3c5):if(_0xff6e92)return _0x196182(0x2ba);(_0x4506a5&&!_0xf543a4['message']['videoMessage']||_0x44b2cb||_0x21e922)&&_0x353e66[_0x196182(0x3e1)]==0x0?(boij=_0x44b2cb||_0x21e922?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)['replace']('quotedM','m'))['message']['extendedTextMessage'][_0x196182(0x210)]:_0xf543a4,delb=await _0x446871['downloadMediaMessage'](boij),fs[_0x196182(0x2d6)]('./stik/fake.jpeg',delb),_0x5cffe0(_0x196182(0x1ac))):_0x5e4187(_0x196182(0x20b)+prefix+'sethumb');break;case prefix+_0x196182(0x15d):if(_0xff6e92)return _0x196182(0x2ba);prefix=_0x3e4ab9,_0x14e199(_0x196182(0x20a)+_0x3e4ab9);break;case prefix+_0x196182(0x155):if(_0xff6e92)return _0x196182(0x2ba);(_0x4506a5&&!_0xf543a4[_0x196182(0x193)][_0x196182(0x2af)]||_0x44b2cb||_0x21e922)&&_0x353e66[_0x196182(0x3e1)]==0x0?(boij=_0x44b2cb||_0x21e922?JSON['parse'](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)]('quotedM','m'))['message'][_0x196182(0x2e1)][_0x196182(0x210)]:_0xf543a4,delb=await _0x446871[_0x196182(0x320)](boij),fs[_0x196182(0x2d6)](_0x196182(0x12c),delb),_0x5cffe0('Hecho\x20mi\x20amo\x207~7')):_0x5e4187('Kirim\x20gambar\x20dengan\x20caption\x20'+prefix+_0x196182(0x14e));break;case prefix+_0x196182(0x327):if(_0xff6e92)return _0x196182(0x2ba);if(!_0x3e4ab9)return _0x5e4187(prefix+_0x196182(0x1b0));targetpc=_0x353e66[0x0],_0x14e199(_0x196182(0x168)+targetpc);break;case prefix+_0x196182(0x1d1):if(!_0xff6e92)return _0x5e4187(_0x196182(0x1bd));if(!_0x3e4ab9)return _0x14e199(mess[_0x196182(0x2a9)]);exec(_0x3e4ab9,(_0x4c8080,_0x437a3e)=>{if(_0x4c8080)return _0x14e199('pato@self:~$\x20'+_0x4c8080);_0x437a3e&&_0x14e199(_0x437a3e);});break;case prefix+_0x196182(0x114):ci=await covidindo();var {kasus:_0x4f6cde,kematian:_0x322bd5,sembuh:_0x5d0e7e}=ci[0x0];_0x5e4187(_0x196182(0x1ec)+_0x4f6cde+_0x196182(0x34f)+_0x322bd5+_0x196182(0x351)+_0x5d0e7e);break;case prefix+'covidworld':cw=await covidworld();var {kasus:_0x4f6cde,kematian:_0x322bd5,sembuh:_0x5d0e7e}=cw[0x0];_0x5e4187('Casos\x20:\x20'+_0x4f6cde+_0x196182(0x151)+_0x322bd5+_0x196182(0x2c1)+_0x5d0e7e);break;case prefix+_0x196182(0x207):var _0x56af2b=await cnn();cn='CNN\x20NEWS';for(let _0x3958a3=0x0;_0x3958a3<_0x56af2b['length'];_0x3958a3++){cn+=_0x196182(0x123)+_0x56af2b[_0x3958a3][_0x196182(0x312)]+_0x196182(0x1b4)+_0x56af2b[_0x3958a3]['link']+_0x196182(0x2a3)+_0x56af2b[_0x3958a3][_0x196182(0x13b)];}buff=await getBuffer(_0x56af2b[0x0][_0x196182(0x13b)]),_0x446871[_0x196182(0x314)](_0x24b867,buff,MessageType[_0x196182(0x33a)],{'caption':cn});break;case prefix+_0x196182(0x1d5):tres=await Gempa();var {Waktu:_0x2bb269,Lintang:_0x49c56f,Bujur:_0x39e575,Magnitude:_0x1653e5,Kedalaman:_0x43e93d,Wilayah:_0x17dae6,Map:_0x1de0be}=tres[_0x196182(0x323)];console[_0x196182(0x3b8)](_0x1de0be),captt=_0x196182(0x165)+_0x2bb269+_0x196182(0x191)+_0x49c56f+_0x196182(0x27f)+_0x39e575+_0x196182(0x393)+_0x17dae6,thumbbb=await getBuffer(_0x1de0be),_0x446871['sendMessage'](_0x24b867,thumbbb,MessageType[_0x196182(0x33a)],{'caption':''+captt});break;case prefix+_0x196182(0x1a3):if(!_0x3e4ab9)return _0x5e4187(_0x196182(0x220))[_0x196182(0x13e)](_0x133dba=>_0x133dba['json']());qweryna=_0x353e66[_0x196182(0x383)]('\x20'),eses=await axios[_0x196182(0x1a3)](_0x196182(0x2f7)+qweryna+_0x196182(0x263)),buffqw=await getBuffer(eses[_0x196182(0x230)][_0x196182(0x2cc)]),_0x446871[_0x196182(0x314)](_0x24b867,buffqw,_0x5909a9,{'quoted':_0xf543a4})['catch'](_0x5e7e52=>{const _0x146caf=_0x196182;return _0x146caf(0x201);});break;case prefix+'revip':if(_0x353e66[_0x196182(0x3e1)]<0x1)return _0x5e4187(_0x196182(0x330));var _0x10104a=_0x353e66[_0x196182(0x383)]('\x20'),_0x48a30e=await fetchJson(_0x196182(0x144)+_0x10104a);_0x446871[_0x196182(0x314)](_0x24b867,''+_0x48a30e,_0x52614d)[_0x196182(0x24a)](_0x23b77b=>{const _0x4a68eb=_0x196182;_0x5e4187(_0x4a68eb(0x3d8));});break;case prefix+'avatar':_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x13c)),avatars=await getBuffer(_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,avatars,_0x5909a9,{'quoted':_0xf543a4});break;case prefix+_0x196182(0x2a5):_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x382)),loliz=await getBuffer(_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,loliz,_0x5909a9,{'quoted':_0xf543a4});break;case prefix+_0x196182(0x26a):waifud=await axios[_0x196182(0x1a3)]('https://nekos.life/api/v2/img/waifu'),nyed=await getBuffer(waifud[_0x196182(0x230)][_0x196182(0x341)]),_0x446871['sendMessage'](_0x24b867,nyed,_0x5909a9,{'caption':_0x196182(0x153),'quoted':_0xf543a4})[_0x196182(0x24a)](_0x2c6684=>{const _0x63e0c6=_0x196182;return _0x63e0c6(0x1f8);});break;case prefix+_0x196182(0x2f6):husbud=await fetchJson('https://api.fdci.se/rep.php?gambar=husbu'),sasu=JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](husbud)),ke=sasu[Math[_0x196182(0x36a)](Math[_0x196182(0x1b2)]()*sasu[_0x196182(0x3e1)])],nye=await getBuffer(ke),_0x446871[_0x196182(0x314)](_0x24b867,nye,_0x5909a9,{'caption':_0x196182(0x153),'quoted':_0xf543a4})[_0x196182(0x24a)](_0x185d30=>{const _0x4e2bd8=_0x196182;return _0x4e2bd8(0x22f);});break;case prefix+_0x196182(0x33a):if(_0x353e66[_0x196182(0x3e1)]<0x1)return _0x5e4187(_0x196182(0x35f));const _0x4052b1=_0x353e66[_0x196182(0x383)]('');_0x5e4187(mess[_0x196182(0x3b7)]),gis(_0x4052b1,async(_0x355df5,_0x4f2343)=>{const _0x5c6b50=_0x196182;n=_0x4f2343,images=n[Math[_0x5c6b50(0x36a)](Math[_0x5c6b50(0x1b2)]()*n[_0x5c6b50(0x3e1)])][_0x5c6b50(0x341)],_0x446871['sendMessage'](_0x24b867,{'url':images},_0x5909a9,{'quoted':_0xf543a4});});break;case prefix+_0x196182(0x2de):goblog=_0x353e66[_0x196182(0x383)]('\x20'),_0x25f94e=await fetchJson(_0x196182(0x36b)+goblog),sasu=JSON['parse'](JSON['stringify'](_0x25f94e)),ke=sasu[Math[_0x196182(0x36a)](Math['random']()*sasu[_0x196182(0x3e1)])],nye=await getBuffer(ke),_0x446871['sendMessage'](_0x24b867,nye,_0x5909a9,{'caption':_0x196182(0x39b),'quoted':_0xf543a4})[_0x196182(0x24a)](_0x12b6ae=>{const _0x11603e=_0x196182;return _0x11603e(0x17d);});break;case prefix+_0x196182(0x313):_0x5e4187(mess[_0x196182(0x3b7)]),fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')[_0x196182(0x13e)](_0x4b3306=>_0x4b3306[_0x196182(0x29b)]())[_0x196182(0x13e)](_0x5cc9f5=>{const _0x5c91d2=_0x196182;let _0x5c4fe8=_0x5cc9f5[_0x5c91d2(0x34a)]('\x0a'),_0x4c6d3c=_0x5c4fe8[Math[_0x5c91d2(0x36a)](Math[_0x5c91d2(0x1b2)]()*_0x5c4fe8[_0x5c91d2(0x3e1)])];imageToBase64(_0x4c6d3c)[_0x5c91d2(0x13e)](_0x19eae2=>{const _0x21942c=_0x5c91d2;media=Buffer[_0x21942c(0x2c3)](_0x19eae2,_0x21942c(0x28b)),_0x446871['sendMessage'](_0x24b867,media,_0x5909a9,{'quoted':_0xf543a4,'caption':_0x21942c(0x287)});})[_0x5c91d2(0x24a)](_0x5a8c88=>{const _0x154e92=_0x5c91d2;console[_0x154e92(0x3b8)](_0x5a8c88);});});break;case prefix+_0x196182(0x362):wanime=await axios[_0x196182(0x1a3)](_0x196182(0x1ce)),bufwanime=await getBuffer(wanime[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,bufwanime,_0x5909a9,{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x4f9dee=>{return'Anuncio\x20con\x20errores\x20de\x20nuevo\x20intente..';});break;case prefix+_0x196182(0x232):_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x349)),nsavatar=await getBuffer(_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,nsavatar,_0x5909a9,{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x3bdf6f=>{return'Error\x207-7.';});break;case prefix+_0x196182(0x242):ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x31b)),exec(_0x196182(0x21b)+_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]+_0x196182(0x3a4)+ranp+'\x20&&\x20ffmpeg\x20-i\x20'+ranp+_0x196182(0x30b)+rano,_0x4ee96f=>{const _0x4d99f8=_0x196182;fs['unlinkSync'](ranp);if(_0x4ee96f)return _0x5e4187(_0x4d99f8(0x356));buffer=fs['readFileSync'](rano),_0x446871[_0x4d99f8(0x314)](_0x24b867,buffer,MessageType['sticker'],{'quoted':_0xf543a4}),fs['unlinkSync'](rano);});break;case prefix+'pussy':ranp=getRandom('.gif'),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x39e)),exec('wget\x20'+_0x25f94e['data'][_0x196182(0x341)]+_0x196182(0x3a4)+ranp+_0x196182(0x1c6)+ranp+'\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20'+rano,_0x590083=>{const _0x4d0976=_0x196182;fs[_0x4d0976(0x38d)](ranp);if(_0x590083)return _0x5e4187('error');buffer=fs['readFileSync'](rano),_0x446871[_0x4d0976(0x314)](_0x24b867,buffer,MessageType[_0x4d0976(0x226)],{'quoted':_0xf543a4}),fs[_0x4d0976(0x38d)](rano);});break;case prefix+_0x196182(0x1a9):pusiimg=await axios['get'](_0x196182(0x3cc)),bufpusy=await getBuffer(pusiimg['data'][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,bufpusy,MessageType[_0x196182(0x33a)],{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x73f20a=>{const _0x34358a=_0x196182;return _0x34358a(0x245);});break;case prefix+_0x196182(0x3ba):opai=await axios[_0x196182(0x1a3)](_0x196182(0x27b)),opaiz=await getBuffer(opai['data']['url']),_0x446871[_0x196182(0x314)](_0x24b867,opaiz,_0x5909a9,{'quoted':_0xf543a4})['catch'](_0xe62216=>{const _0x1776b2=_0x196182;return _0x1776b2(0x245);});break;case prefix+_0x196182(0x2c7):ranp=getRandom(_0x196182(0x1c2)),rano=getRandom('.webp'),_0x25f94e=await axios[_0x196182(0x1a3)]('https://nekos.life/api/v2/img/feetg'),exec('wget\x20'+_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]+_0x196182(0x3a4)+ranp+_0x196182(0x1c6)+ranp+_0x196182(0x30b)+rano,_0x5d0a59=>{const _0x439482=_0x196182;fs[_0x439482(0x38d)](ranp);if(_0x5d0a59)return _0x5e4187(_0x439482(0x356));buffer=fs[_0x439482(0x2f8)](rano),_0x446871[_0x439482(0x314)](_0x24b867,buffer,MessageType[_0x439482(0x226)],{'quoted':_0xf543a4}),fs['unlinkSync'](rano);});break;case prefix+'bj':ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x209)),exec('wget\x20'+_0x25f94e['data'][_0x196182(0x341)]+'\x20-O\x20'+ranp+_0x196182(0x1c6)+ranp+'\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20'+rano,_0x58e10e=>{const _0x23c9ce=_0x196182;fs[_0x23c9ce(0x38d)](ranp);if(_0x58e10e)return _0x5e4187(_0x23c9ce(0x356));buffer=fs[_0x23c9ce(0x2f8)](rano),_0x446871['sendMessage'](_0x24b867,buffer,MessageType[_0x23c9ce(0x226)],{'quoted':_0xf543a4}),fs[_0x23c9ce(0x38d)](rano);});break;case prefix+_0x196182(0x359):eroz=await axios['get'](_0x196182(0x2a4)),bufero=await getBuffer(eroz[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,bufero,_0x5909a9,{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x2b99a9=>{const _0x58bcea=_0x196182;return _0x58bcea(0x245);});break;case prefix+'erokemo':erokz=await axios[_0x196182(0x1a3)](_0x196182(0x1a2)),erokzs=await getBuffer(erokz[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,erokzs,_0x5909a9,{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x10120c=>{const _0x500ca6=_0x196182;return _0x500ca6(0x245);});break;case prefix+'eroyuri':eroyuriz=await axios[_0x196182(0x1a3)](_0x196182(0x30a)),buferoyu=await getBuffer(opai[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,buferoyu,_0x5909a9,{'quoted':_0xf543a4})['catch'](_0x4f0a29=>{const _0x8ddb5a=_0x196182;return _0x8ddb5a(0x20c);});break;case prefix+'tickle':ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)]('https://nekos.life/api/v2/img/tickle'),exec(_0x196182(0x21b)+_0x25f94e[_0x196182(0x230)]['url']+_0x196182(0x3a4)+ranp+_0x196182(0x1c6)+ranp+_0x196182(0x30b)+rano,_0x3a2cef=>{const _0x3bd5b6=_0x196182;fs[_0x3bd5b6(0x38d)](ranp);if(_0x3a2cef)return _0x5e4187('error');buffer=fs[_0x3bd5b6(0x2f8)](rano),_0x446871[_0x3bd5b6(0x314)](_0x24b867,buffer,MessageType[_0x3bd5b6(0x226)],{'quoted':_0xf543a4}),fs[_0x3bd5b6(0x38d)](rano);});break;case prefix+_0x196182(0x115):ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios['get'](_0x196182(0x158)),exec(_0x196182(0x21b)+_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]+'\x20-O\x20'+ranp+'\x20&&\x20ffmpeg\x20-i\x20'+ranp+_0x196182(0x30b)+rano,_0x599d43=>{const _0x1a3836=_0x196182;fs[_0x1a3836(0x38d)](ranp);if(_0x599d43)return _0x5e4187(_0x1a3836(0x356));buffer=fs[_0x1a3836(0x2f8)](rano),_0x446871['sendMessage'](_0x24b867,buffer,MessageType['sticker'],{'quoted':_0xf543a4}),fs[_0x1a3836(0x38d)](rano);});break;case prefix+_0x196182(0x360):ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)]('https://nekos.life/api/v2/img/kuni'),exec(_0x196182(0x21b)+_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]+_0x196182(0x3a4)+ranp+_0x196182(0x1c6)+ranp+_0x196182(0x30b)+rano,_0x29cc42=>{const _0x4e7954=_0x196182;fs[_0x4e7954(0x38d)](ranp);if(_0x29cc42)return _0x5e4187('error');buffer=fs[_0x4e7954(0x2f8)](rano),_0x446871[_0x4e7954(0x314)](_0x24b867,buffer,MessageType[_0x4e7954(0x226)],{'quoted':_0xf543a4}),fs[_0x4e7954(0x38d)](rano);});break;case prefix+'femdom':_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x385)),bupemdom=await getBuffer(_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,bupemdom,_0x5909a9,{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x73f8fd=>{const _0x9a85c0=_0x196182;return _0x9a85c0(0x245);});break;case prefix+_0x196182(0x262):futan=await axios['get']('https://nekos.life/api/v2/img/futanari'),futanz=await getBuffer(futan[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,futanz,_0x5909a9,{'quoted':_0xf543a4});break;case prefix+_0x196182(0x1ff):ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios['get'](_0x196182(0x277)),exec('wget\x20'+_0x25f94e[_0x196182(0x230)]['url']+_0x196182(0x3a4)+ranp+_0x196182(0x1c6)+ranp+_0x196182(0x30b)+rano,_0x508777=>{const _0x1197c6=_0x196182;fs[_0x1197c6(0x38d)](ranp);if(_0x508777)return _0x5e4187(_0x1197c6(0x356));buffer=fs[_0x1197c6(0x2f8)](rano),_0x446871[_0x1197c6(0x314)](_0x24b867,buffer,MessageType[_0x1197c6(0x226)],{'quoted':_0xf543a4}),fs[_0x1197c6(0x38d)](rano);});break;case prefix+_0x196182(0x2ff):trapx=await axios[_0x196182(0x1a3)]('https://nekos.life/api/v2/img/tits'),traps=await getBuffer(trapx[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,traps,_0x5909a9,{'quoted':_0xf543a4})['catch'](_0x35d4d6=>{const _0x5753ac=_0x196182;return _0x5753ac(0x245);});break;case prefix+'pat':ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)]('https://nekos.life/api/v2/img/pat'),exec(_0x196182(0x21b)+_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]+_0x196182(0x3a4)+ranp+_0x196182(0x1c6)+ranp+_0x196182(0x30b)+rano,_0x235299=>{const _0x16596d=_0x196182;fs[_0x16596d(0x38d)](ranp);if(_0x235299)return _0x5e4187('error');buffer=fs['readFileSync'](rano),_0x446871['sendMessage'](_0x24b867,buffer,MessageType[_0x16596d(0x226)],{'quoted':_0xf543a4}),fs[_0x16596d(0x38d)](rano);});break;case prefix+'boobs':ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x2f4)),exec(_0x196182(0x21b)+_0x25f94e['data']['url']+_0x196182(0x3a4)+ranp+'\x20&&\x20ffmpeg\x20-i\x20'+ranp+_0x196182(0x30b)+rano,_0x1ce90c=>{const _0x49c772=_0x196182;fs[_0x49c772(0x38d)](ranp);if(_0x1ce90c)return _0x5e4187(_0x49c772(0x356));buffer=fs[_0x49c772(0x2f8)](rano),_0x446871['sendMessage'](_0x24b867,buffer,MessageType[_0x49c772(0x226)],{'quoted':_0xf543a4}),fs[_0x49c772(0x38d)](rano);});break;case prefix+_0x196182(0x17b):blowz=await axios[_0x196182(0x1a3)](_0x196182(0x164)),bufblowz=await getBuffer(blowz[_0x196182(0x230)]['url']),_0x446871[_0x196182(0x314)](_0x24b867,bufblowz,_0x5909a9,{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x5a1675=>{return'Error\x207-7.';});break;case prefix+_0x196182(0x23e):hentaiz=await axios[_0x196182(0x1a3)](_0x196182(0x3b5)),bufhtz=await getBuffer(hentaiz['data']['url']),_0x446871['sendMessage'](_0x24b867,bufhtz,_0x5909a9,{'quoted':_0xf543a4})['catch'](_0x56d5cd=>{const _0x49cee6=_0x196182;return _0x49cee6(0x245);});break;case prefix+_0x196182(0x2e3):hololew=await axios[_0x196182(0x1a3)](_0x196182(0x2ad)),hololewx=await getBuffer(hololew[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,hololewx,_0x5909a9,{'quoted':_0xf543a4})['catch'](_0x290561=>{const _0x5e80c4=_0x196182;return _0x5e80c4(0x14c);});break;case prefix+_0x196182(0x3c1):lewdd=await axios['get']('https://nekos.life/api/v2/img/lewd'),buflewd=await getBuffer(lewdd[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,buflewd,_0x5909a9,{'quoted':_0xf543a4});break;case prefix+_0x196182(0x205):lewdkk=await axios[_0x196182(0x1a3)](_0x196182(0x18d)),lewdkz=await getBuffer(lewdkz[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,lewdkz,_0x5909a9,{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x312ae3=>{const _0x5597f0=_0x196182;return _0x5597f0(0x241);});break;case prefix+'lewdkemo':lewdkm=await axios[_0x196182(0x1a3)]('https://nekos.life/api/v2/img/lewdkemo'),buflewd=await getBuffer(lewdkm['data'][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,buflewd,_0x5909a9,{'quoted':_0xf543a4})['catch'](_0x568278=>{return'Pwro..';});break;case prefix+_0x196182(0x394):ranp=getRandom('.gif'),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)]('https://nekos.life/api/v2/img/goose'),exec(_0x196182(0x21b)+_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]+'\x20-O\x20'+ranp+_0x196182(0x1c6)+ranp+_0x196182(0x30b)+rano,_0xf9535f=>{const _0x51e557=_0x196182;fs[_0x51e557(0x38d)](ranp);if(_0xf9535f)return _0x5e4187('error');buffer=fs[_0x51e557(0x2f8)](rano),_0x446871[_0x51e557(0x314)](_0x24b867,buffer,MessageType['sticker'],{'quoted':_0xf543a4}),fs['unlinkSync'](rano);});break;case prefix+_0x196182(0x3ab):ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x22d)),exec(_0x196182(0x21b)+_0x25f94e[_0x196182(0x230)]['url']+_0x196182(0x3a4)+ranp+_0x196182(0x1c6)+ranp+_0x196182(0x30b)+rano,_0x349f87=>{const _0x1275d9=_0x196182;fs[_0x1275d9(0x38d)](ranp);if(_0x349f87)return _0x5e4187(_0x1275d9(0x356));buffer=fs['readFileSync'](rano),_0x446871[_0x1275d9(0x314)](_0x24b867,buffer,MessageType[_0x1275d9(0x226)],{'quoted':_0xf543a4}),fs[_0x1275d9(0x38d)](rano);});break;case prefix+_0x196182(0x2a0):yuriz=await axios['get'](_0x196182(0x27b)),bupyuri=await getBuffer(yuriz['data']['url']),_0x446871[_0x196182(0x314)](_0x24b867,bupyuri,_0x5909a9,{'quoted':_0xf543a4})['catch'](_0xd2a05=>{const _0xf75e1b=_0x196182;return _0xf75e1b(0x245);});break;case prefix+_0x196182(0x2e9):ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x261)),exec(_0x196182(0x21b)+_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]+'\x20-O\x20'+ranp+_0x196182(0x1c6)+ranp+_0x196182(0x30b)+rano,_0x27d919=>{const _0x3b52eb=_0x196182;fs[_0x3b52eb(0x38d)](ranp);if(_0x27d919)return _0x5e4187(_0x3b52eb(0x356));buffer=fs[_0x3b52eb(0x2f8)](rano),_0x446871[_0x3b52eb(0x314)](_0x24b867,buffer,MessageType[_0x3b52eb(0x226)],{'quoted':_0xf543a4}),fs['unlinkSync'](rano);});break;case prefix+_0x196182(0x23f):ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios['get'](_0x196182(0x370)),exec(_0x196182(0x21b)+_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]+_0x196182(0x3a4)+ranp+_0x196182(0x1c6)+ranp+'\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20'+rano,_0x5cd4fe=>{const _0x2f681b=_0x196182;fs[_0x2f681b(0x38d)](ranp);if(_0x5cd4fe)return _0x5e4187(_0x2f681b(0x356));buffer=fs[_0x2f681b(0x2f8)](rano),_0x446871[_0x2f681b(0x314)](_0x24b867,buffer,MessageType[_0x2f681b(0x226)],{'quoted':_0xf543a4}),fs[_0x2f681b(0x38d)](rano);});break;case prefix+_0x196182(0x33b):eronz=await axios[_0x196182(0x1a3)](_0x196182(0x223)),buferon=await getBuffer(eronz[_0x196182(0x230)]['url']),_0x446871[_0x196182(0x314)](_0x24b867,buferon,_0x5909a9,{'quoted':_0xf543a4})['catch'](_0x517170=>{const _0x2b825c=_0x196182;return _0x2b825c(0x2d9);});break;case prefix+_0x196182(0x1d2):ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)](_0x196182(0x2b1)),exec('wget\x20'+_0x25f94e[_0x196182(0x230)][_0x196182(0x341)]+_0x196182(0x3a4)+ranp+_0x196182(0x1c6)+ranp+_0x196182(0x30b)+rano,_0x2dd8c3=>{const _0x323ff2=_0x196182;fs['unlinkSync'](ranp);if(_0x2dd8c3)return _0x5e4187('error');buffer=fs['readFileSync'](rano),_0x446871[_0x323ff2(0x314)](_0x24b867,buffer,MessageType[_0x323ff2(0x226)],{'quoted':_0xf543a4}),fs[_0x323ff2(0x38d)](rano);});break;case prefix+_0x196182(0x21d):ketaz=await axios[_0x196182(0x1a3)](_0x196182(0x29d)),bufketa=await getBuffer(ketaz[_0x196182(0x230)][_0x196182(0x341)]),_0x446871['sendMessage'](_0x24b867,bufketa,_0x5909a9,{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x68259c=>{const _0xb7b3d4=_0x196182;return _0xb7b3d4(0x2d9);});break;case prefix+_0x196182(0x346):ranp=getRandom(_0x196182(0x1c2)),rano=getRandom(_0x196182(0x380)),_0x25f94e=await axios[_0x196182(0x1a3)]('https://nekos.life/api/v2/img/cum'),exec('wget\x20'+_0x25f94e[_0x196182(0x230)]['url']+_0x196182(0x3a4)+ranp+'\x20&&\x20ffmpeg\x20-i\x20'+ranp+_0x196182(0x30b)+rano,_0x494c14=>{const _0x340ea4=_0x196182;fs[_0x340ea4(0x38d)](ranp);if(_0x494c14)return _0x5e4187(_0x340ea4(0x356));buffer=fs['readFileSync'](rano),_0x446871[_0x340ea4(0x314)](_0x24b867,buffer,MessageType[_0x340ea4(0x226)],{'quoted':_0xf543a4}),fs['unlinkSync'](rano);});break;case prefix+_0x196182(0x384):cumjpg=await axios[_0x196182(0x1a3)]('https://nekos.life/api/v2/img/cum_jpg'),bupjpg=await getBuffer(cumjpg[_0x196182(0x230)]['url']),_0x446871[_0x196182(0x314)](_0x24b867,bupjpg,_0x5909a9,{'quoted':_0xf543a4})['catch'](_0x37e0ea=>{return'Error\x207-7..';});break;case prefix+'oppai':opai=await axios[_0x196182(0x1a3)](_0x196182(0x27b)),opaiz=await getBuffer(opai['data']['url']),_0x446871['sendMessage'](_0x24b867,opaiz,_0x5909a9,{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x284a5f=>{const _0x4d0ed4=_0x196182;return _0x4d0ed4(0x2d9);});break;case prefix+_0x196182(0x1d6):holox=await axios['get'](_0x196182(0x291)),bufholox=await getBuffer(holox[_0x196182(0x230)][_0x196182(0x341)]),_0x446871[_0x196182(0x314)](_0x24b867,bufholox,_0x5909a9,{'quoted':_0xf543a4})[_0x196182(0x24a)](_0x51a773=>{const _0x8c25fd=_0x196182;return _0x8c25fd(0x2d9);});break;case prefix+_0x196182(0x226):case prefix+'stiker':case prefix+'sg':case prefix+'s':if((_0x4506a5&&!_0xf543a4[_0x196182(0x193)][_0x196182(0x2af)]||_0x44b2cb)&&_0x353e66[_0x196182(0x3e1)]==0x0){const _0x1ffa87=_0x44b2cb?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)['replace']('quotedM','m'))['message'][_0x196182(0x2e1)][_0x196182(0x210)]:_0xf543a4,_0x223822=await _0x446871[_0x196182(0x295)](_0x1ffa87);ran=_0x196182(0x30c),await ffmpeg('./'+_0x223822)[_0x196182(0x3c2)](_0x223822)['on']('start',function(_0x2ef13f){const _0x1b0866=_0x196182;console[_0x1b0866(0x3b8)](_0x1b0866(0x290)+_0x2ef13f);})['on'](_0x196182(0x356),function(_0xdf7cf){const _0x48d59c=_0x196182;console['log'](_0x48d59c(0x375)+_0xdf7cf),fs[_0x48d59c(0x38d)](_0x223822),_0x5e4187(_0x48d59c(0x356));})['on']('end',function(){const _0x284a87=_0x196182;console[_0x284a87(0x3b8)](_0x284a87(0x2e8)),_0x446871[_0x284a87(0x314)](_0x24b867,fs[_0x284a87(0x2f8)](ran),MessageType['sticker'],{'quoted':_0xf543a4}),fs[_0x284a87(0x38d)](_0x223822),fs[_0x284a87(0x38d)](ran);})[_0x196182(0x1c9)](['-vcodec',_0x196182(0x134),_0x196182(0x266),'scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse'])[_0x196182(0x27c)]('webp')['save'](ran);}else{if((_0x4506a5&&_0xf543a4[_0x196182(0x193)][_0x196182(0x2af)][_0x196182(0x157)]<0xb||_0x657b7f&&_0xf543a4['message']['extendedTextMessage'][_0x196182(0x210)][_0x196182(0x1eb)][_0x196182(0x2af)][_0x196182(0x157)]<0xb)&&_0x353e66[_0x196182(0x3e1)]==0x0){const _0x203b06=_0x657b7f?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)['replace'](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)]['contextInfo']:_0xf543a4,_0x5eb90e=await _0x446871['downloadAndSaveMediaMessage'](_0x203b06);ran='999.webp',_0x5e4187(mess[_0x196182(0x3b7)]),await ffmpeg('./'+_0x5eb90e)[_0x196182(0x25a)](_0x5eb90e[_0x196182(0x34a)]('.')[0x1])['on']('start',function(_0x453d87){const _0x5f384f=_0x196182;console['log'](_0x5f384f(0x290)+_0x453d87);})['on'](_0x196182(0x356),function(_0xcd7386){const _0x182baa=_0x196182;console[_0x182baa(0x3b8)]('Error\x20:\x20'+_0xcd7386),fs[_0x182baa(0x38d)](_0x5eb90e),tipe=_0x5eb90e[_0x182baa(0x1e9)](_0x182baa(0x345))?'video':_0x182baa(0x2d1),_0x5e4187(_0x182baa(0x233)+tipe+_0x182baa(0x225));})['on']('end',function(){const _0x4df9e7=_0x196182;console[_0x4df9e7(0x3b8)]('Finish'),_0x446871[_0x4df9e7(0x314)](_0x24b867,fs['readFileSync'](ran),MessageType[_0x4df9e7(0x226)],{'quoted':_0xf543a4}),fs[_0x4df9e7(0x38d)](_0x5eb90e),fs[_0x4df9e7(0x38d)](ran);})['addOutputOptions']([_0x196182(0x20d),_0x196182(0x134),_0x196182(0x266),_0x196182(0x17f)])[_0x196182(0x27c)](_0x196182(0x28e))[_0x196182(0x3a1)](ran);}else _0x5e4187(_0x196182(0x20b)+prefix+_0x196182(0x3a6));}break;case prefix+'stikerwm':case prefix+_0x196182(0x289):case prefix+_0x196182(0x1a1):_0x4ddfa7=_0x353e66[_0x196182(0x383)]('');var _0x78cfe6=_0x4ddfa7['split']('|')[0x0],_0x4b6e16=_0x4ddfa7['split']('|')[0x1];if(_0x4506a5&&!_0xf543a4[_0x196182(0x193)]['videoMessage']||_0x44b2cb){const _0x3b9f16=_0x44b2cb?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)['replace'](_0x196182(0x3d2),'m'))['message'][_0x196182(0x2e1)][_0x196182(0x210)]:_0xf543a4;media=await _0x446871['downloadAndSaveMediaMessage'](_0x3b9f16),await createExif(_0x78cfe6,_0x4b6e16),out=getRandom('.webp'),ffmpeg(media)['on'](_0x196182(0x356),_0x2c8028=>{const _0x5b9c47=_0x196182;console[_0x5b9c47(0x3b8)](_0x2c8028),_0x446871[_0x5b9c47(0x314)](_0x24b867,_0x5b9c47(0x251),_0x5b9c47(0x198),{'quoted':_0xf543a4}),fs[_0x5b9c47(0x38d)](media);})['on'](_0x196182(0x326),()=>{const _0x5c2a89=_0x196182;_out=getRandom(_0x5c2a89(0x380)),spawn(_0x5c2a89(0x273),[_0x5c2a89(0x15e),'exif',_0x5c2a89(0x26b),out,'-o',_out])['on']('exit',()=>{const _0x5d1620=_0x5c2a89;_0x446871[_0x5d1620(0x314)](_0x24b867,fs[_0x5d1620(0x2f8)](_out),'stickerMessage',{'quoted':_0xf543a4}),fs[_0x5d1620(0x38d)](out),fs['unlinkSync'](_out),fs['unlinkSync'](media);});})[_0x196182(0x1c9)]([_0x196182(0x20d),_0x196182(0x134),_0x196182(0x266),'scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse'])[_0x196182(0x27c)]('webp')['save'](out);}else{if((_0x4506a5&&_0xf543a4['message'][_0x196182(0x2af)]['seconds']<0xb||_0x657b7f&&_0xf543a4[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)]['quotedMessage'][_0x196182(0x2af)][_0x196182(0x157)]<0xb)&&_0x353e66[_0x196182(0x3e1)]==0x0){const _0x48eb8c=_0x657b7f?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)]:_0xf543a4,_0x525eb6=await _0x446871[_0x196182(0x295)](_0x48eb8c);_0x4ddfa7=_0x353e66[_0x196182(0x383)]('');var _0x78cfe6=_0x4ddfa7[_0x196182(0x34a)]('|')[0x0],_0x4b6e16=_0x4ddfa7['split']('|')[0x1];await createExif(_0x78cfe6,_0x4b6e16),out=getRandom(_0x196182(0x380)),ffmpeg(_0x525eb6)['on'](_0x196182(0x356),_0x1eb1ea=>{const _0x32dcbc=_0x196182;console['log'](_0x1eb1ea),_0x446871[_0x32dcbc(0x314)](_0x24b867,_0x32dcbc(0x328),_0x32dcbc(0x337),{'quoted':_0xf543a4}),fs[_0x32dcbc(0x38d)](_0x525eb6);})['on']('end',()=>{const _0x2c41f7=_0x196182;_out=getRandom(_0x2c41f7(0x380)),spawn(_0x2c41f7(0x273),[_0x2c41f7(0x15e),_0x2c41f7(0x1cc),_0x2c41f7(0x26b),out,'-o',_out])['on'](_0x2c41f7(0x2a8),()=>{const _0x196661=_0x2c41f7;_0x446871[_0x196661(0x314)](_0x24b867,fs[_0x196661(0x2f8)](_out),_0x196661(0x368),{'quoted':_0xf543a4}),fs['unlinkSync'](out),fs[_0x196661(0x38d)](_out),fs['unlinkSync'](_0x525eb6);});})['addOutputOptions']([_0x196182(0x20d),_0x196182(0x134),'-vf','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse'])['toFormat']('webp')[_0x196182(0x3a1)](out);}else _0x5e4187(_0x196182(0x20b)+prefix+_0x196182(0x319));}break;case prefix+_0x196182(0x3be):case prefix+'colong':if(!_0x21e922)return _0x5e4187('solo\x20pegatinas');encmedia=JSON['parse'](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)],media=await _0x446871[_0x196182(0x295)](encmedia),_0x25f94e=_0x353e66[_0x196182(0x383)]('\x20')['split']('|'),satu=_0x25f94e[0x0]!==''?_0x25f94e[0x0]:_0x196182(0x306),dua=typeof _0x25f94e[0x1]!==_0x196182(0x27d)?_0x25f94e[0x1]:_0x196182(0x392),require('./lib/fetcher.js')[_0x196182(0x152)](satu,dua),require('./lib/fetcher.js')[_0x196182(0x3cb)](media,_0x446871,_0xf543a4,_0x24b867);break;case prefix+_0x196182(0x342):ge=_0x353e66[_0x196182(0x383)]('');var _0x4ddfa7=ge[_0x196182(0x34a)]('|')[0x0],_0x5c86b8=ge[_0x196182(0x34a)]('|')[0x1],_0x32a137=ge[_0x196182(0x34a)]('|')[0x2],_0x5221d6=ge[_0x196182(0x34a)]('|')[0x3];const _0x58c926=_0x196182(0x215)+prefix+_0x196182(0x18b);if(_0x353e66[_0x196182(0x3e1)]<0x1)return _0x5e4187(_0x58c926);const _0x176399=_0x21e922||_0x44b2cb?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)['replace'](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)]['contextInfo']:_0xf543a4,_0x4459b1=await _0x446871[_0x196182(0x295)](_0x176399),_0x447901=fs[_0x196182(0x2f8)](_0x4459b1),_0x3dac55=''+_0x32a137,_0x226af7=''+_0x5c86b8,_0x3bf73b=''+_0x4ddfa7,_0x1a1214=_0x196182(0x2d4)+_0x5221d6;var _0x25f94e={'detectLinks':![]},_0x73fae1=await _0x446871[_0x196182(0x34c)](_0x3bf73b);_0x73fae1[_0x196182(0x2fe)]=_0x226af7,_0x73fae1[_0x196182(0x28d)]=_0x3dac55,_0x73fae1[_0x196182(0x280)]=_0x447901,_0x73fae1['canonicalUrl']=_0x1a1214,_0x446871[_0x196182(0x314)](_0x24b867,_0x73fae1,MessageType[_0x196182(0x1a6)],_0x25f94e);break;case prefix+_0x196182(0x275):if(!_0x3e4ab9)return _0x14e199('emoji\x20UnU?');qes=_0x353e66['join']('\x20'),emoji[_0x196182(0x1a3)](''+qes)[_0x196182(0x13e)](_0x168f76=>{const _0x3c6d28=_0x196182;teks=''+_0x168f76[_0x3c6d28(0x276)][0x4]['url'],_0xdf1892(_0x24b867,''+teks),console[_0x3c6d28(0x3b8)](teks);})[_0x196182(0x24a)](_0x57f176=>{_0x5e4187('Ahhh\x20pwrdon\x20T-T\x20no\x20pude');});break;case prefix+'attp':if(_0x353e66[_0x196182(0x3e1)]<0x1)return _0x5e4187(_0x196182(0x23c)+prefix+_0x196182(0x117));attp2=await getBuffer(_0x196182(0x204)+body[_0x196182(0x160)](0x6)),_0x446871[_0x196182(0x314)](_0x24b867,attp2,MessageType['sticker'],{'quoted':_0xf543a4});break;case prefix+'toimg':if(!_0x21e922)return _0x5e4187(_0x196182(0x138));_0x5e4187(mess[_0x196182(0x3b7)]),encmedia=JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)],media=await _0x446871[_0x196182(0x295)](encmedia),ran=getRandom(_0x196182(0x1fa)),exec('ffmpeg\x20-i\x20'+media+'\x20'+ran,_0xd0e9d3=>{const _0x215e46=_0x196182;fs['unlinkSync'](media);if(_0xd0e9d3)return _0x5e4187(_0x215e46(0x307));buffer=fs[_0x215e46(0x2f8)](ran),_0x4c514e(buffer,'NIH'),fs[_0x215e46(0x38d)](ran);});break;case prefix+_0x196182(0x3aa):case prefix+_0x196182(0x2f0):(_0x4506a5&&!_0xf543a4['message']['videoMessage']||_0x21e922)&&_0x353e66['length']==0x0?(ger=_0x21e922?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)['replace'](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)]['contextInfo']:_0xf543a4,owgi=await _0x446871[_0x196182(0x295)](ger),webp2mp4File(owgi)[_0x196182(0x13e)](_0x188c39=>{const _0x35cc16=_0x196182;_0x106dee(_0x24b867,_0x188c39[_0x35cc16(0x323)],_0x35cc16(0x2ae));})):_0x5e4187('responde\x20stiker');fs[_0x196182(0x38d)](owgi);break;case prefix+'tomp3':if(!_0x657b7f)return _0x14e199(_0x196182(0x1ed));_0x14e199(mess['wait']),encmedia=JSON['parse'](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)]['extendedTextMessage'][_0x196182(0x210)],media=await _0x446871[_0x196182(0x295)](encmedia),ran=getRandom(_0x196182(0x345)),exec(_0x196182(0x212)+media+'\x20'+ran,_0x2da2b3=>{const _0x3d3761=_0x196182;fs[_0x3d3761(0x38d)](media);if(_0x2da2b3)return _0x14e199(_0x3d3761(0x17a)+_0x2da2b3);buffer453=fs['readFileSync'](ran),_0x446871['sendMessage'](_0x24b867,buffer453,_0x4bcb24,{'mimetype':_0x3d3761(0x366),'quoted':_0xf543a4}),fs[_0x3d3761(0x38d)](ran);});break;case prefix+'fast':if(!_0x657b7f)return _0x14e199(_0x196182(0x13f));_0x14e199(mess[_0x196182(0x3b7)]),encmedia=JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)]('quotedM','m'))[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)],media=await _0x446871[_0x196182(0x295)](encmedia),ran=getRandom('.mp4'),exec(_0x196182(0x212)+media+_0x196182(0x253)+ran,_0x5a8c43=>{const _0x1e1bbf=_0x196182;fs[_0x1e1bbf(0x38d)](media);if(_0x5a8c43)return _0x14e199('Err:\x20'+_0x5a8c43);buffer453=fs['readFileSync'](ran),_0x446871['sendMessage'](_0x24b867,buffer453,_0xd4e35,{'mimetype':_0x1e1bbf(0x2da),'quoted':_0xf543a4}),fs[_0x1e1bbf(0x38d)](ran);});break;case prefix+_0x196182(0x240):if(!_0x657b7f)return _0x14e199('Responde\x20video\x20UnU📸!');_0x14e199(mess['wait']),encmedia=JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)]['contextInfo'],media=await _0x446871[_0x196182(0x295)](encmedia),ran=getRandom('.mp4'),exec('ffmpeg\x20-i\x20'+media+_0x196182(0x2be)+ran,_0x21c22e=>{const _0x35e6f6=_0x196182;fs['unlinkSync'](media);if(_0x21c22e)return _0x14e199(_0x35e6f6(0x17a)+_0x21c22e);buffer453=fs[_0x35e6f6(0x2f8)](ran),_0x446871[_0x35e6f6(0x314)](_0x24b867,buffer453,_0xd4e35,{'mimetype':_0x35e6f6(0x2da),'quoted':_0xf543a4}),fs[_0x35e6f6(0x38d)](ran);});break;case prefix+_0x196182(0x179):if(!_0x657b7f)return _0x14e199(_0x196182(0x279));encmedia=JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)]['contextInfo'],media=await _0x446871['downloadAndSaveMediaMessage'](encmedia),ran=getRandom(_0x196182(0x345)),exec(_0x196182(0x212)+media+'\x20-vf\x20reverse\x20-af\x20areverse\x20'+ran,_0x376918=>{const _0x296d32=_0x196182;fs['unlinkSync'](media);if(_0x376918)return _0x14e199(_0x296d32(0x17a)+_0x376918);buffer453=fs[_0x296d32(0x2f8)](ran),_0x446871[_0x296d32(0x314)](_0x24b867,buffer453,_0xd4e35,{'mimetype':_0x296d32(0x2da),'quoted':_0xf543a4}),fs[_0x296d32(0x38d)](ran);});break;case prefix+_0x196182(0x2b8):(_0x4506a5&&!_0xf543a4[_0x196182(0x193)]['videoMessage']||_0x44b2cb||_0x657b7f)&&_0x353e66[_0x196182(0x3e1)]==0x0?(boij=_0x44b2cb||_0x657b7f?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)]:_0xf543a4,owgi=await _0x446871['downloadMediaMessage'](boij),_0xa7c94=await upload(owgi),_0x5e4187(_0xa7c94)):_0x5e4187(_0x196182(0x1bf));break;case prefix+_0x196182(0x1f1):if(!_0x3e4ab9)return _0x5cffe0(_0x196182(0x208));_0x446871[_0x196182(0x314)](_0x196182(0x363),''+_0x3e4ab9,_0x12886d),_0x14e199('Sukses\x20Up\x20story\x20wea\x20teks\x20'+_0x3e4ab9);break;case prefix+_0x196182(0x2ac):if(_0x44b2cb){const _0x2a5fe4=_0x44b2cb?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)['replace'](_0x196182(0x3d2),'m'))[_0x196182(0x193)]['extendedTextMessage'][_0x196182(0x210)]:_0xf543a4;cihcih=await _0x446871[_0x196182(0x320)](_0x2a5fe4),_0x446871[_0x196182(0x314)](_0x196182(0x363),cihcih,_0x5909a9,{'caption':''+_0x3e4ab9}),bur='Sukses\x20Upload\x20Story\x20Image\x20dengan\x20Caption:\x20'+_0x3e4ab9,_0x446871[_0x196182(0x314)](_0x24b867,bur,_0x52614d,{'quoted':_0xf543a4});}else _0x5cffe0(_0x196182(0x231));break;case prefix+_0x196182(0x373):if(_0x657b7f){const _0x3bbd43=_0x657b7f?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)]('quotedM','m'))[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)]:_0xf543a4;cihcih=await _0x446871['downloadMediaMessage'](_0x3bbd43),_0x446871['sendMessage'](_0x196182(0x363),cihcih,_0xd4e35,{'caption':''+_0x3e4ab9}),bur=_0x196182(0x172)+_0x3e4ab9,_0x446871['sendMessage'](_0x24b867,bur,_0x52614d,{'quoted':_0xf543a4});}else _0x5cffe0('reponde\x20video\x20UnU!');break;case prefix+_0x196182(0x13d):if(_0x353e66['length']<0x1)return _0x5e4187(_0x196182(0x177)+prefix+_0x196182(0x126)+prefix+'fitnah\x20@tagmember|Hola|Hola\x20juga');var _0x564c57=_0x353e66[_0x196182(0x383)]('\x20');mentioned=_0xf543a4['message']['extendedTextMessage'][_0x196182(0x210)]['mentionedJid'];var _0x12ccb0=_0x564c57['split']('|')[0x0],_0xfc4d8b=_0x564c57['split']('|')[0x1],_0x4e4000=_0x564c57[_0x196182(0x34a)]('|')[0x2];_0x446871['sendMessage'](_0x24b867,''+_0x4e4000,_0x52614d,{'quoted':{'key':{'fromMe':![],'participant':''+mentioned,..._0x24b867?{'remoteJid':_0x24b867}:{}},'message':{'conversation':''+_0xfc4d8b}}});break;case prefix+_0x196182(0x1c0):await herolist()[_0x196182(0x13e)](_0x4c3b44=>{const _0x3fd70c=_0x196182;let _0x36963f=_0x3fd70c(0x1df)+prefix+_0x3fd70c(0x1d9);for(var _0x55fc58=0x0;_0x55fc58<_0x4c3b44['hero'][_0x3fd70c(0x3e1)];_0x55fc58++){_0x36963f+='-\x20\x20'+_0x4c3b44[_0x3fd70c(0x303)][_0x55fc58]+'\x0a';}_0x3a47b5(_0x36963f);});break;case prefix+_0x196182(0x352):_0xa7c94=await herodetails(body[_0x196182(0x160)](0xc)),her='*Hero\x20details\x20'+body[_0x196182(0x160)](0xc)+_0x196182(0x32b)+_0xa7c94[_0x196182(0x194)]+_0x196182(0x21a)+_0xa7c94[_0x196182(0x399)]+_0x196182(0x190)+_0xa7c94[_0x196182(0x1be)]+_0x196182(0x39d)+_0xa7c94['hero_feature']+_0x196182(0x3a0)+_0xa7c94[_0x196182(0x206)]+_0x196182(0x316)+_0xa7c94['laning_recommendation']+_0x196182(0x30d)+_0xa7c94['price'][_0x196182(0x1ca)]+_0x196182(0x3d3)+_0xa7c94[_0x196182(0x1b5)][_0x196182(0x2cb)]+_0x196182(0x142)+_0xa7c94[_0x196182(0x1b5)]['hero_fragment']+_0x196182(0x3dc)+_0xa7c94[_0x196182(0x37f)]+'\x0a\x0a*Durability*\x20:\x20'+_0xa7c94['skill'][_0x196182(0x3cf)]+_0x196182(0x1fe)+_0xa7c94[_0x196182(0x1cd)][_0x196182(0x374)]+_0x196182(0x26f)+_0xa7c94[_0x196182(0x1aa)]+_0x196182(0x1cf)+_0xa7c94[_0x196182(0x1cd)][_0x196182(0x2b3)]+_0x196182(0x338)+_0xa7c94[_0x196182(0x16b)]['movement_speed']+'\x0a*Physical\x20Attack*\x20:\x20'+_0xa7c94[_0x196182(0x16b)][_0x196182(0x3e5)]+'\x0a*Magic\x20Defense*\x20:\x20'+_0xa7c94[_0x196182(0x16b)][_0x196182(0x37d)]+_0x196182(0x222)+_0xa7c94['attributes'][_0x196182(0x1dc)]+_0x196182(0x350)+_0xa7c94[_0x196182(0x16b)]['hp']+_0x196182(0x124)+_0xa7c94['attributes'][_0x196182(0x2ed)]+_0x196182(0x254)+_0xa7c94[_0x196182(0x16b)][_0x196182(0x33e)]+_0x196182(0x2e2)+_0xa7c94['background_story']+'\x0a',_0x3a47b5(her);break;case prefix+'play':if(_0x353e66[_0x196182(0x3e1)]===0x0)return _0x5e4187(_0x196182(0x265)+prefix+_0x196182(0x202));var _0x31e1fd=_0x353e66[_0x196182(0x383)]('');_0x33482b=await yts(_0x31e1fd),aramat=_0x33482b['all'];var _0x1a9107=aramat[0x0][_0x196182(0x341)];try{yta(_0x1a9107)['then'](_0x5e77e7=>{const _0x339a5f=_0x196182,{dl_link:_0x569edd,thumb:_0x590b0b,title:_0x284468,filesizeF:_0x531446,filesize:_0x31f3d9}=_0x5e77e7;axios[_0x339a5f(0x1a3)](_0x339a5f(0x1e6)+_0x569edd)[_0x339a5f(0x13e)](async _0x133ab5=>{const _0x39dc63=_0x339a5f;if(Number(_0x31f3d9)>=0x186a0)return _0x106dee(_0x24b867,_0x590b0b,_0x39dc63(0x195)+_0x284468+_0x39dc63(0x39f)+_0x531446+_0x39dc63(0x2ab)+_0x133ab5[_0x39dc63(0x230)]+_0x39dc63(0x216));const _0x4e399e=_0x39dc63(0x195)+_0x284468+'\x0a*Ext*\x20:\x20MP3\x0a*Size*\x20:\x20'+_0x531446+_0x39dc63(0x2ab)+_0x133ab5[_0x39dc63(0x230)]+_0x39dc63(0x3b9);_0x106dee(_0x24b867,_0x590b0b,_0x4e399e),await _0x106dee(_0x24b867,_0x569edd)[_0x39dc63(0x24a)](()=>_0x5e4187(_0x39dc63(0x356)));});});}catch(_0x55ece8){_0x5e4187(mess[_0x196182(0x356)][_0x196182(0x1c5)]);}break;case prefix+_0x196182(0x189):if(_0x353e66[_0x196182(0x3e1)]===0x0)return _0x5e4187(_0x196182(0x265)+prefix+'video*\x20_Judul\x20lagu\x20yang\x20akan\x20dicari_');var _0x31e1fd=_0x353e66['join']('');_0x33482b=await yts(_0x31e1fd),aramat=_0x33482b[_0x196182(0x358)];var _0x1a9107=aramat[0x0][_0x196182(0x341)];try{ytv(_0x1a9107)[_0x196182(0x13e)](_0x4b2362=>{const _0x156a82=_0x196182,{dl_link:_0xfe79ea,thumb:_0x4712fb,title:_0x3593ba,filesizeF:_0x38cc17,filesize:_0x319258}=_0x4b2362;axios[_0x156a82(0x1a3)]('https://tinyurl.com/api-create.php?url='+_0xfe79ea)[_0x156a82(0x13e)](async _0x727b8c=>{const _0xbde077=_0x156a82;if(Number(_0x319258)>=0x186a0)return _0x106dee(_0x24b867,_0x4712fb,'*PLAY\x20VIDEO*\x0a\x0a*Title*\x20:\x20'+_0x3593ba+'\x0a*Ext*\x20:\x20MP3\x0a*Filesize*\x20:\x20'+_0x38cc17+_0xbde077(0x2ab)+_0x727b8c['data']+_0xbde077(0x216));const _0x3a6011=_0xbde077(0x2d5)+_0x3593ba+'\x0a*Ext*\x20:\x20MP4\x0a*Size*\x20:\x20'+_0x38cc17+'\x0a*Link*\x20:\x20'+_0x727b8c['data']+_0xbde077(0x3b9);_0x106dee(_0x24b867,_0x4712fb,_0x3a6011),await _0x106dee(_0x24b867,_0xfe79ea)[_0xbde077(0x24a)](()=>_0x5e4187(_0xbde077(0x356)));});});}catch(_0x169138){_0x5e4187(mess['error'][_0x196182(0x1c5)]);}break;case prefix+_0x196182(0x31c):if(_0x353e66[_0x196182(0x3e1)]===0x0)return _0x5e4187(_0x196182(0x35c)+prefix+_0x196182(0x286));let _0x142edf=_0x353e66[0x0][_0x196182(0x3bb)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!_0x142edf)return _0x5e4187(mess[_0x196182(0x356)]['Iv']);try{_0x5e4187(mess['wait']),yta(_0x353e66[0x0])[_0x196182(0x13e)](_0x3e3d8c=>{const _0x199972=_0x196182,{dl_link:_0x169da8,thumb:_0x5a9977,title:_0x2386a5,filesizeF:_0x15e574,filesize:_0x5c48c3}=_0x3e3d8c;axios[_0x199972(0x1a3)](_0x199972(0x1e6)+_0x169da8)[_0x199972(0x13e)](_0x8a5c4d=>{const _0x285307=_0x199972;if(Number(_0x5c48c3)>=0x7530)return _0x106dee(_0x24b867,_0x5a9977,_0x285307(0x19f)+_0x2386a5+_0x285307(0x39f)+_0x15e574+_0x285307(0x2ab)+_0x8a5c4d[_0x285307(0x230)]+_0x285307(0x3e4));const _0x4aefa4='*YTMP3*\x0a\x0a*Title*\x20:\x20'+_0x2386a5+_0x285307(0x301)+_0x15e574+'\x0a\x0a_Ten\x20paciencia,\x20estoy\x20enviando\x20el\x20archivo\x20T~T_';_0x106dee(_0x24b867,_0x5a9977,_0x4aefa4),_0x106dee(_0x24b867,_0x169da8)['catch'](()=>_0x5e4187(mess['error'][_0x285307(0x1c5)]));});});}catch(_0x474246){_0x5e4187(mess['error']['api']);}break;case prefix+_0x196182(0x35e):if(_0x353e66['length']===0x0)return _0x5e4187('Enviar\x20*'+prefix+_0x196182(0x214));let _0x28b441=_0x353e66[0x0][_0x196182(0x3bb)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!_0x28b441)return _0x5e4187(mess[_0x196182(0x356)]['Iv']);try{_0x5e4187(mess['wait']),ytv(_0x353e66[0x0])[_0x196182(0x13e)](_0x33e3d1=>{const _0x20bf7b=_0x196182,{dl_link:_0x3153af,thumb:_0x3bb168,title:_0x2e1ea8,filesizeF:_0x28ff4d,filesize:_0x5dbba3}=_0x33e3d1;axios['get'](_0x20bf7b(0x1e6)+_0x3153af)[_0x20bf7b(0x13e)](_0x3a8791=>{const _0x561655=_0x20bf7b;if(Number(_0x5dbba3)>=0x9c40)return _0x106dee(_0x24b867,_0x3bb168,_0x561655(0x16c)+_0x2e1ea8+_0x561655(0x39f)+_0x28ff4d+'\x0a*Link*\x20:\x20'+_0x3a8791[_0x561655(0x230)]+'\x0a\x0a_Untuk\x20durasi\x20lebih\x20dari\x20batas\x20disajikan\x20dalam\x20mektuk\x20link_');const _0x3877f5='*Archivo\x20encontrado!*\x0a\x0a*Title*\x20:\x20'+_0x2e1ea8+_0x561655(0x377)+_0x28ff4d+'\x0a\x0a_Ten\x20paciencia,\x20estoy\x20enviando\x20el\x20archivo\x20T~T_';_0x106dee(_0x24b867,_0x3bb168,_0x3877f5),_0x106dee(_0x24b867,_0x3153af)[_0x561655(0x24a)](()=>_0x5e4187(mess['error'][_0x561655(0x1c5)]));});});}catch(_0x5e8935){_0x5e4187(mess[_0x196182(0x356)][_0x196182(0x1c5)]);}break;case prefix+'ytsearch':if(_0x353e66['length']<0x1)return _0x5e4187(_0x196182(0x1d8));var _0x31e1fd=_0x353e66[_0x196182(0x383)]('');try{var _0x33482b=await yts(_0x31e1fd);}catch{return await _0x446871['sendMessage'](_0x24b867,'Error!',MessageType[_0x196182(0x29b)],dload);}aramat=_0x33482b[_0x196182(0x358)];var _0x54ce98=await getBuffer(aramat[0x0][_0x196182(0x33a)]),_0x34a866='';_0x34a866+='「\x20*YOUTUBE\x20SEARCH*\x20」',_0x34a866+=_0x196182(0x2fa),_0x33482b[_0x196182(0x358)]['map'](_0x70cdd8=>{const _0x790db6=_0x196182;_0x34a866+=_0x790db6(0x274)+_0x70cdd8[_0x790db6(0x2fe)]+'\x0a',_0x34a866+=_0x790db6(0x150)+_0x70cdd8[_0x790db6(0x341)]+'\x0a',_0x34a866+=_0x790db6(0x141)+_0x70cdd8[_0x790db6(0x128)]+'\x0a',_0x34a866+='❏\x20Subida:\x20'+_0x70cdd8['ago']+_0x790db6(0x2fa);}),_0x34a866+=_0x196182(0x397),await _0x4c514e(_0x54ce98,_0x34a866);break;case'ig':if(!_0x215ee0(_0x353e66[0x0])&&!_0x353e66[0x0][_0x196182(0x11c)](_0x196182(0x16d)))return _0x5e4187(mess['Iv']);if(!_0x3e4ab9)return _0x14e199('Link?');_0x5e4187(mess['wait']),igdl(_0x353e66[0x0])[_0x196182(0x13e)](async _0x3cacb1=>{const _0x3777b5=_0x196182;for(let _0x56bd14 of _0x3cacb1[_0x3777b5(0x145)]){if(_0x56bd14[_0x3777b5(0x11c)]('.mp4')){const _0x199aee=await getBuffer(_0x56bd14);_0x446871[_0x3777b5(0x314)](_0x24b867,_0x199aee,_0xd4e35,{'mimetype':_0x3777b5(0x2da),'quoted':_0xf543a4,'caption':'Etto.UvU'});}else{if(_0x56bd14[_0x3777b5(0x11c)](_0x3777b5(0x174))){const _0x10b373=await getBuffer(_0x56bd14);_0x446871[_0x3777b5(0x314)](_0x24b867,_0x10b373,_0x5909a9,{'mimetype':_0x3777b5(0x3da),'quoted':_0xf543a4,'caption':_0x3777b5(0x18e)});}}}});break;case prefix+_0x196182(0x2df):if(!_0x3e4ab9)return _0x14e199('Usernamenya?');ig[_0x196182(0x395)](''+_0x353e66[_0x196182(0x383)]('\x20'))[_0x196182(0x13e)](_0x2e8306=>{const _0x34e7b2=_0x196182;console[_0x34e7b2(0x3b8)](''+_0x353e66[_0x34e7b2(0x383)]('\x20')),ten=''+_0x2e8306[_0x34e7b2(0x169)],teks=_0x34e7b2(0x2b4)+_0x2e8306[_0x34e7b2(0x127)]+'\x0a*Username*\x20:\x20'+_0x353e66['join']('')+'\x0a*Full\x20Name*\x20:\x20'+_0x2e8306[_0x34e7b2(0x162)]+_0x34e7b2(0x2d3)+_0x2e8306[_0x34e7b2(0x378)]+_0x34e7b2(0x167)+_0x2e8306[_0x34e7b2(0x3e2)]+'\x0a*Following*\x20:\x20'+_0x2e8306['followers']+_0x34e7b2(0x22a)+_0x2e8306[_0x34e7b2(0x186)]+_0x34e7b2(0x163)+_0x2e8306[_0x34e7b2(0x2d2)]+'\x0a\x0a*Link*\x20:\x20https://instagram.com/'+_0x353e66[_0x34e7b2(0x383)](''),_0x106dee(_0x24b867,ten,teks);});break;case prefix+'twitter':if(!_0x215ee0(_0x353e66[0x0])&&!_0x353e66[0x0][_0x196182(0x11c)](_0x196182(0x146)))return _0x5e4187(mess['Iv']);if(!_0x3e4ab9)return _0x14e199('Link?');ten=_0x353e66[0x0];var _0xa7c94=await twitterGetUrl(''+ten)[_0x196182(0x13e)](_0x54e89f=>{const _0x3bf5f0=_0x196182;ren=''+_0x54e89f[_0x3bf5f0(0x1a0)][0x2][_0x3bf5f0(0x341)],_0x106dee(_0x24b867,ren,_0x3bf5f0(0x3c6));});break;case prefix+_0x196182(0x315):if(!_0x215ee0(_0x353e66[0x0])&&!_0x353e66[0x0]['includes'](_0x196182(0x24d)))return _0x5e4187(mess['Iv']);if(!_0x3e4ab9)return _0x14e199(_0x196182(0x173));_0x5e4187(mess[_0x196182(0x3b7)]),tik[_0x196182(0x300)](''+_0x353e66[0x0])[_0x196182(0x13e)](_0x2f2bef=>{const _0x3a0066=_0x196182;console['log'](_0x2f2bef);const {videonowm:_0x150a80,videonowm2:_0x3678a0,text:_0x45facc}=_0x2f2bef;axios[_0x3a0066(0x1a3)](_0x3a0066(0x1e6)+_0x3678a0)[_0x3a0066(0x13e)](async _0x37d92e=>{const _0x3ce896=_0x3a0066;me='*Title*\x20:\x20'+_0x45facc+_0x3ce896(0x2ab)+_0x37d92e['data'],_0x446871['sendMessage'](_0x24b867,{'url':''+_0x150a80},_0xd4e35,{'mimetype':'video/mp4','quoted':_0xf543a4,'caption':me});});})[_0x196182(0x24a)](_0x46c363=>console[_0x196182(0x3b8)](_0x46c363));break;case prefix+_0x196182(0x3db):if(!_0x215ee0(_0x353e66[0x0])&&!_0x353e66[0x0]['includes'](_0x196182(0x24d)))return _0x5e4187(mess['Iv']);if(!_0x3e4ab9)return _0x14e199('Link?');_0x5e4187(mess[_0x196182(0x3b7)]),tik['ssstik'](''+_0x353e66[0x0])[_0x196182(0x13e)](_0x23600b=>{const _0x440211=_0x196182,{music:_0x13b87c,text:_0x2ffd15}=_0x23600b;_0x446871['sendMessage'](_0x24b867,{'url':''+_0x13b87c},_0x4bcb24,{'mimetype':_0x440211(0x366),'filename':''+_0x2ffd15,'quoted':_0xf543a4});})['catch'](_0x24248f=>console[_0x196182(0x3b8)](_0x24248f));break;case prefix+'fb':if(!_0x3e4ab9)return _0x5e4187(_0x196182(0x173));if(!_0x215ee0(_0x353e66[0x0])&&!_0x353e66[0x0][_0x196182(0x11c)](_0x196182(0x238)))return _0x5e4187(mess['Iv']);_0x5e4187(mess['wait']),te=_0x353e66[_0x196182(0x383)]('\x20'),_0x5cffe0(mess['wait']),Fb[_0x196182(0x3b4)](''+te)[_0x196182(0x13e)](_0x419c17=>{const _0x8b19af=_0x196182;ten=''+_0x419c17[_0x8b19af(0x1a0)]['sd'],tek=''+_0x419c17['title'],_0x106dee(_0x24b867,ten,_0x8b19af(0x235)+tek+'\x0a\x0a*Link*\x20:\x20'+ten)[_0x8b19af(0x24a)](_0xf544c7=>{const _0xc964d0=_0x8b19af;_0x5e4187(_0xc964d0(0x396));});});break;case prefix+_0x196182(0x250):if(_0x353e66[_0x196182(0x3e1)]<0x1)return _0x5e4187(_0x196182(0x31e));brien=_0x353e66['join']('\x20'),brainly(''+brien)['then'](_0x2db0b2=>{const _0x1beef1=_0x196182;teks='❉───────────────────────❉\x0a';for(let _0x119805 of _0x2db0b2[_0x1beef1(0x230)]){teks+=_0x1beef1(0x2d0)+_0x119805[_0x1beef1(0x2f3)]+'\x0a\x0a*➸\x20Respuesta:*\x20'+_0x119805['jawaban'][0x0][_0x1beef1(0x29b)]+'\x0a❉──────────────────❉\x0a';}_0x446871[_0x1beef1(0x314)](_0x24b867,teks,_0x52614d,{'quoted':_0xf543a4,'detectLinks':![]});});break;case prefix+_0x196182(0x1e0):if(!_0x3e4ab9)return _0x5e4187(_0x196182(0x343))[_0x196182(0x13e)](_0x5bb6dd=>_0x5bb6dd[_0x196182(0x3d5)]());afanya=_0x353e66[_0x196182(0x383)]('\x20'),gogel=await axios[_0x196182(0x1a3)](_0x196182(0x185)+afanya+_0x196182(0x344)),bupnyah=await getBuffer(gogel[_0x196182(0x230)]['screenshot']),_0x446871[_0x196182(0x314)](_0x24b867,bupnyah,_0x5909a9,{'quoted':_0xf543a4,'sendEphemeral':!![]})['catch'](_0x28b3fb=>{return'Mengulang\x20lord\x20ada\x20yg\x20mengerror...';});break;case prefix+_0x196182(0x227):if(!_0x176503)return _0x5e4187(mess['only'][_0x196182(0x304)]);if(!_0x57ac26)return _0x5e4187(mess[_0x196182(0x331)]['admin']);if(!_0xb700d6)return _0x5e4187(mess['only'][_0x196182(0x19d)]);if(_0x353e66['length']<0x1)return _0x5e4187(_0x196182(0x3ad));if(_0x353e66[0x0][_0x196182(0x3d4)]('08'))return _0x5e4187(_0x196182(0x297));try{num=_0x353e66[0x0][_0x196182(0x26e)](/ /g,'')+'@s.whatsapp.net',_0x446871[_0x196182(0x3df)](_0x24b867,[num]);}catch(_0x2a43fd){console[_0x196182(0x3b8)]('Error\x20:',_0x2a43fd),_0x5e4187(_0x196182(0x26c));}break;case prefix+_0x196182(0x2b9):if(!_0x176503)return _0x5e4187(mess['only'][_0x196182(0x304)]);if(!_0x57ac26)return _0x5e4187(mess['only'][_0x196182(0x1b8)]);if(!_0xb700d6)return _0x5e4187(mess['only'][_0x196182(0x19d)]);if(_0xf543a4[_0x196182(0x193)][_0x196182(0x2e1)]===undefined||_0xf543a4[_0x196182(0x193)]['extendedTextMessage']===null)return _0x5e4187(_0x196182(0x34e));mentioned=_0xf543a4[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)][_0x196182(0x14d)];if(mentioned[_0x196182(0x3e1)]>0x1){teks='*Adios\x20putito\x20>:]\x20:*\x20';for(let _0x2f9652 of mentioned){teks+='@'+_0x2f9652[_0x196182(0x34a)]('@')[0x0]+'\x0a';}_0xdbacf8(teks,mentioned,!![]),_0x446871[_0x196182(0x2dc)](_0x24b867,mentioned);}else _0xdbacf8(_0x196182(0x203)+mentioned[0x0][_0x196182(0x34a)]('@')[0x0],mentioned,!![]),_0x446871['groupRemove'](_0x24b867,mentioned);break;case prefix+_0x196182(0x2cf):if(!_0x176503)return _0x5e4187(mess[_0x196182(0x331)][_0x196182(0x304)]);if(!_0x57ac26)return _0x5e4187(mess[_0x196182(0x331)][_0x196182(0x1b8)]);if(!_0xb700d6)return _0x5e4187(mess['only'][_0x196182(0x19d)]);if(_0xf543a4[_0x196182(0x193)][_0x196182(0x2e1)]===undefined||_0xf543a4[_0x196182(0x193)][_0x196182(0x2e1)]===null)return;mentioned=_0xf543a4[_0x196182(0x193)]['extendedTextMessage'][_0x196182(0x210)]['mentionedJid'];if(mentioned[_0x196182(0x3e1)]>0x1){teks=_0x196182(0x325);for(let _0xc48995 of mentioned){teks+='@'+_0xc48995[_0x196182(0x34a)]('@')[0x0]+'\x0a';}_0xdbacf8(_0x24b867,mentioned,!![]),_0x446871[_0x196182(0x2dc)](_0x24b867,mentioned);}else _0xdbacf8(_0x196182(0x28f)+mentioned[0x0][_0x196182(0x34a)]('@')[0x0]+'\x20kamu\x20jadi\x20admin!',mentioned,!![]),_0x446871['groupMakeAdmin'](_0x24b867,mentioned);break;case prefix+_0x196182(0x18f):if(!_0x176503)return _0x5e4187(mess[_0x196182(0x331)][_0x196182(0x304)]);if(!_0x57ac26)return _0x5e4187(mess[_0x196182(0x331)][_0x196182(0x1b8)]);if(!_0xb700d6)return _0x5e4187(mess[_0x196182(0x331)][_0x196182(0x19d)]);if(_0xf543a4[_0x196182(0x193)]['extendedTextMessage']===undefined||_0xf543a4[_0x196182(0x193)][_0x196182(0x2e1)]===null)return;mentioned=_0xf543a4[_0x196182(0x193)]['extendedTextMessage'][_0x196182(0x210)][_0x196182(0x14d)];if(mentioned[_0x196182(0x3e1)]>0x1){teks=_0x196182(0x288);for(let _0x64d3b5 of mentioned){teks+='@'+_0x64d3b5[_0x196182(0x34a)]('@')[0x0]+'\x0a';}_0xdbacf8(teks,mentioned,!![]),_0x446871['groupRemove'](_0x24b867,mentioned);}else _0xdbacf8(_0x196182(0x131)+mentioned[0x0][_0x196182(0x34a)]('@')[0x0]+_0x196182(0x1ba),mentioned,!![]),_0x446871[_0x196182(0x305)](_0x24b867,mentioned);break;case prefix+'fitnahpc':if(!_0x3e4ab9)return _0x5e4187(prefix+'fitnahpc\x20teks\x20target|teks\x20lu');jids=targetpc+_0x196182(0x170);var _0x2b1ee9=_0x353e66[_0x196182(0x383)]('\x20')[_0x196182(0x26e)](/@|\d/gi,'')[_0x196182(0x34a)]('|'),_0x42fd07=_0xf543a4[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)][_0x196182(0x14d)][0x0],_0x41610b={'contextInfo':{'quotedMessage':{'extendedTextMessage':{'text':_0x2b1ee9[0x0]}}}};const _0x436661=await _0x446871[_0x196182(0x314)](jids,''+_0x2b1ee9[0x1],MessageType[_0x196182(0x29b)],_0x41610b);await _0x446871[_0x196182(0x237)](jids,{'id':_0x436661[_0x196182(0x2a6)],'remoteJid':jids,'fromMe':!![]});break;case prefix+'kontak':_0x4ddfa7=_0x353e66['join']('\x20'),entah=_0x4ddfa7[_0x196182(0x34a)]('|')[0x0],nah=_0x4ddfa7['split']('|')[0x1];if(isNaN(entah))return _0x5e4187(_0x196182(0x135));vcard='BEGIN:VCARD\x0a'+_0x196182(0x25c)+('FN:'+nah+'\x0a')+(_0x196182(0x1fc)+entah+':'+phoneNum('+'+entah)[_0x196182(0x28c)](_0x196182(0x13a))+'\x0a')+'END:VCARD'['trim'](),_0x446871[_0x196182(0x314)](_0x24b867,{'displayName':''+nah,'vcard':vcard},_0x52b919);break;case prefix+_0x196182(0x3ae):if(!_0xf543a4['key'][_0x196182(0x1c7)])return _0x5cffe0(_0x196182(0x39b));if(!_0x176503)return _0x5e4187(mess[_0x196182(0x331)][_0x196182(0x304)]);var _0x44dd95=_0x353e66[_0x196182(0x383)]('\x20'),_0xa87bb3=await _0x446871[_0x196182(0x299)](_0x24b867),_0x3fb594=_0xa87bb3['participants'],_0x6b0d93=[];_0x3fb594[_0x196182(0x166)](async _0x3d849d=>{const _0x53dadf=_0x196182;_0x6b0d93['push'](_0x3d849d['id'][_0x53dadf(0x26e)](_0x53dadf(0x1f4),_0x53dadf(0x1ea)));});var _0x3179e1={'text':_0x44dd95,'contextInfo':{'mentionedJid':_0x6b0d93},'quoted':_0xf543a4};_0x446871[_0x196182(0x314)](_0x24b867,_0x3179e1,_0x52614d);break;case prefix+_0x196182(0x2f5):if((_0x4506a5&&!_0xf543a4['message'][_0x196182(0x2af)]||_0x21e922)&&_0x353e66[_0x196182(0x3e1)]==0x0){encmedia=_0x21e922?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)['replace'](_0x196182(0x3d2),'m'))['message'][_0x196182(0x2e1)][_0x196182(0x210)]:_0xf543a4,file=await _0x446871[_0x196182(0x295)](encmedia,filename=getRandom()),_0x44dd95=_0x353e66[_0x196182(0x383)]('\x20');var _0xa87bb3=await _0x446871[_0x196182(0x299)](_0x24b867),_0x3fb594=_0xa87bb3[_0x196182(0x148)],_0x6b0d93=[];_0x3fb594['map'](async _0x63ef1c=>{const _0x212214=_0x196182;_0x6b0d93['push'](_0x63ef1c['id'][_0x212214(0x26e)]('c.us',_0x212214(0x1ea)));});var _0x41610b={'contextInfo':{'mentionedJid':_0x6b0d93},'quoted':_0xf543a4};ini_buffer=fs[_0x196182(0x2f8)](file),_0x446871[_0x196182(0x314)](_0x24b867,ini_buffer,MessageType[_0x196182(0x226)],_0x41610b),fs[_0x196182(0x38d)](file);}else _0x5e4187(_0x196182(0x213));break;case prefix+_0x196182(0x367):if(!_0x657b7f)return _0x5e4187('Reply\x20Gif\x20nya\x20dengan\x20caption\x20'+(prefix+_0x1fc7c9));quoted=JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)]('quotedM','m'))[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)],download=await _0x446871[_0x196182(0x320)](quoted),await fs[_0x196182(0x2d6)](_0x196182(0x2a1),download);var _0xa87bb3=await _0x446871[_0x196182(0x299)](_0x24b867),_0x3fb594=_0xa87bb3[_0x196182(0x148)],_0x6b0d93=[];_0x3fb594['map'](async _0x58ceb5=>{const _0x33ac0a=_0x196182;_0x6b0d93[_0x33ac0a(0x257)](_0x58ceb5['id'][_0x33ac0a(0x26e)]('c.us',_0x33ac0a(0x1ea)));}),thumb=fs[_0x196182(0x2f8)](_0x196182(0x2a1)),_0x446871['sendMessage'](_0x24b867,thumb,_0xd4e35,{'contextInfo':{'mentionedJid':_0x6b0d93},'quoted':_0xf543a4,'mimetype':_0x196182(0x228),'thumbnail':thumb}),await fs[_0x196182(0x38d)]('giftag.gif');break;case prefix+_0x196182(0x1ab):if(!_0x4b639d)return amek[_0x196182(0x322)](_0x24b867,'Reply\x20Document\x20dengan\x20caption\x20*'+(prefix+_0x1fc7c9)+'*',_0xf543a4);quoted=JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)],download=await _0x446871[_0x196182(0x320)](quoted),await fs[_0x196182(0x2d6)]('doc.txt',download);var _0xa87bb3=await _0x446871[_0x196182(0x299)](_0x24b867),_0x3fb594=_0xa87bb3[_0x196182(0x148)],_0x6b0d93=[];_0x3fb594[_0x196182(0x166)](async _0x440578=>{const _0x4c4087=_0x196182;_0x6b0d93[_0x4c4087(0x257)](_0x440578['id'][_0x4c4087(0x26e)]('c.us',_0x4c4087(0x1ea)));}),_0x446871[_0x196182(0x314)](_0x24b867,fs['readFileSync'](_0x196182(0x372)),_0x2880f2,{'contextInfo':{'mentionedJid':_0x6b0d93},'quoted':_0xf543a4,'mimetype':_0x196182(0x1f6)}),await fs[_0x196182(0x38d)](_0x196182(0x372));break;case prefix+_0x196182(0x25b):if(!_0xf543a4[_0x196182(0x125)][_0x196182(0x1c7)])return _0x5e4187(_0x196182(0x39b));_0x4ddfa7=_0x353e66[_0x196182(0x383)](''),entah=_0x4ddfa7['split']('|')[0x0],nah=_0x4ddfa7[_0x196182(0x34a)]('|')[0x1];if(isNaN(entah))return _0x5e4187('Invalid\x20phone\x20number');members_ids=[];for(let _0x47e93c of _0x1ab715){members_ids[_0x196182(0x257)](_0x47e93c[_0x196182(0x2b7)]);}vcard='BEGIN:VCARD\x0a'+_0x196182(0x25c)+('FN:'+nah+'\x0a')+(_0x196182(0x1fc)+entah+':'+phoneNum('+'+entah)['getNumber'](_0x196182(0x13a))+'\x0a')+'END:VCARD'[_0x196182(0x30f)](),_0x446871[_0x196182(0x314)](_0x24b867,{'displayName':''+nah,'vcard':vcard},_0x52b919,{'contextInfo':{'mentionedJid':members_ids}});break;case prefix+_0x196182(0x197):if((_0x4506a5&&!_0xf543a4[_0x196182(0x193)][_0x196182(0x2af)]||_0x21e922)&&_0x353e66[_0x196182(0x3e1)]==0x0){encmedia=_0x21e922?JSON['parse'](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)][_0x196182(0x210)]:_0xf543a4,file=await _0x446871['downloadAndSaveMediaMessage'](encmedia,filename=getRandom()),_0x44dd95=_0x353e66[_0x196182(0x383)]('\x20');var _0xa87bb3=await _0x446871[_0x196182(0x299)](_0x24b867),_0x3fb594=_0xa87bb3[_0x196182(0x148)],_0x6b0d93=[];_0x3fb594[_0x196182(0x166)](async _0x471e8c=>{const _0x2d07b2=_0x196182;_0x6b0d93[_0x2d07b2(0x257)](_0x471e8c['id'][_0x2d07b2(0x26e)](_0x2d07b2(0x1f4),'s.whatsapp.net'));});var _0x41610b={'contextInfo':{'mentionedJid':_0x6b0d93},'quoted':_0xf543a4};ini_buffer=fs[_0x196182(0x2f8)](file),_0x446871['sendMessage'](_0x24b867,ini_buffer,MessageType[_0x196182(0x226)],_0x41610b),fs[_0x196182(0x38d)](file);}else{if((_0x4506a5&&!_0xf543a4[_0x196182(0x193)][_0x196182(0x2af)]||_0x44b2cb)&&_0x353e66['length']==0x0){encmedia=_0x44b2cb?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)]['extendedTextMessage'][_0x196182(0x210)]:_0xf543a4,file=await _0x446871[_0x196182(0x295)](encmedia,filename=getRandom()),_0x44dd95=_0x353e66[_0x196182(0x383)]('\x20');var _0xa87bb3=await _0x446871[_0x196182(0x299)](_0x24b867),_0x3fb594=_0xa87bb3[_0x196182(0x148)],_0x6b0d93=[];_0x3fb594[_0x196182(0x166)](async _0x2321c4=>{const _0x84194d=_0x196182;_0x6b0d93[_0x84194d(0x257)](_0x2321c4['id'][_0x84194d(0x26e)](_0x84194d(0x1f4),_0x84194d(0x1ea)));});var _0x41610b={'contextInfo':{'mentionedJid':_0x6b0d93},'quoted':_0xf543a4};ini_buffer=fs[_0x196182(0x2f8)](file),_0x446871[_0x196182(0x314)](_0x24b867,ini_buffer,_0x5909a9,_0x41610b),fs[_0x196182(0x38d)](file);}else{if((_0x4506a5&&!_0xf543a4[_0x196182(0x193)][_0x196182(0x2af)]||_0x35df3e)&&_0x353e66['length']==0x0){encmedia=_0x35df3e?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)]['contextInfo']:_0xf543a4,file=await _0x446871['downloadAndSaveMediaMessage'](encmedia,filename=getRandom()),_0x44dd95=_0x353e66[_0x196182(0x383)]('\x20');var _0xa87bb3=await _0x446871[_0x196182(0x299)](_0x24b867),_0x3fb594=_0xa87bb3[_0x196182(0x148)],_0x6b0d93=[];_0x3fb594[_0x196182(0x166)](async _0x2fbf64=>{const _0x42c66b=_0x196182;_0x6b0d93[_0x42c66b(0x257)](_0x2fbf64['id'][_0x42c66b(0x26e)](_0x42c66b(0x1f4),'s.whatsapp.net'));});var _0x41610b={'mimetype':_0x196182(0x366),'ptt':!![],'contextInfo':{'mentionedJid':_0x6b0d93},'quoted':_0xf543a4};ini_buffer=fs[_0x196182(0x2f8)](file),_0x446871[_0x196182(0x314)](_0x24b867,ini_buffer,_0x4bcb24,_0x41610b),fs[_0x196182(0x38d)](file);}else{if((_0x4506a5&&!_0xf543a4[_0x196182(0x193)][_0x196182(0x2af)]||_0x657b7f)&&_0x353e66[_0x196182(0x3e1)]==0x0){encmedia=_0x657b7f?JSON['parse'](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)](_0x196182(0x3d2),'m'))[_0x196182(0x193)][_0x196182(0x2e1)]['contextInfo']:_0xf543a4,file=await _0x446871[_0x196182(0x295)](encmedia,filename=getRandom()),_0x44dd95=_0x353e66[_0x196182(0x383)]('\x20');var _0xa87bb3=await _0x446871[_0x196182(0x299)](_0x24b867),_0x3fb594=_0xa87bb3['participants'],_0x6b0d93=[];_0x3fb594[_0x196182(0x166)](async _0xfa6ad1=>{const _0x5179bf=_0x196182;_0x6b0d93[_0x5179bf(0x257)](_0xfa6ad1['id'][_0x5179bf(0x26e)](_0x5179bf(0x1f4),'s.whatsapp.net'));});var _0x41610b={'mimetype':_0x196182(0x2da),'contextInfo':{'mentionedJid':_0x6b0d93},'quoted':_0xf543a4};ini_buffer=fs['readFileSync'](file),_0x446871[_0x196182(0x314)](_0x24b867,ini_buffer,_0xd4e35,_0x41610b),fs[_0x196182(0x38d)](file);}else _0x5e4187('responde\x20a\x20un\x20video\x20imagen\x20o\x20sticker\x20con\x20:\x20'+prefix+'totag');}}}break;case prefix+'join':try{if(!_0x215ee0(_0x353e66[0x0])&&!_0x353e66[0x0][_0x196182(0x11c)]('whatsapp.com'))return _0x5e4187(mess['Iv']);hen=_0x353e66[0x0];if(!_0x3e4ab9)return _0x5cffe0(_0x196182(0x16a));var _0x519eca=hen[_0x196182(0x34a)]('https://chat.whatsapp.com/')[0x1];if(!_0x519eca)return _0x14e199('asegúrese\x20de\x20que\x20el\x20enlace\x20sea\x20correcto\x20T-T!');var _0x2b50a0=await _0x446871[_0x196182(0x2bf)](_0x519eca);_0x5cffe0(_0x196182(0x3d6));}catch{_0x14e199(_0x196182(0x353));}break;case prefix+'runtime':case prefix+_0x196182(0x36e):run=process['uptime'](),teks=''+kyun(run),_0x14e199(teks);break;case prefix+'speed':case prefix+_0x196182(0x3c8):const _0x2cb2f3=speed(),_0xcf431e=speed()-_0x2cb2f3;exec('neofetch\x20--stdout',(_0x544c30,_0x5f127b,_0x2dcc98)=>{const _0x35f69e=_0x196182,_0x5551f3=_0x5f127b[_0x35f69e(0x260)](_0x35f69e(0x199)),_0x33c576=_0x5551f3[_0x35f69e(0x26e)](/Memory:/,'Ram:'),_0x2ae5cc='*'+_0x33c576+_0x35f69e(0x219)+_0xcf431e['toFixed'](0x4)+_0x35f69e(0x252);_0x14e199(_0x2ae5cc);});break;case prefix+'bc':if(!_0xff6e92)return _0x5e4187(_0x196182(0x2bd));if(_0x353e66[_0x196182(0x3e1)]<0x1)return _0x5e4187('.......');const _0x134e83=String[_0x196182(0x390)](0x200e),_0x3800d8=_0x134e83['repeat'](0xfa1);_0x25f94e=await _0x446871['chats'][_0x196182(0x358)]();if(_0x4506a5&&!_0xf543a4['message']['videoMessage']||_0x44b2cb){const _0x5c0ae6=_0x44b2cb?JSON[_0x196182(0x118)](JSON[_0x196182(0x3d9)](_0xf543a4)[_0x196182(0x26e)]('quotedM','m'))[_0x196182(0x193)]['extendedTextMessage'][_0x196182(0x210)]:_0xf543a4;bc=await _0x446871[_0x196182(0x320)](_0x5c0ae6);for(let _0x5b8612 of _0x25f94e){_0x446871[_0x196182(0x314)](_0x5b8612[_0x196182(0x2b7)],bc,_0x5909a9,{'caption':body[_0x196182(0x160)](0x4)+_0x196182(0x1f5),'sendEphemeral':!![]});}_0x5e4187(_0x196182(0x3d6));}else{for(let _0x5a8482 of _0x25f94e){_0x17786d(_0x5a8482[_0x196182(0x2b7)],''+body[_0x196182(0x160)](0x4)+_0x3800d8+_0x196182(0x1ef));}_0x5e4187(_0x196182(0x116));}break;case prefix+'level':if(!_0x176503)return _0x5e4187(mess[_0x196182(0x331)][_0x196182(0x304)]);const _0x2fda04=_0x401089(_0x4f108c),_0x200c94=_0x304f4f(_0x4f108c);if(_0x2fda04===undefined&&_0x200c94===undefined)return _0x5e4187(_0x196182(0x336));const _0x5ae66d=0x1388*(Math[_0x196182(0x1d0)](0x2,_0x2fda04)-0x1);resul='┌──⫶\x20*Nivel*\x20⫶──\x0a├\x20*Nombre*\x20:\x20'+_0x451f1b+_0x196182(0x37c)+_0x4f108c[_0x196182(0x34a)]('@')[0x0]+_0x196182(0x149)+_0x200c94+'/'+_0x5ae66d+_0x196182(0x29c)+_0x2fda04,_0x3a47b5(resul,_0x52614d,numbernye,_0x5ed702);break;case prefix+'narutod':oi=body[_0x196182(0x160)](0x8),oii=await getBuffer('https://patoapi.herokuapp.com/api/photooxy/naruto?text='+oi),_0x446871['sendMessage'](_0x24b867,oii,_0x5909a9,{'quoted':_0xf543a4,'caption':_0x196182(0x1b1)});break;default:if(budy[_0x196182(0x3d4)]('$')){if(!_0xff6e92)return;var _0x2a59e9=budy[_0x196182(0x160)](0x2);exec(_0x2a59e9,(_0x132810,_0x531d34)=>{const _0x8ab419=_0x196182;if(_0x132810)return _0x5e4187(''+_0x132810);_0x531d34&&(_0x5e4187(''+_0x531d34),console[_0x8ab419(0x3b8)](_0x8ab419(0x271),'[','\x1b[1;36mEVALL\x1b[1;37m',']',_0x3ce644,color('$','aqua'),'from',color(_0x35b488[_0x8ab419(0x34a)]('@')[0x0]),'args\x20:',color(_0x353e66[_0x8ab419(0x3e1)])));});}if(budy[_0x196182(0x3d4)]('>')){if(!_0xff6e92)return;var _0x2a59e9=budy[_0x196182(0x160)](0x2);function _0x4ffaca(_0x4080af){const _0x1f7513=_0x196182;var _0x35497d=JSON[_0x1f7513(0x3d9)](_0x4080af,null,0x2),_0x5b3306=util['format'](_0x35497d);return _0x5e4187(_0x5b3306);}try{_0x5e4187(util[_0x196182(0x3b2)](eval(';(async\x20()\x20=>\x20{\x20'+_0x2a59e9+_0x196182(0x21c)))),console['log'](_0x196182(0x271),'[',_0x196182(0x35d),']',_0x3ce644,color('>',_0x196182(0x2c4)),_0x196182(0x2c3),color(_0x35b488[_0x196182(0x34a)]('@')[0x0]),_0x196182(0x37e),color(_0x353e66['length']));}catch(_0x526384){err=String(_0x526384),_0x5e4187(err);}}else{if(budy!=undefined){}}if(!budy['startsWith']('$'))return;if(!budy['startsWith']('>'))return;}if(_0x176503&&budy!=undefined){}else console[_0x196182(0x3b8)](color(_0x196182(0x2ef),_0x196182(0x1c4)),_0x196182(0x2b2),color(_0x4f108c['split']('@')[0x0]));}catch(_0x491b39){_0x491b39=String(_0x491b39),!_0x491b39['includes']('this.isZero')&&(console[_0x196182(0x3b8)](_0x196182(0x3cd),color(_0x491b39,'red')),console[_0x196182(0x3b8)](_0x491b39));}});}starts();
