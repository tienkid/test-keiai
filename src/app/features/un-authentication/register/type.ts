export interface FormRegisterProps {
  onSubmit: (data: FormRegisterType) => void;
}

export type FormRegisterType = {
  phoneNumber: string;
};
