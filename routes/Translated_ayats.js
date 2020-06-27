const express = require('express')
const router = express.Router()
const cors = require('cors')
const {translated_ayats} = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const quranService = require('../services/quranService') 

router.use(cors())

router.post('/indexCustom', async (req, res) => {
  try{

      var arabic = (await quranService(req.body.surat_no)).data.data.ayahs
      var tor = {}
      noOfTranslators = req.body.translated_by.length
      req.body.translated_by = {[Op.or]: req.body.translated_by}
      if (req.body.surat_no == 1){
        req.body.surat_no = {[Op.or]: [0,1]}
      }
      console.log(req.body)
      const tasAll = await translated_ayats.findAll({
          where : req.body,
          order: [
              ['ayat_no', 'ASC'],
          ]
      })
        countArabic = 0
        for (var i = 0; i < tasAll.length; i++) {
          var tr = tasAll[i]
          var ayat = tr.ayat_no

          if (tor[ayat]){
              tor[ayat].translations.push(tr.translation)
              tor[ayat].translated_by.push(tr.translated_by)
          }
          else {
            tor[ayat] = {
              surat_no: req.body.surat_no,
              arabic: arabic[countArabic],
              translations: [tr.translation],
              translated_by: [tr.translated_by]
            }
            countArabic++
          }
        }

      tor['noOfTranslators'] = noOfTranslators
      res.send(tor)

  }
  catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

router.get('/translatorList', async (req, res) => {
  try{
    const tasAll = await translated_ayats.aggregate('translated_by', 'DISTINCT', { plain: false })
    toReturn = []
    for (var i = 0; i < tasAll.length; i++) {
      toReturn.push(tasAll[i].DISTINCT)
    }
    res.send(toReturn)
  }
  catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

router.get('/test', async (req, res) => {
  try{
    var quran = await quranService(114)
    res.send(quran.data.data)
  }
  catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})


module.exports = router