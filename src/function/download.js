'use strict'

require('dotenv').config()

import path from 'path'
import download from 'download'
import slugify from'slugify'

import { checkDirectory as checkDir } from './checkDir'

const pathDir = path.join(__dirname, '../..') + '/' + process.env.PATH_FILE + '/' + process.env.PATH_VIDEO
const fixPath = path.normalize(pathDir)

exports.Download = (data) => {
	let fullPath = ''
    let regex = /:/;
    let subjectTitle = data[0].replace(regex, ' -')
    let dirExist = path.normalize(fixPath + '/' + subjectTitle)

    checkDir(dirExist).then( () => {
        fullPath = path.normalize(dirExist + '/');
        Promise.all( 
        	data[1].map(
	        	x => download(
	        		x['url'], 
	        		fullPath, 
	        		{filename: slugify(x['title'], '_') + '.mp4'}
        		)
    		)
        )
        .then( () => {
            console.log('files downloaded!')
            process.once('SIGUSR2', () => {
				gracefulShutdown( () => {
					process.kill(process.pid, 'SIGUSR2')
				})
			}).exit(0)
        })
	})
}