// eslint-disable-next-line import/no-anonymous-default-export
export default {
  contentTypeTitle: 'Content Title',
  sections: [
    {
      name: 'component',
      type: 'text',
      label: '',
      sectionTitle: 'Component',
      fields: [
        {
          name: 'type',
          type: 'text',
          label: 'Select Type',
          validations: [
            {
              type: 'required',
              params: ['Component type is required'],
            },
          ],
          validationType: 'string',
        },
        {
          name: 'uniqueComponentName',
          type: 'text',
          label:
            'Enter a label to uniquely identify this component (this is for your information only)',
          validations: [
            {
              type: 'required',
              params: ['Unique name is required field'],
            },
          ],
          validationType: 'string',
        },
      ],
    },
  ],
};
