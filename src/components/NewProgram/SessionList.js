import React from "react";
import { Segment, Header, Grid, List, Dimmer, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_SECTION_BY_ID } from "../../graphql/queries";
import SessionCard from "./SessionCard";

const SessionList = (props) => {
  const { data, loading, error } = useQuery(GET_SECTION_BY_ID, {
    variables: {
      Training_ID: parseInt(props.id),
    },
  });
  console.log(data);

  if (loading)
    return (
      <Dimmer active inverted>
        <Loader size="massive" inverted content="Loading" />
      </Dimmer>
    );
  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
  return (
    <div>
      {data.Section.map((item, index) => {
        return <SessionCard data={item} />;
      })}
    </div>
  );
};

export default SessionList;
