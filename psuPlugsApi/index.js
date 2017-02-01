var express = require('express')
var app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/getProducts', function (req, res) {
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'psuplugs'
	})

	connection.connect()

	connection.query("SELECT * FROM psuplugs.products", function (err, rows, fields) {
		if (err) throw err
		
		res.send(rows);
	})

	connection.end()
	
});

app.get('/api/getProduct/:id', function (req, res) {
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'psuplugs'
	})

	connection.connect()

	connection.query("SELECT * FROM psuplugs.products WHERE id=" + req.params.id, function (err, rows, fields) {
		if (err) throw err
		
		res.send(rows);
	})

	connection.end()
	
});

app.get('/api/getVariants/:id', function (req, res) {
	var mysql = require('mysql')
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'psuplugs'
	})

	connection.connect()

	connection.query("SELECT variant,size FROM psuplugs.variants WHERE id=" + req.params.id, function (err, rows, fields) {
		if (err) throw err
		
		res.send(rows);
	})

	connection.end()
	
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});