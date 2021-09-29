import React from "react";
import { Field, ErrorMessage } from "formik";

function Textarea(props) {
   const { name, label, ...rest } = props;
   return (
      <div>
         <label htmlFor={name}>{label}</label>
         <Field name={name} id={name} {...rest} />
         <ErrorMessage name={name} component="div" />
      </div>
   );
}

export default Textarea;
