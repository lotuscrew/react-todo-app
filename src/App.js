import "./App.css";
import { useState } from "react";
import { Button, Toolbar, Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddTodoForm from "./components/AddTodoForm";
import List from "./components/List";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: "white !important",
  },
}));

function App() {
  const classes = useStyles();
  const [openToDo, setOpenToDo] = useState(false);
  const [list, setList] = useState(["first case", "second case"]);

  const handleToggleAddItem = () => {
    setOpenToDo(!openToDo);
  };

  const addNewItem = (item) => {
    setList([...list, item]);
    setOpenToDo(false);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            To Do App
          </Typography>
          <Button color="inherit" onClick={handleToggleAddItem}>
            Add Item
          </Button>
        </Toolbar>
      </AppBar>
      <br />
      <AddTodoForm
        handleClose={handleToggleAddItem}
        openToDo={openToDo}
        addNewItem={addNewItem}
      />
      <List list={list} />
    </div>
  );
}

export default App;
