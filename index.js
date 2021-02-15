const express = require('express')
const bodyParser = require('body-parser');
const {spawn} = require('child_process');
const routes = require('./routes');

const app = express();

// if (process.env.NODE_ENV === 'production') {
//   app.use(static('client/build'));
// }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.listen(3001, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});