import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import UsersTable from "./UsersTable";

const UserSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(99, "First Name must be 99 characters at maximum")
    .required("First Name is required"),
  lastName: Yup.string()
    .max(99, "Last Name must be 99 characters at maximum")
    .required("Last Name is required"),
  age: Yup.number()
    .max(99, "Age must be between 0 and 99 only")
    .positive("Age must be positive only")
    .required("Age is required"),
});

const AddUsers = () => {
  const [users, setUsers] = useState([]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Formik
            initialValues={{ firstName: "", lastName: "", age: "", gender: "" }}
            validationSchema={UserSchema}
            onSubmit={(values) => {
              setUsers((users) => [...users, values]);
            }}
          >
            {({ touched, errors }) => (
              <div>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h1>Users</h1>
                  </div>
                </div>
                <Form>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Enter First Name"
                      className={`form-control
                          ${
                            touched.firstName && errors.firstName
                              ? "is-invalid"
                              : ""
                          }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="firstName"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Enter Last Name"
                      className={`form-control
                          ${
                            touched.lastName && errors.lastName
                              ? "is-invalid"
                              : ""
                          }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="lastName"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <Field
                      type="number"
                      name="age"
                      className={`form-control
                          ${touched.age && errors.age ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage
                      component="div"
                      name="age"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <div id="my-radio-group">Gender</div>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label className="mt-2">
                        <Field type="radio" name="gender" value="Male" />
                        Male
                      </label>
                      <label style={{ marginLeft: 30 }}>
                        <Field type="radio" name="gender" value="Female" />
                        Female
                      </label>
                      <label style={{ marginLeft: 30 }}>
                        <Field
                          type="radio"
                          name="gender"
                          value="Don't want to specify"
                        />
                        Don't want to specify
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  >
                    Submit
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
        {users.length > 0 && (
          <div className="col-lg-6">
          <UsersTable users={users} />
        </div>
        )}
      </div>
    </div>
  );
};

export default AddUsers;
