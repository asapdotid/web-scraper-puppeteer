'use strict'

require('dotenv').config()

const path = require('path');
const fs = require('fs');
const download = require('download');

const checkDir = require('./function/checkDir').dirCheck;

const pathDir = path.join(__dirname, '..') + '/' + process.env.PATH_FILE + '/' + process.env.PATH_VIDEO;

// console.log(process.env.NODE_PATH);
// console.log('__dirname (the directory of the script file): ', __dirname);
console.log(path.normalize(pathDir));
// console.log(checkDir(path.join(__dirname, '..') + '/' + process.env.PATH_FILE + '/' + process.env.PATH_VIDEO));

// download('https://www.cognalys.com/static/front/assets/php.png', 'dist').then(() => {
// 	console.log('done!');
// });

// download('https://www.cognalys.com/static/front/assets/images/1.png').then(data => {
// 	fs.writeFileSync('../files/pdf/cognalys-1.jpg', data);
// }).then(() => { console.log('done..'); });

// download('https://www.cognalys.com/static/front/assets/images/helmet1.png').pipe(fs.createWriteStream('dist/foo.jpg'));

// Promise.all([
// 	'https://www.cognalys.com/static/front/assets/inner/ios_library_inner.png',
// 	'https://www.cognalys.com/static/front/assets/inner/aboutus_inner.png'
// ].map(x => download(x, 'dist'))).then(() => {
// 	console.log('files downloaded!');
// });