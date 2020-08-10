import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Dimmer, Loader, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { GET_TRAININGS } from "../../graphql/queries";
import TrainingCard from "./TrainingCard";

const AdminPrograms = (props) => {
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
    <div>
      <Grid style={{ marginTop: "30px", marginLeft: "40px" }} columns={2}>
        {data.Training_Programs.map((item, index) => {
          return (
            <TrainingCard
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

export default AdminPrograms;
