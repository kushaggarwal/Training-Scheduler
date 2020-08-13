import React, { useState, useEffect } from "react";
import { Form, Button, Icon, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useMutation } from "@apollo/react-hooks";
import {
  UPDATE_SUBTOPICS_BY_ID,
  DELETE_SUBTOPIC_BY_ID,
} from "../../graphql/mutations";

const Subtopic = (props) => {
  const [updateSubtopic] = useMutation(UPDATE_SUBTOPICS_BY_ID);
  const [deleteSubtopic] = useMutation(DELETE_SUBTOPIC_BY_ID);
  const [title, setTitle] = useState();
  const [disable, setDisable] = useState(false);
  const [ID, setID] = useState();

  useEffect(() => {
    setTitle(props.subtopic["Title"]);
    setID(props.subtopic.ID);
  }, []);

  function handleSubmit() {
    const variables = {
      ID: ID,
      Title: title,
    };
    console.log(variables);
    updateSubtopic({ variables });
  }

  return (
    <Grid>
      <Grid.Column width={12}>
        <Form.Input
          placeholder="Subtopic"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Grid.Column>
      <Grid.Column width={4}>
        <Button
          type="submit"
          onClick={() => handleSubmit()}
          style={{ margin: "10px 0px" }}
          color="teal"
        >
          Edit
        </Button>
      </Grid.Column>
    </Grid>
  );
};

export default Subtopic;
