import React, { useMemo } from 'react';

const ControlBuilder = ({ controlListConfig, formikProps }) => {
  const builder = (individualConfig) => {
    switch (individualConfig.type) {
      case 'text':
        return (
          <>
            <div>
              <label htmlFor={individualConfig.field}>
                {individualConfig.label}
              </label>
              <input
                type='text'
                name={individualConfig.field}
                onChange={formikProps.handleChange}
                style={{ ...individualConfig.style }}
              />
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
          <ControlBuilder
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
        return builder(c);
      })}
    </>
  );
};

export default ControlBuilder;
