const express = require('express');
const api = require('./routes/api.js');
const html = require('./routes/html.js');

// Initialize app and open port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up the body parsing, static, and routing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

// Start the server on the port
app.listen(PORT, () => console.log(`LIVE on PORT: ${PORT}!!!`));
