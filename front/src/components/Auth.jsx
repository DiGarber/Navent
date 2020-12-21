import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

export default ({ history }) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, user) => {
    e.preventDefault();
    localStorage.clear();
    axios
      .post("/api/auth/register", user)
      .then((user) => {
        localStorage.setItem("user", JSON.stringify(user.data));
      })
      .then(() =>
        history.push("https://www.bumeran.com.ar/candidatos/curriculum")
      );
  };

  console.log(inputs);
  return (
    <div className="modalPre">
      <form onSubmit={(e) => handleSubmit(e, inputs)} type="submit">
        <label>NAME</label>
        <input onChange={handleChange} name="name" type="text" />
        <label>PASSWORD</label>
        <input onChange={handleChange} name="password" type="password" />
        <label>EMAIL</label>
        <input onChange={handleChange} name="email" type="email" />
        <button type="submit">CREATE USER</button>
      </form>
    </div>
  );
};
