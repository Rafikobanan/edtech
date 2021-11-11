import React, { createContext, useContext, useState } from 'react';
import apiService from 'services/api';

interface Inputs {
  name: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
  mailing: boolean;
}

interface State {
  onSubmit: (inputs: Inputs) => void;
  formState: Partial<Inputs>;
  stepNumber: number;
  setNextStep: () => void;
}

const RegistrationContext = createContext<State | undefined>(undefined);

const withRegistrationContext = (Component: React.FC) => () => {
  const [stepNumber, setStepNumber] = useState<number>(1);
  const [formState, setFormState] = useState<Partial<Inputs>>({});

  const setNextStep = () => setStepNumber(stepNumber + 1);

  const onSubmit = async (inputs: Partial<Inputs>) => {
    const state = { ...formState, ...inputs };

    setFormState(state);

    if (stepNumber === 4) {
      const { name, lastName, email, password, terms, mailing } = state as Inputs;

      await apiService.register(name, lastName, email, password, terms, mailing);
    }

    setNextStep();
  };

  return (
    <RegistrationContext.Provider value={{ onSubmit, setNextStep, formState, stepNumber }}>
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
