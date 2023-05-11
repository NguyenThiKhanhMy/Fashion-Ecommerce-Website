const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    
    //Duplication
    if (err.code === 11000) {
        err.statusCode = 400;
        for(let p in err.keyValue){
            err.message = `${p} đã được sử dụng`
        }
    }

    // wrong jwt error
    if (err.code === "JsonWebTokenError") {
        const message = 'JWT Error';
        err.statusCode = 400;
    }

    // jwt expire error
    if (err.code === "JsonWebTokenError") {
        const message = 'JWT Error';
        err.statusCode = 400;
    }
    
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        stack: err.stack,
    });
};

export default errorHandler;
