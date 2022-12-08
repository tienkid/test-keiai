/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleSheet } from 'react-native';

import { dispatch, getState } from '@common';
import { RESULT_CODE_PUSH_OUT, TIME_OUT } from '@config/api';
import { ENVConfig } from '@config/env';
import { ParamsNetwork, ResponseBase } from '@config/type';
import { AppState } from '@model/app';
import { appActions } from '@redux-slice';
import { Auth } from 'aws-amplify';
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  handleErrorAxios,
  handleParameter,
  handleResponseAxios,
  onPushLogout,
} from './helper';

const tokenKeyHeader = 'authorization';
let refreshTokenRequest: Promise<string | null | any> | null = null;
const AxiosInstance = Axios.create({});

AxiosInstance.interceptors.response.use(
  response => response,
  async function (error) {
    const originalRequest = error.config;
    if (
      error &&
      error.response &&
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      refreshTokenRequest = refreshTokenRequest
        ? refreshTokenRequest
        : refreshToken();
      const newToken = await refreshTokenRequest;
      refreshTokenRequest = null;
      if (newToken === null) {
        return Promise.reject(error);
      }
      dispatch(
        appActions.setToken({
          token: newToken.accessToken.jwtToken,
          refreshToken: newToken.refreshToken.token,
        }),
      );
      originalRequest.headers[tokenKeyHeader] = newToken.accessToken.jwtToken;
      return AxiosInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);

// refresh token
async function refreshToken() {
  return Auth.currentSession()
    .then(() => {
      console.log('Refresh token ss');
      return null;
    })
    .catch(err => {
      console.log('Refresh token error', { err });
      return null;
    });
}
// async function refreshToken(originalRequest: any) {
//   return AxiosInstance(ApiConstants.REFRESH_TOKEN, {
//     ...originalRequest,
//     method: 'post',
//     data: { refresh_token: getState('app').refreshToken },
//   })
//     .then((res: AxiosResponse<{ data: RefreshTokenResponse }>) => {
//       console.log('refresh token ok', res.data);
//       return res.data.data;
//     })
//     .catch(err => {
//       console.log('Refresh token error', { err });
//       return null;
//     });
// }

// base
function Request<T = Record<string, unknown>>(
  config: AxiosRequestConfig,
  isCheckOut = true,
) {
  const { token }: AppState = getState('app');

  const defaultConfig: AxiosRequestConfig = {
    baseURL: ENVConfig.API_URL,
    timeout: TIME_OUT,
    headers: {
      'Content-Type': 'application/json',
      [tokenKeyHeader]: token ?? '',
    },
  };
  return new Promise<ResponseBase<T> | null>(rs => {
    AxiosInstance.request(StyleSheet.flatten([defaultConfig, config]))
      .then((res: AxiosResponse<T>) => {
        // console.log(111111, res);
        const result = handleResponseAxios(res);
        rs(result as ResponseBase);
      })
      .catch((error: AxiosError<T>) => {
        const result = handleErrorAxios(error);
        if (!isCheckOut) {
          rs(result as ResponseBase<T>);
        }
        if (result.code === RESULT_CODE_PUSH_OUT && isCheckOut) {
          onPushLogout();
          rs(null);
        } else {
          rs(result as ResponseBase<T>);
        }
      });
  });
}

// get
async function Get<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, 'GET'));
}

// post
async function Post<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, 'POST'));
}

type ParameterPostFormData = AxiosRequestConfig & ParamsNetwork;
// post FormData
async function PostFormData<T>(params: ParamsNetwork) {
  const { token }: AppState = getState('app');
  const headers: AxiosRequestConfig['headers'] = {
    [tokenKeyHeader]: token ?? '',
    'Content-Type': 'multipart/form-data',
  };
  return Request<T>(
    handleParameter<ParameterPostFormData>({ ...params, headers }, 'POST'),
  );
}

// put
async function Put<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, 'PUT'));
}
async function PATCH<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, 'PATCH'));
}

// delete
async function Delete<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, 'DELETE'));
}
export type NetWorkResponseType<T> = (
  params: ParamsNetwork,
) => Promise<ResponseBase<T> | null>;

export const NetWorkService = {
  Get,
  Post,
  Put,
  Delete,
  PostFormData,
  Request,
  PATCH,
};
