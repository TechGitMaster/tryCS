const express = require('express');
const router = express.Router();

router.get('/try', (req, res) => {
    res.json( {data: 'ajsdhsakjdhsad'} );
});

module.exports = router;