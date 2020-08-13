import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Dimmer, Loader, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { GET_TRAININGS } from "../../graphql/queries";
import { DELETE_TRAINING_BY_ID } from "../../graphql/mutations";
import TrainingCard from "./TrainingCard";

const AdminPrograms = (props) => {
  const { data, loading, error } = useQuery(GET_TRAININGS);
  const [deleteTrainingById] = useMutation(DELETE_TRAINING_BY_ID);
  const [trainingList, setTrainingList] = useState([]);

  function deleteTraining(ID) {
    const variables = {
      ID: ID,
    };

    deleteTrainingById({ variables });
    console.log(trainingList);
    var deletedList = trainingList.filter((item) => item.ID !== ID);
    setTrainingList(deletedList);
  }

  useEffect(() => {
    if (!loading) {
      setTrainingList(data.Training_Programs);
    }
  }, [loading]);

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
        {trainingList.map((item, index) => {
          return (
            <TrainingCard
              prog={item}
              key={index}
              isAdmin={props.user["IsAdmin"]}
              user={props.user}
              deleteTraining={deleteTraining}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default AdminPrograms;
