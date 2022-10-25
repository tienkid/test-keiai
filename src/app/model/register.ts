export interface Attributes {
  property_management_number: string;
  family_name: string;
  given_name: string;
  phonetic_family_name: string;
  phonetic_given_name: string;
  postal: string;
  prefecture: string;
  address: string;
  building: string;
}

export type ValidateRequest = {
  password: string;
  attributes: Attributes;
  phone_number: string;
  email: string;
};
export type Register = {
  phone_number: string;
  email: string;
};

export type ConfirmRequest = {
  code: string;
  password: string;
  attributes: Attributes;
  phone_number: string;
  email: string;
};
