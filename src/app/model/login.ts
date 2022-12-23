import { CustomOmit } from '../common/type';

export type LoginResponse = {
  user: User;
  accessToken: string;
  refreshToken: string;
};
export type OTPLogin = {
  refresh_token: string;
  result: string;
  token: string;
};

export type DataOTP = {
  token: string;
  refresh_token: string;
  data: OTPLogin;
  new_session?: string;
};
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  status: string;
}
export type RefreshTokenResponse = CustomOmit<LoginResponse, 'user'> | null;
