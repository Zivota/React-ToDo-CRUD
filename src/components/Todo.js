import React from "react";
import "./Todo.css";

const Todo = ({ title, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <li className="todo">
      <h3 className={`${todo.completed ? "completed" : ""}`}>{title}</h3>
      <div>
        <button onClick={completeHandler} className="todoBtn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="todoBtn">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default Todo;
