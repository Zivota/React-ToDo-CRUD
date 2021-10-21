import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const todoHolder = todos.map((todo) => {
    return (
      <Todo
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        key={todo.id}
        title={todo.title}
      />
    );
  });

  return (
    <ul style={{ width: "100%", background: "white" }} className="todoList">
      {todoHolder}
    </ul>
  );
};

export default TodoList;
