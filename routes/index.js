import router from require('express').Router();
import apiRoutes from require('./apiRoutes');

router.use('/api', apiRoutes);

module.exports = router;
