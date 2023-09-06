import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSignUpForm } from "./UserSignUpForm";
import { UserLoginForm } from "./UserLoginForm";
import { toggleForm, toggleFormType } from "../../redux/api/user/userSlice";
import styles from "../../styles/User.module.css";

export const UserForm = () => {
  const { showForm, formType } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const closeForm = () => dispatch(toggleForm(false));
  const   toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm}></div>
      {formType === "signup" ? (
        <UserSignUpForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      ) : (
        <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm}/>
      )}
    </>
  ) : (
    <></>
  );
};
