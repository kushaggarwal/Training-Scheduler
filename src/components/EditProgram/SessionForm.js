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
import EditSubtopic from "./EditSubtopic";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_SUBTOPIC_BY_SECTION } from "../../graphql/queries";

import Subtopic from "../Trainings/Subtopic";

const SessionForm = (props) => {
  const { data, loading, error } = useQuery(GET_SUBTOPIC_BY_SECTION, {
    variables: {
      Section_ID: props.item.ID,
    },
  });

  const [Name, setName] = React.useState();
  const [Time, setTime] = React.useState();
  const [subtopic, setSubtopic] = React.useState([0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setName(props.item.Name);
    setTime(props.item.Time);
  }, []);

  function Addtopic() {
    setSubtopic([count + 1, ...subtopic]);
    console.log(subtopic);
  }

  if (loading)
    return (
      <Dimmer active inverted>
        <Loader
          size="medium"
          inverted
          content="Getting Data "
          style={{ marginTop: "50px" }}
        />
      </Dimmer>
    );
  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <div>
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
          return <EditSubtopic subtopic={list} Section_ID={props.item.ID} />;
        })}
        <Header as="h5">Add new Subtopic</Header>
        <Button
          circular
          icon="plus"
          onClick={() => Addtopic()}
          style={{ margin: "5px 0px" }}
        />

        {subtopic.map((item, index) => {
          return <Subtopic id={props.item.ID} />;
        })}
        <Button.Group floated="right" style={{ margin: "10px 0px" }}>
          <Button color="green" type="submit" style={{ marginRight: "10px" }}>
            Save
          </Button>
          <Button
            onClick={() => (window.location.pathname = "/trainings")}
            color="red"
          >
            Exit
          </Button>
        </Button.Group>
      </Form>
    </div>
  );
};

export default SessionForm;
