const axios = require("axios")
const cheerio = require("cheerio")

const wattpad = (query) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.wattpad.com/search/${query}`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        const hasil = [];
        $('div.story-card-data.hidden-xxs > div.story-info ').each(function(a, b) {
          $('ul.list-group > li.list-group-item').each(function(c,d) {
            result = {
              judul: $(b).find('> div.title').text(),
              dibaca: $(b).find('> ul > li:nth-child(1) > div.icon-container > div > span.stats-value').text(),
              divote: $(b).find('> ul > li:nth-child(2) > div.icon-container > div > span.stats-value').text(),
              bab: $(b).find('> ul > li:nth-child(3) > div.icon-container > div > span.stats-value').text(),
              waktu: $(b).find('> ul > li:nth-child(4) > div.icon-container > div > span.stats-value').text(),
              url:'https://www.wattpad.com' + $(d).find('a').attr('href'),
              thumb: $(d).find('img').attr('src'),
              description: $(b).find('> div.description').text().replace(/\n/g,'')
            }
            hasil.push(result)
        })
      })
      resolve(hasil)
    })
    .catch(reject)
  })
}

module.exports = wattpad