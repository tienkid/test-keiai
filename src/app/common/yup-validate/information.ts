import { FormInformationProfileType } from '@model/information';
import * as yup from 'yup';

import { stringifyObjectValidateYup } from '../string';

export const informationValidation: yup.SchemaOf<FormInformationProfileType> =
  yup.object().shape({
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
    confirm_password: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_001',
        }),
      )
      .oneOf(
        [yup.ref('password'), null],
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_023',
          optionsTx: {
            fieldName1: 'register:password',
            fieldName2: 'register:confirm_password',
          },
        }),
      ),
    contact: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
    first_name: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
    last_name: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
    country: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
    city: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
    furigana_first_name: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
    furigana_last_name: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
    zip_code: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
    building_name: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
    name_address: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
    email: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_002',
      }),
    ),
  });
