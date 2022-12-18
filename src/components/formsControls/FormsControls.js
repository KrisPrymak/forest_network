import React from "react";
import s from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? s.errorStyle : ''}>
            <textarea {...input} {...props} className={s.textarea}/>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? s.errorStyle : ''}>
            <input {...input} {...props} className={s.textarea}/>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}