/* eslint-disable @typescript-eslint/no-explicit-any */

import { InputOutlineProps } from '../text-field/components/out-line/type';

export interface InputProps<T extends Record<string, any>>
  extends InputOutlineProps {
  name: keyof T;
}
