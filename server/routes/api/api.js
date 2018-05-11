var Board = require('../../db/models/boards')

module.exports = function (router) {
  router
    .post('/create/board', function (req, res) {
      var body = req.body
      console.log('got here', body)
      return Board.create(body).then(function (board) {
        return res.status(200).send('Board created successfully')
      })
      .catch(function (err) {
        return res.status(400).send('something went wrong.')
      })
    })
  router
    .get('/board/list', function (req, res) {
      return Board.find({}).then(function (boards) {
        return res.status(200).json(boards)
      })
      .catch(function (err) {
        return res.status(400).send('something went wrong.')
      })
    })
    
}