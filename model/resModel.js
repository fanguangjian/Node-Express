/*
 * @Author: G.F
 * @Date: 2021-08-08 00:29:03
 * @LastEditTime: 2021-08-08 23:34:38
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /Node-Express/model/resModel.js
 */
class BaseModel {
    constructor (data, message) {
        if (typeof data === 'string') {
            this.message = data
            data = null
            message =null            
        }
        if (data) {
            this.data = data
        }
        if(message){
            this.message = message
        }    
    }
}

class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.success = true
        // this.errno = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.success = false
        // this.errno = -1
    }
}
module.exports = {
    SuccessModel,
    ErrorModel
}
    