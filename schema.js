import { buildSchema } from 'graphql'

const schema = buildSchema('
    type Query {
        hello: string;
    }
')

export default schema
