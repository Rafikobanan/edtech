import React from 'react';
import Progress from 'components/Progress';
import FirstStep from './FirstStep';
import { useRegistrationContext, withRegistrationContext } from './registrationContext';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import FifthStep from './FifthStep';

const RegistrationPage = () => {
  const { stepNumber } = useRegistrationContext();

  const renderRegistrationStep = () => {
    switch (stepNumber) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep />;
      case 5:
        return <FifthStep />;
    }
  };

  return (
    <>
      <Progress percent={stepNumber * 20} />
      {renderRegistrationStep()}
    </>
  );
};

export default withRegistrationContext(RegistrationPage);
