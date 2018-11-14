'use strict'

const fs = require('fs-extra');

// With async/await:
async (f) => {
	try {
		await fs.pathExists(f)
		console.log('file existing '+ f + '!');
	} catch (err) {
		console.error(err)
	}
}

module.exports = {
	checkFile: checkFileExist
}