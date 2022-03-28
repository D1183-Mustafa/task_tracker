import React, { useState } from "react";
import AddTask from "../addtask/AddTask";
import Tasks from "../tasks/Tasks";
import Buttons from "./Buttons";
import "./Header.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({ task: "", date: "", formArray: [] });
  // console.log(form);
  console.log(form.formArray);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormArray = (e) => {
    if (form.task !== "" || form.date !== "") {
      form.formArray.push({ task: form.task, date: form.date });
      setForm({ ...form, task: "", date: "" });
    }

    e.preventDefault();
  };
  const handleBtn = (e) => {
    if (isVisible === false) {
      setIsVisible(!isVisible);
      document.getElementById("btn").innerText = "Close Add Task Bar";
    } else {
      setIsVisible(!isVisible);
      document.getElementById("btn").innerText = "Show Add Task Bar";
    }

    console.log(isVisible);
  };
  return (
    <div className="container">
      <Buttons handleBtn={handleBtn} />
      {isVisible && (
        <AddTask
          handleForm={handleForm}
          handleFormArray={handleFormArray}
          form={form}
        />
      )}
      <Tasks form={form} />
    </div>
  );
}

export default Header;
