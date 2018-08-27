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
	    let data = []; // Create an empty array that will store our data
	    let elements = document.querySelectorAll('li.lessons-list__li'); // Select all Products

	    for (let element of elements){ // Loop through each proudct
	        let str = element.childNodes[3].innerText; // Select the title
	        let strArry = str.split(" ");
	        strArry[0] = 'lesson';
	        let title = strArry.join(' ');

	        let url = element.querySelector("link[itemprop='contentUrl']").href; // Select the url link

	        data.push({title, url}); // Push an object with the data onto our array
	    }

	    return data; // Return our data array
	});

	browser.close();
	return result; // Return the data
  	// Return a value
};

scraper().then((value) => {
    // #1 Best Solution
    let pathFull = '';
    checkDir(fixPath).then(() => {
        pathFull = path.normalize(fixPath + '/');
	});
    Promise.all(value.map(x => download(x['url'], pathFull, {filename: slugify(x['title'], '_') + '.mp4'}))).then(() => {
        console.log('files downloaded!');
    });
});