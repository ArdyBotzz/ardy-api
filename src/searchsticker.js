const axios = require("axios")
const cheerio = require("cheerio")

async function searchSticker(queryy) {
  return new Promise((resolve, reject) => {
    axios.get(`https://getstickerpack.com/stickers?query=${queryy}`)
    .then(({data}) => {
      const $ = cheerio.load(data)
      const source = []
      const linknya = []
      $('#stickerPacks > div > div:nth-child(3) > div > a').each((a, b) => {
        source.push($(b).attr('href'))
      })
      axios.get(source[Math.floor(Math.random() * source.length)])
      .then(({data}) => {
        const $2 = cheerio.load(data)
        $2('#stickerPack > div > div.row > div > img').each((c, d) => {
          linknya.push($2(d).attr('src').replace(/&d=200x200/g, ''))
        })
        result = {
            title: $2('#intro > div > div > h1').text(),
            stickerUrl: linknya
        }
        resolve(result)
      })
    }).catch(reject)
  })
}

module.exports = searchSticker