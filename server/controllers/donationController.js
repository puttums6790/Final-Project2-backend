const db = require("../db/models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Donation
      .find(req.query)
      .sort({ datePosted: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("controller", req.body);
    db.Donation
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
