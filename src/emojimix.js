const fetch = require("node-fetch")

module.exports = (async function emojimix(emoji1, emoji2) {
  let result = await fetch("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q="+encodeURIComponent(emoji1)+"_"+encodeURIComponent(emoji2))
  if (result) return result
  else return !1
})