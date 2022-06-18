
/* Credits
  *Thanks To Bochilteam
  *Thanks To CaliphDev
*/

function toBase64(data) {
  if (!Buffer.isBuffer(data)) data = Buffer.from(data)
  return data.toString("base64") // utf-8 to base64
}

function base64ToString(data) {
  if (/data:.*;base64,/i.test(data)) data = data.replace(/data:.*;base64,/i, '')
  return data.toString() // base 64 to utf-8
}

function binaryToString(str) {
  var newBin = str.split(" ");
  var binCode = [];

  for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
  return binCode.join("");
}

function toBinary(str = "") {
  let res = "";
  res = str
    .split("")
    .map((char) => {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");
  return res;
}

module.exports = {
  toBase64,
  base64ToString,
  toBinary,
  binaryToString
}