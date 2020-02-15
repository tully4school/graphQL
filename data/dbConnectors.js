import mongoose from 'mongoose'
import sequelize from 'sequelize'
import _ from 'lodash'
import casual from 'casual'

// Mongo Connection
mongoose.Promise = global.Promise

const friendSchema = new mongoose.Schema({
  firsttName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  }
})

const Friends = mongoose.model('friends', friendSchema)

// SQL
const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: './aliens.sqlite'
})

const Aliens = sequelize.define('aliens', {
  firsttName: { type: Sequelize.String },
  lastName: { type: Sequelize.String },
  planet: { type: Sequelize.String }
})

Aliens.sync({ force: true }).then(() => {
  _.times(10, i => {
    Aliens.create({
      firstName: casual._first_name,
      lastName: casual._last_name,
      planet: casual.word
    })
  })
})

export { Friends, Aliens }
