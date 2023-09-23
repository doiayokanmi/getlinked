import React from 'react';
import { Form, Formik } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as Yup from 'yup';

export const RegisterForm = () => {

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        acceptedTerms: false,
        jobType: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
        jobType: Yup.string()
          .oneOf(
            ['designer', 'development', 'product', 'other'],
            'Invalid Job Type'
          )
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className='flex flex-wrap flex-col md:flex-row justify-between'>
        
      <div className="basis-1/2 my-2 md:pe-2 relative text-white">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className='bg-background border border-white py-2 px-4 w-full'
          />
        </div>

        <div className="basis-1/2 my-2 relative text-white">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className='bg-background border border-white py-2 px-4 w-full'
          />
        </div>
        <div className="basis-1/2 my-2 md:pe-2 relative text-white">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className='bg-background border border-white py-2 px-4 w-full'
          />
        </div>

        <div className="basis-1/2 my-2 relative text-white">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className='bg-background border border-white py-2 px-4 w-full'
          />
        </div>

        <div className="basis-1/2 my-2 md:pe-2 relative text-white">
          <label htmlFor="email">Email Address</label>
          <select
            id="email"
            name="email"
            className='bg-background border border-white py-2 px-4 w-full'
          > </select>
        </div>
        <div className="basis-1/2 my-2 relative text-white">
          <label htmlFor="email">Email Address</label>
          <select
            id="email"
            name="email"
            className='bg-background border border-white py-2 px-4 w-full'
          > </select>
        </div>
        <p className="text-secondary">Please review your registration details before submitting</p>
        <FormControlLabel control={<Checkbox defaultChecked color='primary' />} label="Label" />
        <button type="submit" className='bg-gradient mt-4 w-full py-2 rounded'>Submit</button>
      </Form>
    </Formik>
  );
};
