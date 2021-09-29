import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { date } from "yup/lib/locale";

function FormikContainer() {
   const dropdownOptions = [
      { key: "Select Options", value: "" },
      { key: "Options 1", value: "Options 1 is value" },
      { key: "Options 2", value: "Options 2 is value" },
      { key: "Options 3", value: "Options 3 is value" },
   ];

   const raadioButton = [
      { key: "Options 1", value: "Options 1 is value" },
      { key: "Options 2", value: "Options 2 is value" },
      { key: "Options 3", value: "Options 3 is value" },
   ];
   const checkboxButton = [
      { key: "check Options 1", value: "Check Options 1" },
      { key: "check Options 2", value: "Check Options 2" },
      { key: "check Options 3", value: "Check Options 3" },
   ];

   const initialValue = {
      email: "",
      address: "",
      selectOptions: "",
      radioButtons: "",
      checkboxButtons: [],
      birthdate: "",
   };

   const validationSchema = Yup.object().shape({
      email: Yup.string().required("Required."),
      address: Yup.string().required("Required"),
      selectOptions: Yup.string().required("Required"),
      radioButtons: Yup.string().required("Required"),
      checkboxButtons: Yup.array().required("Required"),
      birthdate: Yup.date().required("Required."),
   });

   const onSubmit = (values) => {
      console.log(values);
   };

   return (
      <div>
         <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
         >
            {(formik) => (
               <Form>
                  <FormikControl
                     control="input"
                     type="text"
                     name="email"
                     id="email"
                     label="Email"
                  />
                  <FormikControl
                     control="textarea"
                     as="textarea"
                     name="address"
                     id="address"
                     label="Address"
                  />
                  <FormikControl
                     control="select"
                     name="selectOptions"
                     id="selectOptions"
                     label="Select Your Favourite Options   "
                     options={dropdownOptions}
                  />
                  <FormikControl
                     control="radio"
                     name="radioButtons"
                     options={raadioButton}
                     label="Radio Button"
                  />
                  <FormikControl
                     control="checkbox"
                     name="checkboxButtons"
                     options={checkboxButton}
                     label="Check Box "
                  />
                  <FormikControl
                     control="date"
                     name="birthdate"
                     label="Select BirthDate"
                  />
                  <button type="submit">Submit</button>
               </Form>
            )}
         </Formik>
      </div>
   );
}

export default FormikContainer;
