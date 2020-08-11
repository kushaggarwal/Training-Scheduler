import React from "react";
import { Grid, Item, Image, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const NavBar = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Grid columns="equal">
        <Grid.Column width={13}>
          <Item.Group>
            <Item style={{ marginLeft: "20px" }}>
              <Item.Image
                size="tiny"
                src="https://img.icons8.com/plasticine/100/000000/training.png"
              />
              <Item.Content verticalAlign="middle">
                <Item.Header
                  as="a"
                  style={{ color: "white", fontSize: "18pt" }}
                >
                  Training Programs
                </Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>

        <Grid.Column width={3}>
          <Header
            as="h3"
            style={{
              color: "white",
              marginTop: "20px",
            }}
          >
            <Image
              circular
              src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
            />{" "}
            Hello, {props.UserName}
          </Header>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default NavBar;
