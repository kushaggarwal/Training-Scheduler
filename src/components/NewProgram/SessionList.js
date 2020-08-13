import React from "react";
import { Segment, Header, Grid, List, Dimmer, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_SECTION_BY_ID } from "../../graphql/queries";

import SessionCard from "./SessionCard";

const SessionList = (props) => {
  const { data, loading, error } = useQuery(GET_SECTION_BY_ID, {
    variables: {
      Training_ID: parseInt(props.id),
    },
  });

  if (loading)
    return (
      <Dimmer active inverted>
        <Loader
          size="medium"
          inverted
          content="Loading"
          style={{ marginTop: "50px" }}
        />
      </Dimmer>
    );
  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
  return (
    <div>
      {data.Section_List.length ? (
        data.Section_List.map((item, index) => {
          return <SessionCard data={item} />;
        })
      ) : (
        <Header as="h3" textAlign="center">
          No session
        </Header>
      )}
    </div>
  );
};

export default SessionList;
