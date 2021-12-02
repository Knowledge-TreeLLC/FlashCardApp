const path = require('path');
const express = require('express');
const cors = require('cors');
const controller = require('./controllers/flashController.js');

const app = express();
const PORT = 3000;

app.use(express.json()); // middleware that parses through the incoming requests w/ JSON payloads
app.use(express.urlencoded({extended: true})); // parses through the incoming requests w/ urlencoded payloads
app.use(cors());

//serving our html file to the root endpoint
app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

//reading a flash card from the data base
app.get('/cards', 
  controller.getCards,
  (req, res,) => {
    return res.status(200).json(res.locals.cards);
});

//adding a flash card to the database
app.post('/cards',
  controller.postCards,
  (req, res,) => {
    return res.sendStatus(200);
});

//delete flashcards from the database
app.delete('/cards/:id',
  controller.deleteCards,
  (req, res,) => {
    return res.sendStatus(200);
})

// local error handler
app.use((err, req, res, next) => {
  return res.status(404).send('This is not the page you\'re looking for');
})

// global error handler
app.use((req, res, err) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred'}
  };
  const errObj = Object.assign({}, defaultErr, err);
  return res.status(errObj.status).json(errObj.message); 
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
  
module.exports = app;
