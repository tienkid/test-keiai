export type FormLoginType = {
  phoneNumber: string;
  password: string;
};

export type FormGetCodeType = {
  mode: string;
  phone: string;
};

export type FormSetCodeType = {
  code: string;
  phone: string;
  session: string | undefined;
};

export interface AuthenticationState {
  loading: boolean;
}
