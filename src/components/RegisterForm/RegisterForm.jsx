import { useState } from "react";
import { fields } from "./fields";
import { generate } from "shortid";
import { useDispatch } from "react-redux";

import authOperations from "../../redux/auth/auth-operations";

import styles from "./RegisterForm.module.css";
import { useRef } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const nameInputIdRef = useRef(generate());
  const emailInputIdRef = useRef(generate());
  const passwordInputIdRef = useRef(generate());

  const handleChangeName = ({ target }) => {
    const { value } = target;
    setName(value);
  };

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
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <div className={styles.FormContainer}>
        <div className={styles.Name}>
          <label className={styles.Label} htmlFor={nameInputIdRef.current}>
            Name
            <input
              {...fields.name}
              className={styles.Input}
              required
              value={name}
              onChange={handleChangeName}
              id={nameInputIdRef.current}
            />
          </label>
        </div>
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
          Sign up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
