const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cleanWordsRouter= require('./apis/allCases')

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/bad-words',cleanWordsRouter)

app.get('/', (req, res) => {
  res.send('Testing server!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error in running server');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
