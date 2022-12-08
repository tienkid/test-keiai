export type ResponseBase<T = any, TStatus = boolean> = {
  code: number;
} & (TStatus extends true
  ? {
      data: T;
      status: true;
    }
  : {
      status: false;
      msgCode?: string;
      msg?: string | null;
    });
export interface ParamsNetwork {
  url: string;
  params?: Record<string, string | number>;
  path?: Record<string, string | number>;
  body?: Record<string, unknown>;
}

export enum SLICE_NAME {
  APP = 'APP_',
  AUTHENTICATION = 'AUTHENTICATION_',
  LOGIN = 'LOGIN_',
  GET_CONTENT = 'GET_CONTENT_',
  REGISTER = 'REGISTER_',
  POINT = 'POINT_',
  BANNER = 'BANNER_',
  DELETE_USER = 'DELETE_USER_',
}

export type ValidateMessageObject = {
  keyT: string;
  optionsTx?: Record<string, string | number>;
  options?: Record<string, string | number>;
};
