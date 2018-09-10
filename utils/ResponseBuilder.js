
class Response {
    constructor(build) {
        this.httpCode = build.httpCode
        this.data = build.data
        this.errorMessage = build.errorMessage
    }

    static get ResponseBuilder() {
        class ResponseBuilder {
            construcotr(){
                this.httpCode = 200
            }
            withHttpCode(code){
                this.httpCode = code
                return this
            }
            withHttpSuccess(){
                this.httpCode = 200
                return this
            }
            withHttpUnauthorized() {
                this.httpCode = 401
                return this
            }
            withHttpBadRequest() {
                this.httpCode = 400
                return this
            }
            withJsonData(data) {
                this.data = data
                return this
            }
            withMessage(message) {
                this.message = messge
            }
            build() {
                //
                return { 'message': this.message,
                'data': this.data}
            }
        }
    }

}
var httpCode = 200;
var data = {}
var errorMessage = ""

const setMessage = (message) => {
    errorMessage = message;
}

const setJsonData = (dataToSet) => {
   data = dataToSet
}

const setHttpCode = (code) => {
   httpCode = code 
}

const setHttpSuccess = () => {
    httpCode = 200
}

const setHttpUnauthorized = () => {
    httpCode = 401
}

const setHttpBadRequest = () => {
    httpCode = 400  
}

const sendResponse = (dataToSet, res) => {
    data = dataToSet;
    res.status(httpCode);
    res.json({ 'message': errorMessage,
                'data': data });
}

module.exports = {
    setMessage,
    setJsonData,
    setHttpCode,
    setHttpSuccess,
    setHttpUnauthorized,
    setHttpBadRequest,
    sendResponse
};