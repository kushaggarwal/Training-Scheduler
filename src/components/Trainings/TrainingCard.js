import React from "react";
import { Card, Icon, Grid, Divider, Button, Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { MARK_ENROLLED } from "../../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";

const TrainingCard = (props) => {
  const [markEnrolled] = useMutation(MARK_ENROLLED);

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
    markEnrolled({ variables });
  }

  return (
    <div
      style={{
        border: "0.25px solid lightgrey",
        borderRadius: "10px",
        width: "350px",
        margin: "20px 40px",
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
              <Icon name="code" size="big" style={{ marginTop: "10px" }}></Icon>
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
    </div>
  );
};

export default TrainingCard;
