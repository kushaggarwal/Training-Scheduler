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

  console.log(data["Users_by_pk"]["enrolled"]);

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
      <Container>
        {props.user["IsAdmin"] ? (
          <Button.Group style={{ margin: "0px 40px" }}>
            <Button color="orange">Add New Program</Button>
            <Button>Filter</Button>
            <Dropdown className="button icon" floating trigger={<></>}>
              <Dropdown.Menu>
                <Dropdown.Item text="Management" />
                <Dropdown.Item text="Creative" />
                <Dropdown.Item text="Coding" />
                <Dropdown.Item text="Designing" />
              </Dropdown.Menu>
            </Dropdown>
          </Button.Group>
        ) : (
          <div>
            <Checkbox
              toggle
              label="Participated"
              checked={enroll}
              onChange={(event, { checked }) => {
                toggleEnrolled(checked);
              }}
            />
            <Button.Group style={{ margin: "0px 40px" }}>
              <Button>Filter</Button>
              <Dropdown className="button icon" floating trigger={<></>}>
                <Dropdown.Menu>
                  <Dropdown.Item text="Management" />
                  <Dropdown.Item text="Creative" />
                  <Dropdown.Item text="Coding" />
                  <Dropdown.Item text="Designing" />
                </Dropdown.Menu>
              </Dropdown>
            </Button.Group>
          </div>
        )}
      </Container>
      {/* <Grid style={{ paddingTop: "50px", paddingLeft: " 60px" }}>
        <Grid.Column width={12}>
          {enroll ? (
            <Header size="huge">
              <Icon name="calendar" size="small" />
              Participated Programs
            </Header>
          ) : (
            <Header size="huge" textAlign="center">
              <Icon name="calendar" size="small" />
              Upcoming Programs
            </Header>
          )}
        </Grid.Column>
        <Grid.Column width={4}>
          {props.user["IsAdmin"] ? (
            <Button.Group style={{ margin: "0px 40px" }}>
              <Button color="orange">Add New Program</Button>
              <Button>Filter</Button>
              <Dropdown className="button icon" floating trigger={<></>}>
                <Dropdown.Menu>
                  <Dropdown.Item text="Management" />
                  <Dropdown.Item text="Creative" />
                  <Dropdown.Item text="Coding" />
                  <Dropdown.Item text="Designing" />
                </Dropdown.Menu>
              </Dropdown>
            </Button.Group>
          ) : (
            <div>
              <Checkbox
                toggle
                label="Participated"
                checked={enroll}
                onChange={(event, { checked }) => {
                  toggleEnrolled(checked);
                }}
              />
              <Button.Group style={{ margin: "0px 40px" }}>
                <Button>Filter</Button>
                <Dropdown className="button icon" floating trigger={<></>}>
                  <Dropdown.Menu>
                    <Dropdown.Item text="Management" />
                    <Dropdown.Item text="Creative" />
                    <Dropdown.Item text="Coding" />
                    <Dropdown.Item text="Designing" />
                  </Dropdown.Menu>
                </Dropdown>
              </Button.Group>
            </div>
          )}
        </Grid.Column>
      </Grid> */}

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
// return <TrainingCard prog={item} isAdmin={props.user["IsAdmin"]} key={index} />;
