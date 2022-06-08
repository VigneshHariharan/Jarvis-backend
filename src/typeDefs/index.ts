import { gql } from "apollo-server";

const userCommonProps = `
    name: String
    email: String
    password: String
    role: Roles
`;

export const typeDefs = gql`
  type Users {
    id: ID!
    ${userCommonProps}
  }

  enum Roles {
    ENGINEER
    MARKETER
    DESIGNER
    PRODUCT_MANAGER
    DEVELOPER_ADVOCATE
    CEO
    CTO
  }

  input User {
     ${userCommonProps}
  }

  type Query {
    users: [Users]
  }

  input UserCommonData {
      ${userCommonProps}
  }

  input UserUpdateData {
    id: ID!
    newUserData: UserCommonData
  }

  type Mutation {
    createUser(user: User): Users
    updateUser(data: UserUpdateData): Users
    deleteUser(data: UserUpdateData): Users
  }
`;
