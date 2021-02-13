const express = require('express')
const bodyParser = require('body-parser');

const app = express();

// if (process.env.NODE_ENV === 'production') {
//   app.use(static('client/build'));
// }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    console.log(req.rawHeaders);

// Do python script


    res.send('do python script')
});

app.listen(3001, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});