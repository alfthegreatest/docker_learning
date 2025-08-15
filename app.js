// backend/app.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => {
	res.send('Hello from backend');
});

app.listen(port, () => {
	console.log(`App running at http://localhost:${port}`);
});