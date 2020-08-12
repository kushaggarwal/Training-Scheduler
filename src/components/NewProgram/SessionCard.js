import React from "react";

const SessionCard = (props) => {
  return (
    <div
      style={{ height: "200px", margin: "20px", borderLeft: "1px solid grey " }}
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
            {props.data.Subtopics.topics.map((list, index) => {
              return (
                <li
                  style={{
                    fontFamily: "Avenir",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "25px",
                    color: "grey",
                  }}
                >
                  {list}
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
