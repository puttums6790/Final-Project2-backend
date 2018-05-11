var mongoose = require('../connect')
var Schema = mongoose.Schema

var board = new Schema({
  type: {
    type: Array
  },
  description: {
    type: String
  },
  address: {
    type: String
  },
  price: {
    type: String
  },
  contactInfo: {
    type: String
  }
})

module.exports = mongoose.model('Board', board)