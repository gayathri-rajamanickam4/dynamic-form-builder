// eslint-disable-next-line import/no-anonymous-default-export
export default {
  contentTypeTitle: 'Content Title',
  sections: [
    {
      name: 'component',
      type: 'array',
      label: '',
      sectionTitle: 'Component',
      validationType: 'object',
      fields: [
        {
          name: 'type',
          type: 'enum',
          label: 'Select Type',
          validations: [],
          options: 'op1,op2',
          validationType: 'string',
        },
        {
          name: 'uniqueComponentName',
          type: 'text',
          label:
            'Enter a label to uniquely identify this component (this is for your information only)',
          validations: [],
          validationType: 'string',
          displayCondition: "type === 'op2'",
        },
      ],
    },
  ],
};
