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
