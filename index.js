const express = require('express')
const bodyParser = require('body-parser');
const routes = require('/routes');

const app = express();

// if (process.env.NODE_ENV === 'production') {
//   app.use(static('client/build'));
// }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.get('/', (req, res) => {
    console.log(req.rawHeaders);

// Do python script


    res.send('do python script and more stuff')
});

app.listen(3001, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});