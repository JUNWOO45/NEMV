var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var setRouter = require('./routes/set');

const history = require('connect-history-api-fallback');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'fe', 'dist')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/set', setRouter);
if(process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

app.use('/api', require('./routes/api'));
app.use(history());
app.use(express.static(path.join(__dirname, 'fe', 'dist')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const User = require('./models/users.js');

const cfg = require('../config');
console.log("cfg : ", cfg);

mongoose.connect(cfg.dbUrl, { useNewUrlParser: true}, (err) => {
  if(err) {
    return console.log(err);
  }
  console.log('mongoose connected!');

  // User.create({ name: '하하'})
  //   .then(r => console.log(r))
  //   .catch(e => console.error(e));

  // User.find()
  //   .then(r => console.log(r))
  //   .catch(e => console.error(e));

  // User.updateOne({ _id: '5cdc2235b27fcdfad4973009' }, { $set: {age: 50}})
  //   .then(r => {
  //     console.log(r);
  //     console.log('updated');
  //     return User.find();
  //   })
  //   .then(r => console.log(r))
  //   .then(e => console.error(e));
// User.delet 
});

const pkg = require('../package.json');
console.log("pkg : ", pkg);

console.log("process.env.NODE_ENV : ", process.env.NODE_ENV);

var jwt = require('jsonwebtoken');
const key = "엄청어렵고복잡한키"
var token = jwt.sign({ id: 'junwoo', email: 'junwoo@xxx.com ' }, key);

console.log("token : ", token);
var decoded = jwt.verify(token, key);
console.log("decoded : ", decoded) // bar
