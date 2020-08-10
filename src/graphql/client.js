import ApolloClient, { gql } from "apollo-boost";
import { GET_TRAININGS } from "./queries.js";
const client = new ApolloClient({
  uri: "https://willing-prawn-19.hasura.app/v1/graphql",
});

export default client;
