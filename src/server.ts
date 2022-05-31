import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema'
import { resolvers as rootValue } from "./resolver";

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue
  }),
)

app.listen(4000)
console.log(`\
🚀 Server ready at: http://localhost:4000/graphql
⭐️ See sample queries: http://pris.ly/e/ts/graphql-express-sdl-first#using-the-graphql-api
`)

