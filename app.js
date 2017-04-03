const express = require('express');
const path = require('path');
const colors = require('colors');
const app = express();

app.use(express.static('./build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

const port = process.env.PORT || 9000
const hostname = process.env.HOST || '0.0.0.0';

app.listen(port, hostname, () => {
  console.log('Application started successfully'.green);
  console.log('Port '.cyan, colors.magenta(port));
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception'.bgRed.white, err);
})
