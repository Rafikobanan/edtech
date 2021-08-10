import React from 'react';
import { IntlProvider } from 'react-intl';
import App, { AppContext, AppProps } from 'next/app';
import { Request } from 'express';
import useTranslationStore from '../hooks/useTranslationStore';
import 'styles/index.scss';

interface MyAppProps extends AppProps {
  messages: Request['messages'];
  locale: string;
}

const MyApp = ({ Component, locale, messages }: MyAppProps) => {
  const translationStore = useTranslationStore(messages);

  return (
    <IntlProvider locale={locale || 'ru'} messages={translationStore}>
      <Component />
    </IntlProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const req = ctx.req as Request;
  const { messages } = req || {};

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    messages,
    locale: 'en'
  };
};

export default MyApp;
