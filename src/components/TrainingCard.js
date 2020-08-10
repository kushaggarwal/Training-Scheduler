import React from "react";
import { Card, Icon, Grid, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const TrainingCard = (props) => {
  console.log(props.prog);
  const color = [
    "olive",
    "red",
    "orange",
    "yellow",
    "blue",
    "green",
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
    // <Grid.Column>
    //   <Grid>
    //     <Grid.Column width={5} color={color[props.prog.ID]}>
    //       <div
    //         style={{
    //           height: "150px",
    //           borderRadius: "5px",
    //         }}
    //       ></div>
    //     </Grid.Column>
    //     <Grid.Column width={11}>asbavs</Grid.Column>
    //   </Grid>
    // </Grid.Column>
    <Card color={color[props.prog.ID]}>
      <Grid>
        <Grid.Column width={6}>
          <div
            style={{
              height: "100px",
              width: "130px",
              textAlign: "center",
              marginTop: "80px",
            }}
          >
            <Icon name="code" size="huge" />
            {/* <h1>
              {day} <br></br> {month}
            </h1> */}
          </div>
        </Grid.Column>
        <Grid.Column width={10}>
          <div style={{ padding: "20px 0px" }}>
            <h3>Title</h3>
            <p>{props.prog.Name}</p>
            <h4>Description</h4>
            <p>{props.prog.Description}</p>
            <Grid>
              <Grid.Column width={8}>
                <h4>Duration</h4>
                <p>{props.prog.Duration}</p>
              </Grid.Column>
              <Grid.Column width={8}>
                <h4>Date</h4>
                <p>
                  {day} {month}
                </p>
              </Grid.Column>
            </Grid>
          </div>
        </Grid.Column>
      </Grid>
    </Card>
  );
};

export default TrainingCard;
