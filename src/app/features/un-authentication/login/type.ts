import { FormLoginType } from '@model/authentication';
import { I18nKeys } from '@utils/i18n/locales';

export interface FormLoginProps {
  onSubmit: (data: FormLoginType) => void;
  errorLogin?: I18nKeys;
}
