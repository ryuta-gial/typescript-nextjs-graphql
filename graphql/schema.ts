import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    getAuthor(id: Int!): Author
    fruits: [Fruit]
    fruit(id: ID!): Fruit
    hello: String
    users: [User]
    user(id: ID!): User
  }
  type Author {
    name: String
    id: ID
  }
  type Fruit {
    id: ID
    name: String
    price: Int
  }
  type User {
    id: ID!
    name: String!
    email: String!
  }
`;
