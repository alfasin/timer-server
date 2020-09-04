const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  playground: true,
  introspection: true,
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
