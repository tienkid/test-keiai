import {
  MIN_PHONE_NUMBER_LENGTH,
  PASSWORD_MIN_LENGTH,
  ZIP_CODE_LENGTH,
} from '@config/field-length';
import {
  rxContract,
  rxEmail,
  rxFullWidth,
  rxFullWidthEmail,
  rxFullWidthKatakana,
  rxHaftWidth,
  rxPhoneNumber,
} from '@config/regex';
import { FormInformationProfileType } from '@model/information';
import { ValidateRequest } from '@model/register';
import * as yup from 'yup';

import { numberToCountryCode, stringifyObjectValidateYup } from '../string';

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
        MIN_PHONE_NUMBER_LENGTH,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:phone_number',
          },
        }),
      )
      .matches(
        rxPhoneNumber,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_005',
          optionsTx: {
            field: 'field:phone_number',
          },
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
      .matches(
        rxHaftWidth,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_010',
        }),
      )
      .min(
        PASSWORD_MIN_LENGTH,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_009',
        }),
      ),
    confirm_password: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:password',
          },
        }),
      )
      .matches(
        rxHaftWidth,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_010',
        }),
      )
      .min(
        PASSWORD_MIN_LENGTH,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_009',
        }),
      )
      .oneOf(
        [yup.ref('password'), null],
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_006',
        }),
      ),
    contact: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:contact',
          },
        }),
      )
      .matches(
        rxContract,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_008',
        }),
      ),
    first_name: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:your_name',
          },
        }),
      )
      .matches(
        rxFullWidth,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_011',
        }),
      ),
    last_name: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:your_name',
          },
        }),
      )
      .matches(
        rxFullWidth,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_011',
        }),
      ),
    country: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_007',
      }),
    ),
    city: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_007',
      }),
    ),
    building_name: yup.string(),
    name_address: yup.string().required(
      stringifyObjectValidateYup({
        keyT: 'msg:MSG_004',
        optionsTx: {
          field: 'field:address',
        },
      }),
    ),
    furigana_first_name: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:furigana',
          },
        }),
      )
      .matches(
        rxFullWidthKatakana,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_011',
        }),
      ),
    furigana_last_name: yup
      .string()
      .required(
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_004',
          optionsTx: {
            field: 'field:furigana',
          },
        }),
      )
      .matches(
        rxFullWidthKatakana,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_011',
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
      .matches(
        rxPhoneNumber,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_013',
          optionsTx: {
            field: 'field:zip_code',
          },
        }),
      )
      .min(
        ZIP_CODE_LENGTH,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_005',
          optionsTx: {
            field: 'field:zip_code',
          },
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
      .test(
        'fullsize',
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_013',
          optionsTx: {
            field: 'field:email',
          },
        }),
        val => !rxFullWidthEmail.test(val ?? ''),
      )
      .matches(
        rxEmail,
        stringifyObjectValidateYup({
          keyT: 'msg:MSG_005',
          optionsTx: {
            field: 'field:email',
          },
        }),
      ),
  });
export const mapsDataRequest = (
  dataProfile: FormInformationProfileType | undefined,
) => {
  return {
    phone_number: numberToCountryCode(dataProfile?.phoneNumber ?? ''),
    email: dataProfile?.email,
    attributes: {
      property_management_number: dataProfile?.contact,
      family_name: dataProfile?.first_name,
      given_name: dataProfile?.last_name,
      phonetic_family_name: dataProfile?.furigana_first_name,
      phonetic_given_name: dataProfile?.furigana_last_name,
      address: dataProfile?.name_address,
      building: dataProfile?.building_name,
      postal: dataProfile?.zip_code,
      prefecture: dataProfile?.city,
    },
    password: dataProfile?.password,
  } as ValidateRequest;
};
