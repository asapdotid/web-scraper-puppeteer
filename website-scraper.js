let scrape = require('website-scraper');

scrape({
  urls: ['https://coursehunters.net/course/ultimate-laravel-kurs-2018-paypal-webshop-restful-api'],
  directory: './coursehunters',
  subdirectories: [
    {directory: 'video', extensions: ['.mp4']}
  ]
}).then(console.log).catch(console.log);