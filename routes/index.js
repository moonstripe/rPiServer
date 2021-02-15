const router = require('express').Router();
const {spawn} = require('child_process');
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);
router.get('/', (req, res) => {
    // console.log(req.rawTrailers);
  
    // Do python script
    let dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python3', ['./python/test.py']);
    // collect data from script
    python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      res.send('do actual python v0.1')
    });
  
  
    res.send('do python script and more stuff')
  });

module.exports = router;
