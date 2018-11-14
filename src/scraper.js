'use strict';

require('dotenv').config();

const path = require('path');
const fs = require('fs-extra');
const puppeteer = require('puppeteer');
const download = require('download');
const slugify = require('slugify');

const checkDir = require('./function/checkDir').checkDir;

const pathDir = path.join(__dirname, '..') + '/' + process.env.PATH_FILE + '/' + process.env.PATH_VIDEO;
const fixPath = path.normalize(pathDir);

let scraper = async () => {
	// Actual Scraping goes Here...

	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();

	await page.goto(process.env.PATH_DOMAIN);

	const result = await page.evaluate(() => {
	    let r = [];
	    let data= [];

	    let lessonTitleElement = document.querySelector('div.original-name');
		let lessonTitle = lessonTitleElement.textContent || lessonTitleElement.innerText;

	    let elements = document.querySelectorAll('li.lessons-list__li'); // Select all Products

	    for (let element of elements){ // Loop through each proudct
	        let str = element.childNodes[3].innerText; // Select the title
	        let strArry = str.split(" ");
	        strArry[0] = 'lesson';
	        let title = strArry.join(' ');

	        let url = element.querySelector("link[itemprop='contentUrl']").href; // Select the url link

	        data.push({title, url}); // Push an object with the data onto our array
	    }

	    r[0] = lessonTitle;
	    r[1] = data;

	    return r;
	});

	browser.close(); // close browser

	return result; // Return the data
};

scraper().then( (value) => {
    let fullPath = '';
    // console.log(value[0]);
    // console.log(path.normalize(fixPath + '/' + value[0] + '/'));
    let dirExist = path.normalize(fixPath + '/' + value[0])
    checkDir(dirExist).then( () => {
        fullPath = path.normalize(dirExist + '/');
        Promise.all( 
        	value[1].map(
	        	x => download(
	        		x['url'], 
	        		fullPath, 
	        		{filename: slugify(x['title'], '_') + '.mp4'}
        		)
    		)
        )
        .then( () => {
            console.log('files downloaded!');
        });
	});
});