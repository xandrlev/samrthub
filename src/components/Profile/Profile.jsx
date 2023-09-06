import React, { useEffect, useState } from "react";
import styles from "../../styles/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/api/user/userSlice";

export const Profile = () => {
  const initialValues = {
    name: "",
    password: "",
    email: "",
    avatar: "",
  };

  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmpty = Object.values(values).some((item) => !item);
    if (isEmpty) return;
    dispatch(updateUser(values));
  };

  return (
    <section className={styles.profile}>
      {!currentUser ? (
        <span>You need to lig in</span>
      ) : (
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
          <button className={styles.submit} type="submit">
            Update
          </button>
        </form>
      )}
    </section>
  );
};
