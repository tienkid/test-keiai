import { InputBaseProps } from '../../type';

export type InputOutlineProps = InputBaseProps;
export type LabelOutlineProps = Pick<
  InputOutlineProps,
  'requiredLabel' | 'requiredLabelT18n' | 'disabled' | 'labelT18n' | 'label'
>;
export type ErrorOutlineProps = {
  error?: string;
};
