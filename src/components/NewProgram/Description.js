import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Header,
  Form,
  Icon,
  Input,
  TextArea,
  Button,
  Segment,
  Select,
  Step,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AddSession from "./AddSession";
import { useMutation } from "@apollo/react-hooks";
import { ADD_TRAINING } from "../../graphql/mutations";
import PreviewCard from "./PreviewCard";

var randomstring = require("randomstring");

const Description = () => {
  const [addTraining] = useMutation(ADD_TRAINING);
  const options = [
    { key: "c", text: "Code", value: "Code" },
    { key: "m", text: "Management", value: "Management" },
    { key: "d", text: "Design", value: "Design" },
    { key: "a", text: "Creative", value: "Creative" },
  ];
  const [id, setId] = useState();
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [Duration, setDuration] = useState("");
  const [Date, setDate] = useState();
  const [submit, isSubmitted] = useState(false);

  useEffect(() => {
    let ID = randomstring.generate({ length: 5, charset: "numeric" });
    setId(ID);
  }, []);

  function handleSubmit() {
    isSubmitted(true);
    let variables = {
      Description: Description,
      Name: Name,
      Duration: Duration + "HRS",
      Categories: Category,
      Date: Date,
      ID: id,
    };
    console.log(variables);
    addTraining({ variables });
  }

  return (
    <div style={{ margin: "70px" }}>
      <Grid>
        <Grid.Column width={8}>
          <Header as="h2">Course Description</Header>

          <Form onSubmit={handleSubmit}>
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="Name"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
            <Form.Field
              control={Select}
              label="Category"
              options={options}
              placeholder="Category"
              onChange={(e, { value }) => setCategory(value)}
            />

            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Description"
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
            />
            <Form.Group widths="equal">
              <Form.Input
                placeholder="Duration in Hours"
                label="Duration"
                onChange={(event) => setDuration(event.target.value)}
              />

              <Form.Input
                placeholder="Date"
                label="Date of Training"
                type="date"
                onChange={(event) => setDate(event.target.value)}
              />
            </Form.Group>
            {submit ? (
              <Button type="submit" width={4} disabled>
                Save
              </Button>
            ) : (
              <Button type="submit" width={4}>
                Save
              </Button>
            )}
          </Form>
        </Grid.Column>
        <Grid.Column width={8}>
          <AddSession id={id} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Description;
