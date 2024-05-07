export const success = (res, status) => (entity) => {
    if (entity) {
      res.status(status || 200).json(entity).end()
    }
    return null
  }
  
export const notFound = () => (entity) => {
    if (entity) {
      return entity
    }
  
    return Promise.reject({
      message: 'Not Found',
      status: 404,
      type: 'notFound'
    })
  }


export const errorHandler = (err, res) => {
    if(err.name === 'ValidationError') {
      return validationError(res, err)
    }
  
    if(err.name === 'MongoError') {
      return mongoError(res, err)
    }
  
    if (err.type === 'unauthorized') {
      return unauthorized(res, err)
    }
  
    if (err.type === 'invalid_token') {
      return unauthorized(res, err)
    }
  
    switch (err.status) {
    case 403:
      res.status(403).json({
        status: 403,
        type: 'not_authorized',
        message: err.message ? err.message : 'Not authorized',
        ...err
      }).end()
      break
    case 401:
      res.status(401).json({
        status: 401,
        type: 'not_authenticated',
        message: err.message ? err.message : 'Unauthenticated',
        ...err
      }).end()
      break
    case 404:
      res.status(404).json({
        status: 404,
        type: 'not_found',
        message: err.message,
        ...err
      }).end()
      break
    case 500:
      res.status(500).json({
        status: 500,
        type: 'internal_error',
        message: err.message,
        ...err
      }).end()
      break
    default:
      res.status(500).json({
        status: 500,
        type: 'unknown_error',
        message: 'Unknown error',
        ...err
      }).end()
    }
  }