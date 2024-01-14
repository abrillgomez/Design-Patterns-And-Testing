const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./schema/TypeDefs");
const resolvers = require("./schema/Resolvers");

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = express();

  server.applyMiddleware({ app });

  app.listen({ port: 5173 }, () => {
    console.log("Running server at 5173");
  });
}

startApolloServer();
