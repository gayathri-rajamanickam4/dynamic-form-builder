// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    title: 'Proposition Widget',
    sections: [
      {
        type: 'content',
        title: 'Content',
        fields: [
          {
            type: 'select',
            fieldId: 'componentType',
            label: 'Select Type',
            row: 1,
            style: {
              color: 'green',
              margin: '10px',
            },
            validationType: 'string',
            validations: [
              {
                type: 'required',
                params: ['Name is required'],
              },
            ],
          },
          {
            type: 'number',
            field: 'age',
            label: "User's age",
            row: 2,
            style: {
              color: 'green',
              margin: '10px',
            },
            validationType: 'number',
            validations: [
              {
                type: 'min',
                params: [18, 'Min age is 18'],
              },
              {
                type: 'max',
                params: [60, 'Max age is 50'],
              },
            ],
          },
        ],
      },
      {
        type: 'component',
        title: 'Component',
        fields: [
          {
            type: 'select',
            fieldId: 'componentType',
            label: 'Select Type',
            row: 1,
            style: {
              color: 'green',
              margin: '10px',
            },
            validationType: 'string',
            validations: [
              {
                type: 'required',
                params: ['Name is required'],
              },
            ],
          },
          {
            type: 'number',
            field: 'age',
            label: "User's age",
            row: 2,
            style: {
              color: 'green',
              margin: '10px',
            },
            validationType: 'number',
            validations: [
              {
                type: 'min',
                params: [18, 'Min age is 18'],
              },
              {
                type: 'max',
                params: [60, 'Max age is 50'],
              },
            ],
          },
        ],
      },
    ],
  },
];
