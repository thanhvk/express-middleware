var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

var staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

app.use((req, res) => {
	res.status(404);
	res.send('File not found!');
});

app.listen(3000, () => {
	console.log('Server listening at port 3000');
});