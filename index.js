import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.get('/', (req, res) => {
  res.send('GraphQL is Amazing!')
})

const root = {
  friend: () => {
    return {
      id: 234235,
      firstName: 'Joe',
      lastName: 'Tully',
      gender: 'Male',
      emails: [
        { email: 'jtully84@gmail.com' },
        { email: 'tully_j@hotmail.com' }
      ]
    }
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
