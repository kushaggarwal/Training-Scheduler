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
import Subtopic from "../Trainings/Subtopic";

const AddSession = (props) => {
  const [open, setOpen] = React.useState(false);
  const [subtopics, setSubtopics] = React.useState([0]);
  const [Name, setName] = React.useState();
  const [Time, setTime] = React.useState();
  const [count, setCount] = useState(0);
  const [addProgramSection] = useMutation(ADD_PROGRAM_SECTION);

  function Save() {
    let variables = {
      ID: props.id + Name,
      Name: Name,
      Time: Time,
      Training_ID: parseInt(props.id),
    };

    console.log(variables);
    var callback = addProgramSection({ variables });
    return callback;
  }

  function AddAnother() {
    Save();
    setName("");
    setSubtopics([]);
  }

  function SaveAndExit() {
    var callback = Save();
    callback.then(() => {
      window.location.pathname = "/trainings";
    });
  }

  function Addtopic() {
    setSubtopics([count + 1, ...subtopics]);
    console.log(subtopics);
  }

  return (
    <div
      style={{
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "30px",
        lineHeight: "50px",
        margin: "10px",
        color: "#565659",
      }}
    >
      Training Sessions
      <div style={{ margin: "20px" }}>
        <Form>
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
          <Button circular icon="plus" onClick={() => Addtopic()} />

          {subtopics.map((item, index) => {
            return <Subtopic id={props.id + Name} />;
          })}

          <Button.Group floated="right" style={{ margin: "10px 0px" }}>
            <Button
              color="green"
              type="submit"
              Icon="tick"
              style={{ marginRight: "10px" }}
              onClick={() => {
                AddAnother();
              }}
            >
              Add Another
            </Button>

            <Button
              color="red"
              type="submit"
              Icon="tick"
              onClick={() => SaveAndExit()}
            >
              Save and Exit
            </Button>
          </Button.Group>
        </Form>
      </div>
    </div>
  );
};

export default AddSession;
