const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const db = require('./db');

app.use(morgan('dev'));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '/public')));

app.use('/api', require('./routes/index.js'));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});

const init = async () => {
  await db.syncAndSeed();

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });
};

init();
