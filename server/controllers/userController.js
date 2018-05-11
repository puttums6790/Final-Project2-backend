const db = require("../db/models");

// Defining methods for the booksController
module.exports = {
  findOne: function(req, res) {
    const { username, password } = req.body
    db.User
      .find({ 'local.username': username }, (err, userMatch) => {
        console.log("userMatch", userMatch);
        if (userMatch) {
            return res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        const newUser = new User({
            'local.username': username,
            'local.password': password
        })
        newUser.save((err, savedUser) => {
            if (err) return res.json(err)
            return res.json(savedUser)
        })
    });
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
  },


};