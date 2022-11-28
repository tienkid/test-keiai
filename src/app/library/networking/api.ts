const API_VERSION = 'v1/';

const ApiEndPoint = {
  LOGIN: 'auth/login',
  GET_CONTENT: 'post/pagination',
  GET_CODE_LOGIN: 'auth/getcode',
  SET_CODE_LOGIN: 'auth/complete-login',

  //users
  VALIDATE: 'users/validate-mobile-register',
  REGISTER: 'users/mobile-register',
  CONFIRM: 'users/mobile-confirm',

  //me
  GET_POINT: 'me/points',

  //banners
  GET_BANNER: 'banners',

  CHECK_CONTRACT: 'property-status/',

  REFRESH_TOKEN: '',
} as const;

const configApi = () => {
  const apiOb: Record<string, string> = {};
  Object.keys(ApiEndPoint).forEach(x => {
    const valueApi = ApiEndPoint[x as keyof typeof ApiEndPoint];
    apiOb[x] = API_VERSION + valueApi;
  });
  return apiOb;
};

type ApiConstantsType<T> = {
  [a in keyof T]: string;
};

export const ApiConstants = configApi() as ApiConstantsType<typeof ApiEndPoint>;
