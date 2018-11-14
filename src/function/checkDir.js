'use strict'

import fs from 'fs-extra'

exports.checkDirectory = async (directory) => {  
	try {
		await fs.ensureDir(directory)
		console.log('success create directory '+ directory + '!')
	} catch (err) {
		console.error(err)
	}
}