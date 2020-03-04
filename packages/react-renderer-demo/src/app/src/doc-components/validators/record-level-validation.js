import React from 'react';
import FormRenderer, { componentTypes } from '@data-driven-forms/react-form-renderer';
import { FormTemplate, componentMapper } from '@data-driven-forms/pf4-component-mapper';
const schema = {
  title: 'Start typing',
  fields: [{
    component: componentTypes.TEXT_FIELD,
    name: 'name',
    label: 'name',
  }],
};

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'First name is required';
  }

  if (values.name && values.name === 'John') {
    errors.name = 'John is not alloved';
  }

  return errors;
};

const RecordLevelValidator = () => (
  <div className="pf4">
    <FormRenderer
      validate={ validate }
      FormTemplate={ FormTemplate }
      componentMapper={ componentMapper }
      schema={ schema }
      onSubmit={ console.log }
    />
  </div>
);

export default RecordLevelValidator;
