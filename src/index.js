const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const { Termination } = require('./models/termination');

const terminations = [
  {
    zoomId: '123abc',
    ttl: 1599175197,
  },
  {
    zoomId: 'vgh-76ft',
    ttl: 1599175676,
  },
];

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
