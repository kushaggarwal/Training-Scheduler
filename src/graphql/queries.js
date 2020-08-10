import { gql } from "apollo-boost";

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
