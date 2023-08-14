const typeDefs = /* GraphQL */ `

type Query {
    jobPostings(name: String, category: String, location: String): [PostingInfo]
    getJobPostingsBy(searchText: String, jobCategory: String, jobLocation: String): [PostingInfo]
    getJobById(id: String): PostingInfo
}

type Mutation {
    updateName(name: String!): PostingInfo!
}

type PostingInfo {
    id: String,
    name: String,
    description: String,
    createdAt: String,
    updatedAt: String,
    jobInDetails: String
}

type JobSearch { 
    searchText: String,
    jobCategory: String,
    jobLocation: String,
    pageSize: Int,
    skipPage: Int
}

`
export default typeDefs