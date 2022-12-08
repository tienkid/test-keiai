import { DataValid } from '@model/delete-user';
import * as yup from 'yup';

import { stringifyObjectValidateYup } from '../string';

export const deleteValidation: yup.SchemaOf<DataValid> = yup.object().shape({
  phone: yup.string().required(
    stringifyObjectValidateYup({
      keyT: 'msg:MSG_014',
    }),
  ),
  password: yup.string().required(
    stringifyObjectValidateYup({
      keyT: 'msg:MSG_015',
    }),
  ),
});
