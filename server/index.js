const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const expressPlayground = require('graphql-playground-middleware-express')

const app = express()

const server = new ApolloServer({typedDefs, resolvers })

server.applyMiddleware({app})

app.get('/', (req, res) => res.end('Welcome to the PhotoShare API'))
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen({port: 4000}, ()=> console)
