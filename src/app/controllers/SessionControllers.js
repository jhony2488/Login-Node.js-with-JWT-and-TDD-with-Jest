const { User } = require('../models/')
class SessionController {
    async store(req, res) {
        let email = req.body.email
        let password = req.body.password
        console.log('email:' + email)
        console.log('password:' + password)
        const user = await User.findOne({ where: { email: email } })
        if (!user) {
            return res.status(401).json({ message: 'User not found' })
        }
        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ message: 'Incorrect password' })
        }

        return res.status(200).json({
            message: 'User and password found',
            user,
            token: user.generateToken(),
        })
    }
}

module.exports = new SessionController()
