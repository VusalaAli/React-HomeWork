import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";


function createElement(obj) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };
    fetch('http://localhost:3000/requirements/', requestOptions)
        .then(response => response.json())
}

const AddProduct = () => {
    const navigate = useNavigate()
  return (
    <>
      <Formik
        initialValues={{ image: "", country: "", description: "" , name:""}}
        validationSchema={Yup.object({
          image: Yup.string()
            .required("Required"),
            country: Yup.string()
            .required("Required"),
            description: Yup.string()
            .required("Required"),
            name: Yup.string()
            .required("Required"),
        })}
        onSubmit={(values) => {
        createElement(values)+
        navigate("/admin")
        }}
      >
        <Form>
          <label htmlFor="image">Photo</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="country">Country</label>
          <Field name="country" type="text" />
          <ErrorMessage name="country" />

          <label htmlFor="description">Description</label>
          <Field name="description" type="text" />
          <ErrorMessage name="description" />

          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddProduct;
