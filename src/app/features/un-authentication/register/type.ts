import { APP_SCREEN, UnAuthorizeParamsList } from '@navigation/screen-types';
import { StackScreenProps } from '@react-navigation/stack';

export type RegisterProps = StackScreenProps<
  UnAuthorizeParamsList,
  APP_SCREEN.REGISTER
>;
export interface FormRegisterProps {
  onSubmit: () => void;
  type?: string;
}

export type FormRegisterType = {
  phoneNumber: string;
};
