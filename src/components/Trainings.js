import React from "react";
import { Loader, Dimmer, Card, Grid, Header, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TrainingCard from "./TrainingCard";
import { useQuery } from "@apollo/react-hooks";
import { GET_TRAININGS } from "../graphql/queries";

const Trainings = () => {
  const { data, loading, error } = useQuery(GET_TRAININGS);

  if (loading)
    return (
      <Dimmer active inverted>
        <Loader size="massive" inverted content="Loading" />
      </Dimmer>
    );
  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
  return (
    <div style={{ margin: "70px" }}>
      <Header size="huge">Training Programs</Header>
      <Divider />
      <Card.Group itemsPerRow={3}>
        {data.Training_Programs.map((item, index) => {
          return <TrainingCard prog={item} />;
        })}
      </Card.Group>
    </div>
  );
};

export default Trainings;
