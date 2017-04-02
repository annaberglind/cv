'use strict';

const express = require('express');

const app = express();

require('./config/express')(app);

app.use('/', require('./config/routes'));

const port = process.env.PORT || 9000;

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});