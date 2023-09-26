//  imports
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { json } = require('express/lib/response');

const app = express();

//  settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express(json));
app.set('views', path.join(__dirname, 'views'));

//  middlewares
app.use(morgan('dev'));

//  routes
app.use('/', require('./routes/router'));

//  static files
app.use(express.static(path.join(__dirname, '../public')));

//  server start
app.listen(app.get('port'), () => {
  console.log(
    `Server on port ${app.get('port')} http://localhost:${app.get('port')}`
  );
});
