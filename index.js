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
app.get('/', (req, res) => {
  // console.log(req.rawTrailers);

  // Do python script
  let dataToSend;
  // spawn new child process to call the python script
  const python = spawn('python', ['./python/test.py']);
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
  });


  res.send('do python script and more stuff')
});

app.listen(3001, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});