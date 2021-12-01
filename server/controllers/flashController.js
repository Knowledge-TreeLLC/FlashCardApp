const path = require("path");
const db = require(path.resolve(__dirname, "../models/Model.js"));

const flashController = {};

flashController.getCards = (req, res, next) => {
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
  const query = 'INSERT INTO Cards (id, front, back) VALUES ($1, $2, $3);'
  const params = [req.body.id, req.body.front, req.body.back]

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
