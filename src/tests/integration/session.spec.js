const { User } = require('../../app/models')
const request = require('supertest')
const app = require('../../app')
const truncate = require('../utils/truncate')

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate()
        User.destroy({
            where: {
                email: 'jhon.araujo2488@gmail.com',
            },
        })
    })
    afterEach(async () => {
        await truncate()
        User.destroy({
            where: {
                email: 'jhon.araujo2488@gmail.com',
            },
        })
    })
    it('should athenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Jhony',
            email: 'jhon.araujo2488@gmail.com',
            password: '123123',
        })
        const response = await request(app).post('/sessions').send({
            email: user.email,
            password: '123456',
        })
        expect(response.status).toBe(200)
    })
})
