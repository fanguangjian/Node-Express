/*
 * @Author: G.F
 * @Date: 2021-08-05 22:11:59
 * @LastEditTime: 2021-08-08 21:58:50
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /Node-Express/app.js
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const redisStore = require('connect-redis')(session);

// import
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// register
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

const redisClient = require('./db/redis')
const sessionStore = new redisStore({
  client: redisClient
});
app.use(session({
  resave: false, //添加 resave 选项
  saveUninitialized: true, //添加 saveUninitialized 选项
  // secret: 'Fan#$7889_',     //  注意秘钥要一致!!!!!!! const SECRET_KEY = 'WJiol_8776#'
  secret: 'WJiol_8776#',     //  注意秘钥要一致!!!!!!! const SECRET_KEY = 'WJiol_8776#'  
  cookie:{
    // path: '/',   // 默认配置
    // httpOnly: true,   //默认配置
    maxAge:24*60*60*1000 
  },
  store: sessionStore
}))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
