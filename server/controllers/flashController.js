const path = require("path");
const db = require(path.resolve(__dirname, "../models/Model.js"));

const flashController = {};

flashController.getCards = (req, res, next) => {
  console.log('getting cards');
  const query = "SELECT * FROM Cards";

  db.query(query)
    .then((data) => {
      res.locals.cards = data.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

flashController.postCards = (req, res, next) => {
  console.log('attempting to post cards');

  const query = 'INSERT INTO Cards (front, back, category) VALUES ($1, $2, $3);'
  const params = [req.body.front, req.body.back, req.body.description];

  db.query(query, params)
    .then(data => {
      return next();
    })
    .catch(err => {
      return next(err);
    })
};

flashController.deleteCards = (req, res, next) => {
  const id = [req.params.id];
  const query = 'DELETE FROM Cards WHERE id=$1;';
    
  db.query(query, id)
    .then(data => {
      return next();
    })
    .catch(err => {
      return next(err);
    })
};

//flashController.updateCards = (req, res, next) => {};

module.exports = flashController;
