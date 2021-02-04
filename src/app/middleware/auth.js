const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Token  not provided' })
    }
    const [, token] = authHeader.split(' ')

    try {
        const decode = await promisify(jwt.verify)(
            token,
            process.env.APP_SECRET
        )
        req.userId = decode.id
        return next()
    } catch (error) {
        return res.status(401).json({ message: 'Token Invalid', error })
    }
}
