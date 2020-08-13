import React, { useState } from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useMutation } from "@apollo/react-hooks";
import {
  ADD_SUBTOPIC,
  UPDATE_SUBTOPICS_BY_ID,
  DELETE_SUBTOPIC_BY_ID,
} from "../../graphql/mutations";

const Subtopic = (props) => {
  const [addSubtopic] = useMutation(ADD_SUBTOPIC);
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);

  function handleSubmit() {
    const variables = {
      Section_ID: props.id,
      Title: value,
    };
    addSubtopic({ variables });
    setDisable(true);
  }
  return (
    <Grid>
      <Grid.Column width={12}>
        <Form>
          <Form.Input
            placeholder="Subtopic"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Form>
      </Grid.Column>
      <Grid.Column width={4}>
        {disable ? (
          <Button type="submit" disabled>
            Add
          </Button>
        ) : (
          <Button type="submit" onClick={() => handleSubmit()} color="teal">
            Add
          </Button>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default Subtopic;
