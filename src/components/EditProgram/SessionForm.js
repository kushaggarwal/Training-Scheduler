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

const SessionForm = (props) => {
  const [subtopics, setSubtopics] = React.useState();
  const [Name, setName] = React.useState();
  const [Time, setTime] = React.useState();
  var subtopic = "";
  useEffect(() => {
    setName(props.item.Name);
    setTime(props.item.Time);
    setSubtopics(props.item.Subtopics);
    // props.item.Subtopics.topics.map((topic,index)=>{

    // })
  }, []);
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
      <Form.Input placeholder="Subtopic" value="One /n" id="newform" />
      {/* <Form.Field
        id="form-textarea-control-opinion"
        control={TextArea}
        placeholder="Subtopics"
        value="eknkekb<br>cmekbmkelb"
        onChange={(event) => setSubtopics(event.target.value)}
      /> */}
      <Button.Group floated="right" style={{ margin: "10px 0px" }}>
        <Button
          color="green"
          type="submit"
          Icon="tick"
          style={{ marginRight: "10px" }}
        >
          Add Another
        </Button>

        <Button color="red" type="submit" Icon="tick">
          Save and Exit
        </Button>
      </Button.Group>
    </Form>
  );
};

export default SessionForm;
