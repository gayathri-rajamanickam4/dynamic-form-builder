import React from 'react';
// import controlListConfig from '../modelResponse';
import contentBuilderResponse from '../contentBuilderResponse';
import { useFormik } from 'formik';
import { getYupSchemaFromMetaData } from '../yupSchemaCreator';
import ComponentFactory from './ComponentFactory';
import Button from '@beans/button';
import Container from 'react-bootstrap/Container';
import { transformResponse } from '../helpers/transformer';

const FormBuilder = () => {
  const controlListConfig = transformResponse(contentBuilderResponse);
  console.log('controlListConfig::', controlListConfig);
  const schema = getYupSchemaFromMetaData(controlListConfig.contentControls);

  console.log('schema::', schema);
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
      <h1>{controlListConfig.contentTypeTitle}</h1>
      Errors : {JSON.stringify(formikProps.errors)}
      <Container>
        <ComponentFactory
          controlListConfig={controlListConfig.contentControls}
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
