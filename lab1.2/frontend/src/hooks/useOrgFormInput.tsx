import { useState } from 'react';

interface UseOrgFormInputReturn {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  validate: (validationFn: (value: string) => boolean, errorMessage: string) => boolean;
  reset: () => void;
}

export const useOrgFormInput = (initialValue: string = ''): UseOrgFormInputReturn => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const validate = (validationFn: (value: string) => boolean, errorMessage: string): boolean => {
    const isValid = validationFn(value);
    setError(isValid ? '' : errorMessage);
    return isValid;
  };

  const reset = () => {
    setValue('');
    setError('');
  };

  return { value, setValue, error, setError, validate, reset };
};