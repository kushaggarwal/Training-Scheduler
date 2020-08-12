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
      <div style={{ margin: "60px 100px", border: "1px solid #b1b0b0" }}>
        <Grid>
          <Grid.Column
            width={2}
            style={{ backgroundColor: "#0d47a1" }}
          ></Grid.Column>
          <Grid.Column width={14}>
            {submit ? (
              <AddSession id={id} />
            ) : (
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
                Course Description
                <div style={{ margin: "20px" }}>
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

                    <Button
                      floated="right"
                      type="submit"
                      color="green"
                      width={4}
                      style={{ margin: "10px 0px" }}
                    >
                      Save
                    </Button>
                  </Form>
                </div>
              </div>
            )}
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Description;
