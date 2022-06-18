const { version, author } = require("./package.json");
const encrypt = require("./src/encrypt")
const emojimix = require("./src/emojimix")
const primbon = require("./src/primbon")
const pinterest = require("./src/pinterest")
const wattpad = require("./src/wattpad")
const merdekanews = require("./src/merdekanews")
const aiovideodl = require("./src/aiovideodl")
const npmSearch = require("./src/npmsearch")
const searchSticker = require("./src/searchsticker")
const idFF = require("./src/idff")
const idML = require("./src/idml")
const fs = require("fs")


// thanks to iamriz7
function ppcouple() {
  let rand = JSON.parse(fs.readFileSync(__dirname+"/src/ppcouple.json"))
  let rando = rand[Math.floor(Math.random() * rand.length)]
  return rando
}

module.exports = {
  version,
  author,
  encrypt,
  search: {
    npmSearch,
    idML,
    idFF,
    searchSticker,
    pinterest,
    wattpad
  },
  info: {
    merdekanews
  },
  primbon,
  downloader: {
    aiovideodl
  },
  other: {
    emojimix,
    ppcouple
  }
}