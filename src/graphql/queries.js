import { gql } from "apollo-boost";
import client from "./client";
export const GET_TRAININGS = gql`
  query Training_Programs {
    Training_Programs {
      Categories
      Description
      Duration
      ID
      Name
      Date
    }
  }
`;
export const GET_ENROLLED = gql`
  query($ID: String!) {
    Users_by_pk(ID: $ID) {
      enrolled
    }
  }
`;

export const GET_PARTICIPATED_TRAININGS = gql`
  query($enrolled: [Int!]) {
    Training_Programs(where: { ID: { _in: $enrolled } }) {
      Name
    }
  }
`;
