import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { yupSchema } from "@/util";

export const RegisterForm = ({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [category, setCategory] = useState<(string | number)[]>([]);
  const baseUrl = "https://backend.getlinked.ai";
  const date = new Date();

  const handleReg = async (values: any) => {
    try {
      const response = await fetch(`${baseUrl}/hackathon/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
  
      const data = await response.json();
      setOpen(true);
      
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${baseUrl}/hackathon/categories-list`);
  
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
  
        const data = await response.json();
        setCategory(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchCategories();
  }, []);
  

  return (
    <Formik
      initialValues={{
        email: "",
        team_name: "",
        phone_number: "",
        project_topic: "",
        group_size: "",
        privacy_policy_accepted: false, 
        category: "",
      }}
      validationSchema= {yupSchema}
      onSubmit={(values) => {
        handleReg(values);
        setOpen(true)
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
          <ErrorMessage
            name="team_name"
            className="text-red-500 text-xs italic"
          />
        </div>

        <div className="basis-1/2 my-2 relative text-white">
          <label htmlFor="phone_number">Phone</label>
          <Field
            id="phone_number"
            name="phone_number"
            type="text"
            className="bg-background border border-white py-2 px-4 w-full"
          />
          <ErrorMessage
            name="phone_number"
            className="text-red-500 text-xs italic"
          />
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
          <ErrorMessage
            name="project_topic"
            className="text-red-500 text-xs italic"
          />
        </div>

        <div className="basis-1/2 my-2 md:pe-2 relative text-white">
          <label htmlFor="category">Category</label>
          <Field
            as="select"
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
          </Field>
          <ErrorMessage
            name="category"
            className="text-red-500 text-xs italic"
          />
        </div>
        <div className="basis-1/2 my-2 relative text-white">
          <label htmlFor="email">Group Size</label>
          <Field
            as="select"
            id="group_size"
            name="group_size"
            className="bg-background border border-white py-2 px-4 w-full"
          >
            <option>Group size</option>
            <option value={1}>1-5</option>
            <option value={2}>6-10</option>
            <option value={3}>Above 10</option>
          </Field>
          <ErrorMessage
            name="group_size"
            className="text-red-500 text-xs italic"
          />
        </div>
        <p className="text-secondary">
          Please review your registration details before submitting
        </p>
        <FormControlLabel
          className="text-xs"
          control={
            <Checkbox
              name="privacy_policy_accepted"
            />
          }
          label="I agreed with the event terms and conditions and privacy policy"
        />
        <ErrorMessage
          name="privacy_policy_accepted"
          className="text-red-500 text-xs italic"
        />
        <button type="submit" className="bg-gradient mt-4 w-full py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
};
