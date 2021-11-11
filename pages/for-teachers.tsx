import React from 'react';
import { GetServerSideProps } from 'next';
import LandingLayout from 'layouts/LandingLayout';
import ForTeachersPage from 'content/ForTeachersPage';
import { ApiService } from 'services/api';

const ForTeachers = () => (
  <LandingLayout>
    <ForTeachersPage />
  </LandingLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const apiService = ApiService.create(req, res);
  const messages = (await apiService.getTranslates('teacher')).data;

  return {
    props: {
      messages
    }
  };
};

export default ForTeachers;
