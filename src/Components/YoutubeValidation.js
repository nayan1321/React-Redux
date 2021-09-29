import { React, useState } from "react";
import {
   useFormik,
   Formik,
   Form,
   Field,
   ErrorMessage,
   FieldArray,
} from "formik";
import * as Yup from "yup";

const initialValues = {
   name: "nyn",
   email: "",
   channel: "",
   comments: "",
   address: "",
   socialMedia: {
      facebook: "",
      twitter: "",
   },
   phoneNumber: ["", ""],
   phNumbers: [""],
};

const saveValues = {
   name: "nyn",
   email: "abc@gmail.com",
   channel: "xyz",
   comments: "we are back",
   address: "221b baker street",
   socialMedia: {
      facebook: "",
      twitter: "",
   },
   phoneNumber: ["", ""],
   phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
   console.log("Form data", values);
   console.log("submit data", onSubmitProps);
   //    onSubmitProps.setSubmitting(false);
};

const validationSchema = Yup.object().shape({
   name: Yup.string()
      .min(3, "Minimum 3 Symbols Required.")
      .max(15, "Maximum 15 Symbols Required.")
      .required("Name must be Required."),
   email: Yup.string()
      .email("Must be a valid email")
      .required("Email Must be Required."),
   channel: Yup.string()
      .min(3, "Minimum 3 Symbols Required")
      .required("Channel Must be Required."),
   comments: Yup.string()
      .max(255, "Maximum allow 255 symbols")
      .required("Must be Required Comments."),
   address: Yup.string()
      .max(58, "Maximum allow 58 symbols")
      .required("Must be Required Address."),
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

export const YoutubeValidation = () => {
   const [formValues, setFormValues] = useState(null);
   return (
      <Formik
         initialValues={formValues || initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
         enableReinitialize
         //  validateOnMount
      >
         {(formik) => {
            console.log("formik is", formik);
            return (
               <div>
                  <Form>
                     <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <Field type="text" name="name" id="name" />
                        <ErrorMessage name="name" component="div" />
                     </div>

                     <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" id="email" />
                        <ErrorMessage name="email" component="div" />
                     </div>

                     <div className="form-control">
                        <label htmlFor="channel">Channel</label>
                        <Field type="text" name="channel" id="channel" />
                        <ErrorMessage name="channel" component="div" />
                     </div>

                     <div className="form-control">
                        <label htmlFor="comments">Comments</label>
                        <Field as="textarea" id="comments" name="comments" />
                        <ErrorMessage name="comments" component="div" />
                     </div>

                     <div className="form-control">
                        <label htmlFor="Address">Address</label>
                        <Field name="address">
                           {(props) => {
                              const { form, field, meta } = props;
                              //console.log("props is ", props);
                              return (
                                 <>
                                    <input
                                       id="address"
                                       type="text"
                                       {...field}
                                    />
                                    {meta.touched && meta.error ? (
                                       <div>{meta.error}</div>
                                    ) : (
                                       ""
                                    )}
                                 </>
                              );
                           }}
                        </Field>
                     </div>

                     <div className="form-control">
                        <label htmlFor="facebook">facebook</label>
                        <Field
                           type="text"
                           name="socialMedia.facebook"
                           id="facebook"
                        />
                     </div>

                     <div className="form-control">
                        <label htmlFor="twitter">twitter</label>
                        <Field
                           type="text"
                           name="socialMedia.twitter"
                           id="twitter"
                        />
                     </div>

                     <div className="form-control">
                        <label htmlFor="primaryNumber">Primary Number</label>
                        <Field
                           type="text"
                           name="phoneNumber[0]"
                           id="primaryNumber"
                        />
                     </div>

                     <div className="form-control">
                        <label htmlFor="secondaryNumber">
                           Secondary Number
                        </label>
                        <Field
                           type="text"
                           name="phoneNumber[1]"
                           id="secondaryNumber"
                        />
                     </div>

                     <div className="form-control">
                        <label htmlFor="phNumbers">List of Number</label>
                        <FieldArray name="phNumbers">
                           {(FieldArrayProps) => {
                              const { form, push, remove } = FieldArrayProps;
                              const { values } = form;
                              const { phNumbers } = values;
                              return (
                                 <div>
                                    {phNumbers.map((phNumber, index) => (
                                       <div key={index}>
                                          <Field name={`phNumbers[${index}]`} />
                                          {index > 0 ? (
                                             <button
                                                type="button"
                                                onClick={() => remove(index)}
                                             >
                                                -
                                             </button>
                                          ) : null}

                                          <button
                                             type="button"
                                             onClick={() => {
                                                push("");
                                             }}
                                          >
                                             +
                                          </button>
                                       </div>
                                    ))}
                                 </div>
                              );
                           }}
                        </FieldArray>
                     </div>
                     <button
                        type="submit"
                        // disabled={formik.isSubmitting && formik.isValid}
                        onClick={() => setFormValues(saveValues)}
                     >
                        submit
                     </button>
                     {/* <button type="submit" disabled={!formik.isValid}>
                        submit
                     </button> */}
                     <button
                        type="button"
                        onClick={() => formik.validateField("email")}
                     >
                        Email Validate
                     </button>
                     <button
                        type="button"
                        onClick={() => formik.validateForm()}
                     >
                        Validate Form
                     </button>
                     <button
                        type="button"
                        onClick={() => formik.setFieldTouched("email")}
                     >
                        Validate Email Touched
                     </button>
                     <button
                        type="button"
                        onClick={() =>
                           formik.setTouched({
                              name: true,
                              email: true,
                              channel: true,
                              comments: true,
                              address: true,
                           })
                        }
                     >
                        Validate Form Touched
                     </button>
                  </Form>
               </div>
            );
         }}
      </Formik>
   );
};
