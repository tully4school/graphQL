import mongoose from 'mongoose'

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

export { Friends }
