import React from "react";
//@ts-ignore
import { Field, reduxForm } from "redux-form";
import { Input } from "../formsControls/FormsControls";
//@ts-ignore
import s from "./Login.module.css";
import {
  maxLengthCreator,
  required,
} from "../../utils/validator/validator.js";

type PropsType = {
  handleSubmit: () => void
  error: string
}

const LoginForm: React.FC<PropsType> = ({handleSubmit, error }) => {
  const maxLength30 = maxLengthCreator(30);
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {error && (
        <div className={s.commonError}>
          <img
            className={s.errorImg}
            src="https://cdn-icons-png.flaticon.com/512/6979/6979061.png"
            alt="icon"
          />
          {error}
        </div>
      )}
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
        type={"password"}
      />
      <div className={s.check}>
        <Field component={Input} type={"checkbox"} name={"rememberMe"} />
        <span>rememberMe</span>
      </div>
      <button className={s.button}>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
