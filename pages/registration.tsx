import React from 'react';
import AuthLayout from 'layouts/AuthLayout';
import RegistrationPage from 'content/RegistrationPage';
import { GetServerSideProps } from 'next';
import { ApiService } from 'services/api';

const Registration = () => (
  <AuthLayout isSignInLink>
    <RegistrationPage />
  </AuthLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const apiService = ApiService.create(req, res);
  const messages = (await apiService.getTranslates('registration')).data;

  return {
    props: {
      messages
    }
  };
};

export default Registration;
