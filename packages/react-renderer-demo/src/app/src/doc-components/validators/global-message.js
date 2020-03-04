import React from 'react';
import FormRenderer, { Validators, componentTypes, validatorTypes } from '@data-driven-forms/react-form-renderer';
import { FormTemplate, componentMapper } from '@data-driven-forms/pf4-component-mapper';
Validators.messages = {
  ...Validators.messages,
  required: 'Required',
};

const schema = {
  title: 'Try submitting empty form',
  fields: [{
    component: componentTypes.TEXT_FIELD,
    name: 'name',
    label: 'Name',
    isRequired: true,
    validate: [{
      type: validatorTypes.REQUIRED,
    }],
  }, {
    component: componentTypes.TEXT_FIELD,
    name: 'age',
    label: 'Age',
    tyope: 'number',
    isRequired: true,
    validate: [{
      type: validatorTypes.REQUIRED,
      message: 'Local validator message override',
    }],
  }],
};

const OverridingMessage = () => (
  <div className="pf4">
    <FormRenderer
      FormTemplate={ FormTemplate }
      componentMapper={ componentMapper }
      schema={ schema }
      onSubmit={ console.log }
    />
  </div>
);

export default OverridingMessage;

