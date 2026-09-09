function errorHandler(err , req, res, next){
    let statusCode = err.statusCode || 500;
res.status(500).send({message: err.message})
}

module.exports = errorHandler;