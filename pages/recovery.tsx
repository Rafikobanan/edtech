import React from 'react';
import AuthLayout from 'layouts/AuthLayout';
import { ApiService } from 'services/api';
import { GetServerSideProps } from 'next';
import LoginPage from 'content/LoginPage';

const Recovery = () => (
  <AuthLayout>
    <LoginPage />
  </AuthLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const apiService = ApiService.create(req, res);
  const messages = (await apiService.getTranslates('recovery')).data;

  return {
    props: {
      messages
    }
  };
};

export default Recovery;
