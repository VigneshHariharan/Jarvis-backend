// server
import { prisma } from "./prisma";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "#typeDefs/index";
import { queries, mutations } from "#resolvers/index";

const resolvers = {
  Query: queries,
  Mutation: mutations,
};

const server = new ApolloServer({
  csrfPrevention: true,
  typeDefs,
  resolvers,
  cors: true,
});

server
  .listen(process.env.PORT || 3001)
  .then(({ url }) => {
    console.log("Server started in : ", url);
  })
  .catch((err) => {
    console.log("Server error : ", err);
  });
