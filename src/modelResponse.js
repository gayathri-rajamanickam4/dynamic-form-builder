// eslint-disable-next-line import/no-anonymous-default-export
export default {
  contentTypeTitle: 'Content Title',
  contentControls: [
    {
      type: 'array',
      title: 'Component',
      name: 'component',
      validationType: 'object',
      children: [
        {
          name: 'component.type',
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
          name: 'component.uniqueComponentName',
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

    {
      type: 'array',
      name: 'content',
      title: 'Content',
      validationType: 'object',
      children: [
        {
          name: 'content.type',
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
          name: 'content.uniqueComponentName',
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
