/*
 * @Author: G.F
 * @Date: 2021-08-06 23:33:45
 * @LastEditTime: 2021-08-07 00:30:54
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /Node-Express/routes/user.js
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
    const {username, password}  = req.body;
    console.log(username, password);
    res.render('index', { title: 'Express' });
});

module.exports = router;
