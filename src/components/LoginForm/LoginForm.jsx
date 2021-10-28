import { useState } from "react";
import { fields } from "./fields";
import { generate } from "shortid";
import { useDispatch } from "react-redux";

import authOperations from "../../redux/auth/auth-operations";
import styles from "./LoginForm.module.css";
import { useRef } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const emailInputIdRef = useRef(generate());
  const passwordInputIdRef = useRef(generate());

  const handleChangeEmail = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handleChangePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <div className={styles.FormContainer}>
        <div className={styles.Email}>
          <label className={styles.Label} htmlFor={emailInputIdRef.current}>
            Email
            <input
              {...fields.email}
              className={styles.Input}
              required
              value={email}
              onChange={handleChangeEmail}
              id={emailInputIdRef.current}
            />
          </label>
        </div>
        <div className={styles.Password}>
          <label className={styles.Label} htmlFor={passwordInputIdRef.current}>
            Password
            <input
              {...fields.password}
              className={styles.Input}
              required
              value={password}
              onChange={handleChangePassword}
              id={passwordInputIdRef.current}
            />
          </label>
        </div>
        <button type="submit" className={styles.NameBtn}>
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
