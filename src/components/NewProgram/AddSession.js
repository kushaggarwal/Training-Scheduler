import React, { useState } from "react";
import {
  Header,
  Button,
  Grid,
  Modal,
  Icon,
  Form,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const AddSession = (props) => {
  const [open, setOpen] = React.useState(false);
  const [sessions, setSessions] = React.useState();
  const [subtopics, setSubtopics] = React.useState([]);
  const [count, setCount] = React.useState(1);

  function AddSubtopic() {
    setCount(count + 1);
    setSubtopics([count, ...subtopics]);
    console.log(subtopics);
  }

  function RemoveSubtopic() {
    setCount(count - 1);
    setSubtopics([count, ...subtopics]);
    console.log(subtopics);
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
              <Form>
                <Form.Group widths="equal">
                  <Form.Input placeholder="Name" label="Session Name" />
                  <Form.Input
                    placeholder="Time"
                    label="Starting Time"
                    type="time"
                  />
                </Form.Group>
                <Header as="h5">Subtopics</Header>
                <Button.Group style={{ margin: "10px 0px" }}>
                  <Button circular icon="add" onClick={() => AddSubtopic()} />
                  <Button
                    circular
                    icon="minus"
                    onClick={() => RemoveSubtopic()}
                  />
                </Button.Group>
                {subtopics.map((item, index) => {
                  return <Form.Input placeholder="Subtopic" />;
                })}
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => setOpen(false)}>
                <Icon name="remove" /> No
              </Button>
              <Button color="green" onClick={() => setOpen(false)}>
                <Icon name="checkmark" /> Yes
              </Button>
            </Modal.Actions>
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
