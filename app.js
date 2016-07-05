var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('morgan');

var app = express();

app.use((req, res, next) => {
	console.log('Request url:', req.url);
	console.log('Request date: ', new Date());
	next();
});

app.use((req, res, next) => {
	var filePath = path.join(__dirname, 'static', req.url);

	fs.stat(filePath, (err, fileInfo) => {
		if (err) return next();

		if (fileInfo.isFile()) {
			res.sendFile(filePath);
		} else {
			next();
		}
	})
});

app.use((req, res) => {
	res.status(404);
	res.send('File not found!');
});

app.listen(3000, () => {
	console.log('Server listening at port 3000');
});