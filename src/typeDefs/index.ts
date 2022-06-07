import { gql } from 'apollo-server';


export const typeDefs = gql`
    type Users {
        id: ID!
        name: String
        email: String
    }

    input User {
        name: String
        email: String
    }

    type Query {
        users: [Users]
    }

    type Mutation {
        createUser(user: User): Users
    }

`;
