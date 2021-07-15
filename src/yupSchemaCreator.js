import * as yup from 'yup';

/** Adding just additional methods here */

// yup.addMethod(yup.string, 'URL', function (...args) {
//   return this.url(...args);
// });

// const validator = function (message) {
//   return this.test('is-string-boolean', message, function (value) {
//     if (isEmpty(value)) {
//       return true;
//     }

//     if (['Y', 'N'].indexOf(value) !== -1) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

// yup.addMethod(yup.string, 'stringBoolean', validator);
// yup.addMethod(yup.string, 'StringBoolean', validator);

// export function createYupSchema(schema, config) {
//   const { name, validationType, validations = [] } = config;
//   if (!yup[validationType] && !config.children) {
//     return schema;
//   }
//   if (config.children) {
//     return config.children.reduce(createYupSchema, schema);
//   }
//   let validator = yup[validationType]();
//   validations.forEach((validation) => {
//     const { params, type } = validation;
//     if (!validator[type]) {
//       return;
//     }
//     validator = validator[type](...params);
//   });
//   if (name.indexOf('.') !== -1) {
//     const reversePath = name.split('.').reverse();
//     const currNestedObject = reversePath.slice(1).reduce(
//       (yupObj, path) => {
//         return { [path]: yup.object().shape(yupObj) };
//       },
//       { [reversePath[0]]: field.validation }
//     );

//     return { ...schema, ...currNestedObject };
//   } else {
//     schema[name] = validator;
//   }

//   return schema;
// }

const generateValidator = (validationType, validations, nestedSchema) => {
  let validator = nestedSchema
    ? yup[validationType]().shape(nestedSchema)
    : yup[validationType]();
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      throw new Error('Invalid validation type');
    }
    validator = validator[type](...params);
  });

  return validator;
};

// const createYupSchema = (fields) => {
//   const schema = fields.reduce((schema, field) => {
//     const { name, validationType, validations = [], children } = field;
//     let nestedSchema = null;
//     if (children) {
//       nestedSchema = createYupSchema(children);
//     }
//     if (!yup[validationType]) {
//       throw new Error('Invalid validationType');
//       //return schema;
//     }
//     // const isObject = name.indexOf('.') >= 0;
//     const validator = generateValidator(
//       validationType,
//       validations,
//       nestedSchema
//     );
//     // if (!isObject) {
//     //   return { ...schema, [name]: validator };
//     // }

//     let key;
//     if (name.indexOf('.') >= 0) {
//       key = name.split('.').reverse()[0];
//     } else {
//       key = name;
//     }

//     // const currNestedObject = reversePath.slice(1).reduce(
//     //   (yupObj, path) => {
//     //     return { [path]: yup.object().shape(yupObj) };
//     //   },
//     //   { [reversePath[0]]: validator }
//     // );

//     return { ...schema, [key]: validator };
//   }, {});

//   return yup.object().shape(schema);
// };

const createYupSchema = (schema, field) => {
  const { name, validationType, validations = [], children } = field;
  let nestedSchema = null;
  if (children) {
    nestedSchema = children.reduce(createYupSchema, {});
  }
  if (!yup[validationType]) {
    throw new Error('Invalid validationType');
    //return schema;
  }
  // const isObject = name.indexOf('.') >= 0;
  const validator = generateValidator(
    validationType,
    validations,
    nestedSchema
  );
  // if (!isObject) {
  //   return { ...schema, [name]: validator };
  // }

  let key;
  if (name.indexOf('.') >= 0) {
    key = name.split('.').reverse()[0];
  } else {
    key = name;
  }

  // const currNestedObject = reversePath.slice(1).reduce(
  //   (yupObj, path) => {
  //     return { [path]: yup.object().shape(yupObj) };
  //   },
  //   { [reversePath[0]]: validator }
  // );

  //   return { ...schema, [key]: validator };

  schema[key] = validator;

  return schema;
};
export const getYupSchemaFromMetaData = (
  metadata,
  additionalValidations = [],
  forceRemove = []
) => {
  const yepSchema = metadata.reduce(createYupSchema, {});
  const mergedSchema = {
    ...yepSchema,
    ...additionalValidations,
  };

  forceRemove.forEach((field) => {
    delete mergedSchema[field];
  });

  const validateSchema = yup.object().shape(mergedSchema);

  return validateSchema;
};
