const axios = require("axios")
const cheerio = require("cheerio")

async function artinama(nama) {
  return new Promise((resolve, reject) => {
    axios.get('http://www.primbon.com/arti_nama.php?nama1='+ nama +'&proses=+Submit%21+').then(({ data }) => {
      const $ = cheerio.load(data)
      const value = $("#body").text().split("Nama:")[0]
      const result = {
        result: value.trim()
      }
      resolve(result)
    }).catch(reject)
  })
}

async function tafsir_mimpi(value) {
  return new Promise((resolve, reject) => {
    axios.get('https://primbon.com/tafsir_mimpi.php?mimpi='+value+'&submit=+Submit')
    .then(({data}) => {
      let $ = cheerio.load(data);
      let fetchText = $('#body').text();
      let result;
      try {
        result = {
          mimpi: value,
          arti: fetchText.split('Hasil pencarian untuk kata kunci: '+value)[1].trim().split('< Kembali')[0].split('(adsbygoogle')[0].trim(),
          solusi: fetchText.split('Solusi -')[1].trim().split('< Kembali')[0].trim()
        }
      } catch {
        result = `Tafsir Mimpi "${value}" tidak ditemukan`
      }
      resolve(result)
    }).catch(reject)
  })
}

async function zodiak(zodiak) {
  return new Promise((resolve, reject) => {
    axios.get('https://primbon.com/zodiak/'+zodiak.toLowerCase()+'.htm')
    .then(({data}) => {
      let $ = cheerio.load(data)
      let fetchText = $('#body').text()
      let result
      try {
        result = {
          nomor_keberuntungan: fetchText.split('(adsbygoogle')[0].split('Nomor Keberuntungan: ')[1].split("\n")[0],
          aroma_keberuntungan: fetchText.split('(adsbygoogle')[0].split('Aroma Keberuntungan: ')[1].split("\n")[0],
          planet_mengintari: fetchText.split('(adsbygoogle')[0].split('Planet Yang Mengitari: ')[1].split("\n")[0],
          bunga_keberuntungan: fetchText.split('(adsbygoogle')[0].split('Bunga Keberuntungan: ')[1].split("\n")[0],
          warna_keberuntungan: fetchText.split('(adsbygoogle')[0].split('Warna Keberuntungan: ')[1].split("\n")[0],
          batu_keberuntungan: fetchText.split('(adsbygoogle')[0].split('Batu Keberuntungan: ')[1].split("\n")[0],
          elemen_keberuntungan: fetchText.split('(adsbygoogle')[0].split('Elemen Keberuntungan: ')[1].split("\n")[0],
          pasangan_serasi: fetchText.split('(adsbygoogle')[0].split('Pasangan Serasi: ')[1].split("\n")[0],
          sifat: fetchText.split('(adsbygoogle')[1].split(').push({})')[1].split('Asmara para ')[0].split(";\n\n\n\n\n")[1].trim()
        }
      } catch {
        result = `Zodiak "${zodiak}" tidak ditemukan`
      }
      resolve(result)
    }).catch(reject)
  })
}

async function nomor_hp(nomor) {
  return new Promise((resolve, reject) => {
    axios({
      headers: {
        type: 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      url: 'https://www.primbon.com/no_hoki_bagua_shuzi.php',
      data: new URLSearchParams(Object.entries({
        nomer: nomor,
        submit: 'Submit!'
      }))
    }).then(({data}) => {
      let $ = cheerio.load(data)
      let fetchText = $('#body').text().trim()
      let result;
      try {
          result = {
            nomor_hp: fetchText.split('No. HP : ')[1].split('\n')[0],
            angka_bagua_shuzi: fetchText.split('Angka Bagua Shuzi : ')[1].split('\n')[0],
            energi_positif: {
              kekayaan: fetchText.split('Kekayaan = ')[1].split('\n')[0],
              kesehatan: fetchText.split('Kesehatan = ')[1].split('\n')[0],
              cinta: fetchText.split('Cinta/Relasi = ')[1].split('\n')[0],
              kestabilan: fetchText.split('Kestabilan = ')[1].split('\n')[0],
              persentase: fetchText.split('Kestabilan = ')[1].split('% = ')[1].split('ENERGI NEGATIF')[0]
            },
            energi_negatif: {
              perselisihan: fetchText.split('Perselisihan = ')[1].split('\n')[0],
              kehilangan: fetchText.split('Kehilangan = ')[1].split('\n')[0],
              malapetaka: fetchText.split('Malapetaka = ')[1].split('\n')[0],
              kehancuran: fetchText.split('Kehancuran = ')[1].split('\n')[0],
              persentase: fetchText.split('Kehancuran = ')[1].split('% = ')[1].split("\n")[0]
            },
            notes: fetchText.split('* ')[1].split('Masukan Nomor HP Anda')[0]
          }
      } catch {
        result = `Nomor "${nomor}" tidak valid`
      }
      resolve(result)
    }).catch(reject)
  })
}

async function konversi_tanggal_jawa(tgl,bln,thn) {
  return new Promise((resolve, reject) => {
    axios({
      headers: {
        type: 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      url: 'https://primbon.com/konversi.php',
      data: new URLSearchParams(Object.entries({
        tgl,
        bln,
        thn
      }))
    }).then(({data}) => {
      resolve({result:data})
    }).catch(reject)
  })
}

module.exports = { konversi_tanggal_jawa, nomor_hp, artinama, tafsir_mimpi, zodiak }