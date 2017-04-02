'use strict';

const express = require('express'),
	path = require('path');

const router = express.Router();

router.all('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../../dist/html', 'index.html'));
});

module.exports = router;