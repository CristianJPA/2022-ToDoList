import React from "react";
import CheckBox from "./CheckBox";
import FormToDo from "./FormToDo";
import TaskList from "./TaskList";

const Container = () => {
  return (
    <div>
      Container !
      <FormToDo />
      <TaskList />
      <CheckBox />
    </div>
  );
};

export default Container;
