import React from 'react';
import toJson from 'enzyme-to-json';
import TextField from '../files/text-field';
import { mount } from 'enzyme';
import MultipleChoiceList from '../form-fields/multiple-choice-list';
import { FieldLevelHelp } from 'patternfly-react';
import { Checkbox as Pf3Checkbox } from 'patternfly-react';
import Switch from '../files/switch';
import Checkbox from '../files/checkbox';
import Radio from '../files/radio';
import Textarea from '../files/textarea';
import Slider from '../files/slider';
import RenderWithProvider from '../../../../__mocks__/with-provider';

describe('FormFields', () => {
  describe('<Switch />', () => {
    let props;
    let formOptions;

    beforeEach(() => {
      formOptions = {
        handleSubmit: jest.fn()
      };

      props = {
        input: {
          name: 'Name of the field',
          value: ''
        },
        id: 'someIdKey',
        meta: {
          error: false,
          touched: false
        }
      };
    });

    it('should render Switch correctly', () => {
      const wrapper = mount(
        <RenderWithProvider value={{ formOptions }}>
          <Switch {...props} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render mini Switch correctly', () => {
      const wrapper = mount(
        <RenderWithProvider value={{ formOptions }}>
          <Switch {...props} bsSize="mini" />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render sm Switch correctly', () => {
      const wrapper = mount(
        <RenderWithProvider value={{ formOptions }}>
          <Switch {...props} bsSize="mn" />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render Switch with label correctly', () => {
      const wrapper = mount(
        <RenderWithProvider value={{ formOptions }}>
          <Switch {...props} label={'Label'} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render Switch with placeholder correctly', () => {
      const wrapper = mount(
        <RenderWithProvider value={{ formOptions }}>
          <Switch {...props} placeholder={'Placeholder'} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render Switch with onText (custom prop) correctly', () => {
      const wrapper = mount(
        <RenderWithProvider value={{ formOptions }}>
          <Switch {...props} onText={'OnText'} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render disabled Switch correctly', () => {
      const wrapper = mount(
        <RenderWithProvider value={{ formOptions }}>
          <Switch {...props} isDisabled />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render readOnly Switch correctly', () => {
      const wrapper = mount(
        <RenderWithProvider value={{ formOptions }}>
          <Switch {...props} isReadOnly />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('<Checkbox />', () => {
    let initialProps;
    beforeEach(() => {
      initialProps = {
        name: 'single-check-box',
        meta: {}
      };
    });

    it('should render single checkbox variant', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <Checkbox {...initialProps} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(FieldLevelHelp)).toHaveLength(0);
    });

    it('should render single checkbox variant with a helper text', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <Checkbox {...initialProps} helperText="Helper text" />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(FieldLevelHelp)).toHaveLength(1);
    });

    it('should render multiple choice variant', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <Checkbox
            {...initialProps}
            options={[
              {
                label: 'option 1',
                value: 1
              },
              {
                label: 'option 2',
                value: 2
              }
            ]}
          />
        </RenderWithProvider>
      );
      expect(wrapper.find(MultipleChoiceList)).toHaveLength(1);
      expect(wrapper.find(Pf3Checkbox)).toHaveLength(2);
    });
  });

  describe('<Radio />', () => {
    let initialProps;
    beforeEach(() => {
      initialProps = {
        name: 'radio',
        options: [
          {
            label: 'option 1',
            value: 1
          },
          {
            label: 'option 2',
            value: 2
          }
        ]
      };
    });

    it('should render correctly', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <Radio {...initialProps} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('<TextField />', () => {
    let initialProps;
    beforeEach(() => {
      initialProps = {
        name: 'text-field'
      };
    });

    it('should render correctly', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <TextField {...initialProps} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly with placeholder', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <TextField {...initialProps} placeholder={'placeholder'} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly with helperText', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <TextField {...initialProps} label="label" helperText="I am a helper text" />
        </RenderWithProvider>
      );

      expect(wrapper.find('FieldLevelHelp')).toHaveLength(1);
      expect(wrapper.find('FieldLevelHelp').props().content).toEqual('I am a helper text');
    });

    it('should render correctly with description', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <TextField {...initialProps} description="I am a description" />
        </RenderWithProvider>
      );

      expect(wrapper.find('HelpBlock')).toHaveLength(1);
      expect(wrapper.find('HelpBlock').text()).toEqual('I am a description');
    });
  });

  describe('<Textarea />', () => {
    let initialProps;
    beforeEach(() => {
      initialProps = {
        input: {
          name: 'textarea'
        },
        meta: {}
      };
    });

    it('should render correctly', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <Textarea {...initialProps} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render correctly with placeholder', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <Textarea {...initialProps} placeholder={'placeholder'} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('<Slider />', () => {
    let initialProps;
    beforeEach(() => {
      initialProps = {
        name: 'slider',
        max: 100,
        min: 10,
        label: 'Distance',
        helperText: '(kms)'
      };
    });

    it('should render correctly', () => {
      const wrapper = mount(
        <RenderWithProvider>
          <Slider {...initialProps} />
        </RenderWithProvider>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
