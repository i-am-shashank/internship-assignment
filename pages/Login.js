import Router from "next/router";
import React, { useState } from "react";
import login from "./components/styles/login.module.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const users = [
    {
      name: "shashank mishra",
      email: "shashankmishra2275@gmail.com",
      pass: "test",
    },
    {
      name: "admin",
      email: "algoAdmin2275@gmail.com",
      pass: "test",
    },
  ];
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const payload = { name, email, pass };
    users.map((user) => {
      console.log(user);
      JSON.stringify(user) === JSON.stringify(payload) &&
        (payload.name === "admin"
          ? Router.push("/Admin_panel")
          : Router.push("/")) &&
        localStorage.setItem("login", true);
    });
    return <p>wrong details entered</p>; // console.log(payload);
  };
  return (
    <>
      <img className={login.image} src="/assets/login.svg" />
      <div className={login.container}>
        <form className={login.form} onSubmit={onSubmitHandler}>
          <input
            className={login.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            placeholder="
            👤 name"
          />
          <input
            className={login.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="✉️ email"
          />
          <input
            className={login.input}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="
            🔐 password"
            required
          />
          <button className={login.button} type="submit">
            login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
