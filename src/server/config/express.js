'use strict';

const express = require('express'),
	path = require('path');

module.exports = (app) => {
	app.use(express.static(path.join(__dirname, '../views')));
	app.use(express.static(path.join(__dirname, '../../client/public')));
	app.use(express.static(path.join(__dirname, '../../../dist')));
	app.use(express.static(path.join(__dirname, '../../../node_modules')));
}