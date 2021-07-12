// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    type: 'text',
    field: 'name',
    label: "User's name",
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
  {
    type: 'text',
    field: 'email',
    label: "User's Email",
    row: 1,
    style: {
      color: 'green',
      margin: '10px',
    },
    validationType: 'string',
    validations: [
      {
        type: 'email',
        params: ['A valid email is required'],
      },
    ],
  },
  {
    type: 'array',
    field: 'user',
    row: 3,
    children: [
      {
        type: 'text',
        field: 'user.hobbies',
        label: "User's hobbies",
        style: {
          color: 'green',
          margin: '10px',
        },
      },
      {
        type: 'text',
        field: 'user.os',
        label: "User's operating system",
        style: {
          color: 'green',
          margin: '10px',
        },
      },
    ],
  },
];
