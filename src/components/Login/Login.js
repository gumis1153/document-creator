import React from "react";
import styles from "./login.module.scss";

const Login = ({ login, password, loginFn }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    // loginFn(e.name.login);
  };

  return (
    <div className={styles.container}>
      {/* <img src="https://media.graphcms.com/zPewWKLSwumhoskU9dlW" alt="Logo Bramgaz" /> */}
      <h3>Logownie</h3>
      <form onSubmit={handleSubmit}>
        <label>Login</label>
        <input
          required
          autoComplete="off"
          type="text"
          name="login"
          placeholder="Wpisz login"
        />
        <label>Hasło</label>
        <input
          required
          autoComplete="off"
          type="password"
          name="login"
          placeholder="Wpisz hasło"
        />
        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
};

export default Login;
