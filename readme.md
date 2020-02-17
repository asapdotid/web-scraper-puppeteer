# Coursehunters.net Scraper

> clone this repository & `npm install` or `yarn install`


### Technology

- [Node Js](https://nodejs.org/)
- [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- [Download](https://github.com/kevva/download)
- [Slugify](https://github.com/simov/slugify)
- [fs-extra](https://npm.taobao.org/package/fs-extra)
- [dot-env](https://github.com/motdotla/dotenv)
- [file-exists](https://www.npmjs.com/package/file-exists)

### For Development
- [@babel/cli](https://babeljs.io/docs/en/babel-cli)
- [@babel/core](https://babeljs.io/docs/en/babel-core)
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [@babel/node](https://babeljs.io/docs/en/babel-node)
- [nodemon](https://nodemon.io/)


### Setup Babel v7
> create file `.babelrc` in root directory

```
{ 
	"presets": ["@babel/preset-env"]
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
$npm run serve
```

## License

MIT © [Asapdotid](https://github.com/asapdotid)
