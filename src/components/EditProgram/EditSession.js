import React, { useState, useEffect } from "react";
import {
  Header,
  Icon,
  Form,
  Input,
  TextArea,
  Button,
  Divider,
  Dimmer,
  Loader,
  Grid,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import SessionForm from "./SessionForm";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_SECTION_BY_ID } from "../../graphql/queries";
import { DELETE_SECTION_BY_ID } from "../../graphql/mutations";

const EditSession = (props) => {
  const { data, loading, error } = useQuery(GET_SECTION_BY_ID, {
    variables: { Training_ID: props.id },
  });
  const [deleteSectionByID] = useMutation(DELETE_SECTION_BY_ID);

  const [sectionList, setSectionList] = useState([]);

  useEffect(() => {
    if (!loading) {
      setSectionList(data.Section_List);
    }
  }, [loading]);

  function deleteSession(ID) {
    const variables = {
      ID: ID,
    };
    deleteSectionByID({ variables });
    console.log(sectionList);
    var deletedList = sectionList.filter((item) => item.ID !== ID);
    setSectionList(deletedList);
  }

  if (loading)
    return (
      <Dimmer active inverted>
        <Loader
          style={{ marginTop: "10px" }}
          size="small"
          inverted
          content="Loading Sessions"
        />
      </Dimmer>
    );

  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <div>
        {sectionList.map((item, index) => {
          return (
            <div>
              <Grid>
                <Grid.Column width={10}>
                  <Header
                    style={{
                      fontFamily: "Avenir",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "25px",
                      margin: "20px",
                      color: "#2B59C3",
                      marginBottom: "50px",
                    }}
                  >
                    <Icon name="pencil" />
                    Edit Session
                  </Header>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Icon
                    name="close"
                    color="red"
                    size="large"
                    style={{ marginTop: "25px" }}
                    onClick={() => deleteSession(item.ID)}
                  />
                </Grid.Column>
              </Grid>

              <SessionForm item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditSession;
