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
        this.errno = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.success = false
        this.errno = -1
    }
}
module.exports = {
    SuccessModel,
    ErrorModel
}
    