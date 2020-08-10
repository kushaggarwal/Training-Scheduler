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