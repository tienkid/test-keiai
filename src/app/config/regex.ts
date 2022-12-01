export const rxEmail = new RegExp(
  '^[a-zA-Z0-9]+([%\\^&\\-\\=\\+\\,\\.]?[a-zA-Z0-9]+)@[a-zA-Z]+([\\.]?[a-zA-Z]+)*(\\.[a-zA-Z]{2,3})+$',
);
export const rxPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])(?!.*['"]).{8,}$/;
export const rxNotNumber = /[^0-9]/g;
export const rxWhiteSpace = /[\s]/g;
export const rxPhoneNumber = /^[0-9]+$/;
export const rxHaftWidth = /^[a-zA-Z0-9]+$/;
export const rxFullWidth = /^[ぁ-んァ-ン一-龥]/;
export const rxFullWidthKatakana = /^([ァ-ン]|ー)+$/;
export const rxNumberHaftWidth = /^[0-9]+$/;
export const rxContract = /^([a-zA-Z0-9]{3})[-]([0-9]{13})[-]([0-9]{3})/;
