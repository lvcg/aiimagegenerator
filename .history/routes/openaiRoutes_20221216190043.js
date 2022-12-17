const express = require('express');
const { generateImage } = re
const router = express.Router();

router.post('/generateimage', (req, res) => {
    res.status(200).json({
        success:true,
    })
});

module.exports = router;