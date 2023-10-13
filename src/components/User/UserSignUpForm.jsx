import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/api/user/userSlice";
import { BsX } from "react-icons/bs";
import styles from "../../styles/User.module.css";

export const UserSignUpForm = ({ closeForm, toggleCurrentFormType }) => {
  const initialValues = {
    name: "",
    password: "",
    email: "",
    avatar: "",
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
    dispatch(createUser(values));
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <BsX />
      </div>
      <div className={styles.title}>Sign Up</div>
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
        <div className={styles.group}>
          <input
            type="text"
            name="name"
            placeholder="Yor name"
            value={values.name}
            autoComplete="off"
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <input
            type="avatar"
            name="avatar"
            placeholder="Yor avatar"
            value={values.avatar}
            autoComplete="off"
            required
            onChange={handleChange}
          />
        </div>
        <div
          className={styles.link}
          onClick={() => toggleCurrentFormType("login")}
        >
          I already have an account
        </div>
        <button className={styles.submit} type="submit">
          Create an account
        </button>
      </form>
    </div>
  );
};
