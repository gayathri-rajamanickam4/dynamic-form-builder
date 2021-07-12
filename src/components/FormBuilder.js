import React from 'react';
import controlListConfig from '../ApiResponse';
import { useFormik } from 'formik';
import { getYupSchemaFromMetaData } from '../yupSchemaCreator';
import ComponentFactory from './ComponentFactory';
import Button from '@beans/button';
import Container from 'react-bootstrap/Container';

const FormBuilder = () => {
  const schema = getYupSchemaFromMetaData(controlListConfig);

  const formikProps = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: schema,
  });

  console.log(formikProps, controlListConfig);

  return (
    <form onSubmit={formikProps.handleSubmit}>
      Errors : {JSON.stringify(formikProps.errors)}
      <Container>
        <ComponentFactory
          controlListConfig={controlListConfig}
          formikProps={formikProps}
        ></ComponentFactory>
      </Container>
      <Button type='submit' disabled={!formikProps.isValid}>
        Submit
      </Button>
    </form>
  );
};

export default FormBuilder;
