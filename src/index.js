require('dotenv/config');
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  playground: true,
  introspection: true,
});

const port = process.env.SERVER_PORT || 4000;
server.listen({ port })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
