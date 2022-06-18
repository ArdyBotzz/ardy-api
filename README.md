# ArdyApi
[![npm version](https://img.shields.io/npm/v/ardy-api)](https://npmjs.com/package/ardy-api)

## Install
```bash
$ npm i ardy-api
```

## Import
```js

//Using COMMONJS
const api = require('ardy-api') // can be replaced

//Using ES6 Or Typescript
import api from 'ardy-api' // can be replaced

```

## Feature
* [Encrypt](#encrypt)
* [Information](#information)
* [Downloader](#downloader)
* [Searching](#searching)
* [Primbon](#primbon)
* [Other](#other)

# Encrypt
```js

// utf-8 to base64
const result = api.encrypt.toBase64("Hello World") 
console.log(result) // SGVsbG8gV29ybGQ=

// base64 to utf-8
const result = api.encrypt.base64ToString("SGVsbG8gV29ybGQ=")
console.log(result) // Hello World

// utf-8 to binary
const result = api.encrypt.toBinary("Hello")
console.log(result) // 1001000 1100101 1101100 1101100 1101111

// binary to utf-8
const result = api.encrypt.binaryToString("1001000 1100101 1101100 1101100 1101111")
console.log(result) // Hello

```
# Information 
```js

// merdeka news
const result = api.info.merdekanews()
console.log(result)
```
# Downloader
```js

// aiovideodl
const result = api.downloader.aiovideodl("Url")
console.log(result)
```
# Searching
```js

// npmjs search
const result = api.search.npmSearch(query)
console.log(result)

// freefire search
const result = api.search.idFF(userId)
console.log(result)

// mobile legends search
const result = api.search.idML(userId, zoneId)
console.log(result)

// search sticker
const result = api.search.searchSticker(Query)
console.log(result)

// pinterest
const result = api.search.pinterest(Query)
console.log(result)

// wattpad by xfarr
const result = api.search.wattpad(Query)
console.log(result)
```
# Primbon
```js
// konversi tanggal jawa
const result = api.primbon.konversi_tanggal_jawa(Days, Month, Years)
console.log(result)

// nomor hp bagua shuzi
const result = api.primbon.nomor_hp(Name)
console.log(result)

// arti nama
const result = api.primbon.artinama(Name)
console.log(result)

// tafsir mimpi
const result = api.primbon.tafsir_mimpi(Mimpi)
console.log(result)

// zodiak
const result = api.primbon.zodiak(Zodiak)
console.log(result)
```
# Other
```js

// emoji mixer
const result = api.other.emojimix(emoji1, emoji2)
console.log(result)

// pp couple
const result = api.other.ppcouple()
console.log(result)
```