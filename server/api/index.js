const express = require('express')
const router = express.Router()
module.exports = router

// MUTLER CONTENT HERE ON OUT!
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads')
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname)
    // new Date().toISOString() +
  }
})

// , preservePath: true
const upload = multer({storage: storage})

// CLOUD VISION API SET UP!
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision')

// TRANSLATION API SET UP!
// const  { Translate }  = require("@google-cloud/translate")
const {Translate} = require('@google-cloud/translate').v2

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: './server/api/APIKey.json'
})

const translator = new Translate({
  keyFilename: './server/api/APIKey.json'
})

router.post('/upload', upload.single('photo'), async (req, res, next) => {
  try {
    console.log('body?', req.body)
    console.log('file?', req.file)
    // console.log('request', req)

    // THIS PART WORKS! YES!
    // const [result] = await client.labelDetection(`./uploads/${req.file.originalname}`);
    // const labels = result.labelAnnotations;

    // console.log(labels[0])

    // res.send(req.file)
    res.status(204)
  } catch (error) {
    next(error)
  }
})

// router.get('/', async (req, res) => {
//     // const [result] = await client.labelDetection('./server/api/sunflower.jpg');
//     // const labels = result.labelAnnotations;

//     // const [translatedText] = await translator.translate(labels[0]['description'], 'es')

//     // labels[0]['translation'] = translatedText

//     // res.send(labels[0])
//     res.send('this is working, commented out for now but only for one word')

// });

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

// router.use('/users', require('./users'))
