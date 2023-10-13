import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "../../redux/api/user/userSlice";
import { BsX } from "react-icons/bs";
import styles from "../../styles/User.module.css";

export const UserLoginForm = ({ closeForm, toggleCurrentFormType }) => {
  const initialValues = {
    password: "",
    email: "",
  };

  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmpty = Object.values(values).some((item) => !item);
    if (isEmpty) return;
    dispatch(logInUser(values));
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <BsX />
      </div>
      <div className={styles.title}>Log In</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="email"
            name="email"
            placeholder="Yor email"
            value={values.email}
            autoComplete="off"
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <input
            type="password"
            name="password"
            placeholder="Yor password"
            value={values.password}
            autoComplete="off"
            required
            onChange={handleChange}
          />
        </div>
        <div
          className={styles.link}
          onClick={() => toggleCurrentFormType("signup")}
        >
          Create an account
        </div>
        <button className={styles.submit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
