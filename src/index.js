require('dotenv/config');
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const bootstrap = async () => {
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    playground: true,
    introspection: true,
  });

  const port = process.env.SERVER_PORT || 4000;
  httpServer = await server.listen({ port })  
  console.log(`🚀  Server ready at ${httpServer.url}`);
}
bootstrap();