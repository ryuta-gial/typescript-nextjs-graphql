import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

export default startServerAndCreateNextHandler(apolloServer);
