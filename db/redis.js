/*
 * @Author: G.F
 * @Date: 2021-08-08 00:27:27
 * @LastEditTime: 2021-08-08 00:33:31
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /Node-Express/db/redis.js
 */
const redis = require('redis')
const { REDIS_CONF } = require('../conf/db.js')

// 创建客户端  cc
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

redisClient.on('error', err => {
    console.error(err)
})

module.exports = redisClient