import React, { useState, useEffect } from "react";
import { Button, Grid, Form, Checkbox, Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../graphql/mutations";
var randomstring = require("randomstring");

const Home = (props) => {
  //State and Variables
  const [close, setClosed] = useState(false);
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState();

  //hooks
  const [addUser] = useMutation(ADD_USER);

  useEffect(() => {
    var currentUser = localStorage.getItem("userObject");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
      window.location.pathname = "/trainings";
    } else {
      let ID = randomstring.generate({ length: 5 });
      setId(ID);
    }
  }, []);

  //Local function
  function handleSubmit() {
    const variables = {
      ID: id,
      UserName: userName,
      IsAdmin: isAdmin,
      enrolled: {
        id: [],
      },
    };
    localStorage.setItem("userObject", JSON.stringify(variables));
    var userData = addUser({ variables });
    userData.then(() => {
      window.location.pathname = "/trainings";
    });
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
                    <Button size="huge" positive>
                      Get Started
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
                          value={userName}
                          placeholder="Name"
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>User ID</label>
                        <input disabled value={id} placeholder="ID" />
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
                      <Button type="submit" positive>
                        Submit
                      </Button>
                      <Button color="red" onClick={() => setClosed(false)}>
                        Cancel
                      </Button>
                    </Form>
                  </Modal.Content>
                </Modal>
              </div>
            </h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
