const bcrypt = require('bcryptjs')
const { User } = require('../../app/models')
const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async () => {
        await truncate()
        User.destroy({
            where: {
                email: 'jhon.araujo2488@gmail.com',
            },
        })
    })
    it('should and encrypt user password', async () => {
        const user = await User.create({
            name: 'Jhony',
            email: 'jhon.araujo2488@gmail.com',
            password: '123456',
        })
        const compareHash = await bcrypt.compare('123456', user.password_hash)
        expect(compareHash).toBe(true)
    })
})
