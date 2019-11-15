const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Photo = db.define('photo', {
  fileName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fieldName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  translation: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Photo
