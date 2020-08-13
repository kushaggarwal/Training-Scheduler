import React, { useEffect, useState } from "react";
import {
  Header,
  Icon,
  Form,
  TextArea,
  Select,
  Input,
  Button,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { GET_TRAINING_BY_ID } from "../../graphql/queries";
import { UPDATE_TRAINING_BY_ID } from "../../graphql/mutations.js";
import { useMutation, useQuery } from "@apollo/react-hooks";

const EditDescription = (props) => {
  const [id, setId] = useState();
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [Duration, setDuration] = useState("");
  const [Date, setDate] = useState();
  const [updateTraining] = useMutation(UPDATE_TRAINING_BY_ID);

  const { data, loading, error } = useQuery(GET_TRAINING_BY_ID, {
    variables: { ID: props.id },
  });

  useEffect(() => {
    if (!loading && data) {
      setName(data.Training_Programs_by_pk.Name);
      setCategory(data.Training_Programs_by_pk.Categories);
      setDescription(data.Training_Programs_by_pk.Description);
      setDuration(data.Training_Programs_by_pk.Duration);
      setDate(data.Training_Programs_by_pk.Date);
    }
  }, [data]);
  const options = [
    { key: "c", text: "Code", value: "Code" },
    { key: "m", text: "Management", value: "Management" },
    { key: "d", text: "Design", value: "Design" },
    { key: "a", text: "Creative", value: "Creative" },
  ];

  function handleSubmit() {
    const variables = {
      Name: Name,
      Categories: Category,
      Description: Description,
      Duration: Duration,
      Date: Date,
      ID: props.id,
    };
    updateTraining({ variables });
  }

  if (loading)
    return (
      <Dimmer active inverted>
        <Loader
          style={{ marginTop: "10px" }}
          size="small"
          inverted
          content="Loading"
        />
      </Dimmer>
    );

  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <div>
        <Header
          style={{
            fontFamily: "Avenir",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "25px",
            margin: "20px",
            color: "#2B59C3",
          }}
        >
          <Icon name="pencil" />
          Edit Training Description
        </Header>
        <Form style={{ margin: "40px" }} onSubmit={handleSubmit}>
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="Name"
            placeholder="Name"
            value={Name}
            onChange={(event) => setName(event.target.value)}
          />
          <Form.Field
            control={Select}
            label="Category"
            options={options}
            placeholder="Category"
            value={Category}
            onChange={(e, { value }) => setCategory(value)}
          />

          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Description"
            placeholder="Description"
            value={Description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <Form.Group widths="equal">
            <Form.Input
              placeholder="Duration in Hours"
              label="Duration"
              value={Duration}
              onChange={(event) => setDuration(event.target.value)}
            />

            <Form.Input
              placeholder="Date"
              label="Date of Training"
              type="date"
              value={Date}
              onChange={(event) => setDate(event.target.value)}
            />
          </Form.Group>

          <Button
            floated="right"
            onClick={() => (window.location.pathname = "/trainings")}
            color="red"
            width={4}
            style={{ margin: "10px 10px" }}
          >
            Exit
          </Button>
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
  );
};

export default EditDescription;
