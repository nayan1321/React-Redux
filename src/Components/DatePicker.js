import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";

function DatePicker(props) {
   const { name, label, ...rest } = props;
   return (
      <div className="form-control">
         <label htmlFor="name">{label}</label>
         <Field name={name}>
            {({ field, form }) => {
               const { setFieldValue } = form;
               const { value } = field;
               return (
                  <DateView
                     id={name}
                     {...field}
                     {...rest}
                     selected={value}
                     onChange={(val) => setFieldValue(name, val)}
                  ></DateView>
               );
            }}
         </Field>
         <ErrorMessage name={name} component="div" />
      </div>
   );
}

export default DatePicker;
