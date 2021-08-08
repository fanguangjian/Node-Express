/*
 * @Author: G.F
 * @Date: 2021-07-29 19:59:51
 * @LastEditTime: 2021-07-29 20:00:56
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /React-Node/modules/setToken.js
 */
const jwt = require('jsonwebtoken');

let setToken = function(str1,str2){
    let user = str1;  
    let paswd = str2;
    const rule = {
        username: user,
        pwd: paswd
    }
    let scret = 'cloudmel';  // identify
    let ztoken = jwt.sign(rule, scret, { expiresIn: 60*60*24 }) 
    return ztoken
}

module.exports = { setToken }

