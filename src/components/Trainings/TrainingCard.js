import React from "react";
import {
  Card,
  Icon,
  Grid,
  Divider,
  Button,
  Rating,
  Popup,
  Modal,
  Header,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import SessionList from "../NewProgram/SessionList";
import { MARK_ENROLLED } from "../../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";

const TrainingCard = (props) => {
  const [markEnrolled] = useMutation(MARK_ENROLLED);
  const [open, setOpen] = React.useState(false);

  const icons = {
    Code: "https://img.icons8.com/color/60/000000/code.png",
    Management: "https://img.icons8.com/fluent/60/000000/time-management.png",
    Design: "https://img.icons8.com/fluent/60/000000/design.png",
    Creative: "https://img.icons8.com/fluent/60/000000/innovation.png",
  };

  const months = [
    "any",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  var date = props.prog.Date.split("-");
  var day = date[2];
  var year = date[0];
  var month = months[parseInt(date[1])];

  function OnParticipate(id) {
    let array = props.enrolled;
    array.push(id);
    const variables = {
      ID: props.user["ID"],
      enrolled: {
        id: array,
      },
    };
    var returnedData = markEnrolled({ variables });
    returnedData.then(() => {
      window.location.pathname = "/trainings";
    });
  }

  return (
    <div>
      <Popup
        position="right center"
        trigger={
          <div className="card">
            <div className="cardHeader">
              {props.isAdmin ? (
                <Icon
                  className="cardSubHeader"
                  style={{ marginLeft: "300px", marginTop: "10px" }}
                  name="close"
                  inverted
                  size="large"
                  onClick={() => props.deleteTraining(props.prog.ID)}
                />
              ) : null}

              <div className="cardTitle">{props.prog.Name}</div>
              <p className="cardSubHeader">{props.prog.Categories}</p>
              <div
                className="ui star rating newstar"
                role="radiogroup"
                tabindex="-1"
              >
                <i
                  tabindex="0"
                  aria-checked="false"
                  aria-posinset="1"
                  aria-setsize="4"
                  className="active icon"
                  role="radio"
                ></i>
                <i
                  tabindex="0"
                  aria-checked="false"
                  aria-posinset="2"
                  aria-setsize="4"
                  className="active icon"
                  role="radio"
                ></i>
                <i
                  tabindex="0"
                  aria-checked="true"
                  aria-posinset="3"
                  aria-setsize="4"
                  className="active icon"
                  role="radio"
                ></i>
                <i
                  tabindex="0"
                  aria-checked="false"
                  aria-posinset="4"
                  aria-setsize="4"
                  className="icon"
                  role="radio"
                ></i>
              </div>
            </div>
            <div className="cardContentHeader">Duration</div>
            <div className="cardContent">{props.prog.Duration}</div>
            <div className="cardContentHeader" style={{ marginTop: "280px" }}>
              Date
            </div>
            <div className="cardContent" style={{ marginTop: "300px" }}>
              {day}
              {month}
            </div>
            <div
              className="cardContentHeader"
              style={{ marginTop: "260px", marginLeft: "220px" }}
            >
              <img src={icons[props.prog.Categories]} />
            </div>
            {props.isAdmin ? (
              <div style={{ margin: "20px" }}>
                <Button.Group floated="right">
                  <Modal
                    closeIcon
                    centered={false}
                    open={open}
                    size="tiny"
                    trigger={
                      <Button style={{ marginTop: "340px", zIndex: "1" }}>
                        View Details
                      </Button>
                    }
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                  >
                    <Header
                      style={{ backgroundColor: "#0d47a1", color: "white" }}
                      as="h2"
                      inverted
                      content="Training Details"
                      textAlign="center"
                    />
                    <Modal.Content>
                      <div style={{ marginLeft: "0 auto" }}>
                        <SessionList id={props.prog.ID} />
                      </div>
                    </Modal.Content>
                  </Modal>

                  <Button
                    icon
                    style={{
                      marginTop: "340px",
                      zIndex: "1",
                      marginLeft: "10px",
                    }}
                  >
                    <Icon
                      name="pencil"
                      onClick={() => {
                        window.location.pathname = "/" + props.prog.ID;
                      }}
                    />
                  </Button>
                </Button.Group>
              </div>
            ) : props.isEnrolled ? (
              <div>
                <Button
                  floated="right"
                  style={{
                    marginTop: "380px",
                    zIndex: "1",
                    marginRight: "10px",
                  }}
                >
                  View Details
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  floated="right"
                  style={{
                    marginTop: "380px",
                    zIndex: "1",
                    marginRight: "10px",
                  }}
                  onClick={() => OnParticipate(props.prog.ID)}
                >
                  Participate
                </Button>
              </div>
            )}
          </div>
        }
      >
        <Popup.Header>Description</Popup.Header>
        <Popup.Content>{props.prog.Description}</Popup.Content>
      </Popup>

      {/* <div
        style={{
          border: "0.25px solid lightgrey",
          borderRadius: "10px",
          width: "350px",
          margin: "20px 40px",
          backgroundColor: "white",
        }}
      >
        <div style={{ margin: "20px" }}>
          <Grid columns={2}>
            <Grid.Column>
              <h5 style={{ color: "grey" }}>{props.prog.Categories}</h5>
            </Grid.Column>
            <Grid.Column>
              <Rating icon="star" defaultRating={3} maxRating={4} />
            </Grid.Column>
          </Grid>

          <h2>{props.prog.Name}</h2>
          <p style={{ fontSize: "12pt" }}>{props.prog.Description}</p>
          <Grid columns="equal">
            <Grid.Column>
              <p style={{ fontSize: "8pt", textAlign: "center" }}>DATE</p>
              <h5
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {day} {month}
              </h5>
            </Grid.Column>
            <Grid.Column>
              <p style={{ fontSize: "8pt", textAlign: "center" }}>DURATION</p>
              <h5
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {props.prog.Duration}
              </h5>
            </Grid.Column>
            <Grid.Column>
              <p style={{ fontSize: "8pt", textAlign: "center" }}>
                CATEGORY{" "}
                <Icon
                  name="code"
                  size="big"
                  style={{ marginTop: "10px" }}
                ></Icon>
              </p>
            </Grid.Column>
          </Grid>
          {props.isAdmin ? (
            <div>
              <Button fluid color="red" style={{ marginTop: "20px" }}>
                View Details
              </Button>
              <Button fluid color="green" style={{ marginTop: "10px" }}>
                Edit
              </Button>
            </div>
          ) : props.isEnrolled ? (
            <div>
              <Button fluid color="red" style={{ marginTop: "20px" }}>
                View Details
              </Button>
            </div>
          ) : (
            <div>
              <Button
                fluid
                color="blue"
                style={{ marginTop: "20px" }}
                onClick={() => OnParticipate(props.prog.ID)}
              >
                Participate
              </Button>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default TrainingCard;
