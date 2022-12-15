import { DataValid } from '@model/delete-user';
import { I18nKeys } from '@utils/i18n/locales';

export interface FormLoginProps {
  onSubmit: (data: DataValid) => void;
  errorLogin?: I18nKeys;
}
