'use strict'

require('dotenv').config()

const puppeteer = require('puppeteer')

const Scraping = async () => {
	// Actual Scraping goes Here...

	const browser = await puppeteer.launch({headless: false})
	const page = await browser.newPage()

	await page.goto(process.env.PATH_DOMAIN)

	const result = await page.evaluate(() => {
	    let data = [] // Create an empty array that will store our data
	    let elements = document.querySelectorAll('li.lessons-list__li') // Select all Products

	    for (let element of elements){ // Loop through each proudct
	        let str = element.childNodes[3].innerText // Select the title
	        let strArray = str.split(" ")
	        strArray[0] = 'lesson'
	        let title = strArray.join(' ')

	        let url = element.querySelector("link[itemprop='contentUrl']").href // Select the url link

	        data.push({title, url}) // Push an object with the data onto our array
	    }

	    return data // Return our data array
	});

	browser.close()
	return result // Return the data
};

export { Scraping }