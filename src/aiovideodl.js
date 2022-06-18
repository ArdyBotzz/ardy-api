const axios = require("axios")
const cheerio = require("cheerio")
 
async function aiovideodl(url) {
  let { data, headers } = await axios("https://aiovideodl.ml/");
  let $ = cheerio.load(data);
  let token = $("#token").attr("value");
  let cookie = headers["set-cookie"].join("; ");
  let body = new URLSearchParams({ url, token });
  let { data: res } = await axios({
    "url": "https://aiovideodl.ml/wp-json/aio-dl/video-data/",
    "method": "POST",
    "data": body,
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "cookie": cookie,
      "origin": "https://aiovideodl.ml",
      "referer": "https://aiovideodl.ml/",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
    }
  });
  return res;
}

module.exports = aiovideodl