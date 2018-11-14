# Coursehunters.net Scraper

> clone this repository & `npm install`


### Technology

- [Node Js](https://nodejs.org/)
- [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- [Download](https://github.com/kevva/download)
- [Slugify](https://github.com/simov/slugify)
- [fs-extra](https://npm.taobao.org/package/fs-extra)
- [dot-env](https://github.com/motdotla/dotenv)

### For Development
- [babel-cli](https://babeljs.io/docs/en/babel-cli)
- [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [nodemon](https://nodemon.io/)


### Setup Bubel ES6
> create file `.babelrc` in root directory

```
{ 
	"presets": ["env"]
}
```


### Set up environment (.env) in root directory 
> $ cp .env.example .env


path domain must from `https://coursehunters.net/{url_for_tutorial}`

```
NODE_PATH=src
PATH_DOMAIN=
PATH_FILE=files
PATH_VIDEO=video
PATH_IMG=images
PATH_PDF=pdf
```

Running your code
```
$npm run start
```

## License

MIT © [Asapdotid](https://bitbucket.org/asapdotid/)