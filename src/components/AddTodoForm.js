import React, { useState } from "react";
import { Modal, Paper, Button, Input } from "@material-ui/core";

const AddTodoForm = (props) => {
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!value) {
      setShowError(true);
    } else {
      props.addNewItem(value);
      setValue("");
    }
  };

  const handleChange = (e) => {
    if (showError) {
      setShowError(false);
    }
    setValue(e.target.value);
  };

  return (
    <Modal
      open={props.openToDo}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{ margin: "10%" }}
    >
      <Paper style={{ height: "300px" }}>
        <Input
          placeholder="Todo"
          inputProps={{
            "aria-label": "Description",
          }}
          value={value}
          onChange={handleChange}
          style={{
            width: "60%",
            margin: "16px 20%",
            height: "60px",
          }}
        />

        <br />
        <Button
          variant="contained"
          color="primary"
          style={{
            width: "10%",
            margin: "16px 45%",
            height: "40px",
          }}
          onClick={handleSubmit}
        >
          Add
        </Button>

        {showError && (
          <p
            style={{
              width: "100%",
              textAlign: "center",
              color: "red",
            }}
            className="error"
          >
            Error, must enter a value!
          </p>
        )}
      </Paper>
    </Modal>
  );
};
export default AddTodoForm;
