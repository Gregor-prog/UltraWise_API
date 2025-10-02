class HttpError extends Error{
    public statusCode;
    constructor(message : string,statusCode : Number){
        super(message)
        this.statusCode = statusCode
    }
}

export default HttpError