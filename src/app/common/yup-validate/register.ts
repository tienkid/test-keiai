import { FormRegisterOTPType } from '@features/un-authentication/otp-screen/type';
import { FormRegisterType } from '@features/un-authentication/register/type';
import * as yup from 'yup';

import { stringifyObjectValidateYup } from '../string';

export const registerValidation: yup.SchemaOf<FormRegisterType> = yup
  .object()
  .shape({
    phoneNumber: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_003',
      }),
    ),
  });
export const registerOTPValidation: yup.SchemaOf<FormRegisterOTPType> = yup
  .object()
  .shape({
    code: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_003',
      }),
    ),
  });
