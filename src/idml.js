const axios = require("axios")

module.exports = (async function idML(userId, zoneId) {
  var data = {
    "voucherPricePoint.id": 4150,
    "voucherPricePoint.price": "1565.0",
    "voucherPricePoint.variablePrice": 0,
    "n": "",
    "email": "",
    "userVariablePrice": 0,
    "order.data.profile": "",
    "user.userId": userId,
    "user.zoneId": zoneId,
    "msisdn": "",
    "voucherTypeName": "MOBILE_LEGENDS",
    "shopLang": "id_ID",
    "impactClickId": "",
    "affiliateTrackingId": "",
    "checkoutId": "",
    "tmwAccessToken": "",
    "anonymousId": ""
  }
  var ml = await axios({
    "headers": {
    "Content-Type": "application/json; charset\u003dutf-8"
    },
    "method": "POST",
    "url": "https://order.codashop.com/id/initPayment.action",
    "data": data
  })
  return {
    id: userId,
    nickname: ml.data["confirmationFields"]["username"]
  }
})