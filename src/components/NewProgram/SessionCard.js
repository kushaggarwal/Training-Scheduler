import React from "react";

const SessionCard = (props) => {
  return (
    <div
      style={{ height: "200px", margin: "20px", borderLeft: "1px solid grey " }}
    >
      <div style={{ position: "absolute", left: "70px", textAlign: "left" }}>
        <p style={{ fontSize: "14pt", color: "grey" }}>
          {props.data.Time}
          <br></br>
          <p style={{ margin: "10px 0px", color: "black" }}>
            {props.data.Name}
          </p>
        </p>

        <p style={{ fontSize: "12pt" }}>
          <ul>
            {props.data.Subtopics.topics.map((list, index) => {
              return <li>{list}</li>;
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
          left: "27px",
        }}
      ></div>
    </div>
  );
};

export default SessionCard;
