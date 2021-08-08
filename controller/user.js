/*
 * @Author: G.F
 * @Date: 2021-08-08 21:24:10
 * @LastEditTime: 2021-08-08 23:32:14
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /Node-Express/controller/user.js
 */
const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')


const login = (username, password) => {
    // if (username === "zhangsan" && password === "123") {
    //     return true
    // }
    // return false

    username = escape(username)
    // 生成加密密码,目前是明文密码,需要加密
    // password = genPassword(password)
    password = escape(password)
    console.log(username, password);
    
    //语句错误
    // const sql = `    
    //     select username, realname from users where username='${username}' and password='${password}'
    // `
    const sql = `
        select username, realname from users where username=${username} and password=${password}
    `
        
    return exec(sql).then(rows =>{
        console.log(rows, 'row');        
        return rows[0] || {}
    })
}

module.exports = {
   login
}