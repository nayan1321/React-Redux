import React from "react";
import { Field, ErrorMessage } from "formik";

function CheckBox(props) {
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
                           type="checkbox"
                           id={option.value}
                           {...field}
                           value={option.value}
                           checked={field.value.includes(option.value)}
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

export default CheckBox;
