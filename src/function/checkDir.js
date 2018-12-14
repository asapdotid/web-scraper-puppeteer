'use strict'

import fs from 'fs-extra'

exports.checkDirectory = async (directory) => {  
	let res = ''
	try {
		await fs.ensureDirSync(directory)
		res = 'success create directory '+ directory + '!'
	} catch (err) {
		console.error(err)
	}
	return res
}