import React from "react";
import { Field, ErrorMessage } from "formik";

function Select(props) {
   //    console.log(props);
   const { options, name, label, ...rest } = props;
   return (
      <div className="form-control">
         <label htmlFor={name}>{label}</label>
         <Field as="select" name={name} id={name} {...rest}>
            {options.map((option) => {
               return (
                  <option key={option.value} value={option.value}>
                     {option.key}
                  </option>
               );
            })}
         </Field>
         <ErrorMessage name={name} component="div" />
      </div>
   );
}

export default Select;
