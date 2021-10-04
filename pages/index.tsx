import React from 'react';
import { GetServerSideProps } from 'next';
import { Request } from 'express';
import LandingLayout from 'layouts/LandingLayout';
import IndexPage from 'content/IndexPage';
import apiService from 'services/api';

const Index = () => (
  <LandingLayout>
    <IndexPage />
  </LandingLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const messages = await apiService.fetchTranslates('index', req as Request);

  return {
    props: {
      messages
    }
  };
};

export default Index;
