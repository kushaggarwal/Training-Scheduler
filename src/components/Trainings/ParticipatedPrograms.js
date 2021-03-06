import React from "react";
import { Dimmer, Loader, Grid, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { GET_PARTICIPATED_TRAININGS } from "../../graphql/queries";
import TrainingCard from "./TrainingCard";
import { useQuery } from "@apollo/react-hooks";

const ParticipatedPrograms = (props) => {
  const { data, loading, error } = useQuery(GET_PARTICIPATED_TRAININGS, {
    variables: { enrolled: props.enrolled["id"] },
  });

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
    <div>
      {data.Training_Programs.length ? (
        <Grid style={{ marginTop: "30px", marginLeft: "40px" }} columns={2}>
          {data.Training_Programs.map((item, index) => {
            return (
              <TrainingCard
                prog={item}
                key={index}
                isEnrolled={true}
                isAdmin={props.user["IsAdmin"]}
              />
            );
          })}
        </Grid>
      ) : (
        <Header as="h1" textAlign="center" style={{ marginTop: "30px" }}>
          No Participated Events
        </Header>
      )}
    </div>
  );
};

export default ParticipatedPrograms;
