import React, { useEffect, useState } from "react";
import { Loader, Dimmer, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TrainingCard from "./Trainings/TrainingCard";
import NavBar from "./Trainings/NavBar";
import TitleBar from "./Trainings/TitleBar";
import { GET_ENROLLED } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const Trainings = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var currentUser = localStorage.getItem("userObject");
    setUser(JSON.parse(currentUser));
    setLoading(false);
  }, []);

  if (loading)
    return (
      <Dimmer active inverted>
        <Loader size="massive" inverted content="Loading" />
      </Dimmer>
    );

  return (
    <div>
      <NavBar UserName={user["UserName"]} />
      <TitleBar user={user} />
    </div>
  );
};

export default Trainings;
