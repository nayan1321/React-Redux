import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
   name: "nyn",
   email: "",
   channel: "",
};

const onSubmit = (values) => {
   console.log("Form data", values);
};

const validationSchema = Yup.object().shape({
   name: Yup.string()
      .min(3, "Minimum 3 Symbol Required.")
      .max(15, "Maximum 15 Symbol Required.")
      .required("Name must be Required."),
   email: Yup.string()
      .email("Must be a valid email")
      .required("Email Must be Required."),
   channel: Yup.string()
      .min(3, "Minimum 3 Symbol Required")
      .required("Channel Must be Required."),
});

const validate = (values) => {
   let errors = {};

   if (!values.name) {
      errors.name = "Required.";
   }
   if (!values.email) {
      errors.email = "Required.";
   }
   if (!values.channel) {
      errors.channel = "Required.";
   }
   return errors;
};

export const NewYouTubeForm = () => {
   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      // validate,
   });
   console.log("Visted Field.", formik.touched);
   return (
      <div>
         <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
               <label htmlFor="name">Name</label>
               <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
               />
               {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
               ) : null}
            </div>

            <div className="form-control">
               <label htmlFor="email">email</label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
               />
               {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
               ) : null}
            </div>

            <div className="form-control">
               <label htmlFor="channel">channel</label>
               <input
                  type="text"
                  name="channel"
                  id="channel"
                  onChange={formik.handleChange}
                  value={formik.values.channel}
                  onBlur={formik.handleBlur}
               />
               {formik.touched.channel && formik.errors.channel ? (
                  <div className="error">{formik.errors.channel}</div>
               ) : null}
            </div>

            <button type="submit">submit</button>
         </form>
      </div>
   );
};
