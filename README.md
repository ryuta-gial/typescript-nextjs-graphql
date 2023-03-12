
# SETUP

yarn install
yarn run dev

# TEST
http://localhost:3000/api/graphql

Qperaiton
query ExampleQuery($getAuthorId: Int!, $userId: ID!, $fruitId: ID!) {
  getAuthor(id: $getAuthorId) {
    name
  }
  fruits {
    id
    name
    price
  }
  fruit(id: $fruitId) {
    id
    price
  }
  hello
  users {
    name
  }
  user(id: $userId) {
    name
    email
  }
}
variables:sample
{
"getAuthorId": 2,
"userId": "1"
"fruitId": "2",
}