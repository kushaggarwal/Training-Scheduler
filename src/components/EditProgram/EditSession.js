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
import SessionForm from "./SessionForm";
import { useQuery } from "@apollo/react-hooks";
import { GET_SECTION_BY_ID } from "../../graphql/queries";

const EditSession = (props) => {
  const { data, loading, error } = useQuery(GET_SECTION_BY_ID, {
    variables: { Training_ID: props.id },
  });
  console.log(data);

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
            marginBottom: "50px",
          }}
        >
          <Icon name="pencil" />
          Edit Session
        </Header>
        {data.Section_List.map((item, index) => {
          return <SessionForm item={item} />;
        })}
      </div>
    </div>
  );
};

export default EditSession;
