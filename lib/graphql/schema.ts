

const typeDefs = /* GraphQL */ `
 type Query {
    hello: String
  }

  type Query {
    hello2: String
  }

  type Query {
    user(userId: Int): [User]
  }

  type User {
    userId: Int,
    firstName: String,
    lastName: String,
    email: String
    orders: [Order]
  }

  type Order {
    orderId: Int,
    orderDate: String,
    orderPrice: Float,
    user: User, 
    items: [Item]
  }

  type Item {
    itemId: Int,
    itemName: String,
    itemPrice: Float
  }

  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`
export default typeDefs