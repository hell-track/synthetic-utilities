const jsonwebtoken = require('jsonwebtoken')

export default (context, inject) => {
  const generateJWT = function generateJWT(payload, privateKey, algorithm='RS256') {
    const plType = typeof payload
    return jsonwebtoken.sign(
      plType === 'string' ? JSON.parse(payload) : payload,
      privateKey,
      { algorithm }
    )
  }
  inject('generateJWT', generateJWT)
}
