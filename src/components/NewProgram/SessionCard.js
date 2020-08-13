import React from "react";
import { Dimmer, Loader, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_SUBTOPIC_BY_SECTION } from "../../graphql/queries";

const SessionCard = (props) => {
  const { data, loading, error } = useQuery(GET_SUBTOPIC_BY_SECTION, {
    variables: {
      Section_ID: props.data.ID,
    },
  });

  if (loading)
    return (
      <Dimmer active inverted>
        <Loader
          size="medium"
          inverted
          content="Loading"
          style={{ marginTop: "50px" }}
        />
      </Dimmer>
    );
  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
  return (
    <div
      style={{ height: "230px", margin: "20px", borderLeft: "1px solid grey " }}
    >
      <div style={{ position: "absolute", left: "70px", textAlign: "left" }}>
        <p
          style={{
            fontFamily: "Avenir",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "34px",
            color: "#253C78",
            textDecoration: "bold",
          }}
        >
          {props.data.Time}
          <br></br>
          <p
            style={{
              fontFamily: "Avenir",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "20px",
              color: "#253C78",
            }}
          >
            {props.data.Name}
          </p>
        </p>

        <p style={{ fontSize: "12pt" }}>
          <ul>
            {data.Subtopics.map((list, index) => {
              return (
                <li
                  style={{
                    fontFamily: "Avenir",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "25px",
                  }}
                >
                  {list["Title"]}
                </li>
              );
            })}
          </ul>
        </p>
      </div>
      <div
        style={{
          height: "15px",
          width: "15px",
          borderRadius: "10px",
          backgroundColor: "grey",
          position: "absolute",
          left: "33px",
          backgroundColor: "#253C78",
        }}
      ></div>
    </div>
  );
};

export default SessionCard;
