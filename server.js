const express = require('express');
const path = require('path');
const nomeApp = process.env.emendas;
const app = express();
 
app.use(express.static(`${__dirname}/dist/${emendas}`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${emendas}/index.html`));
});
 
app.listen(process.env.PORT || 8080);