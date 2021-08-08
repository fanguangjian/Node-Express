/*
 * @Author: G.F
 * @Date: 2021-08-06 23:33:45
 * @LastEditTime: 2021-08-08 23:55:44
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /Node-Express/routes/user.js
 */
var express = require('express');
var router = express.Router();
const {login} = require('../controller/user');
const { setToken } = require('../middleware/setToken');
const { SuccessModel, ErrorModel} = require('../model/resModel');

router.post('/login', function(req, res, next) {
    // const {username, password} = req.body
    // res.json({
    //     errno:0,
    //     data:{
    //         username,
    //         password
    //     }
    // })
    //    const {username, password } = req.query
       const {username, password } = req.body     
       const result = login(username, password);
       console.log(result );
       return result.then(data =>{
           console.log(data);
           
            if (data.username) {
                //操作 cookie  httpOnly 限制
                // res.setHeader('Set-cookie',`username=${data.username};path=/;httpOnly; expires=${getCookieExpires()}`)

                // // 设置 session
                // req.session.username = data.username
                // req.session.realname = data.realname

                const token = setToken(req.body.email, req.body.password);
                console.log(token, 'token');
               
                // return new SuccessModel()
                res.json(
                    new SuccessModel({message:'Successfully', token: token})
                )            
            }else {
                  // return new ErrorModel("登录失败")
                res.json(
                    new ErrorModel('Login Failed!!!')
                )
            }
          
       })     
});

router.get('/login-test',(req,res,next) => {
    if (req.session.username) {
        res.json({
            errno:0,
            msg:'已登录'
        })        
    } else {
        res.json({
            errno:-1,
            msg:'未登录'
        })
    }   
})

// http://localhost:3000/api/user/session-test
// 浏览次数
// router.get('/session-test', (req,res,next) => {
//     const session = req.session
//     if (session.viewNum == null) {
//         session.viewNum = 0
//     }
//     session.viewNum++
//     res.json({
//         viewNum: session.viewNum
//     })
// })


module.exports = router;

