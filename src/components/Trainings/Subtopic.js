import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useMutation } from "@apollo/react-hooks";
import { ADD_SUBTOPIC } from "../../graphql/mutations";

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
    <Form onSubmit={handleSubmit}>
      <Form.Input
        placeholder="Subtopic"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {disable ? (
        <Button type="submit" disabled>
          Add
        </Button>
      ) : (
        <Button type="submit">Add</Button>
      )}
    </Form>
  );
};

export default Subtopic;
