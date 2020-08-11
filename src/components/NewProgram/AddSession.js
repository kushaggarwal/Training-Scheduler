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
import { useMutation } from "@apollo/react-hooks";
import { ADD_PROGRAM_SECTION } from "../../graphql/mutations.js";

const AddSession = (props) => {
  const [open, setOpen] = React.useState(false);
  const [sessions, setSessions] = React.useState();
  const [subtopics, setSubtopics] = React.useState();
  const [Name, setName] = React.useState();
  const [Time, setTime] = React.useState();
  const [addProgramSection] = useMutation(ADD_PROGRAM_SECTION);
  // const [count, setCount] = React.useState(1);

  // function AddSubtopic() {
  //   setCount(count + 1);
  //   setSubtopics([count, ...subtopics]);
  //   console.log(count);
  // }

  // function RemoveSubtopic() {
  //   setCount(count - 1);
  //   subtopics.pop();
  //   setSubtopics(subtopics);
  //   console.log(count);
  // }

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
            trigger={<Button color="red">Add Session</Button>}
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
                {/* <Button.Group style={{ margin: "10px 0px" }}>
                  <Button circular icon="add" onClick={() => AddSubtopic()} />
                  <Button
                    circular
                    icon="minus"
                    onClick={() => RemoveSubtopic()}
                  />
                </Button.Group> */}
                {/* {subtopics.map((item, index) => {
                  return (
                    <div>
                      <Form.Input placeholder="Subtopic" />
                      <Button color="blue" style={{ marginBottom: "10px" }}>
                        Add
                      </Button>
                    </div>
                  );
                })} */}
                <Button color="green" type="submit" Icon="tick">
                  Save
                </Button>
              </Form>
            </Modal.Content>
          </Modal>
        </Grid.Column>
      </Grid>
      {sessions ? (
        <Header as="h1" style={{ textAlign: "center", marginTop: "100px" }}>
          Session Added
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
