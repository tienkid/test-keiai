import {
  PASSWORD_MIN_LENGTH,
  PHONE_NUMBER_LENGTH,
  ZIP_CODE_LENGTH,
} from '@config/field-length';
import { rxEmail, rxPhoneNumber } from '@config/regex';
import { FormInformationProfileType } from '@model/information';
import * as yup from 'yup';

import { stringifyObjectValidateYup } from '../string';

export const informationValidation: yup.SchemaOf<FormInformationProfileType> =
  yup.object().shape({
    phoneNumber: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:phone_number',
          },
        }),
      )
      .min(
        PHONE_NUMBER_LENGTH,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_005',
        }),
      )
      .matches(
        rxPhoneNumber,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_005',
        }),
      ),
    password: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:password',
          },
        }),
      )
      .min(
        PASSWORD_MIN_LENGTH,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_005',
        }),
      ),
    confirm_password: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:confirm_password',
          },
        }),
      )
      .oneOf(
        [yup.ref('password'), null],
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_006',
        }),
      ),
    contact: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_004',
        optionsTx: {
          field: 'field:contact',
        },
      }),
    ),
    first_name: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_004',
        optionsTx: {
          field: 'field:your_name',
        },
      }),
    ),
    last_name: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_004',
        optionsTx: {
          field: 'field:your_name',
        },
      }),
    ),
    country: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_004',
        optionsTx: {
          field: 'field:address',
        },
      }),
    ),
    city: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_004',
        optionsTx: {
          field: 'field:address',
        },
      }),
    ),
    building_name: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_004',
        optionsTx: {
          field: 'field:address',
        },
      }),
    ),
    name_address: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_004',
        optionsTx: {
          field: 'field:address',
        },
      }),
    ),
    furigana_first_name: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_004',
        optionsTx: {
          field: 'field:furigana',
        },
      }),
    ),
    furigana_last_name: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_004',
        optionsTx: {
          field: 'field:furigana',
        },
      }),
    ),
    zip_code: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:zip_code',
          },
        }),
      )
      .min(
        ZIP_CODE_LENGTH,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_005',
        }),
      ),
    email: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:email',
          },
        }),
      )
      .matches(
        rxEmail,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_005',
        }),
      ),
  });
