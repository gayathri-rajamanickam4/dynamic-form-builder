export function transformResponse(originalResponse) {
  let modifiedResponse = {};
  modifiedResponse.contentTypeTitle = originalResponse.contentTypeTitle;
  modifiedResponse.contentControls = [];
  originalResponse.sections.forEach((section) => {
    let contentControl = {};
    contentControl.type = 'array';
    contentControl.title = section.sectionTitle;
    contentControl.name = section.name;
    contentControl.validationType = section.validationType;
    contentControl.children = [];
    section.fields.forEach((field) => {
      let child = { ...field, name: `${section.name}.${field.name}` };
      contentControl.children.push(child);
    });
    modifiedResponse.contentControls.push(contentControl);
  });

  return modifiedResponse;
}
