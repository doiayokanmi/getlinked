import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as Yup from "yup";
import axios from "axios";

export const RegisterForm = () => {
  const [category, setCategory] = useState([]);
  const baseUrl = "https://backend.getlinked.ai";
  const date = new Date();

  useEffect(() => {
    axios
      .get(`${baseUrl}/hackathon/categories-list`)
      .then((result) => {
        setCategory(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Formik
      initialValues={{
        "email": "",
        "team_name": "",
        "phone_number": "",
        "project_topic": "",
        "group_size": 0,
        "privacy_poclicy_accepted": true,
        "date_created": date.getTime(),
        "last_updated": date.getTime(),
        "category": 0,
      }}
      validationSchema={Yup.object({
        team_name: Yup.string()
          .min(3, "Must be 3 characters or more")
          .required("Fill this space"),
        project_topic: Yup.string()
          .min(3, "Must be 3 characters or more")
          .required("Fill this space"),
        phone_number: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Fill this space"),
        email: Yup.string().email("Invalid email address").required("Fill this space"),
        privacy_poclicy_accepted: Yup.boolean()
          .required("Accept privacy policy")
          .oneOf([true], "You must accept the terms and conditions."),
        category: Yup.string()
          .oneOf(["Web", "UI/UX", "Mobile"], "Select category")
          .required("Select one of this"),
        group_size: Yup.string()
          .oneOf(["1-5", "5-9", "Above 10"], "Select group size")
          .required("Select one of this"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        axios.post(`${baseUrl}/hackathon/registration`, values)
        .then(
          (result) => {
            console.log(result.data);
            setSubmitting(false);
          }).catch((err) => {
            console.log(err);
            setSubmitting(false);
          });
      }}
    >
      <Form className="flex flex-wrap flex-col md:flex-row justify-between">
        <div className="basis-1/2 my-2 md:pe-2 relative text-white">
          <label htmlFor="team_name">Team Name</label>
          <Field
            id="team_name"
            name="team_name"
            type="text"
            className="bg-background border border-white py-2 px-4 w-full"
          />
          <ErrorMessage name="team_name" className="text-red-500 text-xs italic" />
        </div>

        <div className="basis-1/2 my-2 relative text-white">
          <label htmlFor="phone_number">Phone</label>
          <Field
            id="phone_number"
            name="phone_number"
            type="text"
            className="bg-background border border-white py-2 px-4 w-full"
          />
          <ErrorMessage name="phone_number" className="text-red-500 text-xs italic" />

        </div>
        <div className="basis-1/2 my-2 md:pe-2 relative text-white">
          <label htmlFor="email">Email Address</label>
          <Field
            id="email"
            name="email"
            type="email"
            className="bg-background border border-white py-2 px-4 w-full"
          />
          <ErrorMessage name="email" className="text-red-500 text-xs italic" />

        </div>

        <div className="basis-1/2 my-2 relative text-white">
          <label htmlFor="project_topic">Project Topic</label>
          <Field
            id="project_topic"
            name="project_topic"
            type="text"
            className="bg-background border border-white py-2 px-4 w-full"
          />
          <ErrorMessage name="project_topic" className="text-red-500 text-xs italic" />

        </div>

        <div className="basis-1/2 my-2 md:pe-2 relative text-white">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            className="bg-background border border-white py-2 px-4 w-full"
          >
            <option>Select your category</option>
            {category.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <ErrorMessage name="category" className="text-red-500 text-xs italic" />

        </div>
        <div className="basis-1/2 my-2 relative text-white">
          <label htmlFor="email">Group Size</label>
          <select
            id="group_size"
            name="group_size"
            className="bg-background border border-white py-2 px-4 w-full"
          >
            <option>Group size</option>
            <option value={1}>1-5</option>
            <option value={2}>6-10</option>
            <option value={3}>Above 10</option>
          </select>
          <ErrorMessage name="group_size" className="text-red-500 text-xs italic" />

        </div>
        <p className="text-secondary">
          Please review your registration details before submitting
        </p>
        <FormControlLabel className="text-xs"
          control={
            <Checkbox defaultChecked color="primary" name="privacy_poclicy_accepted" />
          }
          label="I agreed with the event terms and conditions and privacy policy"
        />
      <ErrorMessage name="privacy_poclicy_accepted" className="text-red-500 text-xs italic" />
        <button type="submit" className="bg-gradient mt-4 w-full py-2 rounded">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
