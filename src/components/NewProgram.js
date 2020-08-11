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
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Description from "./NewProgram/Description";

const AddProgram = () => {
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
          Add New Training
        </Header>
      </div>

      <Description />
    </div>
  );
};

export default AddProgram;
