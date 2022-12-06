import { APP_SCREEN, UnAuthorizeParamsList } from '@navigation/screen-types';
import { StackScreenProps } from '@react-navigation/stack/src/types';

export interface FormRegisterOTPProps {
  onSubmit: (data: FormRegisterOTPType) => void;
  type?: string;
}

export type FormRegisterOTPType = {
  code: string;
};

export type OTPScreenProps = StackScreenProps<
  UnAuthorizeParamsList,
  APP_SCREEN.OTP_SCREEN
>;
