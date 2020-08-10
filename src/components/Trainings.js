import React from "react";
import {
  Loader,
  Dimmer,
  Card,
  Grid,
  Header,
  Divider,
  Image,
  Item,
  Icon,
} from "semantic-ui-react";
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
    <div>
      <div style={{ backgroundColor: "#0d47a1" }}>
        <Item.Group>
          <Item style={{ marginLeft: "20px" }}>
            <Item.Image
              size="small"
              src="https://img.icons8.com/plasticine/100/000000/training.png"
            />
            <Item.Content verticalAlign="middle">
              <Item.Header as="a" style={{ color: "white", fontSize: "22pt" }}>
                Training Programs
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
      <Header size="huge" style={{ paddingTop: "30px", paddingLeft: " 60px" }}>
        <Icon name="calendar" size="small" />
        Upcoming Programs
      </Header>

      <Grid style={{ marginTop: "50px", marginLeft: "40px" }} columns={2}>
        {data.Training_Programs.map((item, index) => {
          return <TrainingCard prog={item} />;
        })}
      </Grid>
    </div>
  );
};

export default Trainings;
