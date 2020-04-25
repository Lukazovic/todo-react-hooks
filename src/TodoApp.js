import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Learn NodeJS", completed: true },
    { id: 2, task: "Learn ReactJS", completed: false },
    { id: 3, task: "Get a job", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa ",
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <TodoList todos={todos} />
      </Paper>
    </div>
  );
}
