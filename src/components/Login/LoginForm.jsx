import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../formsControls/FormsControls";
import s from "./Login.module.css";
import {
  maxLengthCreator,
  required,
} from "./../../utils/validator/validator.js";

const LoginForm = (props) => {
  const maxLength30 = maxLengthCreator(30);
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        name={"email"}
        placeholder={"email"}
        validate={[required, maxLength30]}
      />
      <Field
        component={Input}
        name={"password"}
        placeholder={"password"}
        validate={[required, maxLength30]}
        type={'password'}
      />
      <div>
        <Field component={Input} type={"checkbox"} name={"rememberMe"} />{" "}
        remember me
      </div>
      <button className={s.button}>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
