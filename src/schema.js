const { gql } = require('apollo-server');

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