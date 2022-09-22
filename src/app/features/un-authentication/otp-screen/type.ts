export interface FormRegisterOTPProps {
  onSubmit: (data: FormRegisterOTPType) => void;
}

export type FormRegisterOTPType = {
  code: string;
};
