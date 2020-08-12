import React from "react";
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
  Tab,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import EditDescription from "./EditProgram/EditDescription";
import EditSession from "./EditProgram/EditSession";

const EditProgram = (props) => {
  console.log(props.match.params.id);

  const panes = [
    {
      menuItem: "Edit Description",
      render: () => (
        <Tab.Pane>
          <EditDescription id={props.match.params.id} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Edit Session",
      render: () => (
        <Tab.Pane>
          <EditSession id={props.match.params.id} />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <div>
      <div
        style={{
          padding: "60px 0px",
          backgroundColor: "#253c78",
        }}
      >
        <Header size="huge" textAlign="center" inverted>
          <Icon name="calendar" size="small" />
          Edit Training
        </Header>
      </div>
      <div style={{ margin: "70px" }}>
        <Tab
          menu={{ fluid: true, vertical: true }}
          menuPosition="left"
          panes={panes}
        />
        {/* <Tab menu={{ secondary: true, pointing: true }} panes={panes} /> */}
      </div>
    </div>
  );
};

export default EditProgram;
