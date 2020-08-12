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
      Categories
      Description
      Duration
      ID
      Name
      Date
    }
  }
`;

export const GET_BOTH_TRAININGS = gql`
  query($enrolled: [Int!]) {
    participatedTrainings: Training_Programs(
      where: { ID: { _in: $enrolled } }
    ) {
      Categories
      Description
      Duration
      ID
      Name
      Date
    }

    nonParticipatedTrainings: Training_Programs(
      where: { ID: { _nin: $enrolled } }
    ) {
      Categories
      Description
      Duration
      ID
      Name
      Date
    }
  }
`;

export const GET_TRAINING_BY_ID = gql`
  query($ID: Int!) {
    Training_Programs_by_pk(ID: $ID) {
      Categories
      Description
      Duration
      ID
      Name
      Date
    }
  }
`;

export const GET_SECTION_BY_ID = gql`
  query($Training_ID: Int!) {
    Section_List(where: { Training_ID: { _eq: $Training_ID } }) {
      Name
      Subtopics
      Time
      ID
    }
  }
`;

export const GET_SUBTOPIC_BY_SECTION = gql`
  query($Section_ID: String!) {
    Subtopics(where: { Section_ID: { _eq: $Section_ID } }) {
      Title
    }
  }
`;
