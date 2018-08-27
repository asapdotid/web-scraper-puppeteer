'use strict'

const fs = require('fs-extra');

async function checkDirectorySync(directory) {  
  try {
    await fs.ensureDir(directory)
    console.log('success create directory '+ directory + '!');
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
	checkDir: checkDirectorySync
}