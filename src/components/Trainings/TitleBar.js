import React, { useState, useEffect } from "react";
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
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TrainingCard from "./TrainingCard";
import ParticipatedPrograms from "./ParticipatedPrograms";
import AllPrograms from "./AllPrograms";
import { useQuery } from "@apollo/react-hooks";
import { GET_ENROLLED } from "../../graphql/queries";

const TitleBar = (props) => {
  const id = props.user["ID"];
  const { data, loading, error } = useQuery(GET_ENROLLED, {
    variables: { ID: id },
  });

  const [enroll, toggleEnrolled] = useState(false);
  const [enrolled, setEnrolled] = useState();

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
      <Grid style={{ paddingTop: "30px", paddingLeft: " 60px" }}>
        <Grid.Column width={8}>
          {enroll ? (
            <Header size="huge">
              <Icon name="calendar" size="small" />
              Participated Programs
            </Header>
          ) : (
            <Header size="huge">
              <Icon name="calendar" size="small" />
              Upcoming Programs
            </Header>
          )}
        </Grid.Column>
        <Grid.Column width={8}>
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
        </Grid.Column>
      </Grid>

      <Divider style={{ margin: "20px 30px" }}></Divider>
      <Grid style={{ marginTop: "30px", marginLeft: "40px" }} columns={2}>
        {enroll ? (
          <ParticipatedPrograms enrolled={enrolled} />
        ) : (
          <AllPrograms enrolled={enrolled} />
        )}
      </Grid>
    </div>
  );
};

export default TitleBar;
// return <TrainingCard prog={item} isAdmin={props.user["IsAdmin"]} key={index} />;
