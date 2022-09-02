import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const App = () => (
  <div>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
          errors.email = "Invalid Email";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length > 8) {
          errors.password = "Password length cannot be more than 8 characters";
        } else if (values.password.length < 4) {
          errors.password = "Password length cannot be less than 4 characters";
        }
        return errors;
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <center>
        <h1>Sign Up</h1>{" "}
        <Form>
          <label>Email:</label>
          <br />
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <br />
          <ErrorMessage name="email" component="div" />
          <label>Password:</label>
          <br />
          <Field type="password" id="password" name="password" />
          <br />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </center>
    </Formik>
  </div>
);
export default App;
