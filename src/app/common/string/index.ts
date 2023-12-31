/* eslint-disable @typescript-eslint/no-explicit-any */
import { processColor } from 'react-native';

import { TagType, ValidateMessageObject } from '@config/type';

import { KANA_FULL_HALF_MAP } from '../constant';

export const trimArray = (sourceArr: Array<unknown> = []): Array<unknown> => {
  return sourceArr.map((element: any) => {
    if (Array.isArray(element)) {
      return trimArray(element);
    }
    switch (typeof element) {
      case 'string':
        return element.trim();
      case 'object':
        return trimObject(element);
      default:
        return element;
    }
  });
};

export const trimObject = (source: any) => {
  if (!source) {
    return source;
  }
  const newObject = source;
  Object.keys(newObject).forEach((key: string) => {
    if (Array.isArray(newObject[key])) {
      newObject[key] = trimArray(newObject[key]);
    }
    if (typeof newObject[key] === 'string') {
      newObject[key] = newObject[key].trim();
    }
    if (typeof newObject[key] === 'object') {
      newObject[key] = trimObject(newObject[key]);
    }
  });
  return newObject;
};
export const toFullWidth = (value: string) => {
  const kanaHalfFullMap: Record<string, string> = {};
  Object.keys(KANA_FULL_HALF_MAP).forEach(key => {
    kanaHalfFullMap[KANA_FULL_HALF_MAP[key]] = key;
  });
  const reg = new RegExp(
    '(' + Object.keys(kanaHalfFullMap).join('|') + ')',
    'g',
  );
  return value
    .replace(reg, function (match) {
      return kanaHalfFullMap[match];
    })
    .replace(/ﾞ/g, '゛')
    .replace(/ﾟ/g, '゜');
};

export const toHalfWidth = (source: string) => {
  const reg = new RegExp(
    '(' + Object.keys(KANA_FULL_HALF_MAP).join('|') + ')',
    'g',
  );
  return source
    .replace(reg, function (match) {
      return KANA_FULL_HALF_MAP[match];
    })
    .replace(/゛/g, 'ﾞ')
    .replace(/゜/g, 'ﾟ');
};
interface ResultHandleTagToArrayText {
  text: string;
  bold: boolean;
}
export const onHandleTagToArrayText = (
  source = '',
  char = '#',
): Array<ResultHandleTagToArrayText> => {
  const textSplit = source.split(' ');
  const arrText: ResultHandleTagToArrayText[] = [];
  textSplit.forEach((text: string, i: number) => {
    const textData = { text: text, bold: false };
    if (text[0] === char) {
      textData.bold = true;
      arrText.push(textData);
    } else {
      arrText.push({ text: text, bold: false });
    }
    if (
      (text === '' && i !== textSplit.length - 1) ||
      i !== textSplit.length - 1
    ) {
      arrText.push({ text: ' ', bold: false });
    }
  });
  return arrText;
};

export const randomUniqueId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0,
      // eslint-disable-next-line no-bitwise
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const hexStringFromCSSColor = (color: string) => {
  const processedColor = processColor(color);
  const colorStr = `${(processedColor ?? '').toString(16)}`;
  const withoutAlpha = colorStr.substring(2, colorStr.length);
  const alpha = colorStr.substring(0, 2);
  return `#${withoutAlpha}${alpha}`;
};

export const checkPasswordContainUserName = (
  username: string,
  password: string,
) => {
  const numConsecutiveChars = 3;

  // first find all combinations that should not be found in password
  const invalidCombinations = [];
  for (let i = 0; i < username.length - numConsecutiveChars; i++) {
    const curCombination = username[i] + username[i + 1] + username[i + 2];
    invalidCombinations.push(curCombination);
  }

  // now check all invalidCombinations
  let invalid = false;
  for (const curCombination of invalidCombinations) {
    if (password.indexOf(curCombination) !== -1) {
      invalid = true;
      break;
    }
  }
  return invalid;
};

/**
 * @param keyT key of i18n
 * @param options object translate parameter
 * @param optionsTx object translate parameter will translate before set to option base. see detail bellow
 * ex: json file : {"field":{"email":"Email"},"msg":{"msg1":"{{fieldName}} is required"}}
 * => optionsTx = {fieldName:"field:email"}
 * fieldName must translate with i18n
 * so fieldName option will be push on optionsTx
 * This will support translate Option on translate
 * Read hook useMessageYupTranslation
 */
export const stringifyObjectValidateYup = ({
  keyT,
  options,
  optionsTx,
}: ValidateMessageObject) => {
  return JSON.stringify({
    keyT,
    options,
    optionsTx,
  });
};

export const numberToCountryCode = (phone: string) => {
  const temp = phone[0] === '0' ? phone.replace('0', '') : phone;
  const split = temp.split('-');
  const joined = split.join('');
  return '+81' + joined;
};

export const formatZipCode = (code: string) => {
  return code.slice(0, 3) + '-' + code.slice(3, 7);
};

export const generateTags = (tags?: Array<TagType>) => {
  let tagsString = '';
  if (!tags) {
    return tagsString;
  }
  tags.map(e => {
    return (tagsString += `#${e.name} `);
  });
  return tagsString;
};

export const numberWithCommas = (x: number | string) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const generateNumber = (x: string, y: string) => {
  const { length } = x;
  let _number = '';
  for (let index = 0; index < length; index++) {
    _number += y;
  }
  return _number;
};
export const generateNumberUp = (x: string) => {
  const { length } = x;
  let _number = '';
  for (let index = 0; index < length; index++) {
    _number += ((index + 5) % 10).toString();
  }
  return _number;
};
export const generateNumberRandom = (x: string) => {
  const { length } = x;
  return parseInt(
    Math.random()
      .toString()
      .slice(2, length + 2),
    10,
  );
};
