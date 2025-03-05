export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      status: 'error',
      statusCode,
      message: err.message || 'Internal Server Error'
    });
  };
  
  export const notFoundHandler = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
  };