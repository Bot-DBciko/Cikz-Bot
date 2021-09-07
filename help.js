exports.menu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `${ucapan.data.result} ${pushname}
╒═══ 《 *${botName}* 》 ═══
├────────────────────
├≽ *Creator : Ciko Hachiko*
├≽ *Lib : Baileys V.3.5.1*
├≽ *Prefix : 「 ${prefix} 」*
├≽ *Total Fitur : 200+*
├≽ *Total Pengguna : 1${pendaftar.length}*
├≽ *Tanggal : ${tanggal}*
├≽ *Pukul : ${jam}*
├≽ *Runtime Bot*
├≽ *${runtime}*
├────────────────────
╞═══ 《 *USER INFO* 》 ═══
├────────────────────
├≽ *Name* : *${pushname}*
├≽ *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
├≽ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
├≽ *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
├≽ *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
├────────────────────
╒═══ 《 *MENU* 》 ═══
├────────────────────
├≽ *${prefix}royalgroup*
├≽ *${prefix}stickermenu*
├≽ *${prefix}creatormenu*
├≽ *${prefix}groupmenu*
├≽ *${prefix}sistemmenu*
├≽ *${prefix}gabutmenu*
├≽ *${prefix}gamemenu*
├≽ *${prefix}downloadmenu*
├≽ *${prefix}searchmenu*
├≽ *${prefix}stalkmenu*
├≽ *${prefix}randommenu*
├≽ *${prefix}animemenu*
├≽ *${prefix}nsfwmenu*
├≽ *${prefix}toolsmenu*
├≽ *${prefix}makermenu*
├≽ *${prefix}storagemenu*
├≽ *${prefix}othermenu*
├────────────────────
╒═══ 《 *STICKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}sticker*
├≽ *${prefix}stickergif*
├≽ *${prefix}swm* author|pack
├≽ *${prefix}take* author|pack
├≽ *${prefix}toimg*
├≽ *${prefix}tovideo*
├≽ *${prefix}attp* teks
├─────────────────────
╒═══ 《 *CREATOR MENU* 》 ═══
├────────────────────
├≽ *${prefix}addprem* @tag
├≽ *${prefix}delprem* @tag
├≽ *${prefix}ban* @tag
├≽ *${prefix}unban* @tag
├≽ *${prefix}join* link_group
├≽ *${prefix}addbaword* teks
├≽ *${prefix}delbaword* teks
├≽ *${prefix}public*
├≽ *${prefix}self*
├≽ *${prefix}exif*
├≽ *${prefix}bc* teks
├≽ *${prefix}setprefix* multi|nopref
├≽ *${prefix}setthumb*
├≽ *${prefix}clearall*
├≽ *${prefix}>*
├≽ *${prefix}$*
├─────────────────────
╒═══ 《 *GROUP MENU* 》 ═══
├────────────────────
├≽ *${prefix}afk* teks
├≽ *${prefix}infogrup*
├≽ *${prefix}add* @tag
├≽ *${prefix}kick* @tag
├≽ *${prefix}promote* @tag
├≽ *${prefix}demote* @tag
├≽ *${prefix}linkgc*
├≽ *${prefix}leave*
├≽ *${prefix}setdesc* teks
├≽ *${prefix}setgrupname* teks
├≽ *${prefix}setppgrup*
├≽ *${prefix}group* open/close
├≽ *${prefix}tagall*
├≽ *${prefix}tagme*
├≽ *${prefix}kontak* nomor|nama
├≽ *${prefix}hidetag* teks
├≽ *${prefix}getpp* @tag
├≽ *${prefix}mute*
├≽ *${prefix}unmute*
├─────────────────────
╒═══ 《 *SISTEM MENU* 》 ═══
├────────────────────
├≽ *${prefix}antilink* enable | disable
├≽ *${prefix}antiwame* enable | disable
├≽ *${prefix}antibadword* enable | disable
├≽ *${prefix}welcome* enable | disable
├≽ *${prefix}left* enable | disable
├─────────────────────
╒═══ 《 *GABUTZ MENU* 》 ═══
├────────────────────
├≽ *${prefix}apakah* teks
├≽ *${prefix}bisakah* teks
├≽ *${prefix}kapankah* teks
├≽ *${prefix}hobby* nama
├≽ *${prefix}rate* teks
├≽ *${prefix}cekbapak*
├≽ *${prefix}seberapagay* nama
├≽ *${prefix}jadian*
├≽ *${prefix}putus*
├≽ *${prefix}ganteng*
├≽ *${prefix}cantik*
├≽ *${prefix}truth*
├≽ *${prefix}dare*
├─────────────────────
╒═══ 《 *GAME MENU* 》 ═══
├────────────────────
├≽ *${prefix}tictactoe* @tag
├≽ *${prefix}delttt*
├≽ *${prefix}tebakgambar*
├≽ *${prefix}family100*
├≽ *${prefix}suit* batu|gunting|kertas
├─────────────────────
╒═══ 《 *DOWNLOAD MENU* 》 ═══
├────────────────────
├≽ *${prefix}ytmp3* link_yt
├≽ *${prefix}ytmp4* link_yt
├≽ *${prefix}play* judul_lagu
├≽ *${prefix}playmp4* judul_video
├≽ *${prefix}tiktok* link
├≽ *${prefix}tiktoknowm* link
├≽ *${prefix}tiktokmp3* link
├≽ *${prefix}instagram* link
├≽ *${prefix}facebook* link
├─────────────────────
╒═══ 《 *SEARCH MENU* 》 ═══
├────────────────────
├≽ *${prefix}ytsearch* query
├≽ *${prefix}pinterest* query
├─────────────────────
╒═══ 《 *STALKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}igstalk* username
├≽ *${prefix}githubstalk* username
├─────────────────────
╒═══ 《 *RANDOM MENU* 》 ═══
├────────────────────
├≽ *${prefix}memeindo*
├≽ *${prefix}darkjokes*
├≽ *${prefix}pantun*
├≽ *${prefix}bucin*
├≽ *${prefix}cehor*
├≽ *${prefix}fakta*
├≽ *${prefix}katabijak*
├≽ *${prefix}motivasi*
├─────────────────────
╒═══ 《 *ANIME MENU* 》 ═══
├────────────────────
├≽ *${prefix}waifu*
├≽ *${prefix}loli*
├≽ *${prefix}husbu*
├≽ *${prefix}shota*
├≽ *${prefix}nekonime*
├≽ *${prefix}megumin*
├≽ *${prefix}sagiri*
├≽ *${prefix}shinobu*
├─────────────────────
╒═══ 《 *TOOLS MENU* 》 ═══
├────────────────────
├≽ *${prefix}nulis* teks
├≽ *${prefix}nuliskiri* teks
├≽ *${prefix}nuliskanan* teks
├≽ *${prefix}foliokiri* teks
├≽ *${prefix}foliokanan* teks
├≽ *${prefix}tinyurl* link
├≽ *${prefix}ebase64*
├≽ *${prefix}debase64*
├≽ *${prefix}ehex*
├≽ *${prefix}dehex*
├≽ *${prefix}ebinary*
├≽ *${prefix}debinary*
├─────────────────────
╒═══ 《 *MAKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}hartatahta* teks 
├≽ *${prefix}neon* teks
├≽ *${prefix}matrix* teks
├≽ *${prefix}blackpink* teks
├≽ *${prefix}halloween* teks
├≽ *${prefix}thundername* teks
├≽ *${prefix}devilwings* teks
├≽ *${prefix}cloudtext* teks
├≽ *${prefix}bloodtext* teks
├≽ *${prefix}bloodtext2* teks
├≽ *${prefix}steeltext* teks
├≽ *${prefix}lavatext* teks
├≽ *${prefix}toxiclogo* teks
├≽ *${prefix}dropwater* teks
├≽ *${prefix}metaldark* teks
├≽ *${prefix}sandwrite* teks
├≽ *${prefix}3dwater* teks
├≽ *${prefix}graffiti* teks
├≽ *${prefix}shadowtext* teks
├≽ *${prefix}smoketext* teks
├≽ *${prefix}romancetext* teks
├≽ *${prefix}carvedwood* teks
├≽ *${prefix}harrypotter* teks
├≽ *${prefix}flamingtext* teks
├≽ *${prefix}falleaves* teks
├≽ *${prefix}underwater* teks
├≽ *${prefix}wolfmetal* teks
├≽ *${prefix}woodboard* teks
├≽ *${prefix}undergrass* teks
├≽ *${prefix}coffetext* teks
├≽ *${prefix}lovetext* teks
├≽ *${prefix}burnpaper* teks
├≽ *${prefix}lovemessage* teks
├≽ *${prefix}graffiti2* teks1|teks2
├≽ *${prefix}phlogo* teks1|teks2
├≽ *${prefix}glitch* teks1|teks2
├≽ *${prefix}graffiti3* teks1|teks2
├≽ *${prefix}layeredtext* teks1|teks2
├≽ *${prefix}vintage* teks1|teks2
├≽ *${prefix}3dspace* teks1|teks2
├≽ *${prefix}stonetext* teks1|teks2
├≽ *${prefix}avengers* teks1|teks2
├≽ *${prefix}marvellogo* teks1|teks2
├≽ *${prefix}3dmetal* teks1|teks2
├≽ *${prefix}lionlogo* teks1|teks2
├≽ *${prefix}wolflogo* teks1|teks2
├≽ *${prefix}ninjalogo* teks1|teks2
├≽ *${prefix}pubglogo* teks1|teks2
├─────────────────────
╒═══ 《 *STORAGE MENU* 》 ═══
├────────────────────
├≽ *${prefix}sound*
├─────────────────────
╒═══ 《 *OTHER MENU* 》 ═══
├────────────────────
├≽ *cekprefix*
├≽ *${prefix}stats*
├≽ *${prefix}limit*
├≽ *${prefix}balance*
├≽ *${prefix}runtime*
├≽ *${prefix}speed*
├≽ *${prefix}owner*
├≽ *${prefix}royalgroup*
├≽ *${prefix}donasi*
├≽ *${prefix}sourcecode*
├≽ *${prefix}cekprem*
├≽ *${prefix}listprem*
├≽ *${prefix}listban*
├≽ *${prefix}listbadword*
├≽ *${prefix}buylimit* jumlah
├≽ *${prefix}buyglimit* jumlah
├≽ *${prefix}topglobal*
├≽ *${prefix}toplocal*
├≽ *${prefix}readmore* teks1|teks2
├≽ *${prefix}cekapikey*
├─────────────────────
╞═══ 《 *THANKS TO* 》 ═══
├────────────────────
├≽ *Allah SWT*
├≽ *Xinz-Team*
├≽ *Aqulzz*
├≽ *Nafizz*
├≽ *Y-DhyZx*
├≽ *Ramlan ID*
├≽ *X-MrG3P5*
├≽ *HaritsF*
├≽ *Nanda*
├≽ *Juwen*
├≽ *Adiwajshing/Baileys*
╘═══ 《 *By CikoH* 》 ═══`
}

exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `${ucapan.data.result} ${pushname}
╒═══ 《 *${botName}* 》 ═══
├────────────────────
├≽ *Creator : Ciko Hachiko*
├≽ *Lib : Baileys V.3.5.1*
├≽ *Prefix : 「 ${prefix} 」*
├≽ *Total Fitur : 200+*
├≽ *Total Pengguna : 1${pendaftar.length}*
├≽ *Tanggal : ${tanggal}*
├≽ *Pukul : ${jam}*
├≽ *Runtime Bot*
├≽ *${runtime}*
├────────────────────
╞═══ 《 *USER INFO* 》 ═══
├────────────────────
├≽ *Name* : *${pushname}*
├≽ *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
├≽ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
├≽ *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
├≽ *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
├────────────────────
╞═══ 《 *MENU* 》 ═══
├────────────────────
├≽ *${prefix}royalgroup*
├≽ *${prefix}allmenu*
├≽ *${prefix}stickermenu*
├≽ *${prefix}creatormenu*
├≽ *${prefix}groupmenu*
├≽ *${prefix}sistemmenu*
├≽ *${prefix}gabutmenu*
├≽ *${prefix}gamemenu*
├≽ *${prefix}downloadmenu*
├≽ *${prefix}searchmenu*
├≽ *${prefix}stalkmenu*
├≽ *${prefix}randommenu*
├≽ *${prefix}animemenu*
├≽ *${prefix}nsfwmenu*
├≽ *${prefix}toolsmenu*
├≽ *${prefix}makermenu*
├≽ *${prefix}storagemenu*
├≽ *${prefix}othermenu*
├────────────────────
╞═══ 《 *THANKS TO* 》 ═══
├────────────────────
├≽ *Xinz-Team*
├≽ *Aqulzz*
├≽ *Nafizz*
├≽ *Y-DhyZx*
├≽ *Ramlan ID*
├≽ *X-MrG3P5*
├≽ *CikoH*
├≽ *Nanda*
├≽ *Juwen*
├≽ *Adiwajshing/Baileys*
╘═══ 《 *By CikoH* 》 ═══`
}

exports.stickerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STICKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}sticker*
├≽ *${prefix}stickergif*
├≽ *${prefix}swm* author|pack
├≽ *${prefix}take* author|pack
├≽ *${prefix}toimg*
├≽ *${prefix}tovideo*
├≽ *${prefix}attp* teks
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.ownerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *CREATOR MENU* 》 ═══
├────────────────────
├≽ *${prefix}addprem* @tag
├≽ *${prefix}delprem* @tag
├≽ *${prefix}ban* @tag
├≽ *${prefix}unban* @tag
├≽ *${prefix}join* link_group
├≽ *${prefix}addbaword* teks
├≽ *${prefix}delbaword* teks
├≽ *${prefix}public*
├≽ *${prefix}self*
├≽ *${prefix}exif*
├≽ *${prefix}bc* teks
├≽ *${prefix}setprefix* multi|nopref
├≽ *${prefix}setthumb*
├≽ *${prefix}clearall*
├≽ *${prefix}>*
├≽ *${prefix}$*
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.groupMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GROUP MENU* 》 ═══
├────────────────────
├≽ *${prefix}afk* teks
├≽ *${prefix}infogrup*
├≽ *${prefix}add* @tag
├≽ *${prefix}kick* @tag
├≽ *${prefix}promote* @tag
├≽ *${prefix}demote* @tag
├≽ *${prefix}linkgc*
├≽ *${prefix}leave*
├≽ *${prefix}setdesc* teks
├≽ *${prefix}setgrupname* teks
├≽ *${prefix}setppgrup*
├≽ *${prefix}group* open/close
├≽ *${prefix}tagall*
├≽ *${prefix}tagme*
├≽ *${prefix}kontak* nomor|nama
├≽ *${prefix}hidetag* teks
├≽ *${prefix}getpp* @tag
├≽ *${prefix}mute*
├≽ *${prefix}unmute*
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.sistemMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SISTEM MENU* 》 ═══
├────────────────────
├≽ *${prefix}antilink* enable | disable
├≽ *${prefix}antiwame* enable | disable
├≽ *${prefix}antibadword* enable | disable
├≽ *${prefix}welcome* enable | disable
├≽ *${prefix}left* enable | disable
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.gabutMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GABUTZ MENU* 》 ═══
├────────────────────
├≽ *${prefix}apakah* teks
├≽ *${prefix}bisakah* teks
├≽ *${prefix}kapankah* teks
├≽ *${prefix}hobby* nama
├≽ *${prefix}rate* teks
├≽ *${prefix}cekbapak*
├≽ *${prefix}seberapagay* nama
├≽ *${prefix}jadian*
├≽ *${prefix}putus*
├≽ *${prefix}ganteng*
├≽ *${prefix}cantik*
├≽ *${prefix}truth*
├≽ *${prefix}dare*
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.gameMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GAME MENU* 》 ═══
├────────────────────
├≽ *${prefix}tictactoe* @tag
├≽ *${prefix}delttt*
├≽ *${prefix}tebakgambar*
├≽ *${prefix}family100*
├≽ *${prefix}suit* batu|gunting|kertas
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.downloadMenu = (prefix, ownerName) => {
    return `╒═══ 《 *DOWNLOAD MENU* 》 ═══
├────────────────────
├≽ *${prefix}ytmp3* link_yt
├≽ *${prefix}ytmp4* link_yt
├≽ *${prefix}play* judul_lagu
├≽ *${prefix}playmp4* judul_video
├≽ *${prefix}tiktok* link
├≽ *${prefix}tiktoknowm* link
├≽ *${prefix}tiktokmp3* link
├≽ *${prefix}instagram* link
├≽ *${prefix}facebook* link
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.searchMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SEARCH MENU* 》 ═══
├────────────────────
├≽ *${prefix}ytsearch* query
├≽ *${prefix}pinterest* query
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.stalkMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STALKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}igstalk* username
├≽ *${prefix}githubstalk* username
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.randomMenu = (prefix, ownerName) => {
    return `╒═══ 《 *RANDOM MENU* 》 ═══
├────────────────────
├≽ *${prefix}memeindo*
├≽ *${prefix}darkjokes*
├≽ *${prefix}pantun*
├≽ *${prefix}bucin*
├≽ *${prefix}cehor*
├≽ *${prefix}fakta*
├≽ *${prefix}katabijak*
├≽ *${prefix}motivasi*
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.animeMenu = (prefix, ownerName) => {
    return `╒═══ 《 *ANIME MENU* 》 ═══
├────────────────────
├≽ *${prefix}waifu*
├≽ *${prefix}loli*
├≽ *${prefix}husbu*
├≽ *${prefix}shota*
├≽ *${prefix}nekonime*
├≽ *${prefix}megumin*
├≽ *${prefix}sagiri*
├≽ *${prefix}shinobu*
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.toolsMenu = (prefix, ownerName) => {
    return `╒═══ 《 *TOOLS MENU* 》 ═══
├────────────────────
├≽ *${prefix}nulis* teks
├≽ *${prefix}nuliskiri* teks
├≽ *${prefix}nuliskanan* teks
├≽ *${prefix}foliokiri* teks
├≽ *${prefix}foliokanan* teks
├≽ *${prefix}tinyurl* link
├≽ *${prefix}ebase64*
├≽ *${prefix}debase64*
├≽ *${prefix}ehex*
├≽ *${prefix}dehex*
├≽ *${prefix}ebinary*
├≽ *${prefix}debinary*
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.makerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *MAKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}hartatahta* teks 
├≽ *${prefix}neon* teks
├≽ *${prefix}matrix* teks
├≽ *${prefix}blackpink* teks
├≽ *${prefix}halloween* teks
├≽ *${prefix}thundername* teks
├≽ *${prefix}devilwings* teks
├≽ *${prefix}cloudtext* teks
├≽ *${prefix}bloodtext* teks
├≽ *${prefix}bloodtext2* teks
├≽ *${prefix}steeltext* teks
├≽ *${prefix}lavatext* teks
├≽ *${prefix}toxiclogo* teks
├≽ *${prefix}dropwater* teks
├≽ *${prefix}metaldark* teks
├≽ *${prefix}sandwrite* teks
├≽ *${prefix}3dwater* teks
├≽ *${prefix}graffiti* teks
├≽ *${prefix}shadowtext* teks
├≽ *${prefix}smoketext* teks
├≽ *${prefix}romancetext* teks
├≽ *${prefix}carvedwood* teks
├≽ *${prefix}harrypotter* teks
├≽ *${prefix}flamingtext* teks
├≽ *${prefix}falleaves* teks
├≽ *${prefix}underwater* teks
├≽ *${prefix}wolfmetal* teks
├≽ *${prefix}woodboard* teks
├≽ *${prefix}undergrass* teks
├≽ *${prefix}coffetext* teks
├≽ *${prefix}lovetext* teks
├≽ *${prefix}burnpaper* teks
├≽ *${prefix}lovemessage* teks
├≽ *${prefix}graffiti2* teks1|teks2
├≽ *${prefix}phlogo* teks1|teks2
├≽ *${prefix}glitch* teks1|teks2
├≽ *${prefix}graffiti3* teks1|teks2
├≽ *${prefix}layeredtext* teks1|teks2
├≽ *${prefix}vintage* teks1|teks2
├≽ *${prefix}3dspace* teks1|teks2
├≽ *${prefix}stonetext* teks1|teks2
├≽ *${prefix}avengers* teks1|teks2
├≽ *${prefix}marvellogo* teks1|teks2
├≽ *${prefix}3dmetal* teks1|teks2
├≽ *${prefix}lionlogo* teks1|teks2
├≽ *${prefix}wolflogo* teks1|teks2
├≽ *${prefix}ninjalogo* teks1|teks2
├≽ *${prefix}pubglogo* teks1|teks2
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.otherMenu = (prefix, ownerName) => {
    return `╒═══ 《 *OTHER MENU* 》 ═══
├────────────────────
├≽ *cekprefix*
├≽ *${prefix}stats*
├≽ *${prefix}limit*
├≽ *${prefix}balance*
├≽ *${prefix}runtime*
├≽ *${prefix}speed*
├≽ *${prefix}owner*
├≽ *${prefix}royalgroup*
├≽ *${prefix}donasi*
├≽ *${prefix}sourcecode*
├≽ *${prefix}cekprem*
├≽ *${prefix}listprem*
├≽ *${prefix}listban*
├≽ *${prefix}listbadword*
├≽ *${prefix}buylimit* jumlah
├≽ *${prefix}buyglimit* jumlah
├≽ *${prefix}topglobal*
├≽ *${prefix}toplocal*
├≽ *${prefix}readmore* teks1|teks2
├≽ *${prefix}cekapikey*
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.hentaiMenu = (prefix, ownerName) => {
    return `╒═══ 《 *18+ MENU* 》 ═══
├────────────────────
├≽ *${prefix}randomhentong*
├≽ *${prefix}kemonomimi*
├≽ *${prefix}ero*
├≽ *${prefix}echi*
├≽ *${prefix}ahegao*
├≽ *${prefix}trap*
├≽ *${prefix}neko*
├≽ *${prefix}blowjob*
├≽ *${prefix}kitsune*
├≽ *${prefix}yuri*
├≽ *${prefix}boobs*
├≽ *${prefix}kuni*
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.storageMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STORAGE MENU* 》 ═══
├────────────────────
├≽ *${prefix}sound*
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}

exports.premMenu = (prefix, ownerName) => {
    return `╒═══ 《 *PREMIUM MENU* 》 ═══
├────────────────────
├≽ *${prefix}stickerwm* author|pack
├≽ *${prefix}take* author|pack
├≽ *${prefix}tomp4*
├≽ *${prefix}tagme*
├≽ *${prefix}kontak* nomor|nama
├≽ *${prefix}hidetag* text
├≽ *${prefix}tiktokMp3* link_tiktok
├≽ *${prefix}readmore* text1|text2
├≽ *${prefix}delete*
├≽ *${prefix}tagall*
├≽ *${prefix}join* link_group
├≽ *${prefix}nsfwmenu*
├─────────────────────
╘═══ 《 *By CikoH* 》 ═══`
}
