const request = require('supertest')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.should()
chai.use(chaiHttp)
const server = require('../src')
const { describe, it } = require('mocha')

describe('api', () => {
  describe('NUMBER_TO_ROMAN', () => {
    it('should encrypt number #1', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: '1', action: 'NUMBER_TO_ROMAN' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql('I')
          done()
        })
    })

    it('should encrypt number #2', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: '4', action: 'NUMBER_TO_ROMAN' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql('IV')
          done()
        })
    })

    it('should encrypt number #3', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: '6', action: 'NUMBER_TO_ROMAN' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql('VI')
          done()
        })
    })

    it('should encrypt number #4', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: '9', action: 'NUMBER_TO_ROMAN' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql('IX')
          done()
        })
    })

    it('should encrypt number #5', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: '8', action: 'NUMBER_TO_ROMAN' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql('VIII')
          done()
        })
    })

    it('should encrypt number #6', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: '3999', action: 'NUMBER_TO_ROMAN' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql('MMMCMXCIX')
          done()
        })
    })

    it('should encrypt number #7', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: '51', action: 'NUMBER_TO_ROMAN' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql('LI')
          done()
        })
    })
  })

  describe('ROMAN_TO_NUMBER', () => {
    it('should decrypt roman #1', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: 'I', action: 'ROMAN_TO_NUMBER' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql(1)
          done()
        })
    })

    it('should decrypt roman #2', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: 'IV', action: 'ROMAN_TO_NUMBER' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql(4)
          done()
        })
    })

    it('should decrypt roman #3', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: 'VI', action: 'ROMAN_TO_NUMBER' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql(6)
          done()
        })
    })

    it('should decrypt roman #4', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: 'IX', action: 'ROMAN_TO_NUMBER' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql(9)
          done()
        })
    })

    it('should decrypt roman #5', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: 'VIII', action: 'ROMAN_TO_NUMBER' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql(8)
          done()
        })
    })

    it('should decrypt roman #6', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: 'MMMCMXCIX', action: 'ROMAN_TO_NUMBER' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.message.should.eql(3999)
          done()
        })
    })
  })

  describe('Should not fail', () => {
    it('should ot fail #1', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: '', action: 'ROMAN_TO_NUMBER' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.error.should.eql('No message received.')
          done()
        })
    })

    it('should ot fail #2', (done) => {
      request(server).post('/api').set('Content-Type', 'application/json').send({ message: 'I', action: '' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err)
          res.body.error.should.eql('No action provided.')
          done()
        })
    })
  })
})
