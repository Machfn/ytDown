const ytdl = require('ytdl-core');
const fs = require('fs');
const os = require('os');
let folder = os.homedir() + '/downloads';


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
