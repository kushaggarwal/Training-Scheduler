import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_SUBTOPICS_BY_ID } from "../../graphql/mutations";

const Subtopic = (props) => {
  const [updateSubtopic] = useMutation(UPDATE_SUBTOPICS_BY_ID);
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
    <div>
      <Form.Input
        placeholder="Subtopic"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      {disable ? (
        <Button type="submit" disabled>
          Add
        </Button>
      ) : (
        <Button type="submit" onClick={() => handleSubmit()}>
          Add
        </Button>
      )}
    </div>
  );
};

export default Subtopic;
