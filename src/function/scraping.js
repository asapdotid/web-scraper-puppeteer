'use strict'

require('dotenv').config()

import puppeteer from 'puppeteer'

exports.Scraping = async () => {
	// Actual Scraping goes Here...

	const browser = await puppeteer.launch({headless: false})
	const page = await browser.newPage()

	await page.goto(process.env.PATH_DOMAIN)

	const result = await page.evaluate( () => {
	    let r = []
	    let data= []

	    let lessonTitleElement = document.querySelector('p.hero-description')
		let lessonTitle = lessonTitleElement.textContent || lessonTitleElement.innerText
		let lessonTitleClean = lessonTitle.replace(/[^a-zA-Z0-9-. ]/g, "")

	    let elements = document.querySelectorAll('li.lessons-item') // Select all Files
		
		elements.forEach( (element, index) => {
			// let str = element.childNodes[1].innerText // Select the title
	        // let strArry = str.split(" ")
	        // strArry[0] = 'lesson'
			// let title = strArry.join(' ')
			let number = index++
			let title = 'Lesson ' + number + ' - ' + element.querySelector("div[class='lessons-name']").innerText
	        let url = element.querySelector("link[itemprop='contentUrl']").href // Select the url link

	        data.push({title, url}) // Push an object with the data onto our array	
		})

	    r[0] = lessonTitleClean
		r[1] = data
		
	    return r
	});

	browser.close() // close browser

	return result // Return the data
}