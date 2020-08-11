import React, { useState } from "react";
import {
  Header,
  Button,
  Grid,
  Modal,
  Icon,
  Form,
  Segment,
  TextArea,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import SessionList from "./SessionList";
import { useMutation } from "@apollo/react-hooks";
import { ADD_PROGRAM_SECTION } from "../../graphql/mutations.js";

const AddSession = (props) => {
  const [open, setOpen] = React.useState(false);
  const [sessions, setSessions] = React.useState([]);
  const [subtopics, setSubtopics] = React.useState();
  const [Name, setName] = React.useState();
  const [Time, setTime] = React.useState();
  const [addProgramSection] = useMutation(ADD_PROGRAM_SECTION);

  function handleSubmit() {
    let values = subtopics.split("\n");
    console.log(values);
    let variables = {
      Name: Name,
      Time: Time,
      Training_ID: parseInt(props.id),
      Subtopics: {
        topics: values,
      },
    };
    setSessions([variables, ...sessions]);
    console.log(sessions);
    console.log(variables);
    addProgramSection({ variables });
  }

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <Header as="h2">Training Sessions</Header>
        </Grid.Column>
        <Grid.Column width={6}>
          <Modal
            closeIcon
            open={open}
            trigger={
              props.submit ? (
                <Button color="red">Add Session</Button>
              ) : (
                <Button color="red" disabled>
                  Add Session
                </Button>
              )
            }
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <Header icon="archive" content="Add new Sesssion" />

            <Modal.Content>
              <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                  <Form.Input
                    placeholder="Name"
                    label="Session Name"
                    onChange={(event) => setName(event.target.value)}
                  />
                  <Form.Input
                    placeholder="Time"
                    label="Starting Time"
                    type="time"
                    onChange={(event) => setTime(event.target.value)}
                  />
                </Form.Group>
                <Header as="h5">Subtopics</Header>
                <Form.Field
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  placeholder="Subtopics"
                  onChange={(event) => setSubtopics(event.target.value)}
                />
                <Button color="green" type="submit" Icon="tick">
                  Save
                </Button>
              </Form>
            </Modal.Content>
          </Modal>
        </Grid.Column>
      </Grid>
      {sessions ? (
        <Header as="h1" style={{ textAlign: "center", marginTop: "20px" }}>
          <SessionList id={parseInt(props.id)} />
        </Header>
      ) : (
        <Header as="h3" style={{ textAlign: "center", marginTop: "100px" }}>
          No sessions added
        </Header>
      )}
    </div>
  );
};

export default AddSession;
