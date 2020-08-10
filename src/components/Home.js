import React, { useState } from "react";
import { Button, Grid, Form, Checkbox, Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../graphql/mutations";

const Home = (props) => {
  //State and Variables
  const [close, setClosed] = useState(false);
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  //hooks
  const [addUser] = useMutation(ADD_USER);

  //Local function
  function handleSubmit() {
    const variables = {
      ID: id,
      UserName: userName,
      IsAdmin: isAdmin,
    };
    localStorage.setItem("userObject", JSON.stringify(variables));
    addUser({ variables });
  }

  return (
    <div style={{ backgroundColor: "#0d47a1" }}>
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <img
              height="740px"
              style={{ marginTop: "60px", marginLeft: "100px" }}
              src="/Images/download.png"
            />
          </Grid.Column>
          <Grid.Column style={{ backgroundColor: "#0d47a1" }}>
            <h1
              style={{
                fontSize: "40pt",
                textAlign: "center",
                paddingTop: "180px",
                color: "white",
              }}
            >
              Let's book a training<br></br> for you
              <div style={{ marginTop: "50px" }}>
                <Modal
                  onClose={() => setClosed(false)}
                  onOpen={() => setClosed(true)}
                  open={close}
                  trigger={
                    <Button size="huge" negative>
                      New User
                    </Button>
                  }
                >
                  <Modal.Header>Fill the Details</Modal.Header>
                  <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                      <Form.Field>
                        <label>User Name</label>
                        <input
                          onChange={(event) => setUserName(event.target.value)}
                          placeholder="Name"
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>User ID</label>
                        <input
                          onChange={(event) => setId(event.target.value)}
                          placeholder="ID"
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          checked={isAdmin}
                          onChange={(event, { checked }) => {
                            setIsAdmin(checked);
                          }}
                          label="Check if admin "
                        />
                      </Form.Field>
                      <Button type="submit">Submit</Button>
                    </Form>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color="black" onClick={() => setClosed(false)}>
                      Cancel
                    </Button>
                  </Modal.Actions>
                </Modal>
                <Button size="huge" content="Exisiting User" positive />
              </div>
            </h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
