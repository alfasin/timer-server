const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
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

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves terminations from the "terminations" array above.
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const resolvers = {
  Query: {
    terminations: () => terminations,
  },
  Mutation: {
    addTermination: (t) => {
      terminations.push(t);
      return t;
    },
  }
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
