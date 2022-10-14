import { CustomOmit } from '../common/type';

export type LoginResponse = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  status: string;
}
export type RefreshTokenResponse = CustomOmit<LoginResponse, 'user'> | null;
