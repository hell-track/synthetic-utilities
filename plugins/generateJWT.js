const jsonwebtoken = require('jsonwebtoken')

export default (context, inject) => {
  const generateJWT = function generateJWT(
    payload,
    privateKey,
    algorithm = 'RS256'
  ) {
    return jsonwebtoken.sign(
      typeof payload === 'string' ? JSON.parse(payload) : payload,
      privateKey,
      { algorithm }
    )
  }
  inject('generateJWT', generateJWT)
}
