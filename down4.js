const ytdl = require('ytdl-core');
const fs = require('fs');
let folder = process.env.userprofile + '/downloads';


async function down4(fileTitle, url) {
    let info = await ytdl.getInfo(url);
    ytdl(url, {filter: 'audioandvideo', quality: 'highest'})
    .pipe(fs.createWriteStream(`${folder}/${fileTitle}.mp4`))
    .on('error', (err) => {
        // console.log(err)
    })
    .on('finish', () => {
        console.log('All Done');
    })
}

module.exports = down4;