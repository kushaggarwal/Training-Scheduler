import React from "react";
import { Card, Icon, Grid, Divider, Button, Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const TrainingCard = (props) => {
  console.log(props.prog);
  const color = [
    "#6435c9",
    "#6435c9",
    "#f2711c",
    "blue",
    "yellow",
    "orange",
    "teal",
    "violet",
    "purple",
    "pink",
    "brown",
  ];
  const months = [
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
  console.log(date);
  var day = date[2];
  var year = date[0];
  var month = months[parseInt(date[1])];
  return (
    <div
      style={{
        border: "0.25px solid lightgrey",
        borderRadius: "10px",
        width: "300px",
        margin: "20px 20px",
      }}
    >
      <div style={{ margin: "30px" }}>
        <Grid columns={2}>
          <Grid.Column>
            <h5 style={{ color: "grey" }}>CODING</h5>
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
        <Button fluid color="blue" style={{ marginTop: "20px" }}>
          Participate
        </Button>
      </div>
    </div>
  );
};

export default TrainingCard;
