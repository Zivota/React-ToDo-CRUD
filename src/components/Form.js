import React from "react";
import "./Form.css";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputHolder = (e) => {
    setInputText(e.target.value);
  };

  const submitHolder = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          title: inputText,
          completed: false,
          id: Math.random(),
        },
      ]);
      setInputText("");
    }
  };

  return (
    <form onSubmit={submitHolder}>
      <input
        className="formInput"
        onChange={inputHolder}
        value={inputText}
        type="text"
        placeholder="Enter todo..."
      />
      <button className="formBtn" type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
