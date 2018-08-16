const fs = require('fs-extra');

async function checkDirectorySync(directory) {  
  try {
    await fs.ensureDir(directory)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

module.exports ={
	dirCheck: checkDirectorySync
}