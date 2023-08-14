import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag'
import typeDefs from "@/lib/graphql/schema";
import { FacadeJobSearch } from "@/lib/facade/job/facadeJobSearch";
import { Model } from "@/lib/model/posting";

const resolvers = {
    Query: {
        async jobPostings(parent, args, contextValue, info) {
        let search = new FacadeJobSearch();
        return await search.executeJobQuery("Front end", "", "");
      },
      async getJobPostingsBy(parent, args: Model.JobSearch, contextValue, info) {
        let search = new FacadeJobSearch();
        return await search.executeJobQuery(args.searchText, args.jobCategory, args.jobLocation);
      },
      async getJobById(parent, args: Model.PostingId, contextValue, info) {
        let search = new FacadeJobSearch();
        let result = await search.executeSearchById(args.id);
        return result;
      }
    }
};

const apolloServer = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
