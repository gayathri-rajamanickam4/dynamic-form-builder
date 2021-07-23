import React, { useMemo } from 'react';
import InputGroup from '@beans/input-group';
import DropdownGroup from '@beans/dropdown-group';
// import babel from 'babel-core';

const ComponentFactory = ({ controlListConfig, formikProps }) => {
  const builder = (individualConfig) => {
    switch (individualConfig.type) {
      case 'text':
        return (
          <>
            <div>
              {formikProps.errors[individualConfig.name] ? (
                <InputGroup
                  error
                  errorMessage={formikProps.errors[individualConfig.name]}
                  labelText={individualConfig.label}
                  required
                  name={individualConfig.name}
                  onChange={formikProps.handleChange}
                  style={{ ...individualConfig.style }}
                  type='text'
                />
              ) : (
                // eslint-disable-next-line no-eval
                // eval(individualConfig.displayCondition) && (

                // babel.transform(individualConfig.displayCondition).code && (
                <InputGroup
                  labelText={individualConfig.label}
                  required
                  name={individualConfig.name}
                  onChange={formikProps.handleChange}
                  style={{ ...individualConfig.style }}
                  type='text'
                />
              )}
            </div>
          </>
        );
      case 'enum':
        return (
          <DropdownGroup
            defaultSelectedValue=''
            id={individualConfig.name}
            labelText={individualConfig.label}
            onChange={formikProps.handleChange}
          >
            <option value=''>Select option</option>
            {individualConfig.options.split(',').map((op) => (
              <option value={op}>{op}</option>
            ))}
          </DropdownGroup>
        );
      case 'number':
        return (
          <>
            <div>
              <label htmlFor={individualConfig.field}>
                {individualConfig.label}
              </label>
              <input
                type='number'
                name={individualConfig.field}
                onChange={formikProps.handleChange}
                style={{ ...formikProps.style }}
              />
            </div>
          </>
        );
      case 'array':
        return (
          <>
            <h2>{individualConfig.title}</h2>
            <hr></hr>
            <ComponentFactory
              controlListConfig={individualConfig.children || []}
              formikProps={formikProps}
            />
          </>
        );
      default:
        return <div>Unsupported field</div>;
    }
  };

  return (
    <>
      {controlListConfig.map((c) => {
        return builder(c, formikProps);
      })}
    </>
  );
};

export default ComponentFactory;
