import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../../app.js'
import Vehicle from './model.js'

chai.use(chaiHttp)
const { expect } = chai

describe('API de veículos', () => {
  // Antes de cada teste, limpe a coleção de veículos no banco de dados
  beforeEach(async () => {
    await Vehicle.deleteMany({})
  })

  describe('POST /vehicles', () => {
    it('Deve criar um novo veículo', async () => {
      const res = await chai.request(app)
        .post('/vehicles')
        .send({
          placa: 'ABC1234',
          chassi: '1ABCDEF1234567890',
          renavam: 12345678900,
          modelo: 'Sedan',
          marca: 'Fictícia Motors',
          ano: 2023
        })
      expect(res).to.have.status(201)
      expect(res.body).to.be.an('object')
      expect(res.body).to.have.property('id')
    })
  })

  describe('GET /vehicles/:id', () => {
    it('Deve retornar um veículo pelo seu ID', async () => {
      // Crie um veículo no banco de dados para buscar por ele depois
      const vehicle = await Vehicle.create({
        placa: 'XYZ5678',
        chassi: '2XYZ9876543210',
        renavam: 98765432100,
        modelo: 'SUV',
        marca: 'Fictícia Motors',
        ano: 2022
      })

      const res = await chai.request(app)
        .get(`/vehicles/${vehicle._id}`)

      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      expect(res.body).to.have.property('placa', 'XYZ5678')
    })
  })

  describe('PATCH /vehicles/:id', () => {
    it('Deve atualizar um veículo pelo seu ID', async () => {
      // Crie um veículo no banco de dados para atualizar depois
      const vehicle = await Vehicle.create({
        placa: 'LMN9012',
        chassi: '3LMN4567890123',
        renavam: 45678901200,
        modelo: 'Hatchback',
        marca: 'Fictícia Motors',
        ano: 2021
      })

      const res = await chai.request(app)
        .patch(`/vehicles/${vehicle._id}`)
        .send({ ano: 2024 })

      expect(res).to.have.status(200)
      expect(res.body).to.be.an('object')
      expect(res.body).to.have.property('ano', 2024)
    })
  })

  describe('DELETE /vehicles/:id', () => {
    it('Deve excluir um veículo pelo seu ID', async () => {
      // Crie um veículo no banco de dados para excluir depois
      const vehicle = await Vehicle.create({
        placa: 'JKL3456',
        chassi: '4JKL6789012345',
        renavam: 67890123400,
        modelo: 'Caminhonete',
        marca: 'Fictícia Motors',
        ano: 2020
      })

      const res = await chai.request(app)
        .delete(`/vehicles/${vehicle._id}`)

      console.log(res.body)
      expect(res).to.have.status(204)
      expect(res.body).to.be.an('object')
      expect(res.body).to.have.property('id')
    })
  })

  describe('GET /vehicles', () => {
    it('Deve retornar todos os veículos cadastrados', async () => {
      // Crie alguns veículos no banco de dados para listar depois
      await Vehicle.create([
        {
          placa: 'ABC1234',
          chassi: '1ABCDEF1234567890',
          renavam: 12345678900,
          modelo: 'Sedan',
          marca: 'Fictícia Motors',
          ano: 2023
        },
        {
          placa: 'XYZ5678',
          chassi: '2XYZ9876543210',
          renavam: 98765432100,
          modelo: 'SUV',
          marca: 'Fictícia Motors',
          ano: 2022
        }
      ])

      const res = await chai.request(app)
        .get('/vehicles')

      expect(res).to.have.status(200)
      expect(res.body).to.be.an('array')
      expect(res.body).to.have.lengthOf(2)
    })
  })
})
