import React from "react";
import useToggleState from "./hooks/userToggleState";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function Todo({
  id,
  task,
  completed,
  removeTodo,
  editTodo,
  toggleCompletitionTodo,
}) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ heigth: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          editTodo={editTodo}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <CheckBox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleCompletitionTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton>
              <EditIcon aria-label="Edit" onClick={toggle} />
            </IconButton>
            <IconButton>
              <DeleteIcon aria-label="Delete" onClick={() => removeTodo(id)} />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
