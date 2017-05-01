const express = require('express');
const app = express();

const path = require('path');

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/script', (req, res)=>{
	res.sendFile(path.join(__dirname + '/bundle.js'));
});

app.get('/style', (req, res)=>{
	res.sendFile(path.join(__dirname + '/style.css'));
})

// the app will listen for requests on port 3000
app.listen(3000, ()=>{
	console.log('listening on http://localhost:3000');
});
