import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Dimmer, Loader, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { GET_BOTH_TRAININGS } from "../../graphql/queries";
import TrainingCard from "./TrainingCard";

const AllPrograms = (props) => {
  const { data, loading, error } = useQuery(GET_BOTH_TRAININGS, {
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
      <Grid style={{ marginTop: "30px", marginLeft: "40px" }} columns={2}>
        {data["nonParticipatedTrainings"].map((item, index) => {
          return (
            <TrainingCard
              enrolled={props.enrolled["id"]}
              prog={item}
              key={index}
              isAdmin={props.user["IsAdmin"]}
              user={props.user}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default AllPrograms;
