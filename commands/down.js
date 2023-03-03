const ytdl = require('ytdl-core');
const fs = require('fs');
let folder = process.env.userprofile + '/downloads';


async function downy(fileTitle, url) {
    let info = await ytdl.getInfo(url);
    ytdl(url, {filter: 'audioonly'})
    .pipe(fs.createWriteStream(`${folder}/${fileTitle}.mp3`))
    .on('error', (err) => {
        // console.log(err)
    })
    .on('finish', () => {
        console.log('All Done');
    })
}

module.exports = downy;
