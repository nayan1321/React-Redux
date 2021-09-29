import React from "react";
import { Field, ErrorMessage } from "formik";

function Input(props) {
   const { label, name, ...rest } = props;
   return (
      <div>
         <label htmlFor={name}>{label}</label>
         <Field name={name} id={name} {...rest}></Field>
         <ErrorMessage name={name} component="div" />
      </div>
   );
}

export default Input;
