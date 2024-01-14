const { users } = require("../FakeUsers");

const resolvers = {
  Query: {
    getUsers: () => {
      return users;
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args;
      users.push(user);
      return user;
    },
  },
};

module.exports = { resolvers };
