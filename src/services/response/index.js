import chalk from 'chalk'

export const success = (res, status) => (entity) => {
  if (entity) {
    console.log(chalk.green('Success:'), 'Operation completed successfully.')
    res.status(status || 200).json(entity).end()
  }

  if (status === 204) {
    console.log(chalk.yellow('Warning:'), 'No content returned.')
    res.status(status).end()
  }

  return null
}

export const notFound = () => (entity) => {
  if (entity) {
    return entity
  }

  console.log(chalk.red('Error:'), 'Resource not found.')
  return Promise.reject({
    message: 'Not Found',
    status: 404,
    type: 'notFound',
  })
}

export const errorHandler = (err, res) => {
  switch (err.status) {
  case 400:
      console.log(chalk.red('Error:'), 'Malformed data:', err.message || 'Malformed data')
      res.status(403).json({
        status: 403,
        type: 'malformed_data',
        message: err.message || 'Malformed Data',
        ...err,
      }).end()
      break
  case 403:
    console.log(chalk.red('Error:'), 'Not authorized:', err.message || 'Not authorized')
    res.status(403).json({
      status: 403,
      type: 'not_authorized',
      message: err.message || 'Not authorized',
      ...err,
    }).end()
    break
  case 401:
    console.log(chalk.red('Error:'), 'Unauthenticated:', err.message || 'Unauthenticated')
    res.status(401).json({
      status: 401,
      type: 'not_authenticated',
      message: err.message || 'Unauthenticated',
      ...err,
    }).end()
    break
  case 404:
    console.log(chalk.red('Error:'), 'Resource not found:', err.message || 'Resource not found')
    res.status(404).json({
      status: 404,
      type: 'not_found',
      message: err.message || 'Resource not found',
      ...err,
    }).end()
    break
  case 500:
    console.log(chalk.red('Error:'), 'Internal error:', err.message || 'Internal error')
    res.status(500).json({
      status: 500,
      type: 'internal_error',
      message: err.message || 'Internal error',
      ...err,
    }).end()
    break
  default:
    console.log(chalk.red('Error:'), 'Unknown error:', err.message || 'Unknown error')
    res.status(500).json({
      status: 500,
      type: 'unknown_error',
      message: 'Unknown error',
      ...err,
    }).end()
  }
}
