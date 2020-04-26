import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Todo from "./Todo";

export default function TodoList({
  todos,
  removeTodo,
  editTodo,
  toggleCompletitionTodo,
}) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              removeTodo={removeTodo}
              editTodo={editTodo}
              toggleCompletitionTodo={toggleCompletitionTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
