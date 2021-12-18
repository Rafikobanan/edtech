import defaultsDeep from 'lodash/defaultsDeep';
import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { CombinedState, PreloadedState } from 'redux';
import { NoInfer } from '@reduxjs/toolkit/src/tsHelpers';
import global from './slices/global';
import profile from './slices/profile';
import { isServer } from '../utils';

const reducer = {
  global,
  profile
};

type Store = ReturnType<typeof initStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = StateFromReducersMapObject<typeof reducer>;
export type AppPreloadedState = PreloadedState<CombinedState<NoInfer<RootState>>>;

let store: Store | undefined;

const initStore = (preloadedState?: AppPreloadedState) => {
  const initialStore = store || configureStore({ reducer });
  const state = {};

  defaultsDeep(state, preloadedState, initialStore.getState());

  return configureStore({
    reducer,
    preloadedState: state
  });
};

export const initializeStore = (preloadedState?: AppPreloadedState) => {
  let newStore: Store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    newStore = initStore(preloadedState);

    store = undefined;
  }

  if (isServer) return newStore;

  if (!store) store = newStore;

  return newStore;
};

export const useStore = (initialState?: AppPreloadedState) =>
  useMemo(() => initializeStore(initialState), [initialState]);
