import React from "react";
import { Card, Icon, Grid, Divider, Button, Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { GET_PARTICIPATED_TRAININGS } from "../../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const ParticipatedPrograms = (props) => {
  const { data, loading, error } = useQuery(GET_PARTICIPATED_TRAININGS, {
    variables: { enrolled: props.enrolled },
  });
  console.log(data);
  return (
    <div>
      <h1>ParticipatedPrograms</h1>
    </div>
  );
};

export default ParticipatedPrograms;
