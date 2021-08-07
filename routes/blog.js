/*
 * @Author: G.F
 * @Date: 2021-08-06 23:33:38
 * @LastEditTime: 2021-08-06 23:35:07
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /Node-Express/routes/blog.js
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    res.json({
        data:[1,2,3]
    })
});

module.exports = router;

