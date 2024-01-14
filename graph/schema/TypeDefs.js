const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
    married: Boolean!
  }

  type Query {
    getUsers: [User]!
  }

  type Mutation: {
    createUser(name: String, age: Int, married: Boolean): User
  }
`;

module.exports = { typeDefs };
