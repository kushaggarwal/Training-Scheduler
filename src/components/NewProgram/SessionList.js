import React from "react";
import { Segment, Header, Grid, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_TRAINING_BY_ID } from "../../graphql/queries";
import SessionCard from "./SessionCard";

const SessionList = (props) => {
  const { data, loading, error } = useQuery(GET_TRAINING_BY_ID, {
    variables: { Training_ID: props.id },
  });
  console.log(data);
  return (
    <div>
      <SessionCard />
      <SessionCard />
      <SessionCard />
    </div>
  );
};

export default SessionList;
