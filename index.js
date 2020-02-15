import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('GraphQL is Amazing!')
})

app.listen(8080, () =>
  console.log('running the server on localhost:8080/graphql')
)
