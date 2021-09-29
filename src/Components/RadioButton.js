import React from "react";
import { Field, ErrorMessage } from "formik";

function RadioButton(props) {
   const { options, label, name, ...rest } = props;
   return (
      <div className="form-control">
         <label>{label}</label>
         <Field name={name} {...rest}>
            {({ field }) => {
               {
                  /* console.log("field is", field, options); */
               }
               return options.map((option) => {
                  return (
                     <React.Fragment key={option.key}>
                        <input
                           type="radio"
                           id={option.value}
                           {...field}
                           value={option.value}
                           checked={field.value === option.value}
                        />
                        <label htmlFor={option.value}>{option.key}</label>
                     </React.Fragment>
                  );
               });
            }}
         </Field>
         <ErrorMessage name={name} component="div" />
      </div>
   );
}

export default RadioButton;
