import { gql } from "apollo-boost";

export const ADD_USER = gql`
  mutation($ID: String!, $UserName: String!, $IsAdmin: Boolean!) {
    insert_Users_one(
      object: { ID: $ID, UserName: $UserName, IsAdmin: $IsAdmin }
    ) {
      ID
      UserName
    }
  }
`;

export const MARK_ENROLLED = gql`
  mutation($ID: String!, $enrolled: jsonb!) {
    update_Users_by_pk(pk_columns: { ID: $ID }, _set: { enrolled: $enrolled }) {
      ID
      enrolled
    }
  }
`;

export const ADD_TRAINING = gql`
  mutation(
    $ID: Int!
    $Name: String!
    $Categories: String!
    $Description: String!
    $Date: date!
    $Duration: String!
  ) {
    insert_Training_Programs_one(
      object: {
        ID: $ID
        Categories: $Categories
        Description: $Description
        Date: $Date
        Duration: $Duration
        Name: $Name
      }
    ) {
      ID
      Name
    }
  }
`;
