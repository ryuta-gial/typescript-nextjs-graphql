// graphql/resolver.ts

interface Fruit {
  id: number;
  name: string;
  price: number;
}

const db: Fruit[] = [
  { id: 1, name: "apple", price: 100 },
  { id: 2, name: "banana", price: 130 },
  { id: 3, name: "orange", price: 110 },
  { id: 4, name: "grape", price: 140 },
];
const users = [
  { id: "1", name: "John Doe", email: "john@test.com" },
  { id: "2", name: "word Doe", email: "jane@example.com" },
];
export const resolvers = {
  Query: {
    getAuthor: () => ({ name: "nakanishi", id: "123" }),
    fruits: () => db,
    fruit: (parent, args) => {
      const fruit = db.find((fruit) => fruit.id == args.id);
      return fruit;
    },
    hello: (parent, args) => {
      console.log("parent", parent);
      console.log("args", args);
      return "Hello World";
    },
    users: () => users,
    user: (parent, args) => {
      const user = users.find((user) => user.id === args.id);
      return user;
    },
  },
};
