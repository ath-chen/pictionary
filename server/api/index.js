const express = require('express')
const router = express.Router()
const {Photo} = require('../db/models')
module.exports = router

// MUTLER CONTENT HERE ON OUT!
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads')
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname)
  }
})

const upload = multer({storage: storage})

// CLOUD VISION API SET UP! Imports the Google Cloud client library
const vision = require('@google-cloud/vision')

// TRANSLATION API SET UP!
const {Translate} = require('@google-cloud/translate').v2

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: './server/api/APIKey.json'
})

const translator = new Translate({
  keyFilename: './server/api/APIKey.json'
})

router.get('/learn', async (req, res, next) => {
  try {
    let data = await Photo.findAll({
      attributes: ['fileName', 'description', 'translation']
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/upload', upload.single('photo'), async (req, res, next) => {
  try {
    // get file, send through vision AI, and grab labels
    let filename = req.file.originalname.split('.')[0]
    const [result] = await client.labelDetection(
      `./uploads/${req.file.originalname}`
    )
    const labels = result.labelAnnotations

    let arr = [
      labels[0].description,
      labels[1].description,
      labels[2].description
    ]

    let translatedArr = []

    // translate each photo label to selected language
    for (let i = 0; i < arr.length; i++) {
      const [translatedText] = await translator.translate(
        arr[i],
        req.body.lanOption
      )
      translatedArr.push(translatedText)
    }

    await translator.translate(labels[0].description, req.body.lanOption)

    let photoFile = req.file

    await Photo.create({
      fileName: photoFile.filename,
      fieldName: photoFile.fieldname,
      path: photoFile.path,
      description: arr,
      translation: translatedArr
    })

    res.status(200)
  } catch (error) {
    next(error)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
