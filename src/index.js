'use strict'

require('dotenv').config()

import { Scraping as scraper } from './function/scraping'
import { Download as dl } from './function/download'

scraper().then( (value) => {
    dl(value)
})