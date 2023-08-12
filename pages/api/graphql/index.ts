import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag'
import typeDefs from "@/lib/graphql/schema";

const users = [
    {
      userId: 1234,
      firstName: 'John',
      lastName: 'Smith',
      email: 'johnsmith@example.com'
    },
    {
      userId: 1235,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com'
    }
  ]

const resolvers = {
    Query: {
      hello: () => 'Hello World',    
  
      books: () => books,
      hello2:() => 'hi hi' ,
      user(parent, args, contextValue, info) {
        console.log(args);
        return users.filter(x => x.userId == args.userId);
      },
    }
  };

const apolloServer = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
