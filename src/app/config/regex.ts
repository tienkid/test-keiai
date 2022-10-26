export const rxEmail = new RegExp(
  '^[a-zA-Z0-9]+([%\\^&\\-\\=\\+\\,\\.]?[a-zA-Z0-9]+)@[a-zA-Z]+([\\.]?[a-zA-Z]+)*(\\.[a-zA-Z]{2,3})+$',
);
export const rxPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])(?!.*['"]).{8,}$/;
export const rxNotNumber = /[^0-9]/g;
export const rxWhiteSpace = /[\s]/g;
export const rxPhoneNumber = /0\d{10}/;
