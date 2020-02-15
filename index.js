import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.get('/', (req, res) => {
  res.send('GraphQL is Amazing!')
})

class Friend {
  constructor (id, { firstName, lastName, gender, language, email }) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.language = language
    this.email = email
  }
}

const friendDatabase = {}

const root = {
  friend: () => {
    return {
      id: 234235,
      firstName: 'Joe',
      lastName: 'Tully',
      gender: 'Male',
      email: [{ email: 'jtully84@gmail.com' }, { email: 'tully_j@hotmail.com' }]
    }
  },
  createFriend: ({ input }) => {
    let id = require('crypto')
      .randomBytes(10)
      .toString('hex')
    friendDatabase[id] = input
    return new Friend(id, input)
  }
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)

app.listen(8080, () =>
  console.log('running the server on localhost:8080/graphql')
)
