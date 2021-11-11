import React from 'react';
import { GetServerSideProps } from 'next';
import LandingLayout from 'layouts/LandingLayout';
import IndexPage from 'content/IndexPage';
import { ApiService } from 'services/api';

const Index = () => (
  <LandingLayout>
    <IndexPage />
  </LandingLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const apiService = ApiService.create(req, res);
  const messages = (await apiService.getTranslates('index')).data;

  return {
    props: {
      messages
    }
  };
};

export default Index;
