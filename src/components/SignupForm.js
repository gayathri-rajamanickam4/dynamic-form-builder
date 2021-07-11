import React from 'react';
import controlListConfig from '../ApiResponse';
import { useFormik } from 'formik';
import { getYupSchemaFromMetaData } from '../yupSchemaCreator';
import ControlBuilder from './ControlBuilder';

const SignupForm = () => {
  const signupSchema = getYupSchemaFromMetaData(controlListConfig);

  const formikProps = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: signupSchema,
  });

  console.log(formikProps, controlListConfig);

  return (
    <form onSubmit={formikProps.handleSubmit}>
      Errors : {JSON.stringify(formikProps.errors)}
      <ControlBuilder
        controlListConfig={controlListConfig}
        formikProps={formikProps}
      ></ControlBuilder>
      <button type='submit' disabled={!formikProps.isValid}>
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
