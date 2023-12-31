/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, Platform, StyleSheet } from 'react-native';

import { handleShowModalError } from '@components';
import { ERROR_NETWORK_CODE } from '@config/api';
import { ResponseBase } from '@config/type';
import analytics from '@react-native-firebase/analytics';
import { appActions } from '@redux-slice';
import { remove } from '@storage';
import { I18nKeys } from '@utils/i18n/locales';
import { translate } from '@utils/i18n/translate';

import { STORAGE_KEY_TOKEN } from '../constant';
import { dispatch } from '../redux';
import { sizeScale } from '../scale';

type TypesBase =
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined';

export const onShowErrorBase = (msg: string) => {
  Alert.alert(msg);
};
export const onCheckType = (
  source: any,
  type: TypesBase,
): source is TypesBase => {
  return typeof source === type;
};
export const checkKeyInObject = (T: Record<string, unknown>, key: string) => {
  return Object.keys(T).includes(key);
};

export const enhance = <T>(arrStyle: Array<T>) => {
  return StyleSheet.flatten<T>(arrStyle);
};

export const propsToStyle = <T = Record<string, number | string>>(
  arrStyle: Array<T>,
) => {
  return arrStyle
    .filter(
      x =>
        x !== undefined && !Object.values(x as any).some(v => v === undefined),
    )
    .reduce((prev: Record<string, number | string>, curr) => {
      const firstKey = Object.keys(curr as any)[0] as keyof T;
      const firstValue = curr[firstKey];

      if (
        !['opacity', 'zIndex', 'flex'].includes(firstKey as string) &&
        typeof firstValue === 'number'
      ) {
        (curr[firstKey] as unknown as number) = sizeScale(firstValue);
      }
      return { ...prev, ...curr };
    }, {} as Record<string, number | string>);
};

/**
 * return true when success and false when error
 */
export const handleErrorResponse = (
  response: ResponseBase<any>,
): response is ResponseBase<any, true> => {
  if (!response.status) {
    // TODO: handle error
    handleShowModalError({
      content: handleErrorContent(response.msgCode ?? '400'),
      title: 'dialog:error',
    });
    return false;
  }
  return true;
};

export const handleErrorContent = (msgCode: string): I18nKeys => {
  switch (msgCode) {
    case 'email_in_used':
      return 'msg:email_in_used';
    case 'phone_number_in_use':
      return 'msg:phone_in_used';
    case 'user_disabled':
      return 'msg:user_disable';
    case 'not_found':
      return 'login:error_login';
    case 'auth_0001':
      return 'msg:auth_0002';
    case 'auth_0002':
      return 'msg:auth_0002';
    case 'auth_0003':
      return 'msg:incorrect_code';
    default:
      return 'error:errorOnHandle';
  }
};
export const execFunc = <Fn extends (...args: any[]) => any>(
  func?: Fn,
  ...args: Parameters<Fn>
) => {
  if (onCheckType(func, 'function')) {
    func(...args);
  }
};

export const isIos = Platform.OS === 'ios';

export const logout = () => {
  dispatch(appActions.logout());
  remove(STORAGE_KEY_TOKEN);
};

const handleData = (responseError: ResponseBase<null>) => {
  return responseError;
};

export const handleErrorApi = (status: number) => {
  switch (status) {
    case ERROR_NETWORK_CODE:
      return handleData({
        code: ERROR_NETWORK_CODE,
        msg: translate('error:errorNetwork'),
        status: false,
      });
    case 200:
      return handleData({
        code: status,
        msg: translate('error:0'),
        status: false,
      });
    case 400:
      return handleData({
        code: status,
        msg: translate('error:400'),
        status: false,
      });
    case 401:
      return handleData({
        code: status,
        msg: translate('error:401'),
        status: false,
      });
    case 402:
      return handleData({
        code: status,
        msg: translate('error:402'),
        status: false,
      });
    case 403:
      return handleData({
        code: status,
        msg: translate('error:403'),
        status: false,
      });
    case 404:
      return handleData({
        code: status,
        msg: translate('error:404'),
        status: false,
      });
    case 405:
      return handleData({
        code: status,
        msg: translate('error:405'),
        status: false,
      });
    case 406:
      return handleData({
        code: status,
        msg: translate('error:406'),
        status: false,
      });
    case 407:
      return handleData({
        code: status,
        msg: translate('error:407'),
        status: false,
      });
    case 408:
      return handleData({
        code: status,
        msg: translate('error:408'),
        status: false,
      });

    case 409:
      return handleData({
        code: status,
        msg: translate('error:409'),
        status: false,
      });
    case 410:
      return handleData({
        code: status,
        msg: translate('error:410'),
        status: false,
      });

    case 411:
      return handleData({
        code: status,
        msg: translate('error:411'),
        status: false,
      });
    case 412:
      return handleData({
        code: status,
        msg: translate('error:412'),
        status: false,
      });

    case 413:
      return handleData({
        code: status,
        msg: translate('error:413'),
        status: false,
      });
    case 414:
      return handleData({
        code: status,
        msg: translate('error:414'),
        status: false,
      });
    case 415:
      return handleData({
        code: status,
        msg: translate('error:415'),
        status: false,
      });
    case 416:
      return handleData({
        code: status,
        msg: translate('error:416'),
        status: false,
      });
    case 417:
      return handleData({
        code: status,
        msg: translate('error:417'),
        status: false,
      });
    case 500:
      return handleData({
        code: status,
        msg: translate('error:500'),
        status: false,
      });
    case 501:
      return handleData({
        code: status,
        msg: translate('error:501'),
        status: false,
      });
    case 502:
      return handleData({
        code: status,
        msg: translate('error:502'),
        status: false,
      });
    case 503:
      return handleData({
        code: status,
        msg: translate('error:503'),
        status: false,
      });
    case 504:
      return handleData({
        code: status,
        msg: translate('error:504'),
        status: false,
      });
    case 505:
      return handleData({
        code: status,
        msg: translate('error:505'),
        status: false,
      });

    default:
      if (status > 503) {
        return handleData({
          code: status,
          msg: translate('error:serverError'),

          status: false,
        });
      } else if (status < 500 && status >= 400) {
        return handleData({
          code: status,
          msg: translate('error:errorOnRequest'),

          status: false,
        });
      } else {
        return handleData({
          code: status,
          msg: translate('error:errorOnHandle'),

          status: false,
        });
      }
  }
};

export const logActionEvent = async (
  eventName: string,
  params?: { [key: string]: any },
) => {
  try {
    await analytics().logEvent(eventName, params || {});
    console.log({ eventName, params }, 'GA');
  } catch (error) {
    console.log({ error });
  }
};
