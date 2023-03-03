#! /usr/bin/env node

const { program } = require('commander');
const downy = require('./commands/down');
const down4 = require('./commands/down4.js')
const clui = require('clui');


program.command('mp3 <fileTitle> <url>')
    .description('Downloads a youtube video as an mp3')
    .action(downy)

program.command('mp4 <fileTitle> <url>')
    .description("Downloads a youtube video as an mp4")
    .action(down4)


program.parse();