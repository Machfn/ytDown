const ytdl = require('ytdl-core');
const fs = require('fs');
const os = require('os')
let folder = os.homedir() + '/Downloads';


async function downy(fileTitle, url) {
    let info = await ytdl.getInfo(url);
    ytdl(url, {filter: 'audioonly'})
    .pipe(fs.createWriteStream(`${folder}/${fileTitle}.mp3`))
    .on('error', (err) => {
        console.log(err)
    })
    .on('finish', () => {
        console.log('All Done');
    })
}

module.exports = downy;
