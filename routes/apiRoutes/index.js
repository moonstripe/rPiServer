const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('routed correctly')
});

module.exports = router;
