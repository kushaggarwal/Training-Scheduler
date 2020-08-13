import React, { useState, useEffect, Rating } from "react";
import {
  Header,
  Icon,
  Divider,
  Dimmer,
  Loader,
  Grid,
  Button,
  Dropdown,
  Checkbox,
  Container,
  Card,
  Message,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ParticipatedPrograms from "./ParticipatedPrograms";
import AllPrograms from "./AllPrograms";
import AdminPrograms from "./AdminPrograms";
import { useQuery } from "@apollo/react-hooks";
import { GET_ENROLLED } from "../../graphql/queries";
import "./Trainings.css";

const TitleBar = (props) => {
  const id = props.user["ID"];
  const { data, loading, error } = useQuery(GET_ENROLLED, {
    variables: { ID: id },
  });

  const [enroll, toggleEnrolled] = useState(false);

  function logout() {
    localStorage.clear();
    window.location.pathname = "/";
  }

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
      <div
        style={{
          padding: "60px 0px",
          backgroundColor: "#253c78",
        }}
      >
        {enroll ? (
          <Header size="huge" textAlign="center" inverted>
            <Icon name="calendar" size="small" />
            Participated Programs
          </Header>
        ) : (
          <Header size="huge" textAlign="center" inverted>
            <Icon name="calendar" size="small" />
            Upcoming Programs
          </Header>
        )}
      </div>

      {props.user["IsAdmin"] ? (
        <Button.Group style={{ margin: "10px 80px" }}>
          <Button
            color="green"
            onClick={() => (window.location.pathname = "/add")}
          >
            Add New Program
          </Button>
          <Button color="red" onClick={() => logout()}>
            Logout
          </Button>
        </Button.Group>
      ) : (
        <div>
          <Button.Group style={{ margin: "10px 80px" }}>
            {" "}
            <Checkbox
              toggle
              label="Participated"
              checked={enroll}
              style={{ marginTop: "5px", marginRight: "5px" }}
              onChange={(event, { checked }) => {
                toggleEnrolled(checked);
              }}
            />
            <Button color="red" onClick={() => logout()}>
              Logout
            </Button>
          </Button.Group>
        </div>
      )}

      {props.user["IsAdmin"] ? (
        <AdminPrograms user={props.user} />
      ) : enroll ? (
        <ParticipatedPrograms
          enrolled={data["Users_by_pk"]["enrolled"]}
          user={props.user}
        />
      ) : (
        <AllPrograms
          enrolled={data["Users_by_pk"]["enrolled"]}
          user={props.user}
        />
      )}
    </div>
  );
};

export default TitleBar;
