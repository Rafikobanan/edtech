import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import App, { AppContext, AppProps } from 'next/app';
import { Request } from 'express';
import GlobalManager from 'components/GlobalManager';
import Modal from 'components/Modal';
import { AppPreloadedState, useStore } from 'redux/store';
import 'nprogress/nprogress.css';
import 'styles/index.scss';

interface MyAppProps extends AppProps {
  locale: string;
  preloadedState: AppPreloadedState;
}

const MyApp = ({ Component, locale, preloadedState, pageProps: { messages } }: MyAppProps) => {
  const store = useStore(preloadedState);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Provider store={store}>
        <Component />
        <GlobalManager />
        <Modal />
      </Provider>
    </IntlProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const { ctx } = appContext;
  const req = ctx.req as Request;

  // eslint-disable-next-line no-underscore-dangle
  const { language } = req || window.__NEXT_DATA__;

  return {
    ...appProps,
    locale: 'en',
    language,
    preloadedState: {
      global: {
        language
      }
    } as AppPreloadedState
  };
};

export default MyApp;
