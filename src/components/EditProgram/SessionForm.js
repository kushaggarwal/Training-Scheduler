import React, { useState, useEffect } from "react";
import {
  Header,
  Icon,
  Form,
  Input,
  TextArea,
  Button,
  Divider,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Subtopic from "./Subtopic";
import { useQuery } from "@apollo/react-hooks";
import { GET_SUBTOPIC_BY_SECTION } from "../../graphql/queries";

const SessionForm = (props) => {
  const { data, loading, error } = useQuery(GET_SUBTOPIC_BY_SECTION, {
    variables: {
      Section_ID: props.item.ID,
    },
  });

  const [subtopics, setSubtopics] = React.useState();
  const [Name, setName] = React.useState();
  const [Time, setTime] = React.useState();

  useEffect(() => {
    setName(props.item.Name);
    setTime(props.item.Time);
  }, []);

  if (loading)
    return (
      <Dimmer active inverted>
        <Loader
          size="medium"
          inverted
          content="Loading"
          style={{ marginTop: "50px" }}
        />
      </Dimmer>
    );
  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <Form style={{ margin: "30px", marginBottom: "90px" }}>
      <Form.Group widths="equal">
        <Form.Input
          placeholder="Name"
          label="Session Name"
          value={Name}
          onChange={(event) => setName(event.target.value)}
        />
        <Form.Input
          placeholder="Time"
          label="Starting Time"
          type="time"
          value={Time}
          onChange={(event) => setTime(event.target.value)}
        />
      </Form.Group>
      <Header as="h5">Subtopics</Header>
      {data.Subtopics.map((list, index) => {
        return <Subtopic subtopic={list} />;
      })}
      <Button.Group floated="right" style={{ margin: "10px 0px" }}>
        <Button
          color="green"
          type="submit"
          Icon="tick"
          style={{ marginRight: "10px" }}
        >
          Save
        </Button>

        <Button color="red" type="submit" Icon="tick">
          Delete
        </Button>
      </Button.Group>
    </Form>
  );
};

export default SessionForm;
