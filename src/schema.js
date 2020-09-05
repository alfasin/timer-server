const { gql } = require('apollo-server');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
exports.typeDefs = gql`
  type Termination {
    id: String
    zoomId: String
    terminateTime: String
  }

  type Query {
    terminations: [Termination]
  }

  type Mutation {
    addTermination(zoomId: String!, timeLeftMinutes: Int!): Termination
  }
`;