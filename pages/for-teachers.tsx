import React from 'react';
import { GetServerSideProps } from 'next';
import { Request } from 'express';
import LandingLayout from 'layouts/LandingLayout';
import ForTeachersPage from 'content/ForTeachersPage';
import apiService from 'services/api';

const ForTeachers = () => (
  <LandingLayout>
    <ForTeachersPage />
  </LandingLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const messages = await apiService.fetchTranslates('teacher', req as Request);

  return {
    props: {
      messages
    }
  };
};

export default ForTeachers;
