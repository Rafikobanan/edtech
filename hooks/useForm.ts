import React, { useState } from 'react';

const useForm = <S>() => {
  const [form, setForm] = useState<S>({} as S);

  const handleChangeCreator =
    (field: keyof S) => (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      setForm((prevState) => ({
        ...prevState,
        [field]: (e.target as HTMLInputElement).value
      }));
    };

  return {
    form,
    handleChangeCreator
  };
};

export default useForm;
