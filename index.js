// carregando módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const path = require('path');
//const mongoose = require("mongoose")

// configurações
// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// public
app.use(express.static(path.join(__dirname, 'public')));

// rotas
app.use(routes);

// Rodando o servidor
app.listen(8081);