import React, { useMemo } from 'react';
import InputGroup from '@beans/input-group';

const ComponentFactory = ({ controlListConfig, formikProps }) => {
  const builder = (individualConfig) => {
    switch (individualConfig.type) {
      case 'text':
        return (
          <>
            <div>
              {formikProps.errors[individualConfig.field] ? (
                <InputGroup
                  error
                  errorMessage={formikProps.errors[individualConfig.field]}
                  id={individualConfig.field}
                  labelText={individualConfig.label}
                  placeholder='Placeholder text...'
                  required
                  name={individualConfig.field}
                  onChange={formikProps.handleChange}
                  style={{ ...individualConfig.style }}
                  type='text'
                />
              ) : (
                <InputGroup
                  id={individualConfig.field}
                  labelText={individualConfig.label}
                  placeholder='Placeholder text...'
                  required
                  name={individualConfig.field}
                  onChange={formikProps.handleChange}
                  style={{ ...individualConfig.style }}
                  type='text'
                />
              )}
            </div>
          </>
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
          <ComponentFactory
            controlListConfig={individualConfig.children || []}
            formikProps={formikProps}
          />
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
