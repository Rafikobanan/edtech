import React, { createContext, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

interface Inputs {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

interface State {
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<Inputs>;
  stepNumber: number;
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}

const RegistrationContext = createContext<State | undefined>(undefined);

const withRegistrationContext = (Component: React.FC) => () => {
  const [stepNumber, setStepNumber] = useState<number>(1);
  const { register, handleSubmit: handleFormSubmit } = useForm();

  const handleSubmit = handleFormSubmit((data) => console.log(data));

  return (
    <RegistrationContext.Provider value={{ handleSubmit, register, stepNumber, setStepNumber }}>
      <Component />
    </RegistrationContext.Provider>
  );
};

const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);

  if (context === undefined) {
    throw new Error('useRegistrationContext must be used within a withRegistrationContext');
  }

  return context;
};

export { withRegistrationContext, useRegistrationContext };
