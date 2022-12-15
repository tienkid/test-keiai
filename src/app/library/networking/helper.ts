/* eslint-disable @typescript-eslint/no-explicit-any */
import { handleErrorApi, logout } from '@common';
import {
  // CODE_SUCCESS,
  CODE_TIME_OUT,
  ERROR_NETWORK_CODE,
  RESULT_CODE_PUSH_OUT,
  STATUS_TIME_OUT,
} from '@config/api';
import { ParamsNetwork, ResponseBase } from '@config/type';
import { translate } from '@utils/i18n/translate';
import { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';

const responseDefault: ResponseBase<Record<string, unknown>> = {
  code: -500,
  status: false,
  msg: translate('error:serverError'),
};

export const onPushLogout = async () => {
  logout();
  /**
   * do something when logout
   */
};

export const handleResponseAxios = <T = Record<string, unknown>>(
  res: AxiosResponse<any>,
): ResponseBase<T> => {
  if (res.data) {
    const isInvalidCode = res.data.message === 'Invalid Registration Code';
    return {
      code: res.status,
      status: res.data.result === 'failure' ? false : true,
      data: res?.data ?? undefined,
      msg: res.data.error,
      msgCode: isInvalidCode
        ? 'incorrect_code'
        : res.data.code ?? res.data.error,
    };
  }
  return responseDefault as ResponseBase<T>;
};
export const handleErrorAxios = <T = Record<string, unknown>>(
  error: AxiosError,
): ResponseBase<T> => {
  if (error.code === STATUS_TIME_OUT) {
    // timeout
    return handleErrorApi(CODE_TIME_OUT) as unknown as ResponseBase<T>;
  }
  if (error.response) {
    if (error.response.status === RESULT_CODE_PUSH_OUT) {
      return handleErrorApi(RESULT_CODE_PUSH_OUT) as unknown as ResponseBase<T>;
    } else {
      if (error.response.data) {
        // console.log('DATA', error.response.data);
        return handleResponseAxios(error.response);
      }
      return handleErrorApi(
        error.response.status,
      ) as unknown as ResponseBase<T>;
    }
  }
  return handleErrorApi(ERROR_NETWORK_CODE) as unknown as ResponseBase<T>;
};

export const handlePath = (url: string, path: ParamsNetwork['path']) => {
  if (!path || Object.keys(path).length <= 0) {
    return url;
  }
  let resUrl = url;
  Object.keys(path).forEach(k => {
    resUrl = resUrl.replaceAll(`{${k}}`, String(path[k]));
    resUrl = resUrl.replaceAll(`:${k}`, String(path[k]));
  });
  return resUrl;
};

export const handleParameter = <T extends ParamsNetwork>(
  props: T,
  method: Method,
): AxiosRequestConfig => {
  const { url, body, path, params } = props;
  return {
    ...props,
    method,
    url: handlePath(url, path),
    data: body,
    params,
  };
};
