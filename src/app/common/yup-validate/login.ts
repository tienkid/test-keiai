import { FormLoginType } from '@model/authentication';
import * as yup from 'yup';

import { stringifyObjectValidateYup } from '../string';

export const loginValidation: yup.SchemaOf<FormLoginType> = yup.object().shape({
  phoneNumber: yup.string().required(
    stringifyObjectValidateYup({
      keyT: 'msg:MSG_001',
    }),
  ),
  password: yup.string().required(
    stringifyObjectValidateYup({
      keyT: 'msg:MSG_002',
    }),
  ),
});
