import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import App, { AppContext, AppProps } from 'next/app';
import { Request } from 'express';
import GlobalManager from 'components/GlobalManager';
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
    <IntlProvider locale={locale || 'ru'} messages={messages}>
      <Provider store={store}>
        <Component />
        <GlobalManager />
      </Provider>
    </IntlProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const req = ctx.req as Request;
  const { language } = req;

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    locale: 'en',
    preloadedState: {
      global: {
        language
      }
    } as AppPreloadedState
  };
};

export default MyApp;
