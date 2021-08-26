import React from "react";
import { Paper } from "@material-ui/core";

const List = (props) => {
  return (
    <>
      {props.list.map((item, id) => {
        return (
          <Paper
            style={{
              padding: "10px",
              width: "60%",
              margin: "1% auto",
              background: "lightgray",
            }}
          >
            {item}
          </Paper>
        );
      })}
    </>
  );
};

export default List;
