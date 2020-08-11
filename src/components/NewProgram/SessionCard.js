import React from "react";

const SessionCard = (props) => {
  return (
    <div
      style={{ height: "200px", margin: "20px", borderLeft: "1px solid grey " }}
    >
      <div style={{ position: "absolute", left: "70px", textAlign: "left" }}>
        <p style={{ fontSize: "14pt", color: "grey" }}>
          12:30 PM<br></br>
          <p style={{ margin: "10px 0px", color: "black" }}>
            Understanding Basics of NodeJS
          </p>
        </p>

        <p style={{ fontSize: "12pt" }}>
          <ul>
            <li>Learn about Database</li>
            <li>Learn about Node</li>
            <li>BAsic of Node</li>
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
